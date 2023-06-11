import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import demoProduct from '@/assets/drugs/alexander-grey-FEPfs43yiPE-unsplash.jpg';
import demoProduct2 from '@/assets/drugs/jumia1.png';
import demoProduct3 from '@/assets/drugs/healtplus1.jpg';
import ZoomImage from "./zoomImage";
import Nav from "./nav";
import Footer from "./footer";

interface myComp {
    p: number;
    pics: StaticImageData;
}

//this component is for showing the full details of a single product

const Cart: React.FC<myComp> = ({ p , pics }) =>{
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(12000);

  const [currentSrc, setCurrentSrc] = useState<string>('');
  const [zoom, setZoom] = useState<boolean>(false);

  function handleQuantity(direction: string){
    if(quantity >= 1 && direction === 'increment'){
      setQuantity(n=>n+1);
      return;
   } if(quantity > 1 && direction === 'decrement'){
     setQuantity(n=>n-1)
    }
  }

  function handleImageZoom(){
    setZoom(false);
    setCurrentSrc('');
    document.documentElement.style.overflow = '';
  }

  useEffect(()=>{
    setTotalPrice(1200*quantity);
  },[quantity]);

  
  useEffect(()=>{
    if(currentSrc.length>7)setZoom(true);
  },[currentSrc])
const a = [4,5,6,8,7]
    return(
      <>
      <Nav />
      {zoom && <ZoomImage handler={handleImageZoom} src={currentSrc}/>}
      {a.map(e=>{return( <article key={e} className="w-full max-w-[800px] mx-auto mb-10">
         <div className="flex flex-col sm:flex-row m-2 shadow-sm shadow-primaryColor rounded-2xl">
            <div>
              <Image onClick={(e)=>{
                const target = e.target as HTMLImageElement;
                setCurrentSrc(target.src)
                // setCurrentSrc('/favicon_io/android-chrome-192x192.png')
              }} className="rounded-t-2xl w-full h-full sm:h-[350px] object-cover bg-[grey]/10" 
              src={e<4?pics:e>6?demoProduct2:demoProduct3} 
              alt='demo product' width={200} height={300} />
              
            </div>

            <div className="sm:w-[60%]">
            <div className="w-full">
              <h1 className="font-bold text-xl mb-2 p-2">
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
                <input 
                 className="flex-1 outline-primaryColor w-10 text-center h-full" 
                 onChange={(e)=>{
                  if(Number(e.target.value.split('.').join('')) > 0) setQuantity(Number(e.target.value.split('.').join('')))
                }} 
                 value={quantity} type="number"
                 inputMode="numeric"
                 min={1}
                 max={10}
                  />
              <button 
                 onClick={()=>handleQuantity('increment')} 
                 title='increase' type='button' 
                 className="flex-1 p-2 font-extrabold border-l active:text-[white] active:bg-primaryColor">
                   {'+'}
              </button>
             </div>
             </div>
            </div>
            <div className="flex flex-col">
                <div className="flex p-2 m-2 self-center border items-center justify-around gap-3">
                 <strong> Price: </strong>
                 <strong className="text-lg"> 
                   <span>$</span><span>1200</span>
                 </strong>
                </div>
                <div className="flex sm:flex-row flex-col border self-center items-center justify-around gap-3 p-2 break-words max-w-[90%]">
                 <strong className="text-lg max-w-full sm:max-w-[40%]">Total Price: </strong>
                 <strong className="text-lg max-w-full sm:max-w-[60%]"> 
                   <span>$</span><span>{totalPrice}</span>
                 </strong>
                </div>
                <div className="flex sm:flex-row flex-col justify-center text-center mt-5 font-bold text-lg">
                  
                  <button type="button" title="Buy" className="py-4 flex-1 text-center text-[white] bg-secondaryColor hover:bg-secondaryColor/80 px-1 rounded-md m-1">
                   Buy 
                  </button>
                  <button title="Remove" className="py-4 flex-1 text-center text-[white] hover:bg-dangerColor/80 bg-dangerColor px-1 rounded-md m-1"> 
                    Remove 
                  </button>
                </div>
            </div>
            </div>
         </div>
        </article>)}) }

        <div className="sticky bottom-0 max-w-[90vw] mx-auto">   
          <button type="button" title="Checkout" className="py-4 text-2xl w-full text-center text-[white] bg-primaryColor hover:bg-primaryColor/80 rounded-md">
             Checkout
          </button>
        </div>
        <Footer />
      </>
    )
}

export default Cart;