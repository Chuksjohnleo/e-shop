import { GetServerSideProps, NextPage } from 'next';
import React, { createContext } from 'react';
import { getProducts } from '@/libs/products';
import { _product } from '@/components/products/productCard';
import Head from 'next/head';
import AllProducts from '@/components/layout/allProducts';


interface HomeProps {
 products: _product[]
}

export const getServerSideProps: GetServerSideProps = async () => {
 const productsData = await getProducts();

 if(productsData){
  return {
     props: {
      products : await getProducts()
   }
  }
 }else{
  return {
    props: {
    // products: []
    products : []
   }
  }
 }
}

interface contextValue {
  products: _product[]
}

export const AllProductsContext = createContext<contextValue>({products: []});

const AllProductsIndex: NextPage<HomeProps>  = ({ products }) => { 
  const title: string = 'Products | MediCos';
  const ogImage: string = '/favicon_io/favicon-32x32.png';
  const description: string = `We sell geniune products. MediCos 
                               is an online market place where you buy genuine tech Products
                               ranging from personal computers(pc), mobile phones, computer softwares, websites etc.`
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
         <meta property="og:url" content={'https://e-shop-chuksjohnleo.vercel.app/'} />
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
   <AllProductsContext.Provider
    value={{
      products: products
    }}
   >
    <div>
      <AllProducts />
    </div>
   </AllProductsContext.Provider>
  </>
  )
}

export default AllProductsIndex;