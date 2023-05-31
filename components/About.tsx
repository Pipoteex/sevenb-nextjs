"use client"

import React from 'react'
import Image from "next/image";
import image1 from '../images/image2.svg'

export const About = () => {

    return (
        <div className="w-screen h-screen text-white flex items-center justify-center bg-[url('../images/layer2.svg')]">
            <div className='flex justify-center p-[20px] bg-[white] text-[blue] w-[80%] rounded-[20px] shadow-2xl backdrop-opacity-10'>
                "Somos un equipo unido por una pasión compartida: la creación de software de alta calidad. Cuatro líderes que, tras haber trabajado individualmente para empresas nacionales e internacionales, decidimos unir nuestros conocimientos y experiencias para construir un todo que es mucho más que la suma de sus partes."
            </div>
        </div>
    )
}
