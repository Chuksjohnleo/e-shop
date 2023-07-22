import React, { useEffect, useState, useContext } from "react";
import { HomeContext } from "@/pages";
import ProductCard from "./productCard";
import type { _product } from "./productCard";


const NewProducts: React.FC = () =>{
    const { products } = useContext(HomeContext);
    if(products.length < 1){
      return(
      <div>
       {' '}
      </div>)
    }
    return(
        <>
         <section className="my-6">
          {/* <button className="text-4xl border p-2 text-center m-4 active:bg-primaryColor active:text-[white]" onClick={fetchProducts}>Click fetch products</button>
          <div className="border-[5px] p-2 overflow-y-auto"><strong className="break-words">{text}</strong></div> */}
            <div>
             <div>
                <strong className="inline-block animate-bounce text-center text-[white] rounded-[10px] py-2 px-5 bg-primaryColor">New</strong>
             </div>
             <h1 className="font-bold text-3xl mb-4">
                <span className="text-primaryColor"> Newest </span>
                <span> Deals </span>
             </h1>
            </div>
            <div className="items-center justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
             {products.map((product)=>{
               return(
                <ProductCard product={product} key={product.id} />
               )
             })}
            </div>
         </section>
        </>
    )
}

export default NewProducts;