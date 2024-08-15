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
