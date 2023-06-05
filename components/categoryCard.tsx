import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import demoProduct from '@/assets/houses/luke-stackpoole-eWqOgJ-lfiI-unsplash.jpg';

interface myComp {
    n: number;
    pics: StaticImageData
}

const CategoryCard: React.FC<myComp> = ({ n, pics }) =>{
    return(
        <>
         <div className="my-2 py-2 mx-1 min-h-[200px] xSm:min-w-[45vw] sm:min-w-[250px] rounded-2xl">
            <strong className="backdrop-blur text-center text-[white] rounded-t-2xl bg-[#00a2ff] align-text-bottom text-3xl font-bold break-words self-start block p-[2px] max-w-full"> Generator but no fuel Category</strong>
            <div className="relative flex items-end">
              <Image className="rounded-b-2xl w-full h-[300px] object-cover shadow-xl shadow-secondaryColor" src={demoProduct} alt='demo product' width={200} height={300} />
              <Link href='/gen' className="py-1 group w-[80%] absolute flex items-center text-2xl justify-between sm:rounded-r-2xl font-semibold text-center text-[white] bg-primaryColor px-1 rounded-md m-3">
                 <span>
                  Explore
                 </span>
                 <svg className='group-hover:scale-150 group-hover:translate-x-4 group-active:scale-150 group-active:translate-x-4' width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        </>
    )
}

export default CategoryCard;