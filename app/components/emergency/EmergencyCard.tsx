"use client";

import { Emergency } from "@/app/types/emergency";
import { formatDateTime, getTimeAgo } from "@/app/utils/formatters";

interface EmergencyCardProps {
  emergency: Emergency;
  distance?: number;
  onRespond?: () => void;
}

export default function EmergencyCard({ 
  emergency, 
  distance,
  onRespond 
}: EmergencyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-red-100 p-6 hover:shadow-lg transition">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">🚨</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Emergency Alert</h3>
            <p className="text-sm text-gray-500">{getTimeAgo(emergency.created_at)}</p>
          </div>
        </div>
        
        <span className={`
          px-3 py-1 rounded-full text-xs font-medium
          ${emergency.status === "active" ? "bg-red-100 text-red-700" : ""}
          ${emergency.status === "resolved" ? "bg-green-100 text-green-700" : ""}
          ${emergency.status === "cancelled" ? "bg-gray-100 text-gray-700" : ""}
        `}>
          {emergency.status}
        </span>
      </div>

      {emergency.message && (
        <p className="text-gray-700 mb-4">{emergency.message}</p>
      )}

      <div className="flex items-center justify-between text-sm">
        <div className="text-gray-600">
          📍 {emergency.latitude.toFixed(4)}, {emergency.longitude.toFixed(4)}
        </div>
        
        {distance && (
          <div className="text-gray-600 font-medium">
            {distance < 1 ? `${Math.round(distance * 1000)}m` : `${distance.toFixed(1)}km`} away
          </div>
        )}
      </div>

      {onRespond && emergency.status === "active" && (
        <button
          onClick={onRespond}
          className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
        >
          Respond to Emergency
        </button>
      )}
    </div>
  );
}
