import React from "react";

const weddingPhotos = [
    { id: 1, name: "Varuna Thapar + Nikhil Sayli", image: "/award/cad00.jpeg" },
    { id: 2, name: "Janani + Arvind", image: "/award/cad03.jpeg" },
    { id: 3, name: "Karthika + Sachin Kumar", image: "/award/cad04.jpeg" },
    { id: 4, name: "Alekhya + Sai Teja", image: "/award/cad05.jpeg" },
    { id: 5, name: "Lavanya Yaddanapudi + Sreevathaan", image: "/award/cad06.jpeg" },
    { id: 6, name: "Varuna Thapar + Nikhil Sayli", image: "/award/cad07.jpeg" },
    { id: 7, name: "Janani + Arvind", image: "/award/cad08.jpeg" },
    { id: 8, name: "Karthika + Sachin Kumar", image: "/award/cad09.jpeg" },
    { id: 9, name: "Alekhya + Sai Teja", image: "/award/cad04.jpeg" },


];

export default function CandidGallery() {
    return (
        <div className="relative bg-white py-24 px-6 md:px-6 lg:px-32">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Candit Moment Gallery
            </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {weddingPhotos.map((photo) => (
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



        </div>
    );
}
