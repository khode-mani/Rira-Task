import { FaGithub, FaLinkedinIn, FaTelegram, FaWhatsapp } from "react-icons/fa"
import Container from "../Container/Container"
import { ReactNode } from "react"


interface ILinkItems {
    title : string;
    href : string,
    icon : ReactNode
}

const linkItems : ILinkItems[] = [
    {title: "telegram" , href: "https://t.me/IN_G0DWE_TRUST" , icon: <FaTelegram />},
    {title: "linkedIn" , href: "https://linkedin.com/in/mani-norouzi" , icon: <FaLinkedinIn/> },
    {title: "whatsApp" , href: "https://wa.me/+989332067945" , icon: <FaWhatsapp/>},
    {title: "gitHub" , href: "https://github.com/khode-mani" , icon: <FaGithub/>}
]

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
                        {
                            linkItems.map((item , index)=>(
                                <a href={item.href} target="_blank" title={item.title} key={index} > {item.icon} </a>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    </Container>
  )
}

export default Footer