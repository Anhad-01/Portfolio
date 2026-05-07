import React, { Children, forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import gsap from 'gsap';

const makeSlot = (i, distX, distY, total) => ({
    x: i * distX,
    y: -i * distY,
    z: -i * distX * 1.5,
    zIndex: total - i
});

const placeNow = (el, slot, skew) =>
    gsap.set(el, {
        x: slot.x,
        y: slot.y,
        z: slot.z,
        xPercent: -50,
        yPercent: -50,
        skewY: skew,
        transformOrigin: 'center center',
        zIndex: slot.zIndex,
        force3D: true
    });

export const CardSwap = forwardRef(({
    width = 500,
    height = 400,
    cardDistance = 60,
    verticalDistance = 70,
    delay = 4000,
    pauseOnHover = false,
    onCardClick,
    onActiveIndexChange,
    initialIndex = 0,
    skewAmount = 6,
    easing = 'elastic',
    children
}, ref) => {
    const config =
        easing === 'elastic'
            ? {
                ease: 'elastic.out(0.6,0.9)',
                durDrop: 2,
                durMove: 2,
                durReturn: 2,
                promoteOverlap: 0.9,
                returnDelay: 0.05
            }
            : {
                ease: 'power1.inOut',
                durDrop: 0.8,
                durMove: 0.8,
                durReturn: 0.8,
                promoteOverlap: 0.45,
                returnDelay: 0.2
            };

    const childArr = useMemo(() => Children.toArray(children), [children]);
    const refs = useMemo(
        () => childArr.map(() => React.createRef()),
        [childArr.length]
    );

    const createInitialOrder = () => {
        const indexes = Array.from({ length: childArr.length }, (_, i) => i);
        return [...indexes.slice(initialIndex), ...indexes.slice(0, initialIndex)];
    };

    const order = useRef(createInitialOrder());
    const tlRef = useRef(null);
    const intervalRef = useRef();
    const container = useRef(null);
    const apiRef = useRef({ next: () => {}, prev: () => {} });
    const isAnimatingRef = useRef(false);

    useImperativeHandle(ref, () => ({
        next: () => apiRef.current.next(),
        prev: () => apiRef.current.prev()
    }), []);

    useEffect(() => {
        const total = refs.length;
        order.current = createInitialOrder();

        order.current.forEach((idx, i) => {
            const r = refs[idx];
            if (r.current) {
                placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount);
            }
        });
        onActiveIndexChange?.(order.current[0] ?? 0);

        const stopAutoplay = () => clearInterval(intervalRef.current);
        const startAutoplay = () => {
            stopAutoplay();
            intervalRef.current = window.setInterval(() => swapNext(), delay);
        };

        const swapNext = ({ restartAutoplay = false } = {}) => {
            if (order.current.length < 2) return;
            if (isAnimatingRef.current) return;
            tlRef.current?.kill();

            const [front, ...rest] = order.current;
            const elFront = refs[front].current;
            if (!elFront) return;
            isAnimatingRef.current = true;
            const tl = gsap.timeline({
                onComplete: () => {
                    order.current = [...rest, front];
                    isAnimatingRef.current = false;
                    if (restartAutoplay) startAutoplay();
                }
            });
            tlRef.current = tl;

            tl.to(elFront, {
                y: '+=500',
                duration: config.durDrop,
                ease: config.ease
            });

            tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
            rest.forEach((idx, i) => {
                const el = refs[idx].current;
                if (!el) return;
                const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
                tl.set(el, { zIndex: slot.zIndex }, 'promote');
                tl.to(
                    el,
                    {
                        x: slot.x,
                        y: slot.y,
                        z: slot.z,
                        duration: config.durMove,
                        ease: config.ease
                    },
                    `promote+=${i * 0.15}`
                );
            });

            const promoteDuration = config.durMove + Math.max(0, rest.length - 1) * 0.15;
            tl.call(
                () => {
                    onActiveIndexChange?.(rest[0]);
                },
                undefined,
                `promote+=${promoteDuration}`
            );

            const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
            tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
            tl.call(
                () => {
                    gsap.set(elFront, { zIndex: backSlot.zIndex });
                },
                undefined,
                'return'
            );
            tl.to(
                elFront,
                {
                    x: backSlot.x,
                    y: backSlot.y,
                    z: backSlot.z,
                    duration: config.durReturn,
                    ease: config.ease
                },
                'return'
            );
        };

        const swapPrev = ({ restartAutoplay = false } = {}) => {
            if (order.current.length < 2) return;
            if (isAnimatingRef.current) return;
            tlRef.current?.kill();

            const currentOrder = order.current;
            const last = currentOrder[currentOrder.length - 1];
            const rest = currentOrder.slice(0, -1);
            const elLast = refs[last].current;
            if (!elLast) return;
            isAnimatingRef.current = true;

            const downY = 500;
            const tl = gsap.timeline({
                onComplete: () => {
                    order.current = [last, ...rest];
                    onActiveIndexChange?.(order.current[0]);
                    isAnimatingRef.current = false;
                    if (restartAutoplay) startAutoplay();
                }
            });
            tlRef.current = tl;

            const frontSlot = makeSlot(0, cardDistance, verticalDistance, refs.length);
            const reverseEase = 'power2.out';
            const dropDuration = config.durDrop * 0.28;
            const forwardDuration = config.durMove * 0.32;
            const riseDuration = config.durReturn * 0.34;
            tl.to(elLast, {
                y: `+=${downY}`,
                duration: dropDuration,
                ease: reverseEase
            });
            tl.set(elLast, { zIndex: frontSlot.zIndex });
            tl.to(elLast, {
                x: frontSlot.x,
                z: frontSlot.z,
                duration: forwardDuration,
                ease: reverseEase
            });
            tl.to(elLast, {
                y: frontSlot.y,
                duration: riseDuration,
                ease: reverseEase
            });

            rest.forEach((idx, i) => {
                const el = refs[idx].current;
                if (!el) return;
                const slot = makeSlot(i + 1, cardDistance, verticalDistance, refs.length);
                tl.set(el, { zIndex: slot.zIndex }, dropDuration);
                tl.to(
                    el,
                    {
                        x: slot.x,
                        y: slot.y,
                        z: slot.z,
                        duration: config.durMove * 0.58,
                        ease: reverseEase
                    },
                    dropDuration + i * 0.05
                );
            });
        };

        apiRef.current = {
            next: () => {
                if (isAnimatingRef.current) return;
                stopAutoplay();
                swapNext({ restartAutoplay: true });
            },
            prev: () => {
                if (isAnimatingRef.current) return;
                stopAutoplay();
                swapPrev({ restartAutoplay: true });
            }
        };

        startAutoplay();

        if (pauseOnHover) {
            const node = container.current;
            if (!node) return;
            const pause = () => {
                tlRef.current?.pause();
                stopAutoplay();
            };
            const resume = () => {
                tlRef.current?.play();
                startAutoplay();
            };
            node.addEventListener('mouseenter', pause);
            node.addEventListener('mouseleave', resume);
            return () => {
                node.removeEventListener('mouseenter', pause);
                node.removeEventListener('mouseleave', resume);
                stopAutoplay();
            };
        }
        return () => stopAutoplay();
    }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing, initialIndex, onActiveIndexChange]);

    const rendered = childArr.map((child, i) => (
        <div
            key={i}
            ref={refs[i]}
            onClick={(e) => {
                if (child.props?.onClick) child.props.onClick(e);
                onCardClick?.(i);
            }}
            className="absolute top-1/2 left-1/2 rounded-xl bg-transparent [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden]"
            style={{ width, height }}
        >
            {child}
        </div>
    ));

    return (
        <div
            ref={container}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 perspective-[900px] overflow-visible max-[768px]:scale-[0.75] max-[480px]:scale-[0.55]"
            style={{ width, height }}
        >
            {rendered}
        </div>
    );
});

CardSwap.displayName = 'CardSwap';
