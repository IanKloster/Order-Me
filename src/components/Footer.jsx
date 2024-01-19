export default function Footer() {
    return (
        <>
            <footer className="bg-gray-100 pb-5">
                <div className="mx-auto max-w-5xl py-8 sm:px-6 lg:px-8">
                    <div className="flex justify-center text-teal-600">
                        <img src="/logo.png" alt="Logo OrderMe" />
                    </div>

                    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
                        itaque neque.
                    </p>

                    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="/"> About </a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="/"> Careers </a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="/"> History </a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="/"> Services </a>
                        </li>
                    </ul>

                  
                </div>
            </footer>
        </>
    )
}