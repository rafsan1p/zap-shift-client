import React from 'react';

const steps = [
  { icon: '📦', title: 'Booking Pick & Drop', desc: 'From personal packages to business shipments — we deliver on time, every time.' },
  { icon: '💵', title: 'Cash On Delivery', desc: 'From personal packages to business shipments — we deliver on time, every time.' },
  { icon: '🏢', title: 'Delivery Hub', desc: 'From personal packages to business shipments — we deliver on time, every time.' },
  { icon: '🏭', title: 'Booking SME & Corporate', desc: 'From personal packages to business shipments — we deliver on time, every time.' },
];

const HowItWorks = () => {
  return (
    <section className="w-full py-14 px-6 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#002021] mb-2">How it Works</h2>
        <div className="h-1 w-16 bg-[#002021] rounded-full mb-10"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white p-7 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4 hover:bg-[#b3d34f] transition-colors duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#e8f5e9] flex items-center justify-center text-2xl group-hover:bg-white transition-colors">
                {step.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#002021] text-base mb-2 group-hover:text-[#002021]">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-[#002021]/80">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
