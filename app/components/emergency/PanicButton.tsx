"use client";

import { useState } from "react";

interface PanicButtonProps {
  onClick: () => void;
  loading?: boolean;
}

export default function PanicButton({ onClick, loading }: PanicButtonProps) {
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    setPressed(true);
    onClick();
    setTimeout(() => setPressed(false), 300);
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`
        relative w-48 h-48 rounded-full 
        bg-gradient-to-br from-red-500 to-red-700
        text-white font-bold text-xl
        shadow-2xl hover:shadow-red-500/50
        transition-all duration-200
        ${pressed ? "scale-95" : "scale-100 hover:scale-105"}
        ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        disabled:opacity-50
      `}
    >
      <div className="flex flex-col items-center justify-center">
        <span className="text-5xl mb-2">🚨</span>
        <span>{loading ? "Sending..." : "EMERGENCY"}</span>
      </div>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20"></div>
    </button>
  );
}
