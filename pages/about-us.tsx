import AboutUs from '@/components/aboutUs';
import Link from 'next/link';


export default function HomeIndex() {
return(
   <>
    <div>
      <Link href={`/products/p1`} title='products'>
        Products
      </Link>
      <AboutUs />
    </div>
   </>
  )
}