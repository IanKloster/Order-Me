"use client"
import Nav from "./Nav";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [mostrar, setMostrar] = useState(false)

    function mostrarNav() {
        setMostrar(!mostrar)
    }

    return (
        <>
            <header className="bg-gray-100 p-1">
                <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">

                    <a className="block text-teal-600" href="/">
                        <img src="/logo.png" alt="Logo OrderMe" />
                    </a>

                    <div className="flex flex-1 items-center justify-end md:justify-between">

                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href={"/"}> Inicio </Link>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> History </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Services </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Projects </a>
                                </li>

                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="/precios"> Precios </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="/#team"> Team </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <button
                                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden mr-4" onClick={mostrarNav}
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
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
                {mostrar && <Nav />}
            </header>
            
        </>
    )
}