import Link from "next/link";
import React, { useState, useEffect } from "react";

interface cartProps {
    src: string;
    handler: ()=>void
}

const ZoomImage: React.FC<cartProps> = ({ handler, src }) =>{
    const [loading, setLoading] = useState<boolean>(true)
  
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
    {loading && 
      <div className="text-5xl h-screen w-screen text-center flex justify-center items-center">
         <strong className="animate-pulse">Loading image...</strong>
      </div>}
    <img className="h-screen w-screen object-contain" onLoad={()=>setLoading(false)}  src={src} alt={'preview'} />
  </div>
  )
}

export default ZoomImage;