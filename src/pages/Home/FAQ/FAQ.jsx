import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
    {
        q: 'How does ZapShift parcel delivery work?',
        a: 'Simply book a pickup online, our rider collects your parcel, and we deliver it to the destination with real-time tracking. From pick-up to drop-off, you stay updated every step of the way.',
    },
    {
        q: 'Is it suitable for both personal and business shipments?',
        a: 'Yes! ZapShift handles everything from small personal packages to large-scale business shipments with dedicated corporate plans available.',
    },
    {
        q: 'How does real-time tracking work?',
        a: "Once your parcel is picked up, you receive a tracking link via SMS or email. You can monitor your shipment's live location and status updates until delivery.",
    },
    {
        q: 'Does ZapShift support cash on delivery?',
        a: 'Absolutely. We offer 100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product and timely cash remittance.',
    },
    {
        q: 'How will I be notified about my delivery status?',
        a: 'You will receive SMS and email notifications at every key stage — pickup, in-transit, out for delivery, and delivered.',
    },
];

const FAQ = () => {
    const [open, setOpen] = useState(0);

    return (
        <section className="w-full py-10 sm:py-14 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8 sm:mb-10">
                    <h2 className="text-[#03373D] font-extrabold text-xl sm:text-3xl md:text-[40px] leading-tight mb-3">
                        Frequently Asked Question (FAQ)
                    </h2>
                    <p className="text-[#606060] text-sm sm:text-base max-w-lg mx-auto">
                        Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            onClick={() => setOpen(open === i ? null : i)}
                            className={`rounded-xl border px-5 sm:px-6 py-4 cursor-pointer transition-all ${open === i ? 'border-[#a0c4c4] bg-[#e8f5f5]' : 'border-gray-200 bg-white'}`}
                        >
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-[#002021] text-sm sm:text-base pr-4">{faq.q}</p>
                                {open === i
                                    ? <FaChevronUp className="text-[#002021] shrink-0" />
                                    : <FaChevronDown className="text-gray-400 shrink-0" />
                                }
                            </div>
                            {open === i && (
                                <p className="text-gray-600 text-sm leading-relaxed mt-3">{faq.a}</p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <div className="relative flex items-center">
                        <button className="bg-[#CAEB45] text-gray-900 font-semibold px-8 py-3 pr-14 rounded-full hover:bg-[#b8d93a] transition text-sm sm:text-base">
                            See More FAQ's
                        </button>
                        <span className="absolute -right-5 w-11 h-11 bg-gray-900 text-[#CAEB45] rounded-full flex items-center justify-center text-base font-bold shadow-md">
                            ↗
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
