import { GetServerSideProps, NextPage } from 'next';
import { MongoClient } from 'mongodb';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Nav from '@/components/nav';
import Product from '@/components/product';
import Footer from '@/components/footer';
import shadow from '@/assets/shadow.svg';

interface Comment {
  _id: string;
  postId: string;
  // Add other comment properties here
}


interface ProductData {
    id: string;
    // Add other post properties here
    comments: Comment[];
    images: string[];
    description: string;
    title: string;
    postBody: string
  }
  

interface AllPostsProps {
  product?: ProductData;
}

interface UserParams extends ParsedUrlQuery {
  product: string;
}

const uri = process.env.DB_URI || '';

const TheProduct: NextPage<AllPostsProps> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback || !product) {
    console.log('ok')
    const title = 'Post | TheBlogging';
    const ogImage = '/favicon_io/favicon-32x32.png';
    const description = 'Everything you have to know about a website and website development.';

    return (
      <>
        <Head>
          <title>{`${title} | Medicos`}</title>
          {/* Add your other meta tags */}
        </Head>
        <div>Loading...</div>
      </>
    );
  }

  const { title, images, description } = product;
  const ogImage = images && images.length > 0 ? images[0] : '/favicon_io/favicon-32x32.png';

  return (
    <>
      <Head>
        <title>{title}</title>
        {/* Add your other meta tags */}
      </Head>
      <div>
        <Nav />
        {/* <div dangerouslySetInnerHTML={{__html: product.postBody}} /> */}
        <Product p={2} pics={shadow} />
        <Footer />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<AllPostsProps, UserParams> = async ({ params, res }) => {
  const { product } = params || {};
  const client = new MongoClient(uri);
  let postData: ProductData | undefined;
  console.log('null')
  try {
    console.log('null')
    await client.connect();
    const db = client.db('blog');
    const category = db.collection('posts');
    const commentCollection = db.collection('postComments');

    const body = await category.findOne({ id: product }, { projection: { _id: 0 } });
    
    const postComments = await commentCollection.find({ postId: product }, { projection: { _id: 0 } }).sort({ _id: -1 }).toArray();

    if (body !== null) {
       
      body.comments = postComments;
      const { id, images, description, title, comments, postBody } = body;
      postData = {
        id,
        comments,
        images,
        description,
        title,
        postBody
      };
    }
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }

  if (!postData) {
    console.log(postData, 'll');
    res?.writeHead(302, { location: '/404' });
    res?.end();

    return {
      props: {},
    };
  }

  return {
    props: {
      product: postData,
    },
  };
};

export default TheProduct;
