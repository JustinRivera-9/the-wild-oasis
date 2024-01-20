import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be loaded");
  }

  return data;
}

export const deleteCabin = async (id) => {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error)
    throw new Error("Problems deleting cabin. Please refresh and try again");
};

export const createCabin = async (newCabin) => {
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();

  if (error) throw new Error("Cabin could not be created. Please try again.");
};
