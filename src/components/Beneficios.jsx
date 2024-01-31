export default function Beneficios() {
  return (
    <>
      <section id="Beneficios">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <div className="flex items-center justify-center">
              <span style={{ width: "109px" }} className="h-px bg-black"></span>
              <h2 className="px-6 text-center">Beneficios</h2>
              <span style={{ width: "109px" }} className="h-px bg-black"></span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lger:shadow-lg">
              <svg
                className="w-10 h-10 icon icon-tabler icon-tabler-user-star"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#466380"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 5h4v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2z" />
                <path d="M14 3.5c0 1.626 .507 3.212 1.45 4.537l.05 .07a8.093 8.093 0 0 1 1.5 4.694v.199m0 4v2a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-6.2a8.09 8.09 0 0 1 1.35 -4.474m1.336 -2.63a7.822 7.822 0 0 0 .314 -2.196" />
                <path d="M7 14.803a2.4 2.4 0 0 0 1 -.803a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 .866 -.142" />
                <path d="M3 3l18 18" />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-slate-600">
                Reducción de Picos de Botella
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Mitiga momentos de alta demanda en el salón de comidas.
              </p>
            </div>



            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
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
                Elimina la transferencia verbal de información, minimizando
                malentendidos.
              </p>
            </div>

            <div className=" block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
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
                Mayor rotación de mesas
              </h2>

              <p className=" mt-1 text-sm text-slate-600">
                Optimiza el flujo de clientes, aumentando la eficiencia del
                espacio.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
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
                Agiliza la experiencia de los usuarios con pedidos y pagos
                instantáneos.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
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
                Brinda cuentas verificadas de los comensales a los comercios
                para campañas de marketing y comerciales.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
              <svg
                className="h-10 w-10 icon icon-tabler icon-tabler-currency-dollar"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#466380"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                <path d="M12 3v3m0 12v3" />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-slate-600">
                Reducción de Costos de Personal
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Permite operar con menos mozos, optimizando los recursos.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
              <svg
                className="h-10 w-10 icon icon-tabler icon-tabler-clock-hour-3"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#466380"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 12h3.5" />
                <path d="M12 7v5" />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-slate-600">
                Aumento de Ventas en Tiempo Récord
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Pedidos en menos de 30 segundos desde la decisión de compra.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
              <svg
                className="h-10 w-10 icon icon-tabler icon-tabler-list-details"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#466380"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 5h8" />
                <path d="M13 9h5" />
                <path d="M13 15h8" />
                <path d="M13 19h5" />
                <path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-slate-600">
                Experiencia Moderna y Personalizada
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Detalles específicos en cada pedido para una experiencia única.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
              <svg
                className="h-10 w-10 icon icon-tabler icon-tabler-paper-bag"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#466380"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 3h8a2 2 0 0 1 2 2v1.82a5 5 0 0 0 .528 2.236l.944 1.888a5 5 0 0 1 .528 2.236v5.82a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-5.82a5 5 0 0 1 .528 -2.236l1.472 -2.944v-3a2 2 0 0 1 2 -2z" />
                <path d="M14 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M6 21a2 2 0 0 0 2 -2v-5.82a5 5 0 0 0 -.528 -2.236l-1.472 -2.944" />
                <path d="M11 7h2" />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-slate-600">
                Optimización y Agilización General
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Mejora la eficiencia operativa en los salones de comida y
                bebida.
              </p>
            </div>

            <div className="lg:col-start-2 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
              <svg className="h-10 w-10 icon icon-tabler icon-tabler-camera-selfie" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#466380" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                <path d="M15 11l.01 0" />
                <path d="M9 11l.01 0" />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-slate-600">
                Camarero Digital Adicional{" "}
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                No reemplaza, sino que complementa el equipo de atención del
                comercio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}