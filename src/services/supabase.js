import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bxezmnvpntsmpijizrlm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4ZXptbnZwbnRzbXBpaml6cmxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzOTU4MzksImV4cCI6MjAyMDk3MTgzOX0.8LsXbQHzHgXzCaz6uZnQhhbwWI_42g09Alj6OgLJDS4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
