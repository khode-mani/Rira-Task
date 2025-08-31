import ConvertSection from '@/components/ConvertSection/ConvertSection';
import '@/style/global.scss'
import './globals.css'
import Container from '@/components/Container/Container';

export default function Home() {

  return (
    <Container>

      <div className="w-full  flex flex-col  gap-20 min-h-screen ">
        
        <div className='h-80 flex pr-5 flex-col justify-center lg:items-start items-center text-center gap-3'>
          <h1 className='text-5xl  fa-bold'>تسک مربوط به شرکت ریرا </h1>
          <h2 className='text-lg'>تبدیل گر واحد پول ریال و دلار</h2>
          <p  className='text-lg'>نویسنده : <span className='color-yellow fa-bold'>مانی نوروزی</span></p>
        </div>
        
        <ConvertSection/>

      </div>
    </Container>
  );
}
