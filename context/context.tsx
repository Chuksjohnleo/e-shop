import React, { useEffect, useState, createContext} from 'react';
import ActionStatus from '@/components/utils/actionStatus';
import { notification } from '@/libs/addNewNotification';

interface compProps{
  children: React.ReactNode
};

interface statusDetail{
  text: string;
  type: string;
};

export const GeneralContext = createContext<any>(undefined);


const ContextProvider: React.FC<compProps> = ({children}) => {
  const [navWidth, setNavWidth] = useState<string>('w-0');
  const [cart, setCart] = useState({});
  const [actionInfo, setActionInfo] = useState<statusDetail>({ text: '', type: '' });
  const [action, setAction] = useState<boolean>(false);
  const [loadingCart, setLoadingCart] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<notification[]>([])
 

  function fetchCart(cartId: string | null){
   setLoadingCart(true)
   fetch('/api/fetchCart/',{
     method: "POST",
     body: JSON.stringify({
       cartId: cartId
     })
    }).then(r=>{
      return r.json()
    })
    .then(
     r=>{
       setLoadingCart(false)
       if(r.cart){
        setCart(r.cart)
       }else{
        localStorage.removeItem('cartId')
       }
     }
    )
    .catch(e=>{
      // setLoadingCart(false);
      activateActionStatus({text:'Error Loading Cart. Please refresh page', type: 'negative'})
    })
 }

 
 useEffect(()=>{
  if(localStorage.getItem('cartId')){
   fetchCart(localStorage.getItem('cartId'))
  }
},[]);

function actionStatusHandler(){
    setAction(false)
}


function activateActionStatus(detail: statusDetail){
   setActionInfo(detail)
   setAction(true);
}

  return(
     <GeneralContext.Provider
      value={{
        navWidth: navWidth,
        setNavWidth: setNavWidth,
        cart: cart,
        setCart: setCart,
        fetchCart: fetchCart,
        loadingCart: loadingCart,
        activateActionStatus: activateActionStatus,
        notifications: notifications,
        setNotifications: setNotifications
      }}
     >
      <div 
       onClick={(e)=>{
        const targetElement = e.target as HTMLElement;
        //I would have used onClick={(e)=>e.stopPropagation()} in 
        //affected elements but I may also need onclick events in them.
           if(navWidth!=='w-0' && !targetElement.closest('nav')){
            setNavWidth('w-0');
          }
        }} >
       {action && <ActionStatus detail={actionInfo} handler={actionStatusHandler} />}
       {children}
      </div>
     </GeneralContext.Provider>
     )
}

export default ContextProvider