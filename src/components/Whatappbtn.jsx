import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/your-number"
            target="_blank"
           
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
            style={{ width: "30px", height: "30px" }}
        >
            <FaWhatsapp size={30} />
        </a>
    );
};

export default WhatsAppButton;
