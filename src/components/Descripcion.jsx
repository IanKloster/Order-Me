import Founders from "./Founders";

export default function Descripcion() {
    return (
        <>

            <div class="py-20 bg-white">
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div class="md:5/12 lg:w-5/12">
                            <img src="/descripcion.jpg" alt="image" loading="lazy" width="" height="" />
                        </div>
                        <div class="md:7/12 lg:w-6/12">
                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">¡Bienvenidos a OrderMe - Tu Viaje Gastronómico Simplificado y Personalizado!</h2>
                            <p class="mt-6 text-gray-600">Hemos simplificado la forma en que disfrutas de la comida fuera de casa. No necesitas descargar ninguna aplicación; simplemente escanea el código QR en tu mesa y sumérgete en una experiencia gastronómica sin esfuerzo.
                            </p>
                            <p class="mt-4 text-gray-600">
                                    <b>¿Qué ofrecemos?</b>
                                    <ul className="lista">
                                    
                                        <li> Ordena con Facilidad: Escanea nuestro código QR para acceder al menú digital y realiza tu pedido de manera rápida y personalizada.</li>
                                        <li>Integración Eficiente: Conéctate directamente con el sistema gastronómico para garantizar entregas rápidas y sin demoras.</li>
                                        <li> Tu Toque Personal: Personaliza tu pedido según tus gustos, sin complicaciones ni malentendidos.</li>
                                        <li>¡PRÓXIMAMENTE! Pago Rápido y Seguro: Olvídate de esperar la cuenta; paga de forma instantánea y segura desde tu dispositivo.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Founders />

        </>
    )
}