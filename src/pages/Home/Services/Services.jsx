import React from 'react';

const services = [
  {
    icon: '🚚',
    title: 'Express & Standard Delivery',
    desc: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.',
    highlight: false,
  },
  {
    icon: '🌐',
    title: 'Nationwide Delivery',
    desc: 'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.',
    highlight: false,
  },
  {
    icon: '📋',
    title: 'Fulfillment Solution',
    desc: 'We also offer customized service with inventory management support, online order processing, packaging, and after sales support.',
    highlight: false,
  },
  {
    icon: '💰',
    title: 'Cash on Home Delivery',
    desc: '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.',
    highlight: false,
  },
  {
    icon: '🏢',
    title: 'Corporate Service / Contract In Logistics',
    desc: 'Customized corporate services which includes warehouse and inventory management support.',
    highlight: false,
  },
  {
    icon: '↩️',
    title: 'Parcel Return',
    desc: 'Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.',
    highlight: false,
  },
];

const Services = () => {
  return (
    <section className="w-full py-14 px-6">
      <div className="max-w-7xl mx-auto bg-[#022425] rounded-3xl p-8 md:p-14">
        <div className="text-center mb-12 max-w-xl mx-auto">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-3">Our Services</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300 cursor-pointer
                ${s.highlight
                  ? 'bg-[#b3d34f] text-[#002021] shadow-xl hover:scale-[1.02]'
                  : 'bg-white text-[#002021] hover:bg-[#b3d34f]'
                }`}
            >
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-2xl mb-6">
                {s.icon}
              </div>
              <h3 className="font-bold text-lg mb-3">{s.title}</h3>
              <p className="text-sm opacity-75 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
