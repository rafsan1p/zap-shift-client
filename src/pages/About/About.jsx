import React, { useState } from 'react';

const tabs = ['Story', 'Mission', 'Success', 'Team & Others'];

const content = {
    Story: [
        'We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it\'s a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.',
        'We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it\'s a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.',
        'We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it\'s a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.',
    ],
    Mission: [
        'Our mission is to revolutionize last-mile delivery across Bangladesh by leveraging technology, building a reliable rider network, and ensuring every parcel reaches its destination safely and on time.',
        'We are committed to empowering small businesses and e-commerce merchants with affordable, scalable logistics solutions that grow with them.',
        'Through innovation and dedication, we aim to become the most trusted delivery partner in South Asia — connecting people, businesses, and communities.',
    ],
    Success: [
        'Since our founding, we have delivered over 5 million parcels across all 64 districts of Bangladesh, maintaining a 98% on-time delivery rate.',
        'We have partnered with over 10,000 merchants and businesses, helping them scale their operations with reliable logistics support.',
        'Our rider network has grown to 5,000+ active delivery agents, creating meaningful employment and economic opportunity across the country.',
    ],
    'Team & Others': [
        'Our team is made up of passionate logistics experts, engineers, and customer success professionals dedicated to making delivery seamless.',
        'We believe in a culture of ownership, transparency, and continuous improvement — every team member plays a vital role in our mission.',
        'Beyond our core team, we work with a growing network of partners, vendors, and community stakeholders to build a better delivery ecosystem.',
    ],
};

const About = () => {
    const [activeTab, setActiveTab] = useState('Story');

    return (
        <div className="bg-[#eef2f2] min-h-screen px-4 sm:px-8 pt-30">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 sm:p-10 shadow-sm">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002021] mb-2">About Us</h1>
                <p className="text-gray-500 text-sm sm:text-base max-w-sm mb-8 leading-relaxed">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>

                {/* Tabs */}
                <div className="flex flex-wrap gap-6 border-b border-gray-100 mb-8">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-3 text-sm sm:text-base font-semibold transition border-b-2 -mb-px ${
                                activeTab === tab
                                    ? 'text-[#CAEB45] border-[#CAEB45]'
                                    : 'text-gray-400 border-transparent hover:text-gray-600'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-5">
                    {content[activeTab].map((para, i) => (
                        <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed">{para}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
