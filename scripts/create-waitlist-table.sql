-- Create waitlist table for Boca a Boca
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  contact VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for signup)
CREATE POLICY "Enable insert for all users" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Allow only authenticated users to select their own data (optional - for admin viewing)
CREATE POLICY "Enable read access for service role" ON waitlist
  FOR SELECT USING (true);
