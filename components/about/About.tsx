import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

import style from './about.module.css'

import computerImage from './images/computer.svg'
import ballImage from './images/ball.svg'
import worldImage from './images/world.svg'
import tickImage from './images/tick.svg'
import arrowImage from './images/arrow.svg'

export const slideIn = (direction: string, type: any, delay: any, duration: any) => ({
    hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
        opacity: 0
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: "easeOut",
        },
    },
});

export const About = () => {
    return (

        <div id='about' className={`w-screen flex flex-col items-center ${style.about_bg}`}>

            <div className="mt-[2%] mx-[5%] relative grid grid-cols-1 md:grid-cols-2">
                <div className="font-sans mb-8">
                    <div className="mb-[30px] text-[8vw] font-[700] text-third text-center md:text-[5vw] md:text-start">Sobre Nosotros</div>
                    <div className='text-second text-center text-[3vw] md:text-[1.5vw] md:break-words md:text-start'>
                        Somos un equipo unido por una pasion compartida: la creacion de software de calidad.
                        Cuatro lideres que, tras haber trabajado individualmente para empresas nacionales e internacionales, decidimos unir nuestros conocimientos y experiencias para construir un todo que es mucho más que la suma de sus partes.
                    </div>
                </div>
                <div className='flex justify-center md:justify-end'>
                    <Image src={computerImage} className='w-[60vw] md:w-[40vw]' alt='computer seven b' />
                </div>

                <Image src={ballImage} alt='ball' className="absolute bottom-[4%] left-[-2%] w-[4.5%] z-0" />
                <Image src={ballImage} alt='ball' className="absolute bottom-[-10%] right-[33%] w-[8%] z-0" />
                <Image src={ballImage} alt='ball' className="absolute top-[0%] right-[30%] w-[2.5%] z-0" />
                <Image src={ballImage} alt='ball' className="absolute top-[10%] right-[-2%] w-[4.5%] z-0" />
            </div>

            <Image src={worldImage} alt='world seven b' className='my-[10%] w-[80vw] md:my-[6%]' />

            <motion.div
                initial="hidden"
                whileInView="show"
                variants={slideIn("left", "tween", 0.2, 1)}
                className='bg-popRight bg-cover ml-auto relative mb-[10%] font-sans pl-[17%] pr-[10%] w-[90%] h-[40vw] md:h-[35vw] md:w-[75%]'
            >
                <Image src={tickImage} alt='tick' className='absolute left-[2%] top-[5%] w-[12%]' />
                <div className='text-third text-[5vw] font-[700] w-[100%] h-[35%] flex items-center md:mb-[5%] md:mt-[2%]'>Calidad del Software</div>
                <div className='text-first font-[500] w-[100%] mt-[1%] text-[1.4vw] md:text-[2vw]'>
                    Nos esforzamos en cada detalle, desde cada línea de código hasta cada interfaz de usuario, garantizando que todas nuestras soluciones no solo cumplan con los estándares de la industria, sino que los superen.
                </div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="show"
                variants={slideIn("right", "tween", 0.2, 1)}
                className='bg-popLeft bg-cover mr-auto relative mb-[10%] font-sans pl-[5%] pr-[17%] w-[95%] h-[37vw] md:h-[30vw] md:w-[78%] md:pr-[10%]'
            >
                <Image src={tickImage} alt='tick' className='absolute right-[2%] top-[5.5%] w-[11%]' />
                <div className='text-third text-[5vw] font-[700] w-[100%] h-[40%] flex items-center'>Responsabilidad</div>
                <div className='text-first text-[2.4vw] font-[500] w-[100%] md:text-[2vw]'>
                    Va más allá de la entrega de proyectos a tiempo. Asumimos la propiedad completa de nuestros trabajos, abordamos proactivamente los desafíos y siempre estamos disponibles para nuestros clientes. Su éxito es nuestro principal objetivo.
                </div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="show"
                variants={slideIn("left", "tween", 0.2, 1)}
                className='bg-popRight bg-cover ml-auto relative mb-[10%] font-sans pl-[17%] pr-[8%] w-[90%] h-[40vw] md:h-[35vw] md:w-[75%]'
            >
                <Image src={tickImage} alt='tick' className='absolute left-[2%] top-[5%] w-[12%]' />
                <div className='text-third text-[5vw] font-[700] w-[100%] h-[32%] flex items-center'>Experiencia</div>
                <div className='text-first text-[2.4vw] font-[500] w-[100%] md:text-[2vw]'>
                    Nos permite tomar decisiones informadas, evitar errores comunes y ofrecer soluciones efectivas y eficientes. Pero no solo nos apoyamos en el pasado. Nos mantenemos al día con las últimas tendencias y tecnologías, buscando constantemente formas de mejorar nuestras soluciones.
                </div>
            </motion.div>

            <div className='w-[100%] px-[10%] flex flex-col justify-center items-center mb-[5%]'>
                <div className='font-sans text-second block w-[100%] md:flex'>
                    <div className='px-[7%] mb-[8%] md:w-[40%] md:m-0'>
                        <div className='text-[4.5vw] font-[600] flex items-center md:text-[2.5vw]'>
                            Ponte en contacto
                            <Image src={arrowImage} alt='seven b arrow' className='ml-[6%] hidden md:block' />
                        </div>
                        <div className='text-[2.5vw] font-[300] md:text-[1.5vw]'>Estamos aqui para convertir tus ideas en realidad.</div>
                    </div>
                    <div className='px-[5%] text-second md:w-[60%]'>
                        <input
                            type="text"
                            className={`text-[300] text-second p-[2%] w-[100%] rounded-[10px] ${style.input_bg}`}
                            placeholder='Tu email'
                        />
                        <textarea
                            className={`text-[300] p-[2%] w-[100%] rounded-[10px] mt-[5%] min-h-[100px] h-[70%] resize-none ${style.input_bg}`}
                            placeholder='Describi tu idea'
                        />
                    </div>
                </div>
                <button
                    className={`text-center font-sans text-[3.9vw] w-[30%] font-[700] py-[1%] rounded-[10px] mt-[5%] ${style.button_bg} md:text-[1.1vw]`}
                >
                    Enviar
                </button>
            </div>

        </div>
    )
}
