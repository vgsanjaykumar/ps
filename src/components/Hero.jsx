import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import { FreeMode, Navigation, Thumbs, EffectFade } from "swiper/modules";
import { Data } from "./data";

export default function Hero() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="h-screen w-screen bg-black relative flex">
      {/* Main Swiper (Half-Screen Images) */}
      <div className="bg-black opacity-20 absolute w-screen h-screen z-40">

      </div>
      <div className="h-full w-full">
        <Swiper
          loop={true}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          effect={"fade"}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, EffectFade]}
          style={{ height: "100%", width: "100%" }} // ✅ Explicitly setting height & width
        >
          {Data.map((item, index) => (
            <SwiperSlide key={index} style={{ height: "100%", width: "100%" }}>
              <img
                src={item}
                className="h-full w-full object-cover"
                alt={`slide-${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Swiper (Right-Side Column) */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-50">
        <div className="flex flex-col gap-4 items-center">
          {/* Previous Button */}
          <button className="prev-btn bg-gray-800 text-white p-2 rounded-full">
            ▲
          </button>

          {/* Thumbnail Swiper */}
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={70}
            slidesPerView={6}
            direction="vertical"
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className=""
          >
            {Data.map((item, index) => (
              <SwiperSlide key={index} className="cursor-pointer">
                <img
                  src={item}
                  className="h-[60px] w-[100px] object-cover rounded-lg"
                  alt={`thumb-${index}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Next Button */}
          <button className="next-btn bg-gray-800 text-white p-2 rounded-full mt-2">
            ▼
          </button>
        </div>
      </div>
    </div>
  );
}
