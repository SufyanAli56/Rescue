import { supabase } from "./supabase";
import { Emergency } from "../types/emergency";

export const subscribeToEmergencies = (
  callback: (emergency: Emergency) => void
) => {
  const channel = supabase
    .channel("emergencies")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "emergencies",
      },
      (payload) => {
        callback(payload.new as Emergency);
      }
    )
    .subscribe();

  return channel;
};

export const subscribeToEmergencyUpdates = (
  emergencyId: string,
  callback: (emergency: Emergency) => void
) => {
  const channel = supabase
    .channel(`emergency-${emergencyId}`)
    .on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "emergencies",
        filter: `id=eq.${emergencyId}`,
      },
      (payload) => {
        callback(payload.new as Emergency);
      }
    )
    .subscribe();

  return channel;
};

export const unsubscribe = (channel: any) => {
  supabase.removeChannel(channel);
};
