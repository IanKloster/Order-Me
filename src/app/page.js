import Footer from "@/components/Footer";
import Founders from "@/components/Founders";
import Header from "@/components/Header";
import Marcas from "@/components/Marcas";
import Nosotros from "@/components/Nosotros";
import Precios from "@/components/Precios";
import WhatsappBtn from "@/components/WhatsappBtn";



export default function Home() {
  return (
    <>
      <Header/>
      <Marcas/>
      <Precios/>
      <Founders/>
      <Nosotros/>
      <WhatsappBtn/>
      <Footer/>
    </>
  )
}
