"use client"
import { useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll';


export default function Header() {
    const [mostrar, setMostrar] = useState(false)

    function mostrarNav() {
        setMostrar(!mostrar)
    }

    function cambiarEstado(){
        setMostrar(!mostrar)
    }

    return (
        <>
            <header className="">
                <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">

                    <a className="block text-teal-600" href="/">
                        <img src="/logo.webp" alt="Logo OrderMe" />
                    </a>

                    <div className="flex flex-1 items-center justify-end md:justify-between">

                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link className="cursor-pointer text-slate-50 transition hover:text-gray-400/75"
                                        href="/"
                                    >
                                        Inicio
                                    </Link>
                                </li>

                                <li>
                                    <Link className="cursor-pointer text-slate-50 transition hover:text-gray-400/75"
                                        href="/#Funcionalidades"
                                    > Funcionalidades
                                    </Link>
                                </li>

                                <li>
                                    <Link className="cursor-pointer text-slate-50 transition hover:text-gray-400/75"
                                        href="/#Beneficios"
                                    > Beneficios </Link>
                                </li>

                                <li>
                                    <Link className="cursor-pointer text-slate-50 transition hover:text-gray-400/75" href="/precios"> Precios </Link>
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

                                        <span className="text-sm font-medium"> <Link onClick={cambiarEstado} className="cursor-pointer text-slate-50 transition hover:text-gray-400/75"
                                            href={"/"}> Inicio </Link>  </span>
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

                                        <span className="text-sm font-medium"> <Link onClick={cambiarEstado} className="cursor-pointer text-slate-50 transition hover:text-gray-400/75"
                                            href={"/#Funcionalidades"}> Funcionalidades </Link>  </span>
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

                                        <span className="text-sm font-medium"> <Link onClick={cambiarEstado} className="cursor-pointer text-slate-50 transition hover:text-gray-400/75"
                                            href={"/#Beneficios"}> Beneficios </Link>  </span>
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

                                        <span className="text-sm font-medium"> <Link className="cursor-pointer text-slate-50 transition hover:text-gray-400/75"
                                            href={"/precios"}> Precio </Link>  </span>
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