import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from 'react-router';
import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'

const Banner = () => {
    const navigate = useNavigate();

    const overlayContent = (
        <div style={{ textAlign: 'left' }} className="hidden lg:block absolute top-[78%] left-[7%] pointer-events-none">
            <div className="pointer-events-auto">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed max-w-sm">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1.5 bg-[#2E7D32] text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#1B5E20] transition">
                        Track Your Parcel
                        <span className="bg-white text-[#2E7D32] rounded-full w-6 h-6 flex items-center justify-center text-xs">↗️</span>
                    </button>
                    <button
                        onClick={() => navigate('/rider')}
                        className="text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-full bg-white border-2 border-gray-800 hover:bg-[#2E7D32] hover:text-white hover:border-[#2E7D32] transition duration-200"
                    >
                        Be A Rider
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className='mb-7'>
            <Carousel autoPlay={true} infiniteLoop showStatus={false} showThumbs={false}>
                <div className="relative">
                    <img src={bannerImg1} />
                    {overlayContent}
                </div>
                <div className="relative">
                    <img src={bannerImg2} />
                    {overlayContent}
                </div>
                <div className="relative">
                    <img src={bannerImg3} />
                    {overlayContent}
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
