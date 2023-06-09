import Editor from '../components/addItem';
import Link from 'next/link';


export default function HomeIndex() {
return(
   <>
    <div>
      <Link href={`/product/p1`} title='products'>
        Products
      </Link>
      <Editor />
    </div>
   </>
  )
}