import fighter from "./Data/classes/fighter-base.json";

export async function buildFighter(level: number) {
  const info = fighter;
  const classInfo = { features: [] };
  for (const key in info) {
    const infoKey = info[key];
    switch (key) {
      case "Hit Points":
        classInfo.hitDice = infoKey["Hit Dice"];
        classInfo.hp = infoKey["Hit Points at 1st Level"];
        break;
      case "Proficiencies":
        classInfo.armorProf = infoKey["Armor"];
        classInfo.saveProf = infoKey["Saving Throws"];
        classInfo.skillProf = infoKey["Skills"];
        classInfo.toolProf = infoKey["Tools"];
        classInfo.weaponProf = infoKey["Weapons"];
        break;
      case "Levels":
        for (let i = 0; i < level; i++) {
          for (let j = 0; j < infoKey[i]["value"].length; j++) {
            for (let k = 0; k < info["Class Features"].length; k++) {
              if (
                info["Class Features"][k]["name"] === infoKey[i]["value"][j]
              ) {
                classInfo.features.push(info["Class Features"][k]);
                break;
              }
            }
          }
        }
        break;
      case "Equipment":
        classInfo.equipment = infoKey;
        break;
      default:
        console.log("HIT POINT CASE DEFAULT");
    }
  }
  return classInfo;
}
