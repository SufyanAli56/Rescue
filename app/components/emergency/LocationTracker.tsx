"use client";

import { useEffect, useState } from "react";
import { Coordinates } from "@/app/lib/geolocation";

interface LocationTrackerProps {
  onLocationUpdate: (coords: Coordinates) => void;
}

export default function LocationTracker({ onLocationUpdate }: LocationTrackerProps) {
  const [tracking, setTracking] = useState(false);
  const [location, setLocation] = useState<Coordinates | null>(null);

  useEffect(() => {
    if (!tracking) return;

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setLocation(coords);
        onLocationUpdate(coords);
      },
      (error) => {
        console.error("Location tracking error:", error);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [tracking, onLocationUpdate]);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900">📍 Location Tracking</h3>
        <button
          onClick={() => setTracking(!tracking)}
          className={`
            px-4 py-2 rounded-lg text-sm font-medium transition
            ${tracking 
              ? "bg-red-100 text-red-700 hover:bg-red-200" 
              : "bg-green-100 text-green-700 hover:bg-green-200"
            }
          `}
        >
          {tracking ? "Stop" : "Start"}
        </button>
      </div>

      {location && (
        <div className="text-sm text-gray-600">
          <p>Lat: {location.latitude.toFixed(6)}</p>
          <p>Lng: {location.longitude.toFixed(6)}</p>
        </div>
      )}
    </div>
  );
}
