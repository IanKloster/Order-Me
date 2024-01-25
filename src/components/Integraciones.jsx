export default function Integraciones() {
    return (
        <>
            <section className="contenedor-marcas">
                
                <div className="flex items-center justify-center">
                    <span style={{ width: "109px" }} className="h-px bg-black"></span>
                    <h2 className="px-6 text-center">Alianzas / Integraciones</h2>
                    <span style={{ width: "109px" }} className="h-px bg-black"></span>
                </div>

                <article className="contenedor-logos">

                    <a href="https://ar.maxirest.com/?gad_source=1&gclid=EAIaIQobChMIl-6r6N33gwMVlEFIAB00Eg6GEAAYAiAAEgJ52vD_BwE" target="_blank" className="logosMarcas">
                        <img src="/maxirest.webp" alt="Logo de Maxirest, colaborador de OrderMe." />
                    </a>

                    <a href="https://www.morphi.net/main/index.htm" target="_blank" className="logosMarcas">
                        <img src="/morphi.webp" alt="Logo de Morphi, colaborador de OrderMe." />
                    </a>

                    <a href="https://zenrise.io/" target="_blank" className="logosMarcas rounded-3xl">
                        <img src="/zenrise.webp" alt="Logo de Zenrise, colaborador de OrderMe." />
                    </a>

                </article>

            </section>
        </>
    )
}