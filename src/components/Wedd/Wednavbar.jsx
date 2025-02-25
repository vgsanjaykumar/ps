import React, { useState } from "react";

const WeddingNavbar = () => {
    const [active, setActive] = useState("All");

    const categories = [
        "All",
        "Outdoor",
        "Muslim",
        "Christian",
        "Brahmin",
        "Telugu",
        "Hindu",
        "Engagement",
        "Malayali",
        "Punjabi",
    ];

    return (
        <div className="w-full bg-white shadow-md">
            <div className="flex justify-center space-x-16 py-4 text-gray-700">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActive(category)}
                        className={`text-lg font-medium ${active === category ? "text-pink-500 font-semibold" : "hover:text-gray-900"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default WeddingNavbar;
