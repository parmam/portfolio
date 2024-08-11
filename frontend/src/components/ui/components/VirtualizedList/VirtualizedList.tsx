
import { HTMLProps, ReactNode, useEffect, useRef, useState } from 'react';




interface VirtualizedListProps<T> extends HTMLProps<HTMLElement> {
  items: T[];
  itemHeight: number;
  windowHeight: number;
  onLoadMore?: () => void
  renderItem: (item: T, index: number) => ReactNode;
}

const VirtualizedList = <T,>({
  items,
  itemHeight,
  windowHeight,
  renderItem,
  onLoadMore,
  ...rest
}: VirtualizedListProps<T>) => {
  const [scrollTop, setScrollTop] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const count = items.length;
  const innerHeight = count * itemHeight;
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - 3);
  const endIndex = Math.min(
    Math.floor((scrollTop + windowHeight) / itemHeight) + 3,
    count,
  );

  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {

    setScrollTop(event.currentTarget.scrollTop);

  };

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      const { scrollTop, scrollHeight, clientHeight } = content;
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;
      if (onLoadMore && scrollPercentage >= 0.8) {
        setTimeout(() => {
          onLoadMore();
        }, 2000)
      }
    }
  }, [scrollTop, onLoadMore]);


  return (
    <div
      {...rest}
      ref={contentRef}
      className="outerbox"
      style={{ overflowY: 'scroll', height: windowHeight }}
      onScroll={onScroll}
    >
      <div className="innerbox" style={{ position: 'relative', height: innerHeight }}>
        {items.slice(startIndex, endIndex).map((item, index) => (
          <div
            key={index}
            style={{
              height: itemHeight,
              position: 'absolute',
              width: '100%',
              top: `${(startIndex + index) * itemHeight}px`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {renderItem(item, startIndex + index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualizedList;