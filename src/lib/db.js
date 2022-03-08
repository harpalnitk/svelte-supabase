import { createClient } from '@supabase/supabase-js'

//VITE_ prefix is necessary before any environment variable
const SUPABASE_KEY= import.meta.env.VITE_SUPABASE_PRIVATE_KEY;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

const supabase = createClient(SUPABASE_URL,SUPABASE_KEY);

export default supabase;



