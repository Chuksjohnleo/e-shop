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
             <div className="flex m-3 justify-center items-center gap-3 animate-pulse">
               <svg className='group-hover:scale-150 group-hover:translate-x-4 group-active:scale-150 group-active:translate-x-4' width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <g>
                  <g>
                   <g>
                    <polyline fill="none" points="7.6 7 2.5 12 7.6 17" className='stroke-secondaryColor' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                    <line fill="none" className='stroke-secondaryColor' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.5" x2="19.2" y1="12" y2="12"/>
                   </g>
                  </g>
                </g>
               </svg>
               <strong className="text-2xl text-secondaryColor">
                  Scroll
               </strong>
               <svg className='group-hover:scale-150 group-hover:translate-x-4 group-active:scale-150 group-active:translate-x-4' width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <g>
                  <g>
                   <g>
                    <polyline fill="none" points="16.4 7 21.5 12 16.4 17" className='stroke-secondaryColor' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                    <line fill="none" className='stroke-secondaryColor' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.5" x2="19.2" y1="12" y2="12"/>
                   </g>
                  </g>
                </g>
               </svg>
             </div>
            </div>
         </section>
        </>
    )
}

export default Categories;