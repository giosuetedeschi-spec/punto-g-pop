import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY env vars");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export type DbReservation = {
  id: string;
  nome: string;
  telefono: string;
  email: string | null;
  data_ritiro: string;
  items: Record<string, number>;
  custom_request: string | null;
  note: string | null;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  created_at: string;
};

export type DbContact = {
  id: string;
  nome: string;
  email: string;
  telefono: string | null;
  messaggio: string;
  created_at: string;
};
