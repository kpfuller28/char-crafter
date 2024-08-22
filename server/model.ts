async function buildCharacter(charClass: string, level: number) {
  const info = await import(`./Data/classes/${charClass}-base.json`);
  const classInfo = { features: [] };
  for (const key in info) {
    const infoKey = info[key];
    switch (key) {
      case "Hit Points":
        classInfo.hitDice = { desc: infoKey["Hit Dice"] };
        classInfo.hp = { desc: infoKey["Hit Points at 1st Level"] };
        break;
      case "Proficiencies":
        classInfo.armorProf = infoKey["Armor"];
        classInfo.saveProf = infoKey["Saving Throws"];
        classInfo.skillProf = infoKey["Skills"];
        classInfo.toolProf = infoKey["Tools"];
        classInfo.weaponProf = infoKey["Weapons"];
        break;
      case "Class Features": {
        for (let i = 1; i < level + 1; i++) {
          for (const feat of infoKey) {
            if (feat.levels && feat.levels.includes(i.toString())) {
              classInfo.features.push({ name: feat.name, desc: feat.desc });
            }
          }
        }
        break;
      }
      case "Equipment":
        classInfo.equipment = infoKey;
        break;
      default:
        console.log("HIT POINT CASE DEFAULT");
    }
  }
  return [classInfo, info];
}

export async function buildFighter(level: number) {
  const infoArray = await buildCharacter("fighter", level);
  const charClass = infoArray[0];
  const fullClass = infoArray[1];
  const hitDie = 10;
  calcHP(level, charClass, hitDie);
  return charClass;
}

export async function buildRogue(level: number) {
  const infoArray = await buildCharacter("rogue", level);
  const charClass = infoArray[0];
  const fullClass = infoArray[1];
  const hitDie = 8;
  charClass.resources = [
    {
      name: "Sneak Attack Dice",
      desc: `${fullClass["Class Features"][0]["desc"][level]}d6`,
    },
  ];
  calcHP(level, charClass, hitDie);

  return charClass;
}

export async function buildCleric(level: number) {
  const infoArray = await buildCharacter("cleric", level);
  const charClass = infoArray[0];
  const fullClass = infoArray[1];
  const hitDie = 8;

  calcHP(level, charClass, hitDie);
  return charClass;
}

export async function buildWizard(level: number) {
  const infoArray = await buildCharacter("wizard", level);
  const charClass = infoArray[0];
  const fullClass = infoArray[1];
  const hitDie = 6;

  charClass.resources = [
    {
      name: "Cantrips Known",
      desc: `${fullClass["Class Features"][0]["desc"][level]}`,
    },
  ];

  calcHP(level, charClass, hitDie);
  return charClass;
}

export async function buildPaladin(level: number) {
  const infoArray = await buildCharacter("paladin", level);
  const charClass = infoArray[0];
  const fullClass = infoArray[1];
  const hitDie = 10;

  calcHP(level, charClass, hitDie);
  return charClass;
}

export async function buildRanger(level: number) {
  const infoArray = await buildCharacter("ranger", level);
  const charClass = infoArray[0];
  const fullClass = infoArray[1];
  const hitDie = 10;
  charClass.resources = [
    {
      name: "Spells Known",
      desc: `${fullClass["Class Features"][0]["desc"][level]}`,
    },
  ];

  calcHP(level, charClass, hitDie);
  return charClass;
}

//to move to a helpers folder
function rolledHP(hitDice: number) {
  const hp = Math.floor(Math.random() * hitDice) + 1;
  return hp;
}

function calcHP(level: number, charClass, hitDie: number) {
  charClass.hitDice.value = hitDie;
  let hp = hitDie;
  for (let i = 2; i < level + 1; i++) {
    hp += rolledHP(hitDie);
  }
  charClass.hp.value = hp;
}
