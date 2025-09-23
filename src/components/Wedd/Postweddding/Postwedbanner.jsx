import weddingImage from "/HomePage Cover/12.jpg";
import { motion } from "framer-motion";

export default function Candidbanner() {
    return (
        <div className="font-sans">
            <motion.div
                className="relative h-[500px] md:h-[400px] lg:h-[300px] w-full rounded-b-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                <img
                    src={weddingImage}
                    alt="Wedding Photography"
                    className="w-full h-[500px] md:h-[400px] lg:h-[300px] object-cover rounded-b-2xl"
                />

                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4 md:p-8 text-white">
                    <motion.h1
                        className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center md:text-left"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Best Post Wedding Gallery
                    </motion.h1>
                </div>
            </motion.div>
        </div>
    );
}
