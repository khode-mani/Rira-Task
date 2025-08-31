import ConvertSection from '@/components/ConvertSection/ConvertSection';
import '../../style/global.scss'
import Container from '@/components/Container/Container';

export default function Home() {

  return (
    <Container>

      <div className="w-full  flex flex-col items-center gap-20 min-h-screen">
        <div className='w-full h-100 flex flex-col justify-center items-start  '>
          <h1 className='text-5xl fa-bold'>تسک مربوط به شرکت ریرا </h1>
          <h2 className='text-lg'>تبدیل گر واحد پول ریال به دلار</h2>
          <p  className='text-lg'>نویسنده : <span className='color-yellow fa-bold'>مانی نوروزی</span></p>
        </div>
        
        <ConvertSection/>

      </div>
    </Container>
  );
}
