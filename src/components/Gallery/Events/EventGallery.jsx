
import React, { useState } from "react";
import data from "../../Data/Event.json"

export default function EventGallery() {
    const Eventdataset=data.EventDataset
    const initialRows = 3; // Show 3 rows initially
    const rowsPerClick = 6; // Load 6 more rows each time
    const columns = 3; // Number of columns (adjust based on screen size)

    const [visibleCount, setVisibleCount] = useState(initialRows * columns);

    const handleViewMore = () => {
        setVisibleCount((prevCount) => prevCount + rowsPerClick * columns);
    };

    const handleViewLess = () => {
        setVisibleCount(initialRows * columns);
    };

    return (
        <div className="relative bg-white py-24 px-6 md:px-6 lg:px-32">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                Events Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Eventdataset.slice(0, visibleCount).map((photo) => (
                    <div key={photo.id} className="relative group overflow-hidden rounded-xl shadow-md">
                        <img
                            src={photo.image}
                            alt={photo.name}
                            className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end p-4">
                            <h3 className="text-white text-lg font-semibold">{photo.name}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-8 gap-4">
                {visibleCount < Eventdataset.length && (
                    <button
                        onClick={handleViewMore}
                        className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
                    >
                        View More
                    </button>
                )}

                {visibleCount > initialRows * columns && (
                    <div>
                        <button
                            onClick={handleViewLess}
                            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition"
                        >
                            View Less
                        </button>
                    </div>

                )}
            </div>
        </div>
    );
}
