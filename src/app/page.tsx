// "use client"

// import ReactCountryFlag from 'react-country-flag';
// import '../../style/global.scss'
// import CurrencyCard from '@/components/CurrencyCard/CurrencyCard';
// import Container from '@/components/Container/Container';
// import { usecurrencyStore } from '@/store/exchanged';

// export default function Home() {
//   const curr = usecurrencyStore()
//   return (
//       <Container>
//     <div className="w-full h-screen   flex  items-center gap-20">
      



//       <div className='flex items-center justify-center gap-10 w-1/2 h-1/3 '>
//         <CurrencyCard currency='IR'/>
//         <div className='w-15 h-15 bg-yellow rounded-full flex justify-center items-center absolute text-3xl '>
//           ⇄
//         </div>
//         <CurrencyCard currency='US'/>
//       </div>
      
//       <div className='w-1/2 h-1/3 glass-card'>
//         {/* {curr.currency} */}
//         <p>مقدار ورودی: {curr.currency}</p>
//         <p>مقدار تبدیل شده: {curr.converted}</p>
//       </div>

//     </div>
//       </Container>
//   );
// }


"use client"

import ConvertSection from '@/components/ConvertSection/ConvertSection';
import '../../style/global.scss'
import Container from '@/components/Container/Container';

export default function Home() {

  return (
    <Container>
      <div className="w-full h-screen flex items-center gap-20">
        
        <ConvertSection/>

      </div>
    </Container>
  );
}
