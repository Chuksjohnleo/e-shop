import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import ContextProvider from '@/context/context';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import HorizontalLoader from '@/components/utils/horizontalLoader';




export default function App({ Component, pageProps }: AppProps) {
  
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name='theme-color' content='#1e40af' />
      </Head>
      {loading && <HorizontalLoader />}
      <ContextProvider>
       <Component {...pageProps} />
      </ContextProvider>
    </>
  )
}
