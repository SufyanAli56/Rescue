"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { Emergency } from "../types/emergency";

export const useEmergencyAlerts = () => {
  const [emergencies, setEmergencies] = useState<Emergency[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmergencies();
  }, []);

  const fetchEmergencies = async () => {
    try {
      const { data, error } = await supabase
        .from("emergencies")
        .select("*")
        .eq("status", "active")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setEmergencies(data || []);
    } catch (error) {
      console.error("Error fetching emergencies:", error);
    } finally {
      setLoading(false);
    }
  };

  const createEmergency = async (
    latitude: number,
    longitude: number,
    message?: string
  ) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) throw new Error("Not authenticated");

      const { data, error } = await supabase
        .from("emergencies")
        .insert({
          user_id: user.id,
          latitude,
          longitude,
          message,
          status: "active",
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error creating emergency:", error);
      throw error;
    }
  };

  return { emergencies, loading, createEmergency, refetch: fetchEmergencies };
};
