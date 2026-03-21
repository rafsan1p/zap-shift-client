import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

const messages = [
  "Getting your parcels ready",
  "Loading delivery routes",
  "Almost there",
  "Preparing your dashboard",
];

export default function Loading() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setMsgIndex((i) => (i + 1) % messages.length);
        setFade(true);
      }, 350);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#03373D]">
      {/* Ambient orbs */}
      <div className="absolute w-96 h-96 rounded-full bg-[#CAEB45]/10 blur-3xl top-10 left-10 animate-pulse" />
      <div className="absolute w-72 h-72 rounded-full bg-[#CAEB45]/5 blur-3xl bottom-10 right-10 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#CAEB45] border-r-[#CAEB45]/30 animate-spin" style={{ animationDuration: '1.2s' }} />
          {/* Middle ring */}
          <div className="absolute inset-3 rounded-full border-2 border-transparent border-b-[#CAEB45]/70 border-l-[#CAEB45]/20 animate-spin" style={{ animationDuration: '1.8s', animationDirection: 'reverse' }} />
          {/* Logo in center */}
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <img src={logo} alt="ZapShift" className="w-7 h-7 object-contain" />
          </div>
        </div>

        {/* Brand name */}
        <p className="text-white font-extrabold text-xl tracking-wide">ZapShift</p>

        {/* Animated message */}
        <p
          className="text-white/50 text-sm font-light tracking-wide transition-all duration-350"
          style={{ opacity: fade ? 1 : 0, transform: fade ? 'translateY(0)' : 'translateY(5px)' }}
        >
          {messages[msgIndex]}
          <span className="inline-flex ml-1 gap-0.5">
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="inline-block text-[#CAEB45] font-bold animate-bounce"
                style={{ animationDelay: `${i * 0.2}s`, animationDuration: '1s' }}
              >.</span>
            ))}
          </span>
        </p>

        {/* Progress bar */}
        <div className="w-40 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-[#CAEB45] rounded-full loading-progress" />
        </div>
      </div>

      <style>{`
        .loading-progress {
          animation: zapProgress 3s ease-in-out infinite;
        }
        @keyframes zapProgress {
          0%   { width: 0%; opacity: 1; }
          70%  { width: 85%; opacity: 1; }
          90%  { width: 95%; opacity: 0.7; }
          100% { width: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
