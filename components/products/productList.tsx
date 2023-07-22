import React, { useEffect, useState, useContext } from "react";
import ProductCard from "./productCard";
import { getProducts } from '@/libs/products';
import type { _product } from "./productCard";


const ProductList: React.FC = () =>{
    const [products, setProducts] = useState<_product[]>([]);
    const [newProducts, setNewProducts] = useState<_product[]>([]);
  
    return(
        <>
         <section className="my-6">
          {/* <button className="text-4xl border p-2 text-center m-4 active:bg-primaryColor active:text-[white]" onClick={fetchProducts}>Click fetch products</button>
          <div className="border-[5px] p-2 overflow-y-auto"><strong className="break-words">{text}</strong></div> */}
            <div>
             <div>
                <strong className="inline-block animate-bounce text-center text-[white] rounded-[10px] py-2 px-5 bg-primaryColor">New</strong>
             </div>
             <h1 className="font-bold text-3xl mb-4 max-w-screen break-words">
                <span className="text-primaryColor"> Newest </span>
                <span> Deals </span>
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

export default ProductList;