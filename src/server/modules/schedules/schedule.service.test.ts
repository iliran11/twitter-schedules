import { fetchTweetsByUser } from "../../services/twitter";
import { schedulesService } from "./schedules.service";
import { mocked } from "ts-jest/utils";

const mockedFetchTweetsByUser: any = mocked(fetchTweetsByUser, true);
jest.mock("../../services/twitter", () => ({
  __esModule: true,
  default: "aaa",
  fetchTweetsByUser: jest.fn(),
}));

describe("Test schedule service - NOT round hours", () => {
  mockedFetchTweetsByUser.mockReturnValue([
    {
      created_at: "Wed Oct 10 19:59 +0000 2018",
    },
    {
      created_at: "Wed Oct 10 20:31 +0000 2018",
    },
  ]);
  test("sums correctly the number of tweets", async () => {
    const result = await schedulesService(["x"]);
    expect(result[0].tweets["18"]).toEqual(1);
    expect(result[0].tweets["20"]).toEqual(1);
    expect(result[0].tweets["22"]).toEqual(0);
  });
});
