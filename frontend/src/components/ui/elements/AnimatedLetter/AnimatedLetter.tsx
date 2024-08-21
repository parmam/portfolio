import { useRef } from 'react';

import { useAnimation } from '@hooks/useAnimation';

import styles from './AnimatedLetter.module.css';
import clsx from 'clsx';

const space = ' ';

type AnimationVariantType = 'bounce' | 'shadowGrow';

type StyleVariantType = 'white' | 'lightblue';

interface AnimatedLetterProps {
  content: string;
  animationType: AnimationVariantType;
  startAnimationEvent: string;
  endAnimationEvent: string;
  style: StyleVariantType;
}

const AnimatedLetter = (props: AnimatedLetterProps) => {
    
  const spanRef = useRef<HTMLSpanElement>(null);

  const animationSelector: Record<AnimationVariantType, string> = {
    bounce: styles.bounce,
    shadowGrow: styles.shadowGrow
  };
  const selectedAnimation = animationSelector[props.animationType];
  useAnimation(spanRef, selectedAnimation, props.startAnimationEvent, props.endAnimationEvent );

  
  if (props.content === ' ') return <span className={styles.space}>{space}</span>;
  else
    return (
      <span ref={spanRef} className={clsx({
        [styles.white]: props.style === 'white',
        [styles.lightblue]: props.style === 'lightblue'
      })}>
        {props.content}
      </span>
    );
};

export default AnimatedLetter;