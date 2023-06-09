import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

interface myProps {
   handler: () => void;
   theWidth: string
}

const Menu: React.FC<myProps> = ({ handler, theWidth }) =>{
const categoryRef = useRef(null);
const [clickCategories, setClickCategories] = useState<boolean>(false);
const [categoriesArrowStyle, setCategoriesArrowStyle] = useState<string>('');

//This can also be done without useRef. 
 function collapse(ref: React.MutableRefObject<any>, e: React.MouseEvent): void{
    ref.current.classList.toggle('h-full');
    setClickCategories(!clickCategories)
  }

  useEffect(()=>{
    if(clickCategories){
      setCategoriesArrowStyle('rotate-90')
    }else{
      setCategoriesArrowStyle('')
    }
  },[clickCategories]);

    return(
        <div className={`fixed rounded-br-2xl shadow-primaryColor shadow-md z-50 overflow-y-auto max-h-[600px] bg-[white] top-0 ${theWidth} transition-[width] duration-200 max-w-[500px]`}>
         <div className="flex backdrop-blur sticky top-0 justify-between items-center font-extrabold m-1 p-1">
            <div className="text-xl">Menu</div>
            <div>
              <button onClick={handler} className="text-3xl rounded-lg hover:bg-dangerColor/80 hover:fill-[white]">
               <svg width="40" height="40" viewBox="0 0 512 512">
                 <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                   <g id="work-case" transform="translate(91.520000, 91.520000)">
                    <polygon id="Close" points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48">
                    </polygon>
                   </g>
                 </g>
               </svg>
              </button>
            </div>
         </div>
         <nav className="flex flex-col p-3 overflow-y-auo font-bold justify-center">
          <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/'>
            Home
          </Link>
          <div>
           <div  onClick={(e)=>collapse(categoryRef, e)} className="group cursor-pointer relative flex justify-between items-center p-2 border-t hover:fill-[white] hover:text-[white] hover:bg-primaryColor">
            <span> Categories </span> 
            <svg className={`group-hover:fill-[white] ease-in duration-300 ${categoriesArrowStyle}`} width="15" height="15" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
             <g>
              <path d="M14,52a2,2,0,0,1-1.41-3.41L35.17,26,12.59,3.41a2,2,0,0,1,0-2.82,2,2,0,0,1,2.82,0l24,24a2,2,0,0,1,0,2.82l-24,24A2,2,0,0,1,14,52Z"/>
             </g>
            </svg>
            </div>
            <ul ref={categoryRef} className="h-0 overflow-hidden ml-4 list-disc list-inside">
             <li className="hover:text-secondaryColor p-1 m-1 bg-secondaryColor/10">
               <Link className="break-words" href='/add-item'>
                tick
               </Link>
              </li>
              <li className="hover:text-secondaryColor p-1 m-1 rounded bg-secondaryColor/10">
               <Link className="break-words" href='/about-us'>
                bumbper
               </Link>
             </li>
             <li className="hover:text-secondaryColor p-1 m-1 rounded bg-secondaryColor/10">
               <Link className=" break-words" href='/privacy-policy'>
                gabajan
               </Link>
             </li>
            </ul>
          </div>
          <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/cart'>
            Cart
          </Link>
          <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/about-us'>
            About us
          </Link>
          <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/privacy-policy'>
           Privacy Policy
          </Link>

{/*
          <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/cart'>
            Cart
          </Link>
          <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/about-us'>
            About us
          </Link>
          <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/privacy-policy'>
           Privacy Policy
          </Link> <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/cart'>
            Cart
          </Link>
          <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/about-us'>
            About us
          </Link>
          <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/privacy-policy'>
           Privacy Policy
          </Link> <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/cart'>
            Cart
          </Link>
          <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/about-us'>
            About us
          </Link>
          <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/privacy-policy'>
           Privacy Policy
          </Link> <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/cart'>
            Cart
          </Link>
          <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/about-us'>
            About us
          </Link>
          <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/privacy-policy'>
           Privacy Policy
          </Link> <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/cart'>
            Cart
          </Link>
          <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/about-us'>
            About us
          </Link>
          <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/privacy-policy'>
           Privacy Policy
          </Link> <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/cart'>
            Cart
          </Link>
          <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/about-us'>
            About us
          </Link>
          <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/privacy-policy'>
           Privacy Policy
          </Link> <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/cart'>
            Cart
          </Link>
          <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/about-us'>
            About us
          </Link>
          <Link className="p-2 border-t hover:text-[white] hover:bg-primaryColor" href='/privacy-policy'>
           Privacy Policy
          </Link> */}
         </nav>
        </div>
    )
}

export default Menu;