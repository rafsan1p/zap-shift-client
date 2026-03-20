import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import amazon from '../../../assets/brands/amazon.png'
import amazon_vector from '../../../assets/brands/amazon_vector.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import start_people from '../../../assets/brands/start_people.png'

const brandLogos = [casio, amazon, moonstar, star, start_people, randstad, amazon_vector];

const Brands = () => {
    return (
        <section className="w-full py-10 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-[#002021] font-bold text-xl mb-8">
                    We've helped thousands of sales teams
                </h2>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={24}
                    grabCursor={true}
                    loop={true}
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    breakpoints={{
                        480: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 6 },
                    }}
                >
                    {brandLogos.map((logo, i) => (
                        <SwiperSlide key={i} className="flex items-center justify-center">
                            <img src={logo} alt={`brand-${i}`} className="h-8 object-contain mx-auto" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Brands;
