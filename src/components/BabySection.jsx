import React from "react";
import wedingmagzine from "/Baby/POST.webp";
import FadeInSection from "./FadeIn";
import { FaDeaf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Babysection = () => {
    const navigate =useNavigate()
    return (
        <section className="max-w-6xl mx-auto px-6 lg:px-0 py-12 flex flex-col lg:flex-row items-center gap-8">
            <FadeInSection>
                <div className="flex-1">
                    <img
                        src={wedingmagzine}
                        alt="Wedding Magzine"
                        className="w-[1000px] h-[200px] object-cover rounded-lg shadow-lg"
                    />
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-2">Our Service</p>
                    <div className="w-16 h-0.5 bg-[#48B3AF] mb-4"></div>
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                        Baby Birthday Shoot
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Capture the essence of your love story with our beautifully curated couple shoots.
                        Whether it’s a quiet moment or a grand celebration, we craft timeless images that
                        reflect your unique bond.
                    </p>
                    <button 
                        onClick={() => navigate("/other/baby-photography")}
                        className="bg-[#48B3AF] text-white px-6 py-2 rounded-md shadow hover:bg-[#097874] transition duration-100 delay-100">
                        View More
                    </button>
                </div>
            </FadeInSection>


        </section>
    );
};

export default Babysection;
