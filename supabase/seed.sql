-- Seed data for testing (optional)

-- Note: In production, users will be created through Supabase Auth
-- This is just sample data structure

-- Sample volunteer profiles (you'll need real user IDs from auth.users)
-- INSERT INTO profiles (id, full_name, phone, is_volunteer, latitude, longitude, is_available)
-- VALUES 
--   ('user-uuid-1', 'Ali Khan', '+92-300-1234567', true, 31.5204, 74.3587, true),
--   ('user-uuid-2', 'Ayesha Malik', '+92-300-2345678', true, 31.4697, 74.2728, true),
--   ('user-uuid-3', 'Ahmed Raza', '+92-300-3456789', true, 31.4504, 74.3587, true);

-- Sample emergencies (for testing)
-- INSERT INTO emergencies (user_id, latitude, longitude, message, status)
-- VALUES 
--   ('user-uuid-4', 31.5204, 74.3587, 'Medical emergency - need immediate help', 'active'),
--   ('user-uuid-5', 31.4697, 74.2728, 'Car accident on main road', 'active');

-- Sample emergency responses
-- INSERT INTO emergency_responses (emergency_id, volunteer_id, status)
-- VALUES 
--   ('emergency-uuid-1', 'user-uuid-1', 'accepted'),
--   ('emergency-uuid-1', 'user-uuid-2', 'pending');
