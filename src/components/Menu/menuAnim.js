export const menuAnim = {
  hidden: {
    opacity: 0,
    x: 600,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: 600,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
