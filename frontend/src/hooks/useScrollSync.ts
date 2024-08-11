import { useEffect, RefObject } from 'react';

type ScrollSyncRef = {
  ref: RefObject<HTMLElement>
  speed?: number 
}

const useScrollSync = (props:ScrollSyncRef): void => {
  useEffect(() => {
    let prevScrollTop = 0;

    const root = document.documentElement
    
    const handleScroll = () => {

      if (props.ref.current) {
        const { scrollTop } = props.ref.current;
        const { scrollHeight, clientHeight } = root
        const maxScrollTop = scrollHeight - clientHeight;
        if (scrollTop > prevScrollTop) {
          // Scrolling down
          window.scrollTo({
            top: Math.min(window.scrollY + (props.speed || 1), maxScrollTop),
            behavior: 'auto',
          });
        } else if (scrollTop < prevScrollTop) {
          // Scrolling up
          window.scrollTo({
            top: Math.max(window.scrollY - (props.speed || 1), 0),
            behavior: 'auto',
          });
        }
        prevScrollTop = scrollTop;
      }
    };
    if (props.ref.current) {
      props.ref.current.addEventListener('scroll', handleScroll);
      
      return () => {
        if (props.ref.current) {
          props.ref.current.removeEventListener('scroll', handleScroll);
        }
      };
    }
  }, [props.ref]);
};

export default useScrollSync;