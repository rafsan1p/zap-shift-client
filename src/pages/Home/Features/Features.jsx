import React from 'react';
import liveTracking from '../../../assets/live-tracking.png';
import safeDelivery from '../../../assets/customer-top.png';
import callCenter from '../../../assets/safe-delivery.png';

const features = [
    { img: liveTracking, title: 'Live Parcel Tracking', desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind." },
    { img: safeDelivery, title: '100% Safe Delivery', desc: 'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.' },
    { img: callCenter, title: '24/7 Call Center Support', desc: 'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.' },
];

const Features = () => {
    return (
        <section className="w-full py-10 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="border-t border-dashed border-gray-300 mb-10"></div>
                <div className="flex flex-col gap-5">
                {features.map((f, i) => (
                    <div key={i} className="bg-white rounded-2xl flex items-center gap-6 px-8 py-6 shadow-sm">
                        <div className="w-44 h-32 shrink-0 flex items-center justify-center border-r border-dashed border-gray-200 pr-6">
                            <img src={f.img} alt={f.title} className="h-28 w-auto object-contain" />
                        </div>
                        <div>
                            <h3 className="font-extrabold text-[#002021] text-2xl mb-2">{f.title}</h3>
                            <p className="text-gray-500 text-base leading-relaxed">{f.desc}</p>
                        </div>
                    </div>
                ))}
                </div>
                <div className="border-t border-dashed border-gray-300 mt-10"></div>
            </div>
        </section>
    );
};

export default Features;
