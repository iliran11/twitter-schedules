import { fetchTweetsByUser } from "../../services/twitter";

export const schedulesService = async (personas: string[]) => {
  const result = await Promise.all(
    personas.map((persona) => fetchTweetsByUser(persona))
  );
    // Aggregate the results
  return result
};
