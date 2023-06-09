import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import demoProduct from '@/assets/drugs/alexander-grey-FEPfs43yiPE-unsplash.jpg';
import demoProduct2 from '@/assets/drugs/jumia1.png';
import demoProduct3 from '@/assets/drugs/healtplus1.jpg';

interface myComp {
    p: number;
    pics: StaticImageData;
}

//this component is for showing the full details of a single product

const ProductCard: React.FC<myComp> = ({ p, pics }) =>{
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(12000);

  function handleQuantity(direction: string){
    if(quantity >= 1 && direction === 'increment'){
      setQuantity(n=>n+1);
      return;
   } if(quantity > 1 && direction === 'decrement'){
     setQuantity(n=>n-1)
    }
  }

  useEffect(()=>{
    setTotalPrice(1200*quantity);
  },[quantity])

    return(
        <section className="w-full max-w-[500px] mx-auto">
         <div className="m-2 shadow-xl shadow-primaryColor rounded-2xl">
            <div>
              <Image className="rounded-t-2xl w-full h-[300px] sm:h-[350px] object-contain bg-[grey]/10" 
              src={p<4?pics:p>6?demoProduct2:demoProduct3} 
              alt='demo product' width={200} height={300} />
            </div>
            <div>
              <h1 className="font-bold text-3xl mb-4 p-2">
                <span className="text-primaryColor">The product that </span> 
                <span> you are looking for is here </span>
              </h1>
            </div>
            <div className="text-center">
             <div className="flex justify-center">
             <div className="flex m-1 w-full max-w-[250px] border justify-around items-center text-xl">
              <button 
                disabled={quantity===1 && true}
                onClick={()=>handleQuantity('decrement')} 
                className="flex-1 p-2 font-extrabold border-r disabled:bg-[black]/20 disabled:text-[black] active:text-[white] active:bg-dangerColor" 
                type='button' 
                title='decrease'> {'-'}
              </button>
              <strong className="flex-1"> {quantity} </strong> 
              <button 
                 onClick={()=>handleQuantity('increment')} 
                 title='increase' type='button' 
                 className="flex-1 p-2 font-extrabold border-l active:text-[white] active:bg-primaryColor">
                   {'+'}
              </button>
             </div>
             </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex p-2 m-2 border items-center justify-around gap-3">
                 <strong> Price: </strong>
                 <strong className="text-xl"> 
                   <span>$</span><span>1200</span>
                 </strong>
                </div>
                <div className="flex border items-center justify-around gap-3 p-2">
                 <strong className="text-xl">Total Price: </strong>
                 <strong className="text-xl"> 
                   <span>$</span><span>{totalPrice}</span>
                 </strong>
                </div>
                <div className="flex">
                  <Link href='/view-details/id' className="py-1 text-[white] bg-primaryColor px-1 rounded-md m-1 w-[50%]">
                   Add to cart
                  </Link>
                  <Link href='/view-details/id' className="py-1 text-center text-[white] bg-primaryColor px-1 rounded-md m-1 w-[50%]">
                   Buy 
                  </Link>
                </div>
                <div>
                 Share this product 
                </div>   
            </div>
            <div className="flex m-1 flex-col max-w-full overflow-x-auto text-[13px] xSm:text-[16.1px]">
              <p className="p-1"><em>Drug description here</em></p>
            </div>
         </div>
        </section>
    )
}

export default ProductCard;