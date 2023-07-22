import React, {
  ChangeEvent,
  KeyboardEvent,
  useContext,
  useState,
  useEffect,
} from "react";
import { percentageDiscount } from "@/libs/calculateDiscount";
import Progress from '../utils/progress';
import { GeneralContext } from "@/context/context";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import demoProduct3 from "@/assets/drugs/healtplus1.jpg";
import ProductList from "./productList";
import ZoomImage from "../utils/zoomImage";
import { ProductData } from "@/pages/products/[product]";

import { addNewNotification } from '@/libs/addNewNotification';

interface myComp {
  product: ProductData;
}
//this component is for showing the full details of a single product

const Product: React.FC<myComp> = ({ product }) => {
  const router = useRouter();
 
  const {
    title,
    description,
    currency,
    images,
    variants,
  } = product;

  const { fetchCart, activateActionStatus, setNotifications } = useContext(GeneralContext);

  const [ongoingAction, setOngoingAction] = useState<string>('');//helps to check when buttons wil be disabled
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(variants[0].node.priceV2.amount);
  const [currentSrc, setCurrentSrc] = useState<string>("");
  const [variant, setVariant] = useState<number>(0);
  const [zoom, setZoom] = useState<boolean>(false);
  const [cartId, setCartId] = useState<string | null>("");
  // const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("cartId")) {
      setCartId(localStorage.getItem("cartId"));
    }
   
    if(router.query.variant){
       const theVariant = variants.find((v:any)=>{
        return v.node.title===router.query.variant
      });

    setVariant(variants.indexOf(theVariant))
   }
  }, []);

  // const handleCheckout = async () => {
  //   const checkout = await initiateCheckout(p)//product.variantId);
  //   window.location.href = checkout.webUrl;
  // };

  function addToCart(variantId: string, quantity: number) {
    
    setOngoingAction('addToCart')
    fetch("/api/addToCart/", {
      method: "POST",
      body: JSON.stringify({
        variantId: variantId,
        quantity: quantity,
        cartId: cartId,
        defaultTitle: title
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        if (r.cartId) {
          setNotifications(addNewNotification({ 
            time: Date(),
            info: `You added ${quantity} of ${title} to cart`
          }))
          setOngoingAction('')
          activateActionStatus({text:'Added successfully', type: 'positive'});
          if (!localStorage.getItem("cartId")) {
            localStorage.setItem("cartId", r.cartId);
            setCartId(r.cartId);
          }
          fetchCart(localStorage.getItem("cartId"));
        }
      })
      .catch(e=>{
        setOngoingAction('')
        activateActionStatus({text:'Error, please check your connection and retry', type: 'negative'})
        console.error(e);
      });
  }

  async function handleCheckout(variantId: string, quantity: number) {
    setOngoingAction('checkout')
    activateActionStatus({text:'Checking out, you will be redirected to the checkout page', type: 'positive'})
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
        activateActionStatus(
          {
              text:'Error checking out. Please check your connection and retry', 
              type: 'negative'
          })
        setOngoingAction('')
        console.error(e)
      });
  }

  function handleVariants(direction: string) {
    if (direction === "right") {
      if (variant < variants.length - 1) {
        setVariant(variant + 1);
      } else {
        setVariant(0);
      }
    } else {
      if (variant === 0) {
        setVariant(variants.length - 1);
      } else {
        setVariant(variant - 1);
      }
    }
  }

  function handleQuantity(direction: string) {
    if (quantity <= variants[variant].node.quantityAvailable) {
      if (
        quantity >= 1 &&
        direction === "increment" &&
        quantity < variants[variant].node.quantityAvailable
      ) {
        setQuantity((n) => n + 1);
        return;
      }
      if (quantity > 1 && direction === "decrement") {
        setQuantity((n) => n - 1);
      }
    }
  }

  function handleQuantityChange(e: ChangeEvent<HTMLInputElement>) {
    if (
      Number(e.target.value.split(".").join("")) > 0 &&
      Number(e.target.value.split(".").join("")) <=
        variants[variant].node.quantityAvailable
    )
      setQuantity(Number(e.target.value.split(".").join("")));
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Backspace") {
      if (quantity.toString().length < 2) {
        setQuantity(1);
      }
      return;
    }
  }

  function handleImageZoom() {
    setZoom(false);
    setCurrentSrc("");
    document.documentElement.style.overflow = "";
  }

  useEffect(() => {
    setTotalPrice(Number((variants[variant].node.priceV2.amount * quantity).toFixed(2)));
  }, [quantity, variant]);
  
  useEffect(()=>{
    router.query.variant = variants[variant].node.title;
    router.push({
      pathname: router.pathname,
      query: router.query
    }, undefined, { shallow: true });
  },[variant]);

  useEffect(() => {
    if (currentSrc.length > 7) setZoom(true);
  }, [currentSrc]);

  return (
    <>
      {zoom && <ZoomImage handler={handleImageZoom} src={currentSrc} />}
      <section className="w-full max-w-[800px] mx-auto">
        <div className="m-2 shadow-sm shadow-primaryColor rounded-2xl">
          <div>
            <Image
              onClick={(e) => {
                const target = e.target as HTMLImageElement;
                setCurrentSrc(target.src);
                // setCurrentSrc('/favicon_io/android-chrome-192x192.png')
              }}
              className="rounded-t-2xl w-full h-[300px] sm:h-[350px] object-contain bg-[grey]/10"
              src={
                variants[variant].node.image?.originalSrc?.length > 0
                  ? variants[variant].node.image?.originalSrc
                  : demoProduct3
              }
              alt={variants[variant].node.image?.altText || "demo product"}
              width={200}
              height={300}
            />
          </div>
          <div>
            <h1 className="font-bold text-3xl mb-4 p-2 m-w-screen break-words">
              {title}
            </h1>
            <div className="text-center m-2 p-2 text-4xl text-primaryColor">
              <div className="grid grid-cols-5">
                {variants.map((v: any, i: number) => {
                  return (
                    <Image
                      key={i}
                      onClick={() => {
                       setVariant(i)
                        // setCurrentSrc('/favicon_io/android-chrome-192x192.png')
                      }}
                      className={variant===i?
                                  "border-[5px] animate-bounce border-secondaryColor w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] object-contain bg-[grey]/10":
                                  "border border-[black] w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] object-contain bg-[grey]/10"
                                }
                      src={
                            v.node.image?.originalSrc?.length > 0
                          ? v.node.image?.originalSrc
                          : demoProduct3
                      }
                      alt={
                        v.node.image?.altText || "demo product"
                      }
                      width={50}
                      height={50}
                    />
                  );
                })}
              </div>
              <strong className="max-w-screen break-words">
                {variants[variant].node.title === "Default Title"
                  ? title
                  : variants[variant].node.title}
              </strong>
            </div>
          </div>
          {/* begin test */}
          <div className="flex justify-center">
            <div className="flex rounded-xl m-1 w-full max-w-[250px] border justify-around items-center text-xl">
              <button
                onClick={() => handleVariants("left")}
                className="flex-1 rounded-xl p-2 font-extrabold border-r disabled:bg-[black]/20 disabled:text-[black] active:text-[white] active:bg-dangerColor"
                type="button"
                title="Previous variant"
              >
                {" "}
                {"<"}
              </button>
              <div className="flex flex-1 text-[13px] break-words font-extrabold w-10 justify-center items-center-center text-center">{`variant ${
                variant + 1
              }`}</div>
              <button
                onClick={() => handleVariants("right")}
                title="Next variant"
                type="button"
                className="flex-1 p-2 rounded-xl font-extrabold border-l active:text-[white] active:bg-primaryColor"
              >
                {">"}
              </button>
            </div>
          </div>
          {/* end test */}
          <div className="text-center">
            <div>
              <strong>Quantity</strong>
              <br />
              <span>Available: {variants[variant].node.quantityAvailable}</span>
            </div>
            <div className="flex justify-center">
              {variants[variant].node.quantityAvailable > 0 ? (
                <div className="flex rounded-xl m-1 w-full max-w-[250px] border justify-around items-center text-xl">
                  <button
                    disabled={quantity === 1 && true}
                    onClick={() => handleQuantity("decrement")}
                    className="flex-1 rounded-xl p-2 font-extrabold border-r disabled:bg-[black]/20 disabled:text-[black] active:text-[white] active:bg-dangerColor"
                    type="button"
                    title="decrease"
                  >
                    {" "}
                    {"-"}
                  </button>
                  <input
                    className="flex-1 font-extrabold outline-primaryColor w-10 text-center h-full"
                    onChange={(e) => handleQuantityChange(e)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    value={quantity}
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={variants[variant].node.quantityAvailable}
                  />
                  <button
                    onClick={() => handleQuantity("increment")}
                    title="increase"
                    type="button"
                    className="flex-1 p-2 rounded-xl font-extrabold border-l active:text-[white] active:bg-primaryColor"
                  >
                    {"+"}
                  </button>
                </div>
              ) : (
                <div className="max-w-full break-words m-1 p-1">
                  <span>Sorry we are low on </span>
                  <strong className="text-[#69690c]">
                    {variants[variant].node.title === "Default Title"
                      ? title
                      : variants[variant].node.title}
                  </strong>
                  <span> {title} </span>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col">

          {variants[variant].node.compareAtPriceV2 &&
             <div className="flex w-full text-center PCmin:w-auto PCmin:flex-row flex-col rounded-xl p-2 m-2 self-center border items-center justify-around max-w-[90%]">
              <strong className="text-xl text-[#c50101]">
                <del>
                  <span> {variants[variant].node.compareAtPriceV2.currencyCode} </span>
                  <span> {variants[variant].node.compareAtPriceV2.amount} </span>
                </del>
              </strong>
              <em className="p-1 animate-bounce text-primaryColor">
                 {`-${percentageDiscount(variants[variant].node.priceV2.amount, variants[variant].node.compareAtPriceV2.amount)}%`}
                 {/* {`-${((Number(variants[variant].node.compareAtPriceV2.amount - variants[variant].node.priceV2.amount)/Number(variants[variant].node.compareAtPriceV2.amount))*100).toFixed(2)}%`}</em> */}
              </em> 
            </div>}

            <div className="flex w-full text-center PCmin:w-auto PCmin:flex-row flex-col rounded-xl p-2 m-2 self-center border items-center justify-around max-w-[90%]">
              <strong> Price: </strong>
              <strong className="text-xl">
                <span>{variants[variant].node.priceV2.currencyCode} </span>
                <span>{variants[variant].node.priceV2.amount}</span>
              </strong>
            </div>

            <div className="flex w-full PCmin:w-auto PCmin:flex-row flex-col text-center rounded-xl border self-center items-center justify-around gap-3 p-2 break-words max-w-[90%]">
              <strong className="text-xl break-words">Total Price: </strong>
              <strong className="text-xl break-words max-w-[80%]">
                <span> {currency} </span>
                <span> {totalPrice}</span>
              </strong>
            </div>

            <div className="flex flex-col xSm:flex-row justify-center text-center mt-5 font-bold text-xl">
              <button
                onClick={() => addToCart(variants[variant].node.id, quantity)}
                disabled={
                  variants[variant].node.quantityAvailable > 1 
                  && ongoingAction !== 'addToCart' ? false : true
                }
                className="flex justify-center py-4 disabled:cursor-not-allowed flex-1 text-[white] bg-primaryColor px-1 rounded-md m-1"
              >
                {ongoingAction === 'addToCart'? 
                <Progress height={'30px'} color={'white'} />: 'Add to cart'}
              </button>
              <button
                type="button"
                title="Buy now"
                disabled={
                  variants[variant].node.quantityAvailable > 1 
                  && ongoingAction !== 'checkout' ? false : true
                }
                onClick={() =>
                  handleCheckout(variants[variant].node.id, quantity)
                }
                className="py-4 flex justify-center disabled:cursor-not-allowed flex-1 text-center text-[white] bg-secondaryColor px-1 rounded-md m-1"
              >
               {ongoingAction === 'checkout'? 
                <Progress height={'30px'} color={'white'} />: 'Buy now'
               }
              </button>
            </div>

            <div className="flex p-2 justify-between flex-col sm:flex-row">
              <div className="text-xl max-w-screen break-words text-center animate-bounce sm:self-end">
                <strong> Share this product </strong>
              </div>
              <div className="flex overflow-auto pb-3 justify-around w-full mt-2 sm:w-[50%] self-center">
                <div className="cursor-pointer">
                  <svg
                    className="hover:fill-primaryColor"
                    width="30"
                    height="30"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z" />
                    <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z" />
                  </svg>
                </div>
                <div className="cursor-pointer">
                  <svg
                    className="hover:stroke-primaryColor stroke-[black]"
                    width="30"
                    height="30"
                    viewBox="0 0 192 192"
                    fill="none"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeWidth="12"
                      d="M126 38c-14.359 0-26 11.64-26 26a25.89 25.89 0 0 0 2.929 12C72 76 56 70 30 46c0 39.5 10 66 34 81-8 11.2-29.333 14.333-42 14.5 0 0 14 13.5 46 13.5 56 0 84-46.783 84-91l18-20h-27.386A25.892 25.892 0 0 0 126 38Z"
                    />
                  </svg>
                </div>
                <div className="cursor-pointer">
                  <svg
                    className="hover:stroke-primaryColor fill-none stroke-[black]"
                    width="30"
                    height="30"
                    viewBox="0 0 192 192"
                  >
                    <path
                      strokeWidth="12"
                      d="M23.073 88.132s65.458-26.782 88.16-36.212c8.702-3.772 38.215-15.843 38.215-15.843s13.621-5.28 12.486 7.544c-.379 5.281-3.406 23.764-6.433 43.756-4.54 28.291-9.459 59.221-9.459 59.221s-.756 8.676-7.188 10.185c-6.433 1.509-17.027-5.281-18.919-6.79-1.513-1.132-28.377-18.106-38.214-26.404-2.649-2.263-5.676-6.79.378-12.071 13.621-12.447 29.891-27.913 39.728-37.72 4.54-4.527 9.081-15.089-9.837-2.264-26.864 18.483-53.35 35.835-53.35 35.835s-6.053 3.772-17.404.377c-11.351-3.395-24.594-7.921-24.594-7.921s-9.08-5.659 6.433-11.693Z"
                    />
                  </svg>
                </div>
                <div className="cursor-pointer">
                  <svg
                    className="hover:fill-primaryColor fill-[black]"
                    width="30"
                    height="30"
                    viewBox="0 0 1920 1920"
                  >
                    <path
                      d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <article className="flex p-2 m-2 flex-col max-w-full overflow-x-auto break-words">
            <h2 className="text-2xl font-bold">Description</h2>
            <p>
              <strong>{title}</strong>
              <br />
              {description.length < 2 ? images[0]?.node?.altText : description}
            </p>
          </article>
        </div>
      </section>
      <div className="mx-4">
        <ProductList />
      </div>
    </>
  );
};

export default Product;
