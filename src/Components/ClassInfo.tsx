import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ClassInfo({ characterClass, charName, setCharName }) {
  const [classInfo, setClassInfo] = useState({});

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const charClass = characterClass.toLowerCase();
      const data = await axios.get(`/${charClass}`);
      setClassInfo(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const resources = classInfo.resources ? (
    <div>
      <div>Class Resources:</div>
      <ul style={{ listStyleType: "none" }}>
        {classInfo.resources.map((resource) => {
          return (
            <li>
              <b>{resource.name}:</b> {resource.desc}
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;

  return (
    <div className="flex items-center justify-center">
      {Object.keys(classInfo).length > 0 ? (
        <Card className="w-auto">
          <CardHeader>
            <CardTitle>
              <input
                className="focus:outline-none text-center"
                name="charName"
                type="text"
                value={charName}
                onChange={(e) => setCharName(e.target.value)}
              ></input>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-start">
              <p>
                <b>Class Name: </b> {characterClass}
              </p>
            </div>
            <div className="flex items-start">
              <p>
                <b>Level: </b> 1
              </p>
            </div>
            <div className="flex items-start">
              <p>
                <b>Hit Dice: </b> 1d{classInfo.hitDice.value}
              </p>
            </div>
            <div className="flex items-start">
              <p>
                <b>Hit Points: </b> {classInfo.hp.value} + (CON Mod * Level)
              </p>
            </div>
            <div>
              <p>
                <b>Starting Equipment Choices: </b>
              </p>
              <ul
                // className="flex items-start"
                style={{ listStyleType: "none" }}
              >
                {classInfo.equipment.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
            {resources}
            <div className="font-bold">Class Features: </div>
            <ul style={{ listStyleType: "none" }}>
              {classInfo.features.map((feature) => {
                return (
                  <li>
                    <b>{feature.name}:</b> {feature.desc}
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      ) : (
        <div>One Moment Please</div>
      )}
    </div>
  );
}
