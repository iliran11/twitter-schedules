import TwitterClient from "twitter-api-client";

const twitterClient = new TwitterClient({
  apiKey: process.env.TWITTER_API_KEY,
  apiSecret: process.env.TWITTER_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  ttl: 10800, // 3 hours
  disableCache: process.env.NODE_ENV !== "production",
});

export const fetchTweetsByUser = async (persona: string) => {
  const result = await twitterClient.tweets.statusesUserTimeline({
    screen_name: persona,
    exclude_replies: true,
  });
  return result;
};
