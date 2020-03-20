import React from 'react';
import { motion, Variants } from 'framer-motion';
import Internet from '../../images/Internet.png';
interface Props {}

const variants: Variants = {
  initial: {
    scale: 0
  },
  animate: {
    scale: [0.1, 1],
    rotate: [0, 360],
    transition: { ease: 'linear', duration: 1.5 }
  }
};
const OldSchoolHome = (props: Props) => {
  return (
    <motion.img
      src={Internet}
      variants={variants}
      animate='animate'
      initial='initial'
    />
  );
};

export default OldSchoolHome;
