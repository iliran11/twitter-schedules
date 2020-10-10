import { fetchTweetsByUser } from "../../services/twitter";

export const schedulesService = async (personas: string[]) => {
  const result = await fetchTweetsByUser();
  return { liran: 3 };
};
