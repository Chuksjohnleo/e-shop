import React, { useState, useEffect } from 'react';
import SwipeHandler from '../utils/swipeHandler';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

 
import popularPics from '@/assets/drugs/myriam-zilles-KltoLK6Mk-g-unsplash.jpg';
import demoProduct from '@/assets/drugs/alexander-grey-FEPfs43yiPE-unsplash.jpg';
import demoImage from '@/assets/drugs/national-cancer-institute-byGTytEGjBo-unsplash.jpg';



const ImageSlide: React.FC = () =>{

    const [count, setCount] = useState<number>(0);
    const [imageUrl, setImageUrl] = useState<StaticImageData>(demoImage);
    
    const texts: string[] = ['Medical advise', 'Geniune Products', 'Expired Shits']
    const urls: StaticImageData[] = [demoImage, demoProduct, popularPics]
    
    function swipeHandler(direction: string){
       if(direction==='left'){
        setCount(n=>(n+1) % urls.length);
       }else{
        setCount((n) => 
        n===0? (urls.length-1) : (n-1) % urls.length
      );
       }
    }
  
    useEffect(()=>{
    const slideIntervals = setInterval(()=>{
    
      // if(count > urls.length-1){
      //   setCount(0);
      // }else {
        setCount(n=>(n+1) % urls.length);
      // }
     },10000);
  
      return ()=> clearInterval(slideIntervals)
    },[]);
  
    useEffect(()=>{
      setImageUrl(urls[count])
    },[count]);
  
     
 return(
    <section>
    <SwipeHandler swipeHandler={swipeHandler}>
     <div className='relative flex flex-col justify-end items-center'>
      <div className='font-mono w-[90%] absolute top-[25%] box-border mx-2'>
        <h1 className='text-[white] text-3xl xSm:text-5xl break-words'>
          <span> Health is Wealth </span> 
          <span className='text-primaryColor max-w-[90vw] inline-block'> {texts[count]} </span> 
        </h1>
      </div>
      <div className='absolute z-30 w-[90%] max-w-[400px] text-2xl text-[white] bg-secondaryColor box-border backdrop-blur bg-white/50 m-2 p-0 sm:p-2 rounded-xl'>
       <div>
        <Link className='flex p-1 rounded-3xl group items-center justify-around' href='/'>
         <strong> Shop now </strong> 
         <svg className='group-hover:scale-150 group-hover:translate-x-4 group-active:scale-150 group-active:translate-x-4' width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g>
           <g>
             <g>
              <polyline fill="none" points="16.4 7 21.5 12 16.4 17" className='stroke-[white]' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
              <line fill="none" className='stroke-[white]' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.5" x2="19.2" y1="12" y2="12"/>
             </g>
            </g>
          </g>
         </svg>
        </Link>
       </div>
      </div>
      <Image placeholder='blur' priority={false} className='w-full border h-[70vh] rounded-[5px] object-cover' height={300} width={300} alt='demo' src={imageUrl} />
     </div>
     </SwipeHandler>
     <div className='text-center m-3 flex gap-4 justify-center'>
     {urls.map((u, i)=>{
      return(
      <span className='cursor-pointer' key={i} onClick={()=>setCount(i)}>
        <svg width="30" height="30" className={u===imageUrl?'scale-150 fill-secondaryColor':'fill-primaryColor'} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3a5 5 0 100 10A5 5 0 008 3z"/>
        </svg>
      </span>)
     })}
     </div>
   </section>
 )
}

export default ImageSlide;