import React, { useEffect, useState } from "react";

const phrases = [
  "Extracting purity...",
  "Pressing the goodness...",
  "Crushing fresh...",
];

const LoadingLogo = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-[#fff9f0]">
      <div className="flex flex-col items-center">
        {/* Outer golden spinner ring */}
        <div
          className="w-24 h-24 rounded-full border-8 border-yellow-400 border-t-transparent animate-spin"
          style={{ borderTopColor: "transparent" }}
        ></div>

        {/* Phrase showing one by one */}
        <div className="mt-8 text-2xl font-semibold text-yellow-700 tracking-wide select-none min-h-[2.5rem]">
          {phrases[index]}
        </div>

        {/* Custom keyframes */}
        <style>{`
          @keyframes droplet-rotate {
            0% { transform: rotate(0deg) translateX(0); }
            50% { transform: rotate(15deg) translateX(4px); }
            100% { transform: rotate(0deg) translateX(0); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default LoadingLogo;
