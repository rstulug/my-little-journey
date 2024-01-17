import supabase from "./supabase";

export async function signUp({ email, password, username, usernameSlug }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        usernameSlug,
      },
    },
  });
  if (error)
    throw new Error(
      `The problem occured when sign up user. Possible reaseon: ${error.message}`
    );
  return data;
}
