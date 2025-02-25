import React from 'react';

const About = () => {
    return (
        <section className=" py-36 bg-white " id='About'>
            <div className="max-w-7xl mx-auto  ">
               
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
                    <h3 className="text-lg text-gray-600 mt-2">“FREEZE YOUR MEMORABLE MOMENTS”</h3>
                    <h3 className="text-lg text-gray-600 mt-1">Our goal is to make your lifetime events unforgettable.</h3>
                </div>

                {/* Description */}
                <div className="text-gray-400 leading-relaxed text-[12px] space-y-5">
                    <p>
                        <strong className="text-gray-500">Melody Photography</strong> is one of the best wedding photography services in Karaikudi.
                        We are a team of passionate and expert wedding photographers & cinematographers dedicated to capturing and preserving the
                        most precious moments of your life. With over twenty years of experience and cutting-edge technology, we bring your wedding
                        and special occasions to life in the most creative and enthusiastic way.
                    </p>

                    <p>
                        At <strong className="text-gray-500">Melody Photography</strong>, we combine technology and artistic creativity to provide
                        industry-leading photography services. Our commitment to excellence ensures that every cherished moment is perfectly preserved,
                        earning us the trust and satisfaction of our valued clients.
                    </p>

                    <p>
                        We take pride in our <strong className="text-gray-500">professionalism, high-standard service, aesthetic sense,
                            and flexibility</strong>. Our ultimate goal is to deliver compelling, honest, and timeless coverage of your wedding day.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
