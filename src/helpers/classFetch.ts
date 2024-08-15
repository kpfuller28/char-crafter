export async function classFetch(charClass: string) {
  let test;
  switch (charClass) {
    case "Fighter":
      test = await fetch("../Data/classes/fighter-base.json")
        .then((res) => res.json())
        .then((data) => {
          const info = JSON.parse(JSON.stringify(data));
          return info;
        });
      break;
    case "Rogue":
      fetch("../Data/classes/rogue-base.json")
        .then((res) => res.json())
        .then((data) => console.log(data));
      break;

    case "Cleric":
      fetch("../Data/classes/cleric-base.json")
        .then((res) => res.json())
        .then((data) => console.log(data));
      break;

    case "Wizard":
      fetch("../Data/classes/wizard-base.json")
        .then((res) => res.json())
        .then((data) => console.log(data));
      break;

    case "Paladin":
      fetch("../Data/classes/paladin-base.json")
        .then((res) => res.json())
        .then((data) => console.log(data));
      break;

    case "Ranger":
      fetch("../Data/classes/ranger-base.json")
        .then((res) => res.json())
        .then((data) => console.log(data));
      break;
    default:
      console.log("Error in switch statement accessing class info");
  }
  return test;
}

export async function buildClass(charClass: string, level: number) {
  const classInfo = { features: [] };
  const info = await classFetch(charClass);
  console.log(info);
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
  console.log("Class Info: ", classInfo);
  return classInfo;
}
