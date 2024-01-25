export default function Beneficios() {
  return (
    <>
      <section id="beneficios">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

          <div className="mx-auto max-w-lg text-center">

            <div className="flex items-center justify-center">
              <span style={{ width: "109px" }} className="h-px bg-black"></span>
              <h2 className="px-6 text-center">Beneficios</h2>
              <span style={{ width: "109px" }} className="h-px bg-black"></span>
            </div>
            
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lger:shadow-lg"
            >
              <svg
                className="h-10 w-10 icon icon-tabler icon-tabler-phone-call"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#466380"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M12 10.5v1.5" />
                <path d="M12 16v1.5" />
                <path d="M15.031 12.25l-1.299 .75" />
                <path d="M10.268 15l-1.3 .75" />
                <path d="M15 15.803l-1.285 -.773" />
                <path d="M10.285 12.97l-1.285 -.773" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-slate-600">
                Atención personalizada
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Proporciona un servicio adaptado a las preferencias individuales
                de los clientes, mejorando su experiencia y fomentando la
                lealtad.
              </p>
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg"
              
            >
              <svg
                className="w-10 h-10 icon icon-tabler icon-tabler-user-star"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#466380"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
                <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-slate-600">
                Otorga una experiencia más moderna para el cliente
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Proporciona a los clientes una experiencia vanguardista y
                contemporánea, adaptada a las tendencias y expectativas
                actuales.
              </p>
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg"
              
            >
              <svg
                className=" h-10 w-10 text-pink-500 icon icon-tabler icon-tabler-mood-check"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#466380"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20.925 13.163a8.998 8.998 0 0 0 -8.925 -10.163a9 9 0 0 0 0 18" />
                <path d="M9 10h.01" />
                <path d="M15 10h.01" />
                <path d="M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" />
                <path d="M15 19l2 2l4 -4" />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-slate-600">
                Reducción de errores con pedidos automatizados
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Permitir que los clientes ingresen sus propios pedidos reduce la
                posibilidad de errores en la toma de pedidos. Esta modalidad
                proporciona precisión en los detalles, garantizando que los
                clientes obtengan exactamente lo que desean.
              </p>
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg"
              
            >
              <svg
                className="h-10 w-10 icon icon-tabler icon-tabler-receipt"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#466380"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-slate-600">
                Aumento de la rotación de mesas
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Agiliza el proceso de pedidos y pagos, especialmente en momentos
                de alta demanda, permitiendo una rotación más rápida de las
                mesas.
              </p>
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg"
              
            >
              <svg
                className="h-10 w-10 icon icon-tabler icon-tabler-time-duration-0"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#466380"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12v.01" />
                <path d="M21 12v.01" />
                <path d="M12 21v.01" />
                <path d="M12 3v.01" />
                <path d="M7.5 4.2v.01" />
                <path d="M16.5 4.2v.01" />
                <path d="M16.5 19.8v.01" />
                <path d="M7.5 19.8v.01" />
                <path d="M4.2 16.5v.01" />
                <path d="M19.8 16.5v.01" />
                <path d="M19.8 7.5v.01" />
                <path d="M4.2 7.5v.01" />
                <path d="M10 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0 -4 0z" />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-slate-600">
                Tiempo de espera cero
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Minimiza el tiempo de espera al permitir a los clientes ingresar
                sus pedidos y realizar pagos de manera eficiente, mejorando la
                satisfacción y la eficacia del servicio.
              </p>
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg"
              
            >
              <svg
                className="h-10 w-10 icon icon-tabler icon-tabler-user-square"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#466380"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 10a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1" />
                <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-slate-600">
                Recopilación de datos del cliente
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Aprovecha la recopilación de datos del cliente para comprender
                mejor sus preferencias y comportamientos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}