export const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export const stagger = (staggerChildren = 0.08, delayChildren = 0.06) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
})

