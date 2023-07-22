import React, { useState, useEffect, useContext } from "react";
import { GeneralContext } from '@/context/context';
import Image from "next/image";
import demoProduct from '@/assets/drugs/alexander-grey-FEPfs43yiPE-unsplash.jpg';
import Link from "next/link";
import Progress from "../utils/progress";


interface myComp {
    line: any;
    zoomImage: (src: string) => void
}

//this component is for showing the full details of a single product

const CartCard: React.FC<myComp> = ({ line, zoomImage }) =>{
  const { id, merchandise, quantity } = line.node;
  const { setCart } = useContext(GeneralContext);


  const [newQuantity, setNewQuantity] = useState<number>(quantity);
  // const [totalPrice, setTotalPrice] = useState<number>(Number(merchandise.priceV2.amount)*quantity);
  const [ongoingAction, setOngoingAction] = useState<string>('');//helps to check when buttons wil be disabled
 
  function handleQuantity(direction: string){
    if(newQuantity >= 1 && direction === 'increment' && newQuantity < 50){
      setNewQuantity(n=>n+1);
      return;
   } if(newQuantity > 1 && direction === 'decrement'){
     setNewQuantity(n=>n-1)
    }
   
  }

  async function handleCheckout(variantId: string, quantity: number) {
    setOngoingAction('checkout')
    // activateActionStatus({text:'Checking out, you will be redirected to the checkout page', type: 'positive'})
    fetch("/api/productCheckout/", {
      method: "POST",
      body: JSON.stringify({
        variantId: variantId,
        quantity: quantity,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        window.location.href = r;
        setOngoingAction('')
        console.log(r)
      })
      .catch(e=>{
        // activateActionStatus(
        //   {
        //       text:'Error checking out. Please check your connection and retry', 
        //       type: 'negative'
        //   })
        setOngoingAction('')
        console.error(e)
      });
  }

  function handleRemove(){
    setOngoingAction('remove')
    // activateActionStatus({text:'Checking out, you will be redirected to the checkout page', type: 'positive'})
    fetch("/api/remove-from-item-from-cart/", {
      method: "POST",
      body: JSON.stringify({
        lineId: id,
        cartId: localStorage.getItem('cartId')
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        setOngoingAction('')
        setCart(r.cartLinesRemove.cart)
        console.log(r)
      })
      .catch(e=>{
        // activateActionStatus(
        //   {
        //       text:'Error checking out. Please check your connection and retry', 
        //       type: 'negative'
        //   })
        setOngoingAction('')
        console.error(e)
      });
  }


  function updateQuantity(updatedQuantity: number){
    setOngoingAction('updatingQuantity')
    fetch("/api/update-quantity/", {
      method: "POST",
      body: JSON.stringify({
        cartId: localStorage.getItem('cartId'),
        lineId: id,
        quantity: updatedQuantity
        }),
    })
      .then((r) => r.json())
      .then((r) => {
        // window.location.href = r;
        setOngoingAction('')
        setCart(r.cartLinesUpdate.cart)
        console.log(r.cartLinesUpdate.cart.lines)
      })
      .catch(e=>{
        // activateActionStatus(
        //   {
        //       text:'Error checking out. Please check your connection and retry', 
        //       type: 'negative'
        //   })
        setOngoingAction('')
        console.error(e)
      });
  }
  useEffect(()=>{
    if(quantity !== newQuantity){
    // setTotalPrice(Number((merchandise.priceV2.amount * newQuantity).toFixed(2)));
     const debouncerTimer = setTimeout(()=>updateQuantity(newQuantity),1500);
     return ()=> clearTimeout(debouncerTimer);
    }
  },[newQuantity]);


return( 
  <article className="w-full max-w-[800px] mx-auto mb-10">
    <div className="flex flex-col sm:flex-row m-2 shadow-sm shadow-primaryColor rounded-2xl">
       <div>
         <Image onClick={(e)=>{
           const target = e.target as HTMLImageElement;
           zoomImage(target.src)
          }} className="rounded-t-2xl w-full h-[200px] sm:h-[350px] object-contain " 
         src={merchandise.image.originalSrc? merchandise.image.originalSrc:demoProduct} 
         alt='demo product' width={200} height={300} />
         
       </div>

       <div className="sm:w-[60%]">
       <div className="w-full">
         <div className="flex xSm:flex-row flex-col">
          <h1 className="font-bold text-2xl mb-2 p-2 flex-1">
           { merchandise.product.title }
          </h1>
          <Link className="self-center m-1 bg-secondaryColor rounded-lg p-1 text-[white]"
            href={`/products/${merchandise.product.handle}?variant=${merchandise.title}`}>
              View
          </Link>
         </div>
         {
         merchandise.title !== 'Default Title' &&
         <div className="text-xl mb-2 p-2">
          <span> Type: </span> <em>{merchandise.title}</em>
         </div>
         }
       </div>
       <div className="text-center">
       {merchandise.quantityAvailable === newQuantity?
         <em className="text-dangerColor"> Max quantity available reached</em>:
         ''}
        <div className="flex justify-center">
        <div className="flex xxSm:flex-row flex-col rounded-lg m-1 w-full max-w-[250px] border justify-around items-center text-xl">
         <button 
           disabled={newQuantity===1 || ongoingAction === 'updatingQuantity'? true : false}
           onClick={()=>handleQuantity('decrement')} 
           className="flex-1 p-2 font-extrabold border-b xxSm:border-b-0  xxSm:border-r disabled:bg-[black]/20 disabled:text-[black] active:text-[white] active:bg-dangerColor" 
           type='button' 
           title='decrease'>
            {
             ongoingAction === 'updatingQuantity'? 
             <Progress height={'30px'} color={'black'} />:<>{'-'}</>
            }
         </button>
           <input 
            disabled={newQuantity===1 || ongoingAction === 'updatingQuantity'? true : false}
            className="flex-1 outline-primaryColor w-10 text-center h-full" 
            onChange={(e)=>{
             if(Number(e.target.value.split('.').join('')) > 0 && Number(e.target.value.split('.').join('')) < 51) setNewQuantity(Number(e.target.value.split('.').join('')))
           }} 
            value={newQuantity} 
            type="text"
            inputMode="numeric"
            min={1}
            max={50}
             />
         <button 
            disabled={merchandise.quantityAvailable === newQuantity || ongoingAction === 'updatingQuantity'?true:false}
            onClick={()=>handleQuantity('increment')} 
            title={merchandise.quantityAvailable === newQuantity?'Maximum reached':'increase'} type='button' 
            className="flex-1 p-2 disabled:bg-primaryColor/10 disabled:cursor-not-allowed font-extrabold border-t xxSm:border-t-0 xxSm:border-l active:text-[white] active:bg-primaryColor">
              { 
                ongoingAction === 'updatingQuantity'? 
                <Progress height={'30px'} color={'black'} />: <> {'+'} </>
               }
         </button>
        </div>
        </div>
       </div>
       <div className="flex flex-col">
           <div className="flex sm:flex-row  flex-col rounded-lg my-1 border self-center items-center justify-around gap-3 p-2 break-words w-full max-w-[90%]">
            <strong className="text-lg max-w-full sm:max-w-[40%]"> Price: </strong>
            <strong className="text-lg max-w-full sm:max-w-[60%]"> 
              <span>{merchandise.priceV2.currencyCode}</span>
              {/* <span>{merchandise.priceV2.amount}</span> */}
              { 
                ongoingAction === 'updatingQuantity'? 
                <Progress height={'30px'} color={'black'} />: 
                <span>{Number((merchandise.priceV2.amount * newQuantity).toFixed(2))}</span>
              }
            </strong>
           </div>
           <div className="flex w-full sm:flex-row rounded-lg my-1 flex-col border self-center items-center justify-around gap-3 p-2 break-words max-w-[90%]">
            <strong className="text-lg max-w-full sm:max-w-[40%]">Total Price: </strong>
            <strong className="text-lg max-w-full sm:max-w-[60%]"> 
              <span>{merchandise.priceV2.currencyCode}</span>
              {/* <span>{Number((merchandise.priceV2.amount * newQuantity).toFixed(2))}</span> */}
              { 
                ongoingAction === 'updatingQuantity'? 
                <Progress height={'30px'} color={'black'} />: 
                <span>{Number((merchandise.priceV2.amount * newQuantity).toFixed(2))}</span>
              }
            </strong>
           </div>

           <div className="flex sm:flex-row flex-col justify-center text-center mt-5 font-bold text-lg">
             <button type="button"
                title="Buy now"
                disabled={
                 ongoingAction !== 'checkout' ? false : true
                }
                onClick={() =>
                  handleCheckout(merchandise.id, newQuantity)
                } className="flex justify-center py-4 flex-1 text-center text-[white] bg-secondaryColor hover:bg-secondaryColor/80 px-1 rounded-md m-1">
               {
                ongoingAction === 'checkout'? 
                <Progress height={'30px'} color={'white'} />:
                'Buy'
                }
             </button>
             <button onClick={() =>
                  handleRemove()
                } title="Remove" className="flex justify-center py-4 flex-1 text-center text-[white] hover:bg-dangerColor/80 bg-dangerColor px-1 rounded-md m-1"> 
         
               {
                ongoingAction === 'remove'? 
                <Progress height={'30px'} color={'white'} />:
                'Remove'
                }
             </button>
           </div>

       </div>
       </div>
    </div>
   </article>)
   
}

export default CartCard;