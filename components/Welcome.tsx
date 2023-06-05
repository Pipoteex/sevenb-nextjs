"use client"

import Image from "next/image";
import image1 from '../images/image1.svg'
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react";

let items = [
    "Software Factory",
    "Clean Code",
    "Analitics",
    "Software Desing"
]

export const Welcome = () => {

    const [value, setValue] = useState("Software Factory")
    const [flag, setFlag] = useState(true)
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 5000);
    }, []);

    useEffect(() => {
        console.log(count)
        setFlag(false)
        if (count === 4) {
            setCount(0)
        }
        setTimeout(() => {
            setValue(items[count])
            setFlag(true)
        }, 2000)
    }, [count])

    return (
        <div
            className="w-screen h-screen text-white bg-[#000036] flex flex-col"
        >

            <div className='p-[10px] text-[25px] font-[100] flex items-center justify-center h-[100px] border-b-2 border-b-[white]'>
                {
                    ["About", "Services", "Contact"].map((item, index) =>
                        <motion.div
                            key={item}
                            variants={{
                                hidden: {
                                    y: 20, opacity: 0
                                },
                                show: { y: 0, opacity: 1, transition: { ease: "linear", duration: 1, delay: (index + 1) / 3 } }
                            }}
                            initial="hidden"
                            whileInView="show"
                            className="m-[20px] cursor-pointer"
                        >
                            {item}
                        </motion.div>
                    )
                }
            </div>

            <div className="flex-1 items-center justify-center grid grid-cols-1 sm:grid-cols-2">
                <div className="text-[white] text-[70px]  h-[60%] flex flex-col ">
                    <motion.div
                        className='text-center'
                        variants={{
                            hidden: {
                                opacity: 0
                            },
                            show: {
                                opacity: 1,
                                transition: {
                                    ease: "easeOut",
                                    duration: 3,
                                    delay: 1.5,
                                }
                            }
                        }}
                        whileInView="show"
                    >
                        SEVEN B
                    </motion.div >

                    <div className="h-[200px] sm:h-[100px]">
                        <AnimatePresence>
                            {
                                flag &&
                                <motion.div
                                    className="text-center"
                                    initial={{ x: -600, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 100, opacity: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    {value}
                                </motion.div>
                            }
                        </AnimatePresence>
                    </div>

                </div>
                <div className="flex justify-center">
                    <motion.div
                        initial={{ y: -10 }}
                        whileInView={{ y: 10, opacity: 1, transition: { type: "tween", duration: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.05, delay: 1.5 } }}
                    >
                        <Image src={image1} alt="imagen1" className="sm:w-[400px] w-[300px]"></Image>
                    </motion.div>
                </div>
            </div>
        </div >
    )
}
