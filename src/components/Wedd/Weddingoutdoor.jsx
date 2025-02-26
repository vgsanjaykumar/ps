import React from "react";
import weddingImage from "/award/img07.jpeg";

export default function Weddingoutdoor() {
    return (
        <section className="bg-white py-10">
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto p-6">
                <div className="md:w-1/2">
                    <h2 className="text-lg md:text-lg font-semibold text-gray-900">
                        In the arms of nature, love finds its truest expression.
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm">
                        Imagine a magical wedding... under the warm glow of the setting sun,
                        surrounded by breathtaking scenery. Now, witness your love story, as
                        the birds sing their blessings.
                    </p>
                    <p className="mt-4 text-gray-600 text-sm">
                        Yes, outdoor weddings offer a beautiful ceremonial stage that enhances
                        the romance and joy of your special day. We understand the
                        significance of these timeless traditions and the importance of
                        preserving them for future generations.
                    </p>
                    <h2 className="text-lg md:text-lg font-semibold text-gray-900">
                        In the arms of nature, love finds its truest expression.
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm">
                        Imagine a magical wedding... under the warm glow of the setting sun,
                        surrounded by breathtaking scenery. Now, witness your love story, as
                        the birds sing their blessings.
                    </p>
                    <p className="mt-4 text-gray-600 text-sm">
                        Yes, outdoor weddings offer a beautiful ceremonial stage that enhances
                        the romance and joy of your special day. We understand the
                        significance of these timeless traditions and the importance of
                        preserving them for future generations.
                    </p>

                    <h3 className="mt-6 text-lg font-semibold text-gray-900">
                        Why choose our service for your outdoor wedding photography?
                    </h3>
                    <p className=" text-gray-600 text-sm">
                        A keen eye for detail is what our skilled photographers are adept at;
                        every natural element will be captured to create images that evoke
                        emotion and tell your unique love story.
                    </p>
                </div>

               
                <div className="md:w-1/2">
                    <img
                        src={weddingImage}
                        alt="Outdoor Wedding"
                        className="w-full h-auto rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>
        
    );
}
