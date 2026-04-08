export interface Emergency {
  id: string;
  user_id: string;
  latitude: number;
  longitude: number;
  message?: string;
  status: "active" | "resolved" | "cancelled";
  created_at: string;
  resolved_at?: string;
}

export interface EmergencyResponse {
  id: string;
  emergency_id: string;
  volunteer_id: string;
  status: "pending" | "accepted" | "declined";
  created_at: string;
}

export interface CreateEmergencyInput {
  latitude: number;
  longitude: number;
  message?: string;
}
