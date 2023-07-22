import Footer from "@/components/layout/footer";
import Nav from "@/components/header/nav";
import ProductList from "@/components/products/productList";
import ContextProvider from "@/context/context";
import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router';
import Head from "next/head";


const Error404: React.FC = () =>{
  const title: string = 'Internal Server Error | MediCos';
  const ogImage: string = '/favicon_io/favicon-32x32.png';
  const description: string = `Internal error. We sell geniune products. Buy geniune products from MediCos`
 
  const router = useRouter();

    return(
        <>
         <Head>
         <title>{title}</title> 
         <link rel="shortcut icon" type="image/x-icon" href="/favicon_io/favicon.ico" />
         <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
         <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
         <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
         <link rel="manifest" href="/favicon_io/site.webmanifest" />
         <meta property="description" content={description} />
         <meta property="og:url" content={'https://e-shop-chuksjohnleo.vercel.app/500'} />
         <meta property="og:type" content="website" />
         <meta property="og:title" content={title} />
         <meta property="og:description" content={description} />
         <meta property="og:image" content={ogImage} />
         <meta name="twitter:site" content="@Chuksjohnleo" />
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:title" content={title} />
         <meta name="twitter:description" content={description} />
         <meta name="twitter:image" content={ogImage} />
         </Head>
         <Nav/>
         <ContextProvider>
         <section className="my-6 mx-1 p-2">
           <div>
            <h1 className="flex flex-col justify-center text-center items-center">
                <span className="text-primaryColor text-5xl font-extrabold">500!</span>
                <span className="text-3xl">{`Chai Server anyi acrashigo.`}</span>
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
           <button className="border m-2 p-2" onClick={()=>router.back()}> &lt; Back </button>
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