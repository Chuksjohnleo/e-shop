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

const ProductCard: React.FC<myComp> = ({ p, pics }) =>{
    return(
        <>
         <div className="hover:shadow-xl my-2 mx-1 border hover:shadow-primaryColor rounded-2xl">
            <div>
              <Image className="rounded-t-2xl w-full h-[150px] sm:h-[200px] object-cover object-cotain bg-[grey]/10" 
              src={p<4?pics:p>6?demoProduct2:demoProduct3} 
              alt='demo product' width={200} height={300} />
            </div>
            <div className="flex m-1 flex-col max-w-full overflow-x-auto text-[13px] xSm:text-[16.1px]">
              <p className="border-b text-center"> <strong> Drug Name Here </strong> </p>
              <p className="p-1"><em>Drug description here</em></p>
            </div>
            <div className="flex flex-col items-center sm:m-2 sm:justify-between sm:flex-row">
                <strong className="text-[16.1px] xSm:text-xl">$105.03</strong>
                <Link href={`/products/p1`} className="py-1 sm:rounded-br-2xl text-center text-[white] bg-primaryColor px-1 rounded-md m-1 inline-block">
                  Add to cart
                </Link>
            </div>
         </div>
        </>
    )
}

export default ProductCard;