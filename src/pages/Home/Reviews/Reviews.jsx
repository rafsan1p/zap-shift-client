import React, { use } from 'react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ReviewCard from './ReviewCard';
import customerTop from '../../../assets/customer-top.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);

    return (
        <section className="w-full py-14 px-4 sm:px-6">
            <div className="text-center mb-10">
                <img src={customerTop} alt="customers" className="h-20 mx-auto mb-4 object-contain" />
                <h3 className="text-[#03373D] font-extrabold text-2xl sm:text-3xl md:text-[40px] leading-tight mb-3">
                    What our customers are sayings
                </h3>
                <p className="text-[#606060] text-sm sm:text-base max-w-lg mx-auto">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>
            </div>

            <div className="max-w-6xl mx-auto">
                <Swiper
                    loop={true}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    spaceBetween={40}
                    coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2, slideShadows: false }}
                    autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    pagination={{ clickable: true, el: '.custom-pagination' }}
                    navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    breakpoints={{
                        0:    { slidesPerView: 1 },
                        640:  { slidesPerView: 1 },
                        768:  { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-4"
                >
                    {reviews.map(review => (
                        <SwiperSlide key={review.id} className="py-6 px-2">
                            <ReviewCard review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="custom-pagination flex justify-center gap-2 mt-8 mb-2"></div>

                <div className="flex justify-center items-center gap-4 mt-4">
                    <button className="custom-prev w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-100 transition">
                        <FaArrowLeft size={14} />
                    </button>
                    <button className="custom-next w-10 h-10 rounded-full bg-[#CAEB45] flex items-center justify-center text-gray-900 hover:bg-[#b8d93a] transition">
                        <FaArrowRight size={14} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
