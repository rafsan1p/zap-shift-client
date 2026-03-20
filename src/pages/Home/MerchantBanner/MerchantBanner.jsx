import React from 'react';
import bg from '../../../assets/be-a-merchant-bg.png';
import locationImg from '../../../assets/location-merchant.png';

const MerchantBanner = () => {
    return (
        <section className="w-full px-4 sm:px-6 py-10">
            <div
                className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden flex items-center"
                style={{ backgroundColor: '#022e2e', backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center top', minHeight: '260px' }}
            >
                {/* Text content */}
                <div className="relative z-10 px-6 sm:px-10 md:px-14 py-10 w-full md:max-w-[55%]">
                    <h2 className="text-white font-extrabold text-2xl sm:text-3xl md:text-[40px] leading-tight mb-4">
                        Merchant and Customer Satisfaction is Our First Priority
                    </h2>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-7">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. ZapShift courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <div className="flex flex-row flex-wrap gap-3">
                        <button className="bg-[#CAEB45] text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#b8d93a] transition whitespace-nowrap">
                            Become a Merchant
                        </button>
                        <button className="text-white font-semibold text-sm px-5 py-2.5 rounded-full border border-white/40 hover:bg-white/10 transition whitespace-nowrap">
                            Earn with ZapShift Courier
                        </button>
                    </div>
                </div>

                {/* Illustration — only on md+ */}
                <div className="hidden md:block absolute right-8 bottom-8 h-[80%] pointer-events-none">
                    <img
                        src={locationImg}
                        alt="merchant illustration"
                        className="h-full w-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default MerchantBanner;
