import { createClient } from "@supabase/supabase-js";

// Use dummy values if environment variables are not set (for demo mode)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dummy.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "dummy-key-for-demo-mode";

export const supabase = createClient(supabaseUrl, supabaseKey);