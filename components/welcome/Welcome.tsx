

import Image from "next/image";
import { motion } from "framer-motion"
import style from './welcome.module.css'

import welcomeImage from './images/welcomeImage.svg'
import ballImage from './images/ball1.svg'
import logoImage from './images/logo.svg'
import pointsImage from './images/points.svg'
import BarIcon from "./images/BarIcon";

let items = [
    {
        name: "Servicios",
        value: "services"
    },
    {
        name: "Sobre Nosotros",
        value: "about"
    },
    {
        name: "Contacto",
        value: "contact"
    },

]

export const Welcome = () => {

    const handleOnClick = (e) => {
        let select = document.querySelector(`#${e.target.getAttribute("name")}`) as HTMLElement
        select.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className={` text-white flex flex-col items-center relative ${style.welcome} `}>

            <div className='flex items-center w-[100%] font-sans mb-[4%] md:m-0'>

                <div className="w-[25%] ml-[5%] ">
                    <Image src={logoImage} alt="logoSevenB" className="w-[45%] sm:w-[30%]" />
                </div>

                <div className="w-[70%] hidden justify-end mr-[5%] md:flex">
                    {
                        items.map((item, index) =>
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: {
                                        y: 20, opacity: 0
                                    },
                                    show: { y: 0, opacity: 1, transition: { ease: "linear", duration: 1, delay: (index + 1) / 3 } }
                                }}
                                initial="hidden"
                                whileInView="show"
                                className="m-[5%] cursor-pointer text-five text-[1.4vw] font-[500]"
                                onClick={handleOnClick}
                                name={item.value}
                            >
                                {item.name}
                            </motion.div>
                        )
                    }
                </div>

                <BarIcon />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 mb-[20%]">
                <div className="text-[white] flex flex-col items-center justify-center px-[12%] lg:ml-[25%] lg:p-0">
                    <div className='font-sans font-[700] w-[100%] text-[10vw] text-center flex justify-center items-center  sm:text-[6vw] md:text-[5vw] lg:text-[60px] lg:text-start xl:text-[65px] 2xl:text-[72px] min-[1650px]:text-[82px]'>
                        Desarrollando Software a la Velocidad del Cambio
                    </div >

                    <div className={`font-sans break-word font-[300] w-[100%] text-five mt-[20px] text-[5vw] text-center sm:text-[3vw] md:text-[2.5vw] lg:text-[20px] lg:text-start xl:text-[22px] 2xl:text-[22px]`}>
                        Creamos software que no solo cumple con su propósito,
                        sino que supera las expectativas y deleita a los usuarios.
                    </div >

                </div>
                <div className="flex justify-center items-center min-[400px]:mt-[8%]">
                    <motion.div
                        initial={{ y: -20 }}
                        whileInView={{ y: -10, opacity: 1, transition: { type: "tween", duration: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.05, delay: 1.5 } }}
                        className="flex items-center justify-center"
                    >
                        <Image src={welcomeImage} alt="imagen1" className="z-20 w-[60vw] mt-[8%] min-[400px]:w-[260px] sm:w-[390px] md:w-[450px] lg:w-[470px] lg:m-0 xl:w-[490px] 2xl:w-[500px] min-[1650px]:w-[600px]"></Image>
                    </motion.div>
                </div>

            </div>

            <Image src={pointsImage} alt="points" className="absolute hidden left-[1%] top-[30%] lg:block" />

            <Image src={ballImage} alt="ball" className="absolute bottom-[25%] left-[4%] w-[6%] z-0" />
            <Image src={ballImage} alt="ball" className="absolute bottom-[35%] left-[56%] w-[3%] z-0" />
            <Image src={ballImage} alt="ball" className="absolute bottom-[14%] right-[1%] w-[8%] z-0" />
            <Image src={ballImage} alt="ball" className="absolute top-[14%] right-[35%] w-[8%] z-0" />

            {/* <Image src={separatorImage} alt="ball" className="w-[90%] " /> */}

        </div >
    )
}
