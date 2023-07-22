import React, { useState } from 'react';

interface myComp {
  children: React.ReactNode;
  swipeHandler: (direction: string)=> void;
  touchMoveHandler?: (distance: number)=>void;
}
const SwipeHandler: React.FC<myComp> = ({ children, swipeHandler, touchMoveHandler }) => {
  const [startX, setStartX] = useState<number | null>(null);
  // const [text, setText] = useState<string>('');

  const swipeThreshold = 30;

  const handleTouchStart = (event : React.TouchEvent) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event:  React.TouchEvent) => {
    console.log('swiped', startX);
    const distance = event.touches[0].clientX - (startX || 0);
    if(touchMoveHandler) touchMoveHandler(distance);

    // event.preventDefault(); // Prevent scrolling while swiping
  };

  const handleTouchEnd = (event:  React.TouchEvent) => {
  
    const endX = event.changedTouches[0].clientX;
    const deltaX = endX - (startX || 0);

    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX > 0) {
        // Right swipe
         swipeHandler('right');
        // setText('Right swipe detected!')
        console.log('Right swipe detected!');
      } else {
        // Left swipe
         swipeHandler('left')
        // setText('Left swipe detected!')
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