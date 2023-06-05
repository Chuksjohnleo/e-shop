import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import demoProduct from '@/assets/drugs/alexander-grey-FEPfs43yiPE-unsplash.jpg';


const ProductList: React.FC = () =>{
    const [products, setProducts] = useState<number[]>([]);

    const arr: number[] = [];
    for(let i: number = 0; i<10; i++){
        arr.push(i);
    }
    
    useEffect(()=>{
        setProducts(arr);
    },[]) 

    return(
        <>
         <section className="my-6">
            <div>
             <div>
                <strong className="inline-block text-center text-[white] rounded-[10px] py-2 px-5 bg-primaryColor">New</strong>
             </div>
             <h1 className="font-bold text-3xl mb-4">
                <span className="text-primaryColor"> Newest </span>
                <span> Deals </span>
             </h1>
            </div>
            <div className="items-center justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
             {products.map((p,i)=>{
               return(
                <ProductCard pics={demoProduct} p={p} key={i} />
               )
             })}
            </div>
         </section>
        </>
    )
}

export default ProductList;