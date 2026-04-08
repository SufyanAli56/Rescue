"use client";

import { Emergency } from "@/app/types/emergency";
import { getTimeAgo } from "@/app/utils/formatters";

interface MarkerPopupProps {
  emergency: Emergency;
}

export default function MarkerPopup({ emergency }: MarkerPopupProps) {
  return (
    <div className="p-2">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">🚨</span>
        <h4 className="font-semibold">Emergency Alert</h4>
      </div>
      
      {emergency.message && (
        <p className="text-sm text-gray-700 mb-2">{emergency.message}</p>
      )}
      
      <p className="text-xs text-gray-500">{getTimeAgo(emergency.created_at)}</p>
      
      <button className="mt-2 w-full bg-red-600 text-white text-sm py-1 rounded hover:bg-red-700">
        Respond
      </button>
    </div>
  );
}
