import Footer from "@/components/footer";
import Nav from "@/components/nav";
import ProductList from "@/components/productList";
import ContextProvider from "@/context/context";
import Link from "next/link";
import React from "react";

const Error404: React.FC = () =>{
   
    return(
        <>
         <Nav/>
         <ContextProvider>
         <section className="my-6 mx-1 p-2">
           <div>
            <h1 className="flex flex-col justify-center text-center items-center">
                <span className="text-primaryColor text-5xl font-extrabold">404!</span>
                <span className="text-3xl">{`Chai this page doesn't seem to exist.`}</span>
            </h1>
           </div>
           <div className='z-30 m-auto w-[90%] max-w-[400px] sm:text-2xl text-center text-xl text-[white] bg-primaryColor backdrop-blur mt-12 p-0 sm:p-2 rounded-xl'>
           <div>
            <Link className='flex p-1 rounded-3xl group items-center justify-around' href='/'>
               <svg className='group-hover:scale-150 group-hover:translate-x-4 group-active:scale-150 group-active:translate-x-[8px]' width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g>
                 <g>
                   <g>
                    <polyline fill="none" points="7.6 7 2.5 12 7.6 17" className='stroke-[white]' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <line fill="none" className='stroke-[white]' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.5" x2="19.2" y1="12" y2="12"/>
                   </g>
                  </g>
                </g>
               </svg>
               <strong>Oya Back to Homepage</strong> 
              </Link>
             </div>
           </div>
         </section>
         <div  className="my-6 mx-1 p-2">
           <ProductList />
         </div>
         <Footer/>
         </ContextProvider>
        </>
    )
}

export default Error404;