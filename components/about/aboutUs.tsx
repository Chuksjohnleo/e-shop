import React, { useState } from "react";
import Image from "next/image";
import demoProduct from './assets/favicon.jpg';
import Nav from "../header/nav";
import Services from "../layout/services";
import Footer from "../layout/footer";
import OtherInfo from "../layout/otherInfo";


const AboutUs: React.FC = () =>{
    const [height, setHeight] = useState<string>('h-[500px]');
    
    function handleHeight(): void{
        if(height === 'h-full'){
            setHeight('h-[500px]');
        }else{
            setHeight('h-full');
        }
    }
    return(
        <>
         <Nav />
         <section className="my-2 mx-auto p-3 max-w-[600px]">
            <div className="mx-2">
            <h1 className="text-5xl font-bold my-8 max-w-screen break-words">
                <span> Learn More </span>
                <span className="text-primaryColor"> About Us</span>
            </h1>
            <p>
            <span className="text-2xl font-extrabold">M</span>edicos 
            is a Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad? Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad?
            </p>
            <div className={`${height} transition-[height] duration-300 overflow-y-hidden`}>
              <h2 className="text-3xl font-bold mt-8 mb-4 text-secondaryColor">Our Vision</h2>
                <p>
                <span className="text-2xl font-extrabold">L</span>orem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad? Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad?
                     Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                    </p>
            <h2 className="text-3xl font-bold mt-8 mb-4 text-secondaryColor">
               Our Education
            </h2>
             <p> <span className="text-2xl font-extrabold">A</span>speriores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad? Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad?Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad? Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad?Lorem ipsum dolor sit amet consectetur 
            </p>  
            <h2 className="text-3xl font-bold mt-8 mb-4 text-secondaryColor">Our Mission</h2>
             <p> <span className="text-2xl font-extrabold">A</span>dipisicing elit. Ad eum reprehenderit 
                    exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad? Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad?
            </p>
            </div>
           {height !=='h-full' ?
           <div>
                <button onClick={handleHeight} className="py-1 text-[white] bg-secondaryColor px-6 rounded-md my-3">Read more</button>
            </div>
            :""}
         </div>
         </section>
         <div className="max-w-[600px] mx-auto">
          <Services />
          <OtherInfo />
         </div>
         <Footer />
        </>
    )
}

export default AboutUs;