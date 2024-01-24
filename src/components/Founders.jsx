export default function Founders() {
    return (
        <>

            <div id="team" className="pt-3 pb-20">
                <div className="container mx-auto px-6 md:px-12 xl:px-32">

                    <div className="grid gap-12 items-center md:grid-cols-2">
                        <div className="space-y-4 text-center">
                            <img className="w-64 h-64 mx-auto object-cover rounded-full md:w-40 md:h-40 lg:w-56 lg:h-56"
                                src="/founder.jpg" alt="woman" loading="lazy" width="640" height="805" />
                            <div>
                                <h4 className="text-2xl">Ian Kloster</h4>
                                <span className="block text-sm text-gray-500">Founder</span>
                            </div>
                        </div>

                        <div className="space-y-4 text-center">
                            <img className="w-64 h-64 mx-auto object-cover rounded-full md:w-40 md:h-40 lg:w-56 lg:h-56"
                                src="/coo-founder.jpg" alt="woman" loading="lazy" width="640" height="805" />
                            <div>
                                <h4 className="text-2xl">Martín Staltari</h4>
                                <span className="block text-sm text-gray-500">COO</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </>
    )
}