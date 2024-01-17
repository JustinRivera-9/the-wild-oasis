import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hpqyksyvbrdalztntykj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwcXlrc3l2YnJkYWx6dG50eWtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3NzY5NTEsImV4cCI6MjAyMDM1Mjk1MX0.5RyafV6sljPccUROx1Bh66hzYwKqsmi4OCQrlVPn5T8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
