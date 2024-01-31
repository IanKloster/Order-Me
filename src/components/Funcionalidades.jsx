export default function Funcionalidades() {
  return (
    <>
      <section id="funcionalidades">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-lg text-center">
            <div className="flex items-center justify-center">
              <span style={{ width: "109px" }} className="h-px bg-black"></span>
              <h2 className="px-6 text-center">Funcionalidades</h2>
              <span style={{ width: "109px" }} className="h-px bg-black"></span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 icon icon-tabler icon-tabler-message-dots"
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
                <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                <path d="M12 11l0 .01" />
                <path d="M8 11l0 .01" />
                <path d="M16 11l0 .01" />
              </svg>
              <h3 className="mt-4 text-xl font-bold text-slate-600">
                Calificaciones y reseñas
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Permite a los clientes dar su opinión y calificar la
                experiencia, proporcionando retroalimentación valiosa para el
                negocio.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 icon icon-tabler icon-tabler-device-mobile-heart"
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
                <path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6" />
                <path d="M11 4h2" />
                <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
              </svg>

              <h3 className="mt-4 text-xl font-bold text-slate-600">
                Pedidos favoritos
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Funcionalidad que permite a los clientes guardar y repetir
                pedidos anteriores que hayan sido de su agrado.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 icon icon-tabler icon-tabler-device-mobile-dollar"
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
                <path d="M13 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v5" />
                <path d="M11 4h2" />
                <path d="M12 17v.01" />
                <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                <path d="M19 21v1m0 -8v1" />
              </svg>
              <h3 className="mt-4 text-xl font-bold text-slate-600">
                Todos los métodos de pago desde el celular
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Facilidad para que los clientes realicen pagos utilizando
                diversos métodos directamente desde sus dispositivos móviles.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
              <svg
                className="w-10 h-10 icon icon-tabler icon-tabler-align-box-right-middle"
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
                <path d="M15 15h2" />
                <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                <path d="M11 12h6" />
                <path d="M13 9h4" />
              </svg>
              <h3 className="mt-4 text-xl font-bold text-slate-600">
                Armado personalizado de tu pedido
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Posibilidad para los clientes de personalizar sus pedidos según
                sus preferencias y necesidades individuales.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
              <svg
                className="w-10 h-10 icon icon-tabler icon-tabler-user-pentagon"
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
                <path d="M13.163 2.168l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-3.064 9.43a1.978 1.978 0 0 1 -1.881 1.367h-9.916a1.978 1.978 0 0 1 -1.881 -1.367l-3.064 -9.43a1.978 1.978 0 0 1 .719 -2.212l8.021 -5.828a1.978 1.978 0 0 1 2.326 0z" />
                <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                <path d="M6 20.703v-.703a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.707" />
              </svg>

              <h3 className="mt-4 text-xl font-bold text-slate-600">
                Trazabilidad del estado del pedido en tiempo real
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Permite a los clientes rastrear en tiempo real el estado actual
                de su pedido.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
              <svg className="h-10 w-10 icon icon-tabler icon-tabler-clipboard-list" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#466380" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                <path d="M9 12l.01 0" />
                <path d="M13 12l2 0" />
                <path d="M9 16l.01 0" />
                <path d="M13 16l2 0" />
              </svg>

              <h3 className="mt-4 text-xl font-bold text-slate-600">
                Pedir la cuenta
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Facilita a los clientes solicitar la cuenta al final de su
                experiencia en el establecimiento e inclusive pagar en efectivo.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
              <svg
                className="h-10 w-10 icon icon-tabler icon-tabler-table-column"
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
                <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                <path d="M10 10h11" />
                <path d="M10 3v18" />
                <path d="M9 3l-6 6" />
                <path d="M10 7l-7 7" />
                <path d="M10 12l-7 7" />
                <path d="M10 17l-4 4" />
              </svg>
              <h3 className="mt-4 text-xl font-bold text-slate-600">
                Panel de administracion para comercios
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Herramienta integral que proporciona a los comercios un control
                total sobre sus operaciones, incluyendo la gestión de pedidos,
                inventario y empleados.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
              <svg
                className="h-10 w-10 icon icon-tabler icon-tabler-device-desktop-analytics"
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
                <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
                <path d="M7 20h10" />
                <path d="M9 16v4" />
                <path d="M15 16v4" />
                <path d="M9 12v-4" />
                <path d="M12 12v-1" />
                <path d="M15 12v-2" />
                <path d="M12 12v-1" />
              </svg>
              <h3 className="mt-4 text-xl font-bold text-slate-600">
                Analíticas
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Herramienta que analiza datos clave para ofrecer perspectivas
                valiosas y ayudar a los comercios a mejorar su rendimiento.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
              <svg
                className="h-10 w-10 icon icon-tabler icon-tabler-device-desktop"
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
                <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" />
                <path d="M7 20h10" />
                <path d="M9 16v4" />
                <path d="M15 16v4" />
              </svg>
              <h3 className="mt-4 text-xl font-bold text-slate-600">
                Autogestión
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Permite a los comercios gestionar aspectos clave de su presencia
                en la plataforma de manera independiente.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
              <svg
                className="w-10 h-10 icon icon-tabler icon-tabler-align-box-right-middle"
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
                <path d="M15 15h2" />
                <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                <path d="M11 12h6" />
                <path d="M13 9h4" />
              </svg>
              <h3 className="mt-4 text-xl font-bold text-slate-600">
                Publicidad digital para el comercio
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Ofrece opciones de promoción y visibilidad en plataformas
                digitales para aumentar la exposición y atracción de clientes.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
              <svg
                className="w-10 h-10 icon icon-tabler icon-tabler-user-pentagon"
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
                <path d="M13.163 2.168l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-3.064 9.43a1.978 1.978 0 0 1 -1.881 1.367h-9.916a1.978 1.978 0 0 1 -1.881 -1.367l-3.064 -9.43a1.978 1.978 0 0 1 .719 -2.212l8.021 -5.828a1.978 1.978 0 0 1 2.326 0z" />
                <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                <path d="M6 20.703v-.703a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.707" />
              </svg>

              <h3 className="mt-4 text-xl font-bold text-slate-600">
                Métricas de tus clientes
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Proporciona datos y estadísticas relacionadas con el
                comportamiento y las preferencias de los clientes, ayudando a
                los comercios a tomar decisiones informadas.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg">
              <svg
                className="h-10 w-10 icon icon-tabler icon-tabler-calculator"
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
                <path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
                <path d="M8 14l0 .01" />
                <path d="M12 14l0 .01" />
                <path d="M16 14l0 .01" />
                <path d="M8 17l0 .01" />
                <path d="M12 17l0 .01" />
                <path d="M16 17l0 .01" />
              </svg>

              <h3 className="mt-4 text-xl font-bold text-slate-600">
                Calculadora de huella de carbono para el comercio
              </h3>

              <p id="Beneficios" className="mt-1 text-sm text-slate-600">
                Herramienta que evalúa y muestra la huella ambiental de las operaciones del comercio, ayudándoles a tomar decisiones más sostenibles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}