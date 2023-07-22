import Link from 'next/link';
import React, { useState, useContext, useEffect } from 'react';
import Menu from './menu';
import { GeneralContext } from '@/context/context';
import Router from 'next/router';
import { addNewNotification, notification } from '@/libs/addNewNotification';
import Image from 'next/image';

interface ProductNode {
  id: string;
  title: string;
  description: string;
  // Add more product fields as needed
}


interface cssPropsChange{
  border: string;
  height: string
}

const Notifications: React.FC = () =>{
  
  const [searchResults, setSearchResults] = useState<ProductNode[]>([]);
  const [viewNotifications, setViewNotifications] = useState<cssPropsChange>({height:'h-0', border: ''})
  
  return(
    <></>
  )
}

export default Notifications;