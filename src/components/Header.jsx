"use client"
import { useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
    const [mostrar, setMostrar] = useState(false)

    function mostrarNav() {
        setMostrar(!mostrar)
    }

    function cambiarEstado() {
        setTimeout(() => {
            setMostrar(!mostrar)
        }, 600)
    }

    return (
        <>
            <header>
                <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">

                    <a className="block text-teal-600" href="/">
                        <img src="/logo.webp" alt="Logo OrderMe" />
                    </a>

                    <div className="flex flex-1 items-center justify-end md:justify-between">

                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <ScrollLink className="cursor-pointer text-slate-50 transition hover:text-gray-400/75"
                                        activeClass="active"
                                        to="inicio"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}
                                    >
                                        Inicio
                                    </ScrollLink>
                                </li>

                                <li>
                                    <ScrollLink
                                        className="cursor-pointer text-slate-50 transition hover:text-gray-400/75"
                                        activeClass="active"
                                        to="funcionalidades"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}

                                    > Funcionalidades
                                    </ScrollLink>
                                </li>

                                <li>
                                    <ScrollLink className="cursor-pointer text-slate-50 transition hover:text-gray-400/75"
                                        activeClass="active"
                                        to="beneficios"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}

                                    > Beneficios </ScrollLink>
                                </li>

                                <li>
                                    <Link className="text-slate-50 transition hover:text-gray-400/75" href="/precios"> Precios </Link>
                                </li>

                                <li>
                                    <ScrollLink className="cursor-pointer text-slate-50 transition hover:text-gray-400/75"
                                        activeClass="active"
                                        to="contacto"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}
                                    > Contacto </ScrollLink>
                                </li>


                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <button
                                className="block rounded p-2.5 text-slate-50 transition hover:text-gray-600/75 md:hidden mr-4" onClick={mostrarNav}
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>


                {mostrar &&
                    <>
                        <section className="mostrar-nav pb-4">
                            <ul className="space-y-1">
                                <li>
                                    <div className="flex items-center gap-2 rounded-lg  px-4 py-2 text-gray-700">
                                        <svg className="h-5 w-5 opacity-75 text-slate-50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                            <path d="M10 12h4v4h-4z" />
                                        </svg>

                                        <span className="text-sm font-medium"> <ScrollLink onClick={cambiarEstado} className="cursor-pointer text-slate-50 transition hover:text-gray-400/75"
                                            activeClass="active"
                                            to="inicio"
                                            spy={true}
                                            smooth={true}
                                            offset={-60}
                                            duration={500}> Inicio </ScrollLink>  </span>
                                    </div>
                                </li>

                                <li>
                                    <div className="flex items-center gap-2 rounded-lg  px-4 py-2 text-gray-700">
                                        <svg
                                            className="h-5 w-5 opacity-75 text-slate-50"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>

                                        <span className="text-sm font-medium"> <ScrollLink onClick={cambiarEstado} className="cursor-pointer text-slate-50 transition hover:text-gray-400/75"
                                            activeClass="active"
                                            to="funcionalidades"
                                            spy={true}
                                            smooth={true}
                                            offset={-60}
                                            duration={500}> Funcionalidades </ScrollLink>  </span>
                                    </div>
                                </li>

                                <li>
                                    <div className="flex items-center gap-2 rounded-lg  px-4 py-2 text-gray-700">
                                        <svg className="h-5 w-5 opacity-75 text-slate-50" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M3 17l6 -6l4 4l8 -8" />
                                            <path d="M14 7l7 0l0 7" />
                                        </svg>

                                        <span className="text-sm font-medium"> <ScrollLink onClick={cambiarEstado} className="cursor-pointer text-slate-50 transition hover:text-gray-400/75"
                                            activeClass="active"
                                            to="beneficios"
                                            spy={true}
                                            smooth={true}
                                            offset={-60}
                                            duration={500}> Beneficios </ScrollLink>  </span>
                                    </div>
                                </li>

                                <li>
                                    <div className="flex items-center gap-2 rounded-lg  px-4 py-2 text-gray-700">
                                        <svg className="h-5 w-5 opacity-75 text-slate-50" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M17.1 8.648a.568 .568 0 0 1 -.761 .011a5.682 5.682 0 0 0 -3.659 -1.34c-1.102 0 -2.205 .363 -2.205 1.374c0 1.023 1.182 1.364 2.546 1.875c2.386 .796 4.363 1.796 4.363 4.137c0 2.545 -1.977 4.295 -5.204 4.488l-.295 1.364a.557 .557 0 0 1 -.546 .443h-2.034l-.102 -.011a.568 .568 0 0 1 -.432 -.67l.318 -1.444a7.432 7.432 0 0 1 -3.273 -1.784v-.011a.545 .545 0 0 1 0 -.773l1.137 -1.102c.214 -.2 .547 -.2 .761 0a5.495 5.495 0 0 0 3.852 1.5c1.478 0 2.466 -.625 2.466 -1.614c0 -.989 -1 -1.25 -2.886 -1.954c-2 -.716 -3.898 -1.728 -3.898 -4.091c0 -2.75 2.284 -4.091 4.989 -4.216l.284 -1.398a.545 .545 0 0 1 .545 -.432h2.023l.114 .012a.544 .544 0 0 1 .42 .647l-.307 1.557a8.528 8.528 0 0 1 2.818 1.58l.023 .022c.216 .228 .216 .569 0 .773l-1.057 1.057z" />
                                        </svg>

                                        <span className="text-sm font-medium"> <Link className="cursor-pointer text-slate-50 transition hover:text-gray-400/75"
                                            href={"/precios"}> Precio </Link>  </span>
                                    </div>
                                </li>

                                <li>
                                    <div className="flex items-center gap-2 rounded-lg  px-4 py-2 text-gray-700">
                                        <svg className="h-5 w-5 opacity-75 text-slate-50" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                                            <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                                            <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
                                        </svg>

                                        <span className="text-sm font-medium"> <ScrollLink onClick={cambiarEstado} className=" cursor-pointer text-slate-50 transition hover:text-gray-400/75"
                                            activeClass="active"
                                            to="contacto"
                                            spy={true}
                                            smooth={true}
                                            offset={-60}
                                            duration={500}> Contacto </ScrollLink>  </span>
                                    </div>
                                </li>

                            </ul>

                        </section>
                    </>
                }
                
            </header>
        </>
    )
}