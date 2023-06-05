import React, { useEffect, useState } from "react";
import demoProduct from '@/assets/drugs/alexander-grey-FEPfs43yiPE-unsplash.jpg';
import CategoryCard from "./categoryCard";


const Categories: React.FC = () =>{
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
                <strong className="inline-block animate-bounce text-center text-[white] rounded-[10px] py-2 px-5 bg-primaryColor">
                   Categories
                </strong>
             </div>
             <h1 className="font-bold text-3xl mb-4">
                <span> Shop from our vast categories of</span>
                <span  className="text-primaryColor"> health products </span>
             </h1>
            </div>
            <div>
             <div id="categories" className="flex overflow-auto">
                {products.map((n,i)=>{
               return(
                <CategoryCard pics={demoProduct} n={n} key={i} />
               )
             })}
             </div>
            </div>
         </section>
        </>
    )
}

export default Categories;