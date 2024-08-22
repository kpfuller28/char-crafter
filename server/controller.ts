import * as model from "./model.ts";

export async function getFighter(req, res) {
  try {
    const fighter = await model.buildFighter(1);
    res.send(fighter);
  } catch (err) {
    console.log("Error in controller getFighter: ", err);
    res.sendStatus(501);
  }
}

export async function getRogue(req, res) {
  try {
    const rogue = await model.buildRogue(1);
    res.send(rogue);
  } catch (err) {
    console.log("Error in controller getRogue: ", err);
    res.sendStatus(501);
  }
}

export async function getCleric(req, res) {
  try {
    const cleric = await model.buildCleric(1);
    res.send(cleric);
  } catch (err) {
    console.log("Error in controller getCleric: ", err);
    res.sendStatus(501);
  }
}

export async function getWizard(req, res) {
  try {
    const wizard = await model.buildWizard(1);
    res.send(wizard);
  } catch (err) {
    console.log("Error in controller getWizard: ", err);
    res.sendStatus(501);
  }
}

export async function getPaladin(req, res) {
  try {
    const paladin = await model.buildPaladin(1);
    res.send(paladin);
  } catch (err) {
    console.log("Error in controller getPaladin: ", err);
    res.sendStatus(501);
  }
}

export async function getRanger(req, res) {
  try {
    const ranger = await model.buildRanger(1);
    res.send(ranger);
  } catch (err) {
    console.log("Error in controller getRanger: ", err);
    res.sendStatus(501);
  }
}
