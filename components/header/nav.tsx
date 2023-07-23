import Link from 'next/link';
import React, { useState, useContext, useEffect } from 'react';
import Menu from './menu';
import { GeneralContext } from '@/context/context';
import Router from 'next/router';
import { addNewNotification, notification } from '@/libs/addNewNotification';
import Image from 'next/image';
import Progress from '../utils/progress';

interface ProductNode {
  id: string;
  title: string;
  description: string;
  handle: string;
  images: {edges: any[]}
  // Add more product fields as needed
}


interface cssPropsChange{
  border: string;
  height: string
}

const Nav: React.FC = () =>{
  
  const { cart, navWidth, setNavWidth, notifications, setNotifications, activateActionStatus } = useContext(GeneralContext);
  // const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ProductNode[]>([]);
  const [viewNotifications, setViewNotifications] = useState<cssPropsChange>({height:'h-0', border: ''})
  const [ongoingAction, setOngoingAction] = useState<string>('');//helps to check when buttons wil be disabled
  

  useEffect(()=>{
    if(searchQuery.length > 0){
      const debouncerTimer = setTimeout(()=>handleSearch(),500);
      return ()=> clearTimeout(debouncerTimer);
    }
  },[searchQuery]);

  useEffect(() => {
    
    if(localStorage.getItem('notifications')){
      const notes = JSON.parse(localStorage.getItem('notifications') || '')
      setNotifications(notes)
    }else{
      setNotifications(addNewNotification({ 
        time: Date(),
        info: 'Welcome to our shop',
      }))
    }

    // const handleStart = () => {
    //   setLoading(true);
    //   setNavWidth('w-0');
    // };

    // const handleComplete = () => {
    //   setLoading(false);
    // };

    const handleRouter = () => {
      // setLoading(true);
      setNavWidth('w-0');
      setViewNotifications({height:'h-0', border: ''});
      setSearchQuery('');
    };

    Router.events.on('routeChangeStart', handleRouter);
    Router.events.on('routeChangeComplete', handleRouter);
    Router.events.on('routeChangeError', handleRouter);

    return () => {
      Router.events.off('routeChangeStart', handleRouter);
      Router.events.off('routeChangeComplete', handleRouter);
      Router.events.off('routeChangeError', handleRouter);
    };
  }, []);

  const handleSearch = async () => {
    setNotifications(addNewNotification({ 
      time: Date(),
      info: `Your recent search is '${searchQuery}'`,
      html: `Your recent search is <strong>'${searchQuery}'</strong>`       
    }))
      if (searchQuery.trim() !== '') {
       setOngoingAction('search')
       fetch('/api/search-products',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          searchQuery
        })
       })
        .then(r=>{
          return r.json()
        })
        .then(results=>{
          setOngoingAction('');
          console.log(results)
          if(results.errorMessage){
            setOngoingAction('')
            activateActionStatus({
            text:'Internal Error occurred. Please retry', 
            type: 'negative'
            });
            return 
          }
          setSearchResults(results);
        })
        .catch(e=>{
          setOngoingAction('')
          activateActionStatus({
            text:'An error occured, Please retry', 
            type: 'negative'
          });
          setNotifications(addNewNotification({ 
            time: Date(),
            html: `Sorry for the error when searching for <strong>'${searchQuery}'</strong>`,
            info: `Sorry for the error when searching for '${searchQuery}'`
          }));
        })
      }
    };
  

  function openAndCloseMenu() {
    if(navWidth==='w-0'){
      setNavWidth('w-[75vw]');
    }else{
      setNavWidth('w-0');
    }
  }

  function focusOnSearchBar(){
    setViewNotifications({height:'h-0', border: ''})
    if(navWidth !== 'w-0' ){
      setNavWidth('w-0');
    }
  }

  function handleNotificationView(){

    function handleWindowClick(){
        setViewNotifications({height:'h-0', border: ''});
    }

    if(viewNotifications.height==='h-0'){
      setViewNotifications({height:'', border: 'border'});
    }else{
      setViewNotifications({height:'h-0', border: ''})
    }
  }
    return(
    <>
    <header className='sticky top-0 z-50 backdrop-blur border-b bg-[white]/50'>
     <nav id="mainNav" className='flex justify-between py-2 p-1 items-center'>
      {/* <div>
        <svg width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
         <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </div> */}
      <div className='text-center items-center flex justify-around gap-2'>
         <div className='flex items-center'>
        {/* <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8H16M8 12H13M7 16V21L12 16H20V4H4V16H7Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg> */}
           <button onClick={openAndCloseMenu} className='rounded hover:bg-primaryColor/80 hover:fill-[white]'>
            <svg width="30" height='30' viewBox="0 0 16 16">
             <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
           </button>
         </div>
         <h1 className='font-extrabold text-[16.1px] xSm:text-2xl'>
          <Link title='MediCos Homepage' href='/' className='hover:text-primaryColor'>       
            <span>Medi</span> 
            <span className='text-primaryColor'>Cos</span>
          </Link>
         </h1>
      </div>
      <div className='hidden text-secondaryColor md:flex justify-around gap-1 text-[13px] sm:gap-9 xSm:text-[16.1px] font-semibold'>
        <div>
         <Link href='/' className='hover:text-primaryColor'>
           Home
         </Link>
        </div>
        <div>
         <Link href='/products' className='hover:text-primaryColor'>
           Products
         </Link>
        </div>
        <div>
         <Link href='/about-us' className='hover:text-primaryColor'>
          About
         </Link>
        </div>
        <div>
         <Link href='/blog' className='hover:text-primaryColor'>
           Blog
         </Link>
        </div>
        <div>
         <Link href='/catalog' className='hover:text-primaryColor'>
           Categories
         </Link>
        </div>
      </div>
      <div className='flex gap-1 xSm:gap-4 sm:gap-6 text-center p-1 px-3 rounded-lg'>
         {/* <Link className='font-semibold' href='/'>
          Contact
         </Link> */}
         <div>
         <Link title='Profile Link' href={'/profile'}>
          {/* profile link */}
          <svg className='xSm:w-7 w-5 xSm:h-7 h-5' fill='none' viewBox="0 0 24 24">
           <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
           <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
           <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke='black' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
         </Link>
         </div>

         <div className='relative group'>
         <button className='relative' onClick={handleNotificationView}>
          <svg className='xSm:w-7 w-5 xSm:h-7 h-5' viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
           <g id="layer1">
            <path  d="M 9 1 L 9 2.1054688 L 8.7070312 2.1699219 L 8.2890625 2.3027344 L 7.8867188 2.46875 L 7.5 2.6699219 L 7.1308594 2.9042969 L 6.7851562 3.1699219 L 6.4628906 3.4628906 L 6.1699219 3.7871094 L 5.9023438 4.1328125 L 5.6699219 4.5 L 5.46875 4.8867188 L 5.3007812 5.2890625 L 5.1679688 5.7050781 L 5.0742188 6.1308594 L 5.0175781 6.5644531 L 5 7 L 4.9804688 7.7597656 L 4.9238281 8.5195312 L 4.8261719 9.2753906 L 4.6914062 10.023438 L 4.5195312 10.765625 L 4.3085938 11.498047 L 4.0625 12.216797 L 3.78125 12.923828 L 3.4628906 13.615234 L 3.109375 14.289062 L 2.7226562 14.943359 L 2.3027344 15.580078 L 1.8515625 16.193359 L 1.7832031 16.314453 L 1.75 16.449219 L 1.7539062 16.585938 L 1.7988281 16.720703 L 1.8769531 16.835938 L 1.9824219 16.923828 L 2.109375 16.980469 L 2.2480469 17 L 7.171875 17 L 7.296875 17.302734 L 7.4589844 17.595703 L 7.6542969 17.869141 L 7.8789062 18.121094 L 8.1308594 18.345703 L 8.4042969 18.541016 L 8.6972656 18.701172 L 9.0097656 18.832031 L 9.3320312 18.925781 L 9.6640625 18.980469 L 10 19 L 10.335938 18.980469 L 10.667969 18.925781 L 10.992188 18.832031 L 11.302734 18.701172 L 11.595703 18.541016 L 11.871094 18.345703 L 12.121094 18.121094 L 12.345703 17.869141 L 12.541016 17.595703 L 12.703125 17.302734 L 12.828125 17 L 17.751953 17 L 17.890625 16.980469 L 18.017578 16.923828 L 18.125 16.835938 L 18.203125 16.720703 L 18.246094 16.585938 L 18.25 16.449219 L 18.216797 16.314453 L 18.146484 16.193359 L 17.697266 15.580078 L 17.277344 14.943359 L 16.890625 14.289062 L 16.539062 13.615234 L 16.21875 12.923828 L 15.9375 12.216797 L 15.691406 11.498047 L 15.480469 10.765625 L 15.306641 10.023438 L 15.173828 9.2753906 L 15.076172 8.5195312 L 15.019531 7.7597656 L 15 7 L 14.980469 6.5644531 L 14.923828 6.1308594 L 14.830078 5.7050781 L 14.699219 5.2890625 L 14.53125 4.8867188 L 14.330078 4.5 L 14.095703 4.1328125 L 13.830078 3.7871094 L 13.535156 3.4628906 L 13.214844 3.1699219 L 12.867188 2.9042969 L 12.498047 2.6699219 L 12.111328 2.46875 L 11.708984 2.3027344 L 11.294922 2.1699219 L 11 2.1054688 L 11 1 L 9 1 z M 10 3 L 10.392578 3.0195312 L 10.78125 3.078125 L 11.162109 3.1738281 L 11.53125 3.3046875 L 11.884766 3.4726562 L 12.222656 3.6738281 L 12.539062 3.9082031 L 12.830078 4.171875 L 13.091797 4.4628906 L 13.326172 4.7773438 L 13.529297 5.1132812 L 13.695312 5.46875 L 13.828125 5.8398438 L 13.923828 6.21875 L 13.980469 6.6074219 L 14 7 L 14.017578 7.734375 L 14.068359 8.46875 L 14.152344 9.1992188 L 14.269531 9.9238281 L 14.419922 10.644531 L 14.605469 11.355469 L 14.822266 12.058594 L 15.070312 12.75 L 15.349609 13.429688 L 15.660156 14.095703 L 16.001953 14.748047 L 16.371094 15.382812 L 16.771484 16 L 3.2285156 16 L 3.6269531 15.382812 L 3.9980469 14.748047 L 4.3398438 14.095703 L 4.6503906 13.429688 L 4.9296875 12.75 L 5.1796875 12.058594 L 5.3945312 11.355469 L 5.578125 10.644531 L 5.7304688 9.9238281 L 5.8496094 9.1992188 L 5.9316406 8.46875 L 5.984375 7.734375 L 6 7 L 6.0195312 6.6074219 L 6.078125 6.21875 L 6.171875 5.8398438 L 6.3046875 5.46875 L 6.4707031 5.1132812 L 6.6738281 4.7773438 L 6.9082031 4.4628906 L 7.171875 4.171875 L 7.4628906 3.9082031 L 7.7773438 3.6738281 L 8.1132812 3.4726562 L 8.46875 3.3046875 L 8.8398438 3.1738281 L 9.21875 3.078125 L 9.6074219 3.0195312 L 10 3 z M 8.2714844 17 L 11.728516 17 L 11.708984 17.039062 L 11.552734 17.261719 L 11.365234 17.462891 L 11.152344 17.634766 L 10.919922 17.775391 L 10.669922 17.884766 L 10.408203 17.958984 L 10.136719 17.996094 L 9.8632812 17.996094 L 9.59375 17.958984 L 9.3320312 17.884766 L 9.0800781 17.775391 L 8.8476562 17.634766 L 8.6367188 17.462891 L 8.4492188 17.261719 L 8.2910156 17.039062 L 8.2714844 17 z " style={{fillOpacity:1, stroke:'none', strokeWidth:'0px'}}/>
           </g>
          </svg>
          <span className='min-h-[20px] min-w-[20px] max-h-[20px] max-w-[30px] absolute pointer-events-none -top-2.5 -right-1 inline-block text-[13px] text-[white] bg-primaryColor px-1 rounded-full'>
            {notifications.length}
          </span>
         </button>
         <div className={`absolute overflow-y-auto animate-[height] ${viewNotifications.height} duration-700 PCmin:w-[300px] w-[80vw] top-5 -right-12 break-words bg-[white] z-50 m-2 rounded-lg`}>
          <div className='border rounded-lg'>
           {/* <button className='text-left block text-dangerColor' onClick={()=>setViewNotifications({height:'h-0', border: ''})}>X Close</button> */}
           <strong className='text-xl font-bold text-secondaryColor p-3 rounded-t-lg block bg-primaryColor/20 sticky top-0 max-w-full break-words'>Notifications</strong>
           <div className='overflow-y-auto max-h-[70vh] rounded-lg'>
           {notifications.map((n: notification, i: number)=>{
             return(
             <div key={i+n.time} className='border-b p-2 text-left'>
              {n.html?<p dangerouslySetInnerHTML={{__html:n.html}} />: <p> {n.info} </p>}
              <p>
                <em  className='bg-[grey]/20 text-[16px] inline-block font-light px-1 rounded-xl'>
                 {new Date(n.time).toLocaleString()} 
                </em>
              </p>
            </div>)
           })}
           </div>
           <button className='text-center font-bold rounded-xl m-auto p-2 border text-dangerColor' onClick={()=>setViewNotifications({height:'h-0', border: ''})}>
            Close
           </button>
          </div>
         </div>
         </div>

         <div>
         <Link className='relative block' href='/cart'>
          <svg className='xSm:w-7 w-5 xSm:h-7 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M4.78571 5H18.2251C19.5903 5 20.5542 6.33739 20.1225 7.63246L18.4558 12.6325C18.1836 13.4491 17.4193 14 16.5585 14H6.07142M4.78571 5L4.74531 4.71716C4.60455 3.73186 3.76071 3 2.76541 3H2M4.78571 5L6.07142 14M6.07142 14L6.25469 15.2828C6.39545 16.2681 7.23929 17 8.23459 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className='min-h-[20px] min-w-[20px] max-h-[20px] max-w-[30px] absolute pointer-events-none -top-2.5 -right-1.5 inline-block text-[13px] text-[white] bg-primaryColor px-1 rounded-full'>
            {cart.totalQuantity || 0}
          </span>
         </Link>
         </div>
      </div>
     </nav>
     <Menu handler={openAndCloseMenu} theWidth={navWidth} />
     <div>
      <div className='w-full p-1 flex justify-center'>
       <input 
        onFocus={focusOnSearchBar} 
        value={searchQuery}
        onKeyDown={(e) =>e.key==='Enter'?handleSearch():''}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='w-[80%] p-[2px] focus:shadow-lg focus:shadow-primaryColor px-2 bg-[transparent] focus:outline-primaryColor rounded-l-full border border-primaryColor focus:placeholder:text-primaryColor/50 placeholder:text-primaryColor'
        type='text' placeholder='Type any drug name' />
       <button onClick={handleSearch} type='button' className='border font-bold text-[14px] px-2 active:bg-primaryColor active:text-[white] border-l-0 border-primaryColor'>Search</button>
      </div>
      {searchQuery.length>0?
      <>
       <div className='border text-dangerColor text-center p-2 mx-2 PCmin:mx-auto my-1 PCmin:max-w-[90vw] rounded-lg'>
        <button onClick={()=>setSearchQuery('')} className='text-2xl font-bold max-w-[98vw] break-words'> Cancel </button>
       </div>
       <div className='overflow-y-auto border  mx-2 PCmin:mx-auto my-1 PCmin:max-w-[90vw] max-h-[70vh] rounded-lg'>
        {searchResults.length>0 && ongoingAction !== 'search'?
           searchResults.map(s=>{
            return(
            <Link href={`/products/${s.handle}`} title={s.title} key={s.id} className='flex h-[200px] overflow-y-hidden justify-between border-b p-2 text-left'>
             <div className='w-[60%]'>
              <p className='text-xl PCmin:text-2xl font-bold'> {s.title} </p>
              <p> {s.description} </p>
             </div>
             <div>
              <p>
                <Image src={s.images.edges[0]?.node?.originalSrc  || '/favicon.ico'} alt={'alt'} width={100} height={100} className='bg-[grey]/20 text-[16px] inline-block font-light px-1 rounded-xl' />
              </p>
             </div>
            </Link>)
           }):
           <div className='text-center flex justify-center'>
             {ongoingAction === 'search'? 
               <div className='m-2 p-2'>
                <strong className='animate-pulse text-3xl'> Searching..... </strong>
               </div>:
               <strong>
                No Product matched your search
               </strong>
             }
           </div>
           }
      </div>
      </>:''}
     </div>
    </header>
    {/* <Menu handler={openAndCloseMenu} theWidth={navWidth} /> */}
    </>
    )
}

export default Nav;