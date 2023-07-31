import React from 'react'
import Image from 'next/image'

import separatorImage from './images/separatorFooter.svg'
import logoImage from '../welcome/images/logo.svg'
import facebookImage from './images/facebook.svg'
import instagramImage from './images/instagram.svg'

export const Footer = () => {
    return (
        <div id='contact' className='bg-first font-sans text-second'>
            <Image src={separatorImage} alt='footer separator seven b' className='w-[100%] mb-[5%]' />
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div className='px-[10%] mb-[10%] flex md:block'>
                    <Image src={logoImage} alt='logo seven b' />
                    <div className='ml-[6%] text-center md:text-start md:m-0 md:mt-[5%]'>
                        Si está buscando servicios software confiables y personalizados, ¡no dude en ponerse en contacto con nosotros!
                    </div>
                </div>

                <div className='ml-[10%] mb-[10%]'>
                    <h1 className='font-[700] text-[20px] md:text-[20px] min-[1280px]:text-[1.2rem]'>Acerca de Nosotros</h1>
                    <h4 className='font-[300] mt-[4%] cursor-pointer'>¿Quiénes Somos?</h4>
                </div>

                <div className='ml-[10%] mb-[10%]'>
                    <h3 className='font-[700] text-[20px] md:text-[20px] min-[1280px]:text-[1.2rem]'>Servicios</h3>
                    <h4 className='font-[300] mt-[4%]'>Diseño y desarrollo de aplicaciones software</h4>
                    <h4 className='font-[300] mt-[4%]'>Soporte y mantenimiento de aplicaciones</h4>
                    <h4 className='font-[300] mt-[4%]'>Consultoría en procesos y tecnología</h4>
                    <h4 className='font-[300] mt-[4%]'>Arquitectura de software</h4>
                    <h4 className='font-[300] mt-[4%]'>Integración de proyectos</h4>
                </div>

                <div className='ml-[10%] mb-[10%]'>
                    <h3 className='font-[700] text-[20px] md:text-[20px] min-[1280px]:text-[1.2rem]'>Contacto</h3>
                    <h4 className='font-[300] mt-[4%]'>Av. Kolping 2042, Posadas, Misiones</h4>
                    <h4 className='font-[300] mt-[4%]'>sevensrl@software.com</h4>
                    <h4 className='flex mt-[4%]'>
                        <Image src={facebookImage} alt='facebook seven b' className='cursor-pointer' />
                        <Image src={instagramImage} alt='instagram seven b' className='cursor-pointer' />
                    </h4>
                </div>

            </div>
        </div>
    )


}
