export function characterDecider(answers) {
  const answer = answers[0] + " " + answers[1];
  let characterClass = "";
  switch (answer) {
    case "Weapon Melee":
      characterClass = "Fighter";
      break;
    case "Weapon Ranged":
      characterClass = "Rogue";
      break;
    case "Spells Melee":
      characterClass = "Cleric";
      break;
    case "Spells Ranged":
      characterClass = "Wizard";
      break;
    case "Both Melee":
      characterClass = "Paladin";
      break;
    case "Both Ranged":
      characterClass = "Ranger";
      break;
    default:
      console.log("Error in switch statement in character decider function");
  }
  return characterClass;
}
