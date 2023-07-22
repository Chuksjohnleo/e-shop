import React, { useRef, useEffect, useState } from "react";
import demoProduct from '@/assets/drugs/alexander-grey-FEPfs43yiPE-unsplash.jpg';
import CategoryCard from "./categoryCard";
import { register } from 'swiper/element/bundle';

register();


const Testcat = () =>{
    const [products, setProducts] = useState([]);

    //test1 here
    const swiperElRef = useRef(null);

 /* useEffect(() => {
    const swiperEl = swiperElRef.current;
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      // console.log('progress=',progress,'swiper=',swiper);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('change');
    });

    const buttonEl = document.querySelector('#swiperButton');
    const previousBtn = document.querySelector('#previousBtn');
    const nextBtn = document.querySelector('#nextBtn');

    buttonEl.addEventListener('click', () => {
      // if it was initialized with attributes
      swiperEl.setAttribute('slides-per-view', '1');
  
      // or if it was initialized with props
      //swiperEl.slidesPerView = 3;
    });

    nextBtn.addEventListener('click', () => {
      swiperEl.swiper.slideNext();
    
    });

    previousBtn.addEventListener('click', () => {
      swiperEl.swiper.slidePrev();
      console.log(swiperEl.swiper)
    });
  }, []);*/

//end test1

    const arr = [];
    for(let i = 0; i<10; i++){
        arr.push(i);
    }
    
    useEffect(()=>{
        setProducts(arr);
    },[]);

    // function swipeHandler(direction){
      
    // }


    // return (
    //   <>
    //   <button className="p-2 m-1 border" id="previousBtn">Previous</button>
    //   <button className="p-2 m-1 border" id="swiperButton">Update</button>
    //   <button className="p-2 m-1 border" id="nextBtn">Next</button>
    //   <swiper-container
    //     ref={swiperElRef}
    //     slides-per-view="2"
    //     navigation="true"
    //     pagination="true"
    //     centeredSlides="true"
    //   >
    //     <div slot="container-start">Rendered before wrapper</div>
    //     <div slot="container-end">Rendered after wrapper</div>
    //     <swiper-slide>
    //        <svg className='block bg-dangerColor m-aut' width="200" height="300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //               <g>
    //                <g>
    //                 <g>
    //                 <polyline fill="none" points="16.4 7 21.5 12 16.4 17" className='stroke-secondaryColor' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                  <line fill="none" className='stroke-secondaryColor' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.5" x2="19.2" y1="12" y2="12"/>
    //                 </g>
    //               </g>
    //              </g>
    //         </svg>
    //     </swiper-slide>
    //     <swiper-slide>
    //        <svg className='block bg-[red] m-auto' width="100" height="300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //               <g>
    //                <g>
    //                 <g>
    //                 <polyline fill="none" points="16.4 7 21.5 12 16.4 17" className='stroke-secondaryColor' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                  <line fill="none" className='stroke-secondaryColor' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.5" x2="19.2" y1="12" y2="12"/>
    //                 </g>
    //               </g>
    //              </g>
    //         </svg>
    //     </swiper-slide>
    //     <swiper-slide>
    //     <svg className='block bg-[black] m-auto' width="40" height="300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //               <g>
    //                <g>
    //                 <g>
    //                 <polyline fill="none" points="16.4 7 21.5 12 16.4 17" className='stroke-secondaryColor' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                  <line fill="none" className='stroke-secondaryColor' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.5" x2="19.2" y1="12" y2="12"/>
    //                 </g>
    //               </g>
    //              </g>
    //         </svg>
    //     </swiper-slide>
    //     <swiper-slide>
    //        <svg className='block bg-[green] m-auto' width="100" height="240" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //               <g>
    //                <g>
    //                 <g>
    //                 <polyline fill="none" points="16.4 7 21.5 12 16.4 17" className='stroke-secondaryColor' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                  <line fill="none" className='stroke-secondaryColor' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.5" x2="19.2" y1="12" y2="12"/>
    //                 </g>
    //               </g>
    //              </g>
    //         </svg>
    //     </swiper-slide>
    //     <swiper-slide>
    //     <svg className='block bg-[black] m-auto' width="140" height="300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //               <g>
    //                <g>
    //                 <g>
    //                 <polyline fill="none" points="16.4 7 21.5 12 16.4 17" className='stroke-secondaryColor' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                  <line fill="none" className='stroke-secondaryColor' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.5" x2="19.2" y1="12" y2="12"/>
    //                 </g>
    //               </g>
    //              </g>
    //         </svg>
    //     </swiper-slide>
    //   </swiper-container>
    //   </>
    // );
    return(
        <>
         <section className="my-6 flex max-w-[500px] justify-center mx-auto flex-col">
            <div>
             <div>
                <strong className="inline-block animate-bounce text-center text-[white] rounded-[10px] py-2 px-5 bg-primaryColor">
                   Categories
                </strong>
             </div>
             <h1 className="font-bold text-3xl mb-4 break-words max-w-screen">
                <span> Shop from our vast categories of</span>
                <span  className="text-primaryColor"> health products </span>
             </h1>
            </div>
            <div>
              <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        navigation="true"
        pagination="true"
        centeredSlides="true"
      >
                {products.map((n,i)=>{
               return(
      <swiper-slide  key={i}>
                <CategoryCard pics={demoProduct} n={n}/>
    </swiper-slide>
               )
             })}  
              </swiper-container>
             <div slot="container-end" className="flex mb-[30px] justify-center items-center gap-3 animate-pulse">
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
                  Swipe
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
             {/* </swiper-container> */}
            </div>
         </section>
        </>
    )
}

export default Testcat;