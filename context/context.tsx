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
       {children}
     </GeneralContext.Provider>
     )
}

export default ContextProvider