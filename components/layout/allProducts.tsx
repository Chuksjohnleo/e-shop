import React, { useState, useEffect, useContext } from 'react';
import Nav from '../header/nav';
import Services from './services';
import About from '../about/about';
import OtherInfo from './otherInfo';
import Footer from './footer';
import Categories from '../categories/categories';
import PopularProducts from '../products/popularProducts';
import NewProducts from '../products/newProducts';
import AllProducts from '../products/allProducts';
import BlogList from '../blog/blogList';


function AllProductsLayout(){

    return(
        <>
        <Nav/>
        <div className='p-2'>
         <Categories />
         <AllProducts />
         {/* <NewProducts /> */}
         {/* <PopularProducts /> */}
         <div className='md:grid grid-cols-2 items-center'>
           <Services />
           <About />
         </div>
         <BlogList />
         <OtherInfo />
         </div>
         <Footer />
        </>
    )
}

export default AllProductsLayout;