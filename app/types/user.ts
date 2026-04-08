export interface Profile {
  id: string;
  full_name?: string;
  phone?: string;
  is_volunteer: boolean;
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  profile?: Profile;
}
