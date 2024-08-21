import { useEffect, useCallback } from 'react';

export const useAnimation = (
  ref: React.RefObject<HTMLElement>,
  animationClassName: string,
  startAnimationEventType: string,
  endAnimationEventType: string
) => {
  const handleAnimationStart = useCallback(() => {
    if (ref.current) {
      ref.current.classList.add(animationClassName);
    }
  }, [ref, animationClassName]);

  const handleAnimationEnd = useCallback(() => {
    if (ref.current) {
      ref.current.classList.remove(animationClassName);
    }
  }, [ref, animationClassName]);

  useEffect(() => {
    const elementRef = ref.current;
    if (elementRef) {
      elementRef.addEventListener(startAnimationEventType, handleAnimationStart);
      elementRef.addEventListener(endAnimationEventType, handleAnimationEnd);
    }

    return () => {
      if (elementRef) {
        elementRef.removeEventListener(startAnimationEventType, handleAnimationStart);
        elementRef.removeEventListener(endAnimationEventType, handleAnimationEnd);
      }
    };
  }, [ref, startAnimationEventType, endAnimationEventType, handleAnimationStart, handleAnimationEnd]);
};
