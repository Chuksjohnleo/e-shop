import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import popularPics from '@/assets/drugs/myriam-zilles-KltoLK6Mk-g-unsplash.jpg';

const PopularProducts: React.FC = () =>{
    const [products, setProducts] = useState<number[]>([]);

    const arr: number[] = [];
    for(let i: number = 0; i<6; i++){
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
                <strong className="inline-block animate-bounce text-center text-[white] rounded-[10px] py-2 px-5 bg-primaryColor">Popular</strong>
             </div>
             <h1 className="font-bold text-3xl mb-4">
                <span className="text-primaryColor"> Popular </span>
                <span> Deals </span>
             </h1>
            </div>
            <div className="items-center justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
             {products.map((p,i)=>{
               return(
                <ProductCard pics={popularPics} p={p} key={i} />
               )
             })}
            </div>
         </section>
        </>
    )
}

export default PopularProducts;