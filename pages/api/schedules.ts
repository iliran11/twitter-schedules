// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as schedulesService from "../../src/server/modules/schedules/schedules.service";

export default async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const personas = url.searchParams.get("personas")?.split(",");
    if (!personas) {
      res.statusCode = 400;
      res.json({ message: "You must specity personas you want to retrieve" });
      return;
    }
    res.statusCode = 200;
    const result = await schedulesService.schedulesService(personas);
    res.json({ data: result });
  } catch (e) {
    res.statusCode = 500;
    console.log(e);
    res.json({ error: e.message });
  }
};
