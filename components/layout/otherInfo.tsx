import React from "react";

const OtherInfo: React.FC = () =>{

    return(
        <>
         <section className="my-16">
             <h1 className="font-bold text-5xl mb-4 text-center">
                <span className="break-words"> Contact </span>
                <span className="text-primaryColor"> Us </span>
             </h1>
           <div className="flex justify-center">
             <div className="flex border flex-col translate-y-8 shadow-xl rounded-md p-2 m-1 items-center">
             <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
<path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
</svg>
                  <strong className="text-center"> Send an email </strong>
                  <p className="break-words max-w-[40vw] sm:w-full text-center"> 
                   <a className="text-primaryColor font-semibold" href="mailTo:nwanonenyichukwuka@gmail.com">
                     nwanonenyichukwuka@gmail.com
                   </a>
                  </p>
             </div>
             <div className="flex border flex-col translate-y-8 shadow-xl rounded-md p-2 m-1 items-center">
             <svg fill="#000000" width="30" height="30" viewBox="0 0 24 24">
              <path d="M22,7H17V2a1,1,0,0,0-1-1H8A1,1,0,0,0,7,2V7H2A1,1,0,0,0,1,8V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V8A1,1,0,0,0,22,7ZM3,9H7V21H3ZM9,8V3h6V21H13V19a1,1,0,0,0-2,0v2H9ZM21,21H17V9h4ZM13,7H11V5h2Zm0,4H11V9h2Zm0,4H11V13h2ZM4,10H6v2H4Zm0,4H6v2H4Zm0,4H6v2H4Zm16-6H18V10h2Zm0,4H18V14h2Zm0,4H18V18h2Z"/>
             </svg>
                  <strong className="text-center"> Branch office </strong>
                  <p className="break-words max-w-[40vw] sm:w-full text-center text-primaryColor font-semibold"> 
                   Number 100, okeike road, Igboland
                  </p>
              </div>
           </div>
         </section>
        </>
    )
}

export default OtherInfo;