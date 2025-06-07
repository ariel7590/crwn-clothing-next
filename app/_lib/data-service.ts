import { supabase } from "./supabase";

export async function getCollections() {
  const { data, error } = await supabase.from("collections").select("*");
  if (error) throw new Error(error.message);
  return data;
}
export async function getItems() {
  const { data, error } = await supabase.from("items").select("*");
  if (error) throw new Error(error.message);
  return data;
}
export async function getItemsByCollectionId(collectionId: number) {
  const { data, error } = await supabase
    .from("items")
    .select("*")
    .eq("collections_id", collectionId);
  if (error) throw new Error(error.message);
  return data;
}