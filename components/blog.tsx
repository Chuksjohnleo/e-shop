import React, { useEffect, useState } from "react";
import BlogCard from "./blogCard";
import demoProduct from '@/assets/drugs/alexander-grey-FEPfs43yiPE-unsplash.jpg';


const Blog: React.FC = () =>{
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
                   Blog
                </strong>
             </div>
             <h1 className="font-bold text-3xl mb-4">
                <span className="text-primaryColor"> Get health tips </span>
                <span> from our </span>
                <span className="text-primaryColor"> blog </span>
             </h1>
            </div>
            <div className="flex flex-col lg:grid grid-cols-2">
             {products.map((p,i)=>{
               return(
                <BlogCard pics={demoProduct} p={p} key={i} />
               )
             })}
            </div>
         </section>
        </>
    )
}

export default Blog;