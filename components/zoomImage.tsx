import Link from "next/link";
import React, { useState, useEffect } from "react";

interface cartProps {
    src: string;
    handler: ()=>void
}

const ZoomImage: React.FC<cartProps> = ({ handler, src }) =>{
  
    useEffect(()=>{
        document.documentElement.style.overflow = 'hidden';
    },[])
  
    return (
  <div className="fixed inset-0 bg-[white] z-50">
    <button className="border m-1 p-2 backdrop-blur text-dangerColor font-extrabold text-2xl absolute" onClick={handler}>
        Cancel
    </button>
    <a href={src} download className="border left-[130px] m-1 p-2 backdrop-blur text-dangerColor font-extrabold text-2xl absolute">
       Save
    </a>
    <img className="h-screen w-screen object-contain" src={src} alt={'preview'} />
  </div>
  )
}

export default ZoomImage;