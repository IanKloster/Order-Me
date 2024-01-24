import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer id="contacto" className="bg-gray-100">
                <div className="container-footer mx-auto max-w-5xl sm:px-6 lg:px-8">

                    <div className="flex justify-center text-teal-600">
                        <img src="/logo.png" alt="Logo OrderMe" />
                    </div>

                    <p className="mx-auto max-w-xs text-center leading-relaxed text-gray-500">
                        Para más información, comuníquese con nosotros a través de:
                    </p>

                    <div className="numeros">
                        <p>
                            <strong>Teléfono: </strong>
                            <a href="tel:+5492235569208">+54 9 223 556-9208</a>
                        </p>
                        <p>
                            <strong>WhatsApp: </strong>
                            <a href="https://wa.me/+5492235569208" target="_blank" >+54 9 223 556-9208</a>
                        </p>
                    </div>




                </div>

                <hr/>
                <div className="copyright-section flex justify-center">


                        © 2023 OrderMe. Todos los derechos reservados OrderMe



                </div>
            </footer>

        </>

    )
}