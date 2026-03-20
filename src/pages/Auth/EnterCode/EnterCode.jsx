import React, { useRef } from 'react';
import { useNavigate } from 'react-router';

const EnterCode = () => {
    const inputs = useRef([]);
    const navigate = useNavigate();

    const handleChange = (e, i) => {
        if (e.target.value && i < 5) inputs.current[i + 1]?.focus();
    };

    const handleKeyDown = (e, i) => {
        if (e.key === 'Backspace' && !e.target.value && i > 0) inputs.current[i - 1]?.focus();
    };

    return (
        <div className="w-full">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Enter Code</h1>
            <p className="text-gray-400 text-sm mb-8">Enter 6 digit code that we sent to your email address.</p>

            <div className="flex gap-3 mb-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <input
                        key={i}
                        ref={el => inputs.current[i] = el}
                        type="text"
                        maxLength={1}
                        onChange={e => handleChange(e, i)}
                        onKeyDown={e => handleKeyDown(e, i)}
                        className="w-11 h-11 border border-gray-200 rounded-lg text-center text-lg font-bold outline-none focus:border-[#CAEB45] transition"
                    />
                ))}
            </div>

            <button
                onClick={() => navigate('/reset-password')}
                className="w-full bg-[#CAEB45] text-gray-900 font-bold py-2.5 rounded-lg hover:bg-[#b8d93a] transition"
            >
                Verify Code
            </button>
        </div>
    );
};

export default EnterCode;
