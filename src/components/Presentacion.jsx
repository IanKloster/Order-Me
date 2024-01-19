export default function Presentacion() {
    return (
        <>

            <div className="py-16 bg-white">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        
                        <div className="md:5/12 lg:w-5/12">
                            <img src="/inicio.jpg" alt="image" loading="lazy" className="rounded-lg"/>
                        </div>

                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">MOBILE ORDER AND PAY</h2>
                            <p className="mt-6 text-gray-600">¡Bienvenido a OrderMe - Tu Experiencia Gastronómica sin Esfuerzo!</p>
                            <p className="mt-4 text-gray-600"> Revolución de la experiencia gastronómica haciendo las operaciones, pedidos y pagos simplificados y ágiles, directamente desde la mesa, en tus comercios gastronómicos favoritos. </p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}