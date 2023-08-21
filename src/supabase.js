import { createClient } from "@supabase/supabase-js";

// console.log({VITE_envurl: import.meta.env.VITE_SUPABASE_BASE_URL})
// console.log({VITE_SUPABASE_KEY: JSON.stringify(import.meta.env.VITE_SUPABASE_KEY)})

const supabaseUrl = import.meta.env.VITE_SUPABASE_BASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
