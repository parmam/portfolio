import { useState } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

export default function useWindowSize(): {
  windowSize: WindowSize;
  isMobile: boolean;
  isDesktop: boolean;
} {
  /* Initialize state with undefined width/height so server and client renders match */
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  /* Handler to call on window resize */
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useIsomorphicLayoutEffect(() => {
    /* Add event listener */
    window.addEventListener('resize', handleResize);

    /* Call handler right away so state gets updated with initial window size */
    handleResize();

    /* Remove event listener on cleanup */
    return () => window.removeEventListener('resize', handleResize);
  }, []); /* Empty array ensures that effect is only run on mount */

  return {
    windowSize,
    isMobile: typeof windowSize?.width === 'number' && windowSize.width < 1200,
    isDesktop: typeof windowSize?.width === 'number' && windowSize.width >= 1200,
  };
}