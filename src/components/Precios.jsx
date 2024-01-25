import Footer from "./Footer";
import HeaderPrecios from "./HeaderPrecios";
import WhatsappBtn from "./WhatsappBtn";

export default function Precios() {
    return (
        <>
            <HeaderPrecios/>
            <section className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-12 m-auto">
                <div className="card-info-div grid grid-cols-1 gap-4 sm:grid-cols-1 sm:items-stretch md:grid-cols-2 md:gap-8">
                    
                <div className="card-info-fiv_hijo divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                        <div className="card-price p-6 sm:px-8">
                            
                            <div>
                            <h3>Instalación y Capacitación</h3>
                            <h4>Gratuita</h4>
                            
                            </div>
                            <p className="price-text sm:mb-8 p-uno">Todas nuestras instalaciones y capacitaciones son bonificadas, tanto para clientes de prueba como para nuevas terminales de clientes existentes.</p>
                            <a
                                className="block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white "
                                href="https://wa.me/+5492235569208" target="_blank"
                            >
                                PROBÁ UN MES GRATIS
                            </a>

                        </div>
                    </div>  

                    <div className="card-info-fiv_hijo divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                        <div className="card-price p-6 ">
                            <div>
                            <h3>30 días de</h3>
                            <h4>Prueba</h4>
                           
                            </div>
                            <p className="price-text ">Probá nuestro sistema con instalación bonificada y empezá hoy a gestionar tu comercio con la precisión que necesita tu negocio.</p>
                            <a
                                className="block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white "
                                href="https://wa.me/+5492235569208" target="_blank"
                            >
                                PROBÁ UN MES GRATIS
                            </a>

                        </div>
                    </div>

                    <div className="card-info-fiv_hijo divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm ">
                        <div className="card-price p-6 sm:px-8">
                            <div>
                            <h3>Por terminal</h3>
                            <h4>$20.000  <span>x mes</span></h4>
                            
                            </div>
                            <p className="price-bug ">Accedé a las herramientas de gestión que te permitirán profesionalizar tu negocio al precio más bajo del mercado. El pago se debe efectuar una vez por mes al finalizar el primer mes de prueba. (No incluye IVA)</p>
                            <a
                                className="a-bug block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white "
                                href="https://wa.me/+5492235569208" target="_blank"
                            >
                                PROBÁ UN MES GRATIS
                            </a>

                        </div>
                    </div>

                </div>
            </section>
            
            <WhatsappBtn/>
            <Footer/>
        </>
    )
}