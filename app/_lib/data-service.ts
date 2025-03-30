import { supabase } from "./supabase";

export async function getCollections() {
  const { data, error } = await supabase.from("collections").select("*");
  if (error) throw error;
  return data;
}
export async function getItems() {
  const { data, error } = await supabase.from("items").select("*");
  if (error) throw error;
  return data;
}
