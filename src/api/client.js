import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseToken = process.env.REACT_APP_SUPABASE_TOKEN;

// create a supabase client for interacting with the database
const supabase = createClient(supabaseUrl, supabaseToken);

// get all the projects ordered by most to least recent
const getProjects = () => {
  return supabase
    .from("projects")
    .select()
    .order("end_date", { ascending: false });
};

export { getProjects };
