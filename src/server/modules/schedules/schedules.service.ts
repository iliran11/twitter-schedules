import { fetchTweetsByUser } from "../../services/twitter";
import { closestNumber, get2HoursSchedule } from "../../../utils/dates";

export const schedulesService = async (personas: string[]) => {
  const personasTweets = await Promise.all(
    personas.map(async (persona) => ({
      name: persona,
      tweets: await fetchTweetsByUser(persona),
    }))
  );
  const result = personasTweets.map((personaData) => {
    //@ts-ignore
    const scheduleHashMap = personaData.tweets.reduce((acc, t) => {
      const hour = closestNumber(new Date(t.created_at).getUTCHours(), 2);
      acc[hour] = acc[hour] + 1;
      return acc;
    }, get2HoursSchedule());
    return {
      personaName: personaData.name,
      tweets: scheduleHashMap,
    };
  });
  return result;
};
