import { buildFighter } from "./model.ts";

export async function getFighter(req, res) {
  try {
    const fighter = await buildFighter(1);
    res.send(fighter);
  } catch (err) {
    console.log("Error in controller getFighter: ", err);
    res.sendStatus(501);
  }
}
