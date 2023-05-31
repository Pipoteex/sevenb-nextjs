/* "use client" */

import Image from "next/image";
import image1 from '../images/image1.svg'

export const Welcome = () => {

    return (
        <div className="w-screen h-screen text-white bg-[#000036] flex flex-col">
            <div className='p-[10px] text-[25px] font-[100] flex items-center h-[100px] border-b-2 border-b-[white]'>
                <div className="mx-[16px] text-[40px] w-[35%]"> {/* SEVEN B SRL */} </div>
                <div className="cursor-pointer mx-[14px] hover:border-b-2">About</div>
                <div className="cursor-pointer mx-[14px]">Services</div>
                <div className="cursor-pointer mx-[14px]">Contact</div>
            </div>
            <div className="flex-1 items-center justify-center grid grid-cols-1 sm:grid-cols-2">
                <div className="text-[white] text-[70px] items-center h-[60%] flex flex-col justify-center">
                    <div className="text-center	">SEVEN B</div>
                    <div className="text-center	">Software</div>
                </div>
                <div className="flex justify-center">
                    <Image src={image1} alt="imagen1" className="w-[400px]"></Image>
                </div>
            </div>
        </div>
    )
}
