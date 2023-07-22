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
  images: any
  // Add more product fields as needed
}

const SearchBar: React.FC = () =>{
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ProductNode[]>([]);
  
  return(
    <></>
  )
}

export default SearchBar;