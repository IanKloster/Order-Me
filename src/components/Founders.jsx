export default function Founders() {
    return (
        <>

            <section id="team" className="pt-5 pb-12 xl:pb-20">
                <div className="container mx-auto px-6 md:px-12 xl:px-32">

                    <div className="grid gap-12 items-center md:grid-cols-2">
                        <div className="space-y-4 text-center">
                            <img className="w-40 h-40 mx-auto object-cover rounded-full md:w-40 md:h-40"
                                src="/founder.webp" alt="Ian Kloster, fundador de OrderMe" loading="lazy" width="640" height="805" />
                            <div>
                                <h4 className="text-2xl">Ian Kloster</h4>
                                <span className="block text-sm text-gray-500">Founder</span>
                            </div>
                        </div>

                        <div className="space-y-4 text-center">
                            <img className="w-40 h-40 mx-auto object-cover rounded-full md:w-40 md:h-40"
                                src="/coo-founder.webp" alt="Martín Staltari, COO de OrderMe" loading="lazy" width="640" height="805" />
                            <div>
                                <h4 className="text-2xl">Martín Staltari</h4>
                                <span className="block text-sm text-gray-500">COO</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
        </>
    )
}