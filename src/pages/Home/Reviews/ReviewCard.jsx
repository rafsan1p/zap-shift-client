import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import customerImg from '../../../assets/customer-top.png';

const ReviewCard = ({ review }) => {
    const { userName, role, review: testimonial, user_photoURL } = review;

    return (
        <div className="bg-white rounded-2xl p-7 flex flex-col gap-5 h-full shadow-sm">
            <FaQuoteLeft className="text-3xl text-[#a0c4c4]" />
            <p className="text-gray-600 text-base leading-relaxed flex-1">{testimonial}</p>
            <div className="border-t border-dashed border-[#a0c4c4]"></div>
            <div className="flex items-center gap-4">
                <img
                    src={user_photoURL || customerImg}
                    alt={userName}
                    onError={e => { e.target.src = customerImg; }}
                    className="w-12 h-12 rounded-full object-cover bg-[#022e2e]"
                />
                <div>
                    <p className="font-extrabold text-[#002021] text-base">{userName}</p>
                    <p className="text-gray-400 text-sm">{role}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
