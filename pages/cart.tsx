import Cart from '@/components/cart/cart';
import demoProduct from '@/assets/drugs/alexander-grey-FEPfs43yiPE-unsplash.jpg';
import Link from 'next/link';
import Head from 'next/head';


export default function HomeIndex() {
  const title: string = 'Cart | MediCos';
  const ogImage: string = '/favicon_io/favicon-32x32.png';
  const description: string = `View your cart contents on MediCos. We sell geniune products. Buy geniune products from MediCos`
 
return(
   <>
    <div>
    <Head>
          <title>{title}</title> 
         <link rel="shortcut icon" type="image/x-icon" href="/favicon_io/favicon.ico" />
         <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
         <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
         <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
         <link rel="manifest" href="/favicon_io/site.webmanifest" />
         <meta property="description" content={description} />
         <meta property="og:url" content={'https://e-shop-chuksjohnleo.vercel.app/cart'} />
         <meta property="og:type" content="website" />
         <meta property="og:title" content={title} />
         <meta property="og:description" content={description} />
         <meta property="og:image" content={ogImage} />
         <meta name="twitter:site" content="@Chuksjohnleo" />
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:title" content={title} />
         <meta name="twitter:description" content={description} />
         <meta name="twitter:image" content={ogImage} />
  </Head>
      <Cart pics={demoProduct} />
    </div>
   </>
  )
}