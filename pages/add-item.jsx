import Editor from '@/components/addItem';
import Link from 'next/link';


export default function HomeIndex() {
return(
   <>
    <div>
      <Editor />
      <Link href={`/products/p1`} title='products'>
        Products
      </Link>
    </div>
   </>
  )
}