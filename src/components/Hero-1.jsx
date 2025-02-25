import React from "react";

const Hero1 = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] 2xl:h-[1000px] overflow-hidden">
            <img
                src="/award/hero-1.jpeg"
                alt="Award Ceremony Hero Image"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default Hero1;
