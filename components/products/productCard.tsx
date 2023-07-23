import React from "react";
import Link from "next/link";
import Image from "next/image";


export type _product = {
  id: string,
  title: string,
  description: string,
  price: string,
  currency: string,
  variantId: any;
  handle: string;
  image: {
    originalSrc: string;
    altText: string;
  }
}

interface myComp {
    product: _product
}

const ProductCard: React.FC<myComp> = ({ product }) =>{
  // const formattedPrice = new Intl.NumberFormat('en-Us', {
  //   style: 'currency',
  //   currency: 'NGN'
  // })
  // console.log(formattedPrice.format(Number(product.price)))
    return(
        <>
         <div className="hover:shadow-xl h-[350px] cursor-pointer transition-shadow duration-500 my-2 mx-1 border hover:shadow-primaryColor rounded-2xl">
            <Link href={`/products/${product.handle}`} >
              <Image className="rounded-t-2xl w-full h-[150px] object-contain" 
              decoding="async"
              src={product.image.originalSrc || "/favicon_io/favicon-32x32.png"} 
              alt={product.image.altText || 'demo product'} width={200} height={300} />
            </Link>
            <div className="flex m-1 flex-col max-w-full overflow-x-auto text-[10px] xSm:text-[13.1px] PCmin:text-[16.1px]">
              <p className="border-b text-center text-ellipsis h-[70px] overflow-hidden break-words"> <Link title={product.title} href={`/products/${product.handle}`} >{product.title}</Link> </p>
              <p className="p-1 h-[50px]  border hover:bg-[white] overflow-hidden"><em>{product.description.length>1?product.description: product.image.altText || 'Buy this'}</em></p>
            </div>
            <div className="flex  flex-col items-center h-[70px] sm:m-1 sm:justify-between sm:flex-row">
                <strong className="text-[16.1px] text-center max-w-full sm:max-w-[55%] break-words">{`${product.currency} ${product.price}`}</strong>
                <Link href={`/products/${product.handle}`} className="py-1 sm:rounded-br-2xl text-center text-[white] bg-primaryColor px-1 rounded-md m-1 inline-block">
                  Shop now
                </Link>
            </div>
         </div>
        </>
    )
}

export default ProductCard;