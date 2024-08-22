import express from "express";
import ViteExpress from "vite-express";
import * as controller from "./controller.ts";

const app = express();
app.use(express.json());
app.use(express.urlencoded());

ViteExpress.listen(app, 3000, () => console.log("server is listening..."));

app.get("/fighter", (req, res) => {
  controller.getFighter(req, res);
});

app.get("/rogue", (req, res) => {
  controller.getRogue(req, res);
});

app.get("/cleric", (req, res) => {
  controller.getCleric(req, res);
});

app.get("/wizard", (req, res) => {
  controller.getWizard(req, res);
});

app.get("/paladin", (req, res) => {
  controller.getPaladin(req, res);
});

app.get("/ranger", (req, res) => {
  controller.getRanger(req, res);
});
