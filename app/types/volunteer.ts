export interface Volunteer {
  id: string;
  full_name: string;
  phone?: string;
  latitude?: number;
  longitude?: number;
  is_available: boolean;
  created_at: string;
}

export interface VolunteerNotification {
  volunteer_id: string;
  emergency_id: string;
  distance: number;
  sent_at: string;
}
