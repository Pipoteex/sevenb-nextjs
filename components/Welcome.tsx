"use client"

import Lottie from "react-lottie";
import LoadingSpinner from "../animation/animation1.json";
import Typewriter from 'typewriter-effect';
import { useState } from "react";

export const Welcome = () => {

    const [start, setstart] = useState(false)

    const options = {
        loop: true,
        autoplay: start,
        animationData: LoadingSpinner,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className="w-screen h-screen bg-slate-950 text-white bg-[url('../images/layer3.svg')]">
            <div className='p-[10px] text-[30px] font-[100] flex items-center h-[100px]'>
                <div className="mx-[16px] text-[40px] w-[35%]"> {/* SEVEN B SRL */} </div>
                <div className="cursor-pointer mx-[16px] hover:border-b-2">About</div>
                <div className="cursor-pointer mx-[16px]">Services</div>
                <div className="cursor-pointer mx-[16px]">Contact</div>
            </div>
            <div className="flex items-center h-[600px]">
                <div className="w-[50%] text-[#2d3142] flex justify-center text-[40px]">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('SEVEN B SRL')
                                .callFunction(() => {
                                    setstart(true)
                                })
                                .pauseFor(1000)
                                .typeString('<br/>Software Factory')
                                .pauseFor(1000)
                                .deleteChars(7)
                                .typeString(" Clean")
                                .pauseFor(1000)
                                .deleteChars(6)
                                .typeString(" Desing")
                                .start();
                        }}
                        options={{
                            /* loop: true, */
                            /* strings: ['SEVEN B SRL'], */
                            autoStart: false,
                            wrapperClassName: "text-[85px]",
                            cursorClassName: "text-[85px]"
                        }}
                    />
                </div>
                <div className="w-[50%] flex justify-center">
                    <Lottie options={options} height={200} width={200} />
                </div>
            </div>
        </div>
    )
}
