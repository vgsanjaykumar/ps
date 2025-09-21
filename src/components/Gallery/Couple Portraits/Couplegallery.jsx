import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CoupleProtraitsDataset } from "../../data.js";

export default function CoupleGallery() {
    const initialCount = 6;
    const loadMoreCount = 6;
    const [visibleCount, setVisibleCount] = useState(initialCount);

    const handleViewMore = () =>
        setVisibleCount((prev) => prev + loadMoreCount);


    const handleViewLess = () => setVisibleCount(initialCount);
    const slugify = (name) =>
        name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");


    return (
        <div className="relative bg-white py-24 px-6 md:px-6 lg:px-32">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                Couple Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {CoupleProtraitsDataset.slice(0, visibleCount).map((photo) => (
                    <Link
                        key={photo.id}
                        to={`/SeparateView/${slugify(photo.name)}`}
                        state={{ couple: photo }} // still passing state
                    >
                        <div className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer">
                            <img
                                src={photo.image}
                                alt={photo.name}
                                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end p-4">
                                <h3 className="text-white text-lg font-semibold">{photo.name}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex justify-end mt-8 gap-4">
                {visibleCount < CoupleProtraitsDataset.length && (
                    <button
                        onClick={handleViewMore}
                        className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
                    >
                        View More
                    </button>
                )}

                {visibleCount > initialCount && (
                    <button
                        onClick={handleViewLess}
                        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition"
                    >
                        View Less
                    </button>
                )}
            </div>
        </div>
    );
}
