import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';




// import required modules
import { FreeMode, Navigation, Thumbs, EffectFade } from 'swiper/modules';
import { Data } from './data';

export default function Hero() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div className='relative h-[50%] object-cover '>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    effect={'fade'}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                    className="mySwiper2"
                >
                    {Data.map(item => (
                        <SwiperSlide className='hero-swiper'>
                            <img src={item} className='object-cover h-screen w-screen' />
                        </SwiperSlide>
                    ))}

                </Swiper>

                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {Data.map(item => (
                        <SwiperSlide>
                            <img src={item} className='object-cover' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </>
    );
}