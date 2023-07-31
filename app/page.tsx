"use client"

import { About } from '@/components/about/About'
import { Footer } from '@/components/footer/Footer'
import { Services } from '@/components/services/Services'
import { Welcome } from '@/components/welcome/Welcome'
import { motion } from 'framer-motion'
export default function Home() {

    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 0.5,
                }
            }}
            className='overflow-hidden'
        >
            <Welcome />

            <Services />

            <About />

            <Footer />
        </motion.div>
    )
}
