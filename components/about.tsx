import React from "react";
import Image from "next/image";
import demoProduct from '@/assets/favicon.jpg';
import Link from "next/link";


const About: React.FC = () =>{
    return(
        <>
         <section className="my-2 mx-1 pb-12">
            <h1 className="text-5xl font-bold my-8">
                <span> Learn More </span>
                <span className="text-primaryColor"> About Us</span>
            </h1>
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
            </p>
            <div>
                <Link href='/about-us' className="py-1 text-[white] bg-primaryColor px-6 rounded-md my-3 inline-block">Read more</Link>
            </div>
         </section>
        </>
    )
}

export default About;