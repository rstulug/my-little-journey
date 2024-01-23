import { MEMORY_PER_PAGE } from "../utils/constant";
import supabase from "./supabase";

export async function insertMemory(obj) {
  const { data, error } = await supabase.from("Memory").insert([obj]).select();

  if (error)
    throw new Error(
      `An error occured during submit memory. Error: ${error.message}`
    );

  return data;
}

export async function getUserMemories(id, page) {
  const from = MEMORY_PER_PAGE * (page - 1);
  const to = from + MEMORY_PER_PAGE - 1;

  const { data, count, error } = await supabase
    .from("Memory")
    .select("*", { count: "exact" })
    .eq("User", id)
    .order("created_at", { ascending: true })
    .range(from, to);

  if (error)
    throw new Error(
      `An error occured during fetching user memories. Error: ${error.message}`
    );

  return { data, count };
}

export async function getUserMemory(id) {
  const { data, error } = await supabase
    .from("Memory")
    .select("*")
    .eq("id", id)
    .single();

  if (error)
    throw new Error(
      `An error occured during fetching memory data. Error: ${error.message}`
    );

  return data;
}

export async function deleteMemory(id) {
  const { error } = await supabase.from("Memory").delete().eq("id", id);

  if (error)
    throw new Error(
      `An error occured during deleting memory. Error: ${error.message}`
    );
}

export async function updateMemory({ obj, id }) {
  const { data, error } = await supabase
    .from("Memory")
    .update(obj)
    .eq("id", id)
    .select();

  if (error)
    throw new Error(
      `An error occured during updating memory. Error: ${error.message}`
    );
  return data;
}
