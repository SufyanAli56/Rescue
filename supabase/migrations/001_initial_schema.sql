-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create profiles table (extends auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT,
  phone TEXT,
  is_volunteer BOOLEAN DEFAULT false,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create emergencies table
CREATE TABLE emergencies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'resolved', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  resolved_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create emergency_responses table
CREATE TABLE emergency_responses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  emergency_id UUID REFERENCES emergencies(id) ON DELETE CASCADE,
  volunteer_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'declined')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(emergency_id, volunteer_id)
);

-- Create indexes for better query performance
CREATE INDEX idx_emergencies_status ON emergencies(status);
CREATE INDEX idx_emergencies_created_at ON emergencies(created_at DESC);
CREATE INDEX idx_emergencies_user_id ON emergencies(user_id);
CREATE INDEX idx_emergency_responses_emergency_id ON emergency_responses(emergency_id);
CREATE INDEX idx_emergency_responses_volunteer_id ON emergency_responses(volunteer_id);
CREATE INDEX idx_profiles_is_volunteer ON profiles(is_volunteer);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE emergencies ENABLE ROW LEVEL SECURITY;
ALTER TABLE emergency_responses ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Emergencies policies
CREATE POLICY "Emergencies are viewable by everyone"
  ON emergencies FOR SELECT
  USING (true);

CREATE POLICY "Users can create emergencies"
  ON emergencies FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own emergencies"
  ON emergencies FOR UPDATE
  USING (auth.uid() = user_id);

-- Emergency responses policies
CREATE POLICY "Emergency responses are viewable by involved parties"
  ON emergency_responses FOR SELECT
  USING (
    auth.uid() = volunteer_id OR 
    auth.uid() IN (SELECT user_id FROM emergencies WHERE id = emergency_id)
  );

CREATE POLICY "Volunteers can create responses"
  ON emergency_responses FOR INSERT
  WITH CHECK (auth.uid() = volunteer_id);

CREATE POLICY "Volunteers can update own responses"
  ON emergency_responses FOR UPDATE
  USING (auth.uid() = volunteer_id);

-- Function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_emergencies_updated_at
  BEFORE UPDATE ON emergencies
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_emergency_responses_updated_at
  BEFORE UPDATE ON emergency_responses
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
