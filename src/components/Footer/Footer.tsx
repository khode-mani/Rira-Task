import { FaGithub, FaLinkedinIn, FaTelegram, FaWhatsapp } from "react-icons/fa"
import Container from "../Container/Container"

function Footer() {
  return (
    <Container>
        <div className="w-full h-120 lg:h-90 flex justify-center items-center">
            
            <div className="glass-card w-full h-70 lg:h-50 flex flex-col lg:flex-row p-5 justify-between items-center lg:divide-y-0 divide-y-2 divide-neutral-600">

                <div className="lg:w-1/4 h-1/2  lg:h-full fa-bold text-lg lg:text-justify text-center flex justify-center items-center">
                    <p>این وب‌سایت صرفاً برای انجام تسک شرکت ریرا طراحی و توسعه داده شده است و فاقد هرگونه ارزش تجاری، حقوقی یا سرمایه‌گذاری است.</p>
                </div>

                <div className="lg:h-full h-1/2 flex flex-col justify-evenly items-center gap-3">

                    <p className="text-xl">راه های ارتباطی</p>

                    <div className="flex text-3xl gap-2">
                        <a href="https://t.me/IN_G0DWE_TRUST" target="_blank"><FaTelegram /></a>
                        <a href="https://linkedin.com/in/mani-norouzi-5a324826a" target="_blank"><FaLinkedinIn/></a>
                        <a href="https://wa.me/+989332067945" target="_blank"><FaWhatsapp/></a>
                        <a href="https://github.com/khode-mani" target="_blank"><FaGithub/></a>
                    </div>

                </div>
            </div>
        </div>
    </Container>
  )
}

export default Footer