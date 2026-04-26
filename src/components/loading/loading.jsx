import logo from "../../assets/logo.png";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#03373D]">
      <div className="relative w-20 h-20 flex items-center justify-center mb-4">
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#CAEB45] animate-spin" />
        <img src={logo} alt="ZapShift" className="w-10 h-10 object-contain" />
      </div>
      <p className="text-white font-extrabold text-lg tracking-wide">ZapShift</p>
      <p className="text-white/40 text-xs mt-1">Loading...</p>
    </div>
  );
}
