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
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const githubAnimation = {
  initial: { opactiy: 0, top: 5, left: 0 },
  animate: { opacity: 1, top: -50, left: 10 },
  exit: { opacity: 0, top: 5, left: 0 },
  transition: { duration: 0.3, delay: 0.1, type: "spring" },
};

export const instagramAnimation = {
  initial: { opactiy: 0, top: 5, left: 0 },
  animate: { opacity: 1, top: -25, left: -35 },
  exit: { opacity: 0, top: 5, left: 0 },
  transition: { duration: 0.3, delay: 0.2, type: "spring" },
};

export const twitterAnimation = {
  initial: { opactiy: 0, top: 5, left: 0 },
  animate: { opacity: 1, top: 25, left: -45 },
  exit: { opacity: 0, top: 5, left: 0 },
  transition: { duration: 0.3, delay: 0.3, type: "spring" },
};
