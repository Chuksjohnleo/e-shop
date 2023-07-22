import { GetServerSideProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Nav from '@/components/header/nav';
import Product from '@/components/products/product';
import Footer from '@/components/layout/footer';
import shadow from '@/assets/shadow.svg';
// import { _product } from '@/components/products/productCard';
import { getProduct } from '@/libs/product';


export interface ProductData {
  id: string,
  title: string,
  description: string,
  price: number,
  currency: string,
  handle: string;
  images: any;
  totalInventory: string;
  variants: any;
  }
  

interface ProductProp {
  product?: ProductData;
}

interface UserParams extends ParsedUrlQuery {
  product: string;
}

const uri = process.env.DB_URI || '';

const TheProduct: NextPage<ProductProp> = ({ product }) => {
  const router = useRouter();
 
  if (router.isFallback || !product) {
  
    const title: string = 'Home | MediCos';
    const ogImage: string = '/favicon_io/favicon-32x32.png';
    const description: string = `We sell geniune products. Buy geniune products from MediCos`
 
    return (
      <>
        <Head>
         <title>{title}</title> 
         <link rel="shortcut icon" type="image/x-icon" href="/favicon_io/favicon.ico" />
         <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
         <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
         <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
         <link rel="manifest" href="/favicon_io/site.webmanifest" />
         <meta property="description" content={description} />
         <meta property="og:url" content={`https://e-shop-chuksjohnleo.vercel.app/products/${product?.handle}`} />
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
        <div>Loading...</div>
      </>
    );
  }


  const { title, images, description } = product;
  const ogImage = images && images[0]?.node?.originalSrc?.length > 0 ? images[0]?.node?.originalSrc : '/favicon_io/favicon-32x32.png';

  return (
    <>
      <Head>
        <title>{title}</title>
        {/* other meta tags */}
      </Head>
      <div>
        <Nav />
        {/* <div dangerouslySetInnerHTML={{__html: product.postBody}} /> */}
        <Product product={product} />
        <Footer />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<ProductProp, UserParams> = async ({ params, res }) => {
  const { product } = params || {};
  // console.log(res.query)
  const productData = await getProduct(product);
  // const productData = {
  //   id: data.id,
  //   title: data.title,
  //   description: data.description,
  //   price: data.priceRange.minVariantPrice.amount,
  //   currency: data.priceRange.minVariantPrice.currencyCode,
  //   images: data.images.edges,
  //   handle : data.handle
  // }
  if (!productData) {
    res?.writeHead(302, { location: '/500' });
    res?.end();

    return {
      props: {},
    };
  }

  return {
    props: {
      product: productData,
    },
  };
};

export default TheProduct;
