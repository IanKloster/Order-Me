import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappBtn from "@/components/WhatsappBtn";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OrderMe',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <WhatsappBtn/>
        <Footer/>
        </body>
    </html>
  )
}
