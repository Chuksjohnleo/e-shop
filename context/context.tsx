import React, { useEffect, useState, createContext} from 'react';

interface compProps{
  children: React.ReactNode
}

// interface contextValue{
//     nav
// }
export const GeneralContext = createContext<any>(undefined)

const ContextProvider: React.FC<compProps> = ({children}) => {
  const [ navWidth, setNavWidth] = useState<string>('w-0');

  return(
     <GeneralContext.Provider
      value={{
        navWidth: navWidth,
        setNavWidth: setNavWidth
      }}
     >
      <div onClick={(e)=>{
        const targetElement = e.target as HTMLElement;
        //I would have used onClick={(e)=>e.stopPropagation()} in 
        //affected elements but I may also need onclick events in them.
           if(navWidth!=='w-0' && !targetElement.closest('nav')){
            setNavWidth('w-0');
          }
        }} >
       {children}
      </div>
     </GeneralContext.Provider>
     )
}

export default ContextProvider