'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type AnimationProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  amount?: number;
  className?: string;
  staggerChildren?: boolean;
};

export default function Animation({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  amount = 0.2,
  className,
  staggerChildren = false,
}: AnimationProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { y: 50, opacity: 0 };
      case 'down':
        return { y: -50, opacity: 0 };
      case 'left':
        return { x: 50, opacity: 0 };
      case 'right':
        return { x: -50, opacity: 0 };
      default:
        return { y: 50, opacity: 0 };
    }
  };

  const variants = {
    hidden: getInitial(),
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.2, 0.65, 0.3, 0.9],
        ...(staggerChildren && {
          when: 'beforeChildren',
          staggerChildren: 0.2,
        }),
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
