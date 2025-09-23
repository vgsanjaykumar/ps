import FadeInSection from "./FadeIn";


export default function Modelshoot() {
    return (
        <section className="max-w-6xl mx-auto px-6 lg:px-0 py-16 " id="Serives">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* Left Images */}
                <FadeInSection>
                    <div className="relative flex-1 flex justify-center">
                        {/* Big Image */}
                        <img
                            src="/model/riya/logo/05.webp"
                            alt="Outdoor Couple"
                            className="w-[400px]  rounded-lg shadow-lg"
                        />
                        {/* Floating Small Image */}
                        <img
                            src="/model/riya/logo/08.webp"
                            alt="Indoor Couple"
                            className="w-60 rounded-lg shadow-lg absolute -top-8 -left-10 hidden sm:block"
                        />
                    </div>
                </FadeInSection>

                {/* Right Text */}
                <FadeInSection>
                    <div className="flex-1 text-center md:text-left">
                        <span className="text-gray-500 font-medium text-sm">Our Service</span>
                        <div className="w-16 h-[2px] bg-yellow-500 my-2 mx-auto md:mx-0"></div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Portaits Shoot
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
                            Capture the essence of your love story with our beautifully curated couple shoots . Whether it’s a quiet moment or a grand celebration, we craft timeless images that reflect your unique bond.
                        </p>

                        <button className="bg-black text-white px-6 py-2 rounded-md shadow hover:bg-gray-800 transition">
                            View More
                        </button>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
}
