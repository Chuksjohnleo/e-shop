import Editor from '@/components/tempComps/addItem';
import Nav from '@/components/header/nav';
import Link from 'next/link';


export default function HomeIndex() {
return(
   <>
    <Nav />
    <h1>I am are still working on this page</h1>
    <div>
      <Editor />
      <Link href={`/`} title='products'>
        Products
      </Link>
    </div>
   </>
  )
}