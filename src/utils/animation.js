export const entryAnim = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  show: {
    opacity: 1,
    y: [100, -200, 100, 0],
    type: "spring",
    transition: {
      duration: 0.85,
      stiffness: 100,
      damping: 5,
      restDelta: 0.001,
    },
  },
};

export const fadeAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};
