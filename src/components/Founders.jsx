export default function Founders() {
    return (
        <>

            <div id="team" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 md:px-12 xl:px-32">

                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Team</h2>
                        <p className="text-gray-600 lg:w-8/12 lg:mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, consequatur. Saepe alias fuga quibusdam non voluptates est quos in suscipit a, odio iure molestiae rem dolores adipisci neque sint provident.</p>
                    </div>

                    <div className="grid gap-12 items-center md:grid-cols-2">
                        <div className="space-y-4 text-center">
                            <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                                src="/founder.jpg" alt="woman" loading="lazy" width="640" height="805" />
                            <div>
                                <h4 className="text-2xl">Ian Kloster</h4>
                                <span className="block text-sm text-gray-500">Founder</span>
                            </div>
                        </div>

                        <div className="space-y-4 text-center">
                            <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
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