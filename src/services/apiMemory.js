import supabase from "./supabase";

export async function insertMemory(obj) {
  const { data, error } = await supabase.from("Memory").insert([obj]).select();

  if (error)
    throw new Error(
      `An error occured during submit memory. Error: ${error.message}`
    );

  return data;
}

export async function getUserMemories(id) {
  if (!id) return null;
  const { data, error } = await supabase
    .from("Memory")
    .select("*")
    .eq("User", id);

  if (error)
    throw new Error(
      `An error occured during fetching user memories. Error: ${error.message}`
    );

  return data;
}

export async function getUserMemory(id) {
  if (!id) return null;

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
