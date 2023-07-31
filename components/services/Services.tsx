"use client"

import React, { useState } from 'react'
import { motion } from "framer-motion"
import style from './services.module.css'
import Image from 'next/image';

import separatorImage from '../welcome/images/separador.svg'

import s1GreenImage from './images/s1green.png'
import s2GreenImage from './images/s2green.png'
import s3GreenImage from './images/s3green.png'
import s4GreenImage from './images/s4green.png'
import s5GreenImage from './images/s5green.png'

import s1DarkImage from './images/s1dark.png'
import s2DarkImage from './images/s2dark.png'
import s3DarkImage from './images/s3dark.png'
import s4DarkImage from './images/s4dark.png'
import s5DarkImage from './images/s5dark.png'

export const slideIn = (direction: string, type: any, delay: any, duration: any) => ({
    hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
        x: 0,
        y: 0,
        transition: {
            type,
            delay,
            duration,
            ease: "easeOut",
        },
    },
});

export const Services = () => {

    const [flag, setflag] = useState({ flag1: true, flag2: true, flag3: true, flag4: true, flag5: true })

    return (
        <div id='services' className={`w-full text-white flex flex-col items-center overflow-hidden relative mx-auto pb-[40px] ${style.about_bg}`}>
            <Image src={separatorImage} alt="ball" className="w-[90%] " />
            <div className={`bg-[#ffffff] w-[90%] rounded-b-[30px] pb-[40px] font-sans`}>

                <div className='flex flex-col mb-[2%] px-[17%] md:p-0 md:flex-row md:items-start'>
                    <div className='text-[#222539] font-[600] text-[12vw] mb-5 text-center align-top md:text-[5vw] md:w-[38%]'>Servicios</div>
                    <div className='text-[#A6A6A6] break-words font-[400] text-[3vw] mb-5 text-center md:text-[1.6vw] md:w-[28%] '>Creamos software que no solo cumple con su propósito, sino que supera las expectativas y deleita a los usuarios.</div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='flex justify-center' >

                        <motion.div whileHover={{ scale: 1 }}
                            onHoverStart={e => setflag({ ...flag, flag1: false })}
                            onHoverEnd={e => setflag({ ...flag, flag1: true })}
                            className='w-[70%] max-w-[400px] sm:w-[60%] md:w-[80%]'
                        >
                            <Image src={flag.flag1 ? s1GreenImage : s1DarkImage} alt='service seven b' />
                        </motion.div>

                    </div>
                    <div className='flex justify-center'>

                        <motion.div whileHover={{ scale: 1.04 }}
                            onHoverStart={e => setflag({ ...flag, flag2: false })}
                            onHoverEnd={e => setflag({ ...flag, flag2: true })}
                            className='w-[70%] max-w-[400px] sm:w-[60%] md:w-[80%]'
                        >
                            <Image src={flag.flag2 ? s2GreenImage : s2DarkImage} alt='service seven b' />
                        </motion.div>

                    </div>
                    <div className='flex justify-center'>

                        <motion.div whileHover={{ scale: 1.04 }}
                            onHoverStart={e => setflag({ ...flag, flag3: false })}
                            onHoverEnd={e => setflag({ ...flag, flag3: true })}
                            className='w-[70%] max-w-[400px] sm:w-[60%] md:w-[80%]'
                        >
                            <Image src={flag.flag3 ? s3GreenImage : s3DarkImage} alt='service seven b' />
                        </motion.div>

                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 md:mt-[5%]'>
                    <div className='flex justify-center'>

                        <motion.div whileHover={{ scale: 1.04 }}
                            onHoverStart={e => setflag({ ...flag, flag4: false })}
                            onHoverEnd={e => setflag({ ...flag, flag4: true })}
                            className='w-[70%] max-w-[400px] sm:w-[60%] md:ml-[30%] md:w-[50%] '
                        >
                            <Image src={flag.flag4 ? s4GreenImage : s4DarkImage} alt='service seven b' />
                        </motion.div>

                    </div>
                    <div className='flex justify-center'>

                        <motion.div whileHover={{ scale: 1.04 }}
                            onHoverStart={e => setflag({ ...flag, flag5: false })}
                            onHoverEnd={e => setflag({ ...flag, flag5: true })}
                            className='w-[70%] max-w-[400px] sm:w-[60%] md:mr-[30%] md:w-[50%] '
                        >
                            <Image src={flag.flag5 ? s5GreenImage : s5DarkImage} alt='service seven b' />
                        </motion.div>

                    </div>
                </div>

            </div>

        </div >
    )
}
