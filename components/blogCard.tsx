import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import demoProduct from '@/assets/drugs/alexander-grey-FEPfs43yiPE-unsplash.jpg';
import demoProduct2 from '@/assets/drugs/jumia1.png';
import demoProduct3 from '@/assets/drugs/healtplus1.jpg';
interface myComp {
    p: number;
    pics: StaticImageData;
}

const BlogCard: React.FC<myComp> = ({ p, pics }) =>{
    return(
        <>
         <article className="flex flex-col sm:flex-row h-full sm:h-[250px] border-t border-t-primaryColor my-2 mx-1 shadow-lg shadow-primaryColor rounded-2xl">
           <div className="w-full sm:w-[50%]">
              <Image className="rounded-t-2xl w-full h-[250px] sm:h-full object-cover bg-[grey]/10" 
              src={p<4?pics:p>6?demoProduct2:demoProduct3} 
              alt='demo product' width={200} height={300} />
           </div>
           <div className="w-full sm:w-[50%] max-h-[300px] sm:max-h-full">
            <div className="flex h-[240px] m-1 flex-col max-w-full  overflow-hidden text-[13px] xSm:text-[16.1px]">
              <h1 className="text-2xl break-words text-ellipsis h-[50%] overflow-hidden"> 
                <strong className="h-full inline">
                  Blog Post description hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhwhich shuold not be very small.
                  Blog Post description which shuold not be very small
                </strong>
              </h1>
              <p className="p-1 break-words text-ellipsis h-[50%] overflow-hidden">
                <em>
                   Drug description here 
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates autem qui ea deserunt corrupti maxime libero in mollitia iusto tempore dignissimos quia veniam, commodi debitis, quod, repudiandae eaque vitae amet!
                   hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhwhich shuold not be very small.
                </em>
              </p>
            </div>
            <div className="flex justify-end items-end sm:m-2 sm:flex-row">
                 <Link href='/view-details/id' className="py-1 rounded-br-2xl text-center text-[white] bg-primaryColor px-1 rounded-md m-1 inline-block">
                  Read More
                </Link>
            </div>
           </div>
         </article>
        </>
    )
}

export default BlogCard;