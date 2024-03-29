import './globals.css'
import { Inter, Roboto, Roboto_Mono, Ubuntu, Open_Sans } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', "400", "500"], variable: "--font-roboto" })
const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: '200', variable: "--font-robotoMono" })
const openSans = Open_Sans({ subsets: ["latin"], weight: ['300', "400", "500", '700'], variable: "--font-sans" })

export const metadata = {
    title: 'SEVEN B SRL',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${roboto.variable} ${robotoMono.variable} ${openSans.variable}`}>{children}</body>
        </html>
    )
}
