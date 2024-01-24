import Beneficios from "@/components/Beneficios";
import Clientes from "@/components/Clientes";
import Descripcion from "@/components/Descripcion";
import Footer from "@/components/Footer";
import Founders from "@/components/Founders";
import Funcionalidades from "@/components/Funcionalidades";
import Header from "@/components/Header";
import Integraciones from "@/components/Integraciones";
import WhatsappBtn from "@/components/WhatsappBtn";


export default function Home() {
  return (
    <>
      <Header/>
      <Descripcion/>
      <Funcionalidades/>
      <Beneficios/>
      <Integraciones/>
      <Clientes/>
      <Founders/>
      <WhatsappBtn/>
      <Footer/>
    </>
  )
}
