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
  const { data, error } = await supabase
    .from("Memory")
    .select("*")
    .eq("User", id)
    .order("created_at", { ascending: false });

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
