import React from "react";
import { cn } from "../../lib/cn";

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
  iconSize = 30,
  speed = 1,
}) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col items-center justify-center overflow-visible",
        className
      )}
    >
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 m-auto h-full w-full"
        >
          <circle
            className="stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4 4"
          />
        </svg>
      )}

      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={{
              "--duration": duration / speed + "s",
              "--radius": radius + "px",
              "--angle": angle + "deg",
              "--icon-size": iconSize + "px",
            }}
            className={cn(
              "absolute flex h-[var(--icon-size)] w-[var(--icon-size)] items-center justify-center rounded-full",
              "animate-orbit",
              reverse && "animation-direction-reverse"
            )}
          >
            {child}
          </div>
        );
      })}
      
      <style>{`
        @keyframes orbit {
          0% {
            transform: rotate(calc(var(--angle) * 1)) translateY(calc(var(--radius) * -1)) rotate(calc(var(--angle) * -1));
          }
          100% {
            transform: rotate(calc(var(--angle) * 1 + 360deg)) translateY(calc(var(--radius) * -1)) rotate(calc((var(--angle) * -1) - 360deg));
          }
        }
        .animate-orbit {
          animation: orbit var(--duration) linear infinite;
        }
        .animation-direction-reverse {
          animation-direction: reverse;
        }
      `}</style>
    </div>
  );
}
