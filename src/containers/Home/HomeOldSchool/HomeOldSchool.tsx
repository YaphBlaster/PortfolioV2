import React from 'react';
import { motion, Variants } from 'framer-motion';
import Internet from 'images/Internet.png';
import styled from 'styled-components/macro';
import HitCounter from 'components/HitCounter/HitCounter';

const CircularImage = styled(motion.img)`
  border-radius: 50%;
  width: 500px;
`;

const rollInVariants: Variants = {
  initial: {
    x: '-100vw'
  },
  animate: {
    x: 0,
    rotate: [0, 360],
    transition: { ease: 'linear', duration: 1.5 }
  }
};

interface Props {}

const HomeOldSchool = (props: Props) => {
  return (
    <>
      <CircularImage
        src={Internet}
        variants={rollInVariants}
        animate='animate'
        initial='initial'
      />

      <HitCounter />
    </>
  );
};

export default HomeOldSchool;
