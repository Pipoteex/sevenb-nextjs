"use client"

import React from 'react'
import { motion } from "framer-motion"

export const About = () => {

    return (
        <div className="w-screen sm:h-[120vh] h-[230vh] text-white flex flex-col items-center justify-center overflow-hidden bg-[url(../images/layer4.svg)]">

            <motion.div
                className='flex flex-col justify-center items-center p-[20px] w-[80%]'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: "all" }}
                transition={{ ease: "linear", duration: 1, delay: 0.5 }}
            >
                <div className='rounded-t-[20px] bg-[#000036] text-[white] italic px-10 text-[20px] z-10 relative '> Sobre nosotros</div>
                <div className='flex p-[20px] justify-center w-[100%] text-[blue] border-2 border-[#000036] bg-white text-[16px] rounded-[20px] rounded-t-[0px] sm:rounded-t-[20px] shadow-2xl backdrop-opacity-10 relative z-[121]'>Somos una unión formada por un propósito compartido: la creación de software de alta calidad. Un grupo de jóvenes que tras haber trabajado individualmente para empresas nacionales e internacionales, decidimos unir nuestros conocimientos y experiencias para construir un todo que es mucho más que la suma de sus partes.</div>
            </motion.div >

            <motion.div
                className='flex flex-col justify-center items-center p-[20px] w-[80%]'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: "all" }}
                transition={{ ease: "linear", duration: 1, delay: 0.5 }}
            >
                <div className='rounded-t-[20px] bg-[#000036] text-[white] italic px-10 text-[20px] z-10 relative '> La calidad del software es nuestro mantra.</div>
                <div className='flex p-[20px] justify-center w-[100%] text-[blue] border-2 border-[#000036] bg-white text-[16px] rounded-[20px] rounded-t-[0px] sm:rounded-t-[20px] shadow-2xl backdrop-opacity-10 relative z-[121]'>Nos esforzamos en cada detalle, desde cada línea de código hasta cada interfaz de usuario, garantizando que todas nuestras soluciones no solo cumplan con los estándares de la industria, sino que los superen.</div>
            </motion.div >
            <motion.div
                className='flex flex-col justify-center items-center p-[20px] w-[80%]'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: "all" }}
                transition={{ ease: "linear", duration: 1, delay: 0.5 }}
            >
                <div className='rounded-t-[20px] bg-[#000036] text-[white] italic px-10 text-[20px] z-10 relative '> Nuestra responsabilidad es una parte integral de nuestro liderazgo.</div>
                <div className='flex p-[20px] justify-center w-[100%] text-[blue] border-2 border-[#000036] bg-white text-[16px] rounded-[20px] rounded-t-[0px] sm:rounded-t-[20px] shadow-2xl relative z-[121]'>Va más allá de la entrega de proyectos a tiempo. Asumimos la propiedad completa de nuestros trabajos, abordamos proactivamente los desafíos y siempre estamos disponibles para nuestros clientes. Su éxito es nuestro principal objetivo.
                </div>
            </motion.div >
            <motion.div
                className='flex flex-col justify-center items-center p-[20px] w-[80%]'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: "all" }}
                transition={{ ease: "linear", duration: 1, delay: 0.5 }}
            >
                <div className='rounded-t-[20px]  bg-[#000036] text-[white] italic px-10 text-[20px] z-10 relative '> La experiencia es nuestro diferencial. </div>
                <div className='flex p-[20px] justify-center w-[100%] text-[blue] border-2 border-[#000036] bg-white text-[16px] rounded-[20px] rounded-t-[0px] sm:rounded-t-[20px] shadow-2xl backdrop-opacity-10 relative z-[121]'>Nos permite tomar decisiones informadas, evitar errores comunes y ofrecer soluciones efectivas y eficientes. Pero no solo nos apoyamos en el pasado. Nos mantenemos al día con las últimas tendencias y tecnologías, buscando constantemente formas de mejorar nuestras soluciones.</div>
            </motion.div >

        </div >
    )
}
