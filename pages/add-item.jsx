import Editor from '@/components/addItem';
import Nav from '@/components/nav';
import Link from 'next/link';


export default function HomeIndex() {
return(
   <>
    <Nav />
    <div>
      <Editor />
      <Link href={`/products/p1`} title='products'>
        Products
      </Link>
    </div>
   </>
  )
}