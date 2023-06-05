import React, { useState } from 'react';

interface myComp {
  children: React.ReactNode;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  imageNumber: number
}
const SwipeHandler: React.FC<myComp> = ({children, setCount, imageNumber}) => {
  const [startX, setStartX] = useState<number | null>(null);
  const [text, setText] = useState<string>('');

  const swipeThreshold = 30;

  const handleTouchStart = (event : React.TouchEvent) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event:  React.TouchEvent) => {
    event.preventDefault(); // Prevent scrolling while swiping
  };

  const handleTouchEnd = (event:  React.TouchEvent) => {
  
    const endX = event.changedTouches[0].clientX;
    const deltaX = endX - (startX || 0);

    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX > 0) {
        // Right swipe
        setCount((n) => 
          n===0? 2 : (n-1) % imageNumber
        );
        setText('Right swipe detected!')
        console.log('Right swipe detected!');
      } else {
        // Left swipe
        setCount(n=>(n+1) % imageNumber);
        setText('Left swipe detected!')
        console.log('Left swipe detected!');
      }
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* <h1 className='text-6xl'>{text}</h1> */}
      {children}
    </div>
  );
};

export default SwipeHandler