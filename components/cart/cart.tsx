import React, { useState, useEffect, useContext } from "react";
import { GeneralContext } from '@/context/context';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ZoomImage from "../utils/zoomImage";
import Nav from "../header/nav";
import Footer from "../layout/footer";
import CartCard from "./cartCard";
import Progress from "../utils/progress";

interface myComp {
    pics: StaticImageData;
}

//this component is for showing the full details of a single product

const Cart: React.FC<myComp> = ({ pics }) =>{
  const { cart, loadingCart, activateActionStatus } = useContext(GeneralContext);

  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(12000);

  const [currentSrc, setCurrentSrc] = useState<string>('');
  const [zoom, setZoom] = useState<boolean>(false);
  const [ongoingAction, setOngoingAction] = useState<string>('');//helps to check when buttons wil be disabled

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

  function checkOut(){
   setOngoingAction('checkout');
   fetch('/api/cartCheckout/',{
     method: "POST",
     body: JSON.stringify({
       cartId: localStorage.getItem('cartId')
     })
    }).then(r=>r.json())
    .then(
     r=>{
       if(r.checkoutUrl){
        location.href = r.checkoutUrl
       }else{
        activateActionStatus('Internal Server Error')
       }
     }
    ).catch(e=>{
      setOngoingAction('');
      activateActionStatus('Error checking out')
      console.error(e)
    })
 }

 function zoomImage(src: string){
   setCurrentSrc(src)
 }
 
 useEffect(()=>{
  if(localStorage.getItem('cartId')){
  // fetchCart(localStorage.getItem('cartId'))
  cart.lines && console.log(cart)
  }
  console.log(cart)
},[]);

  useEffect(()=>{
    setTotalPrice(1200*quantity);
    console.log(cart)
  },[currentSrc]);

  
  useEffect(()=>{
    if(currentSrc.length>7)setZoom(true);
  },[currentSrc])
    
  if(loadingCart){
    return(
    <>
     <Nav />
     <div className="m-2 text-center">
      <h1 className="text3xl">
       Loading your Cart...
      </h1>
      <div>{`It takes a few seconds`}</div>
      <div>
       <em className="py-1 text-[white] bg-primaryColor px-6 rounded-md my-3 inline-block">
        Please Wait
       </em>
      </div>
     </div>
    </>)
  }

    if(!cart.lines || cart.lines.edges.length < 1){
      return(
      <>
       <Nav />
       <div className="m-2 text-center">
        <h1 className="text-3xl">
         Nothing Here
        </h1>
        <div>{`Add product(s) to your cart to view it here`}</div>
        <div>
         <Link href='/' className="py-1 text-[white] bg-primaryColor px-6 rounded-md my-3 inline-block">
          Continue Shopping
         </Link>
        </div>
       </div>
      </>)
    }
    return(
      <>
      <Nav />
      {zoom && <ZoomImage handler={handleImageZoom} src={currentSrc}/>}
      <div className="m-2 p-2 max-w-[100vw] break-words">
        <h1 className="text-3xl font-bold my-2">Your Shopping Cart</h1>
        <p className="w-full max-w-[500px] mx-auto rounded-lg shadow-sm bg-[aquamarine] p-1">
          <strong> Note: </strong>
          <em>
            You can only purchase a maximum of the quantity of items available for any variant per checkout.
            If we are low on any product, we will notify you at checkout and also modify
            the quantity automatically. <br/><span className="font-bold text-2xl">Happy Shopping!!!</span>
          </em>
        </p>
      </div>

      <div className="flex justify-center">
      <div className="m-2 w-full max-w-[500px]"> 
         <p className='flex'>
           <strong className='p-2 border flex-1 text-primaryColor max-w-[48vw] break-words'> Subtotal Amount </strong> 
           <strong className='p-2 border flex-1 text-dangerColor max-w-[48vw] break-words'> {cart.cost.subtotalAmount?.amount} </strong>
         </p> 
         <p className='flex'>
           <strong className='p-2 border flex-1 text-primaryColor max-w-[48vw] break-words'> Total Tax Amount </strong> 
           <strong className='p-2 border flex-1 text-dangerColor max-w-[48vw] break-words'> {cart.cost.totalTaxAmount?.amount} </strong>
         </p> 
         <p className='flex'>
           <strong className='p-2 border flex-1 text-primaryColor max-w-[48vw] break-words'> Total Amount </strong> 
           <strong className='p-2 border flex-1 text-dangerColor max-w-[48vw] break-words'> {cart.cost.totalAmount?.amount} </strong>
         </p>  
      </div>
      </div>
      {cart.lines && 
         cart.lines.edges.map((line: any)=>{
          return (
            <CartCard key={line.node.id} zoomImage={zoomImage} line={line} />
          )
         })
      }

        <div className="sticky bottom-0 max-w-[90vw] mx-auto break-words">   
          <button onClick={()=>checkOut()} type="button" title="Checkout" className="flex justify-center py-4 text-2xl w-full text-center text-[white] bg-[navy] hover:bg-secondaryColor rounded-md">
           
             {
               ongoingAction === 'checkout'? 
               <Progress height={'30px'} color={'white'} />: 'Checkout'
              }
          </button>
        </div>
        <Footer />
      </>
    )
}

export default Cart;