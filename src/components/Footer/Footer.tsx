import { FaGithub, FaLinkedinIn, FaTelegram, FaWhatsapp } from "react-icons/fa"
import Container from "../Container/Container"

function Footer() {
  return (
    <Container>
        <div className="w-full h-90 flex justify-center items-center">
            <div className="glass-card w-full h-50 flex p-5 justify-between items-center">
                <div className="w-1/4 fa-bold text-lg text-justify">
                    <p>این وب‌سایت صرفاً برای انجام تسک شرکت ریرا طراحی شده و توسعه داده شده است و فاقد هرگونه ارزش تجاری، حقوقی یا سرمایه‌گذاری است.</p>
                </div>
                <div className="h-full flex flex-col justify-evenly items-center gap-3">
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