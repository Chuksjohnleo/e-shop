import Cart from '@/components/cart';
import demoProduct from '@/assets/drugs/alexander-grey-FEPfs43yiPE-unsplash.jpg';
import Link from 'next/link';


export default function HomeIndex() {
return(
   <>
    <div>
      <Cart pics={demoProduct} p={2} />
    </div>
   </>
  )
}