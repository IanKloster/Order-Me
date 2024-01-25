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
            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg"

            >
              <svg className="h-10 w-10 icon icon-tabler icon-tabler-building-store" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#466380" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l18 0" />
                <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                <path d="M5 21l0 -10.15" />
                <path d="M19 21l0 -10.15" />
                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
              </svg>

              <h3 className="mt-4 text-xl font-bold text-slate-600">
                Puntos de ventas
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                El sistema cuenta con todas las funciones necesarias para configurar uno o varios puntos de venta.
              </p>
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg"

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
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <path d="M15 7a2 2 0 0 1 2 2" />
                <path d="M15 3a6 6 0 0 1 6 6" />
              </svg>

              <h3 className="mt-4 text-xl font-bold text-slate-600">Soporte</h3>

              <p className="mt-1 text-sm text-slate-600">
                Cuenta con un equipo de trabajo multidisciplinario que permite
                que cada consulta sea resuelta de manera eficiente y rápida
                según su urgencia.
              </p>
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg"

            >
              <svg className="h-10 w-10 icon icon-tabler icon-tabler-analyze" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#466380" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 11a8.1 8.1 0 0 0 -6.986 -6.918a8.095 8.095 0 0 0 -8.019 3.918" />
                <path d="M4 13a8.1 8.1 0 0 0 15 3" />
                <path d="M19 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M5 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              </svg>

              <h3 className="mt-4 text-xl font-bold text-slate-600">
                Actualizaciones
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Actualizaciones constantes y sin costo adicional con el objetivo de incorporar nuevas funciones, mejorar la seguridad y resolver errores o imprevistos.
              </p>
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg"

            >
              <svg className="w-10 h-10 icon icon-tabler icon-tabler-align-box-right-middle" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#466380" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 15h2" />
                <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                <path d="M11 12h6" />
                <path d="M13 9h4" />
              </svg>
              <h3 className="mt-4 text-xl font-bold text-slate-600">
                Capacitaciones
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Se pueden realizar capacitaciones de forma virtual, o presencial en la oficina para evacuar todas las dudas referentes al funcionamiento del sistema.
              </p>
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg"

            >
              <svg className="w-10 h-10 icon icon-tabler icon-tabler-user-pentagon" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#466380" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13.163 2.168l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-3.064 9.43a1.978 1.978 0 0 1 -1.881 1.367h-9.916a1.978 1.978 0 0 1 -1.881 -1.367l-3.064 -9.43a1.978 1.978 0 0 1 .719 -2.212l8.021 -5.828a1.978 1.978 0 0 1 2.326 0z" />
                <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                <path d="M6 20.703v-.703a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.707" />
              </svg>

              <h3 className="mt-4 text-xl font-bold text-slate-600">
                Registro de clientes y control de cuentas corrientes
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                En el sistema permite configurar clientes y agregar cuentas corrientes para los mismos.
              </p>
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black/30 hover:shadow-lg"

            >
              <svg
                className="h-10 w-10 text-pink-500 icon icon-tabler icon-tabler-qrcode"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#466380"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M7 17l0 .01" />
                <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M7 7l0 .01" />
                <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M17 7l0 .01" />
                <path d="M14 14l3 0" />
                <path d="M20 14l0 .01" />
                <path d="M14 14l0 3" />
                <path d="M14 20l3 0" />
                <path d="M17 17l3 0" />
                <path d="M20 17l0 3" />
              </svg>

              <h3 className="mt-4 text-xl font-bold text-slate-600">Cartas QR</h3>

              <p id="Beneficios" className="mt-1 text-sm text-slate-600">
                El menú de tu negocio en PDF accesible a través de un código QR
                o la opción de diseñar un menú dinámico actualizable a través
                del sistema.
              </p>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}