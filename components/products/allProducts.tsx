import React, { useEffect, useState, useContext } from "react";
import { AllProductsContext } from "@/pages/products";
import ProductCard from "./productCard";
import type { _product } from "./productCard";


const AllProducts: React.FC = () => {
   const { products } = useContext(AllProductsContext);

    return(
        <>
         <section className="my-6">
            <div>
             <div>
                <strong className="inline-block animate-bounce text-center text-[white] rounded-[10px] py-2 px-5 bg-primaryColor">Products</strong>
             </div>
             <h1 className="font-bold text-3xl mb-4">
                <span className="text-primaryColor"> Our </span>
                <span> Products </span>
             </h1>
            </div>
            <div className="items-center justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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

export default AllProducts;