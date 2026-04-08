"use client";

import { useEffect } from "react";
import { subscribeToEmergencies, unsubscribe } from "../lib/realtime";
import { Emergency } from "../types/emergency";

export const useRealtimeSubscription = (
  onNewEmergency: (emergency: Emergency) => void
) => {
  useEffect(() => {
    const channel = subscribeToEmergencies(onNewEmergency);

    return () => {
      unsubscribe(channel);
    };
  }, [onNewEmergency]);
};
