import { useEffect, useState } from "react";
import { buildClass } from "../helpers/classFetch.ts";
import axios from "axios";

export default function ClassInfo({ characterClass }) {
  const [classInfo, setClassInfo] = useState({});
  const [data, setData] = useState({});

  useEffect(() => {
    getData(characterClass);
  }, [characterClass]);

  useEffect(() => {
    setClassInfo(data);
  }, [data]);

  async function getData(characterClass) {
    const response = await buildClass(characterClass, 1);
    setData(response);
  }

  return (
    <div>
      {console.log("CLIENT SIDE CLASS INFO: ", classInfo)}
      {Object.keys(classInfo).length > 0 ? (
        <div>
          <div>Class Name: {characterClass}</div>
          <div>Hit Dice: {classInfo.hitDice}</div>
          <div>Hit Points: {classInfo.hp}</div>
          <div>
            Starting Equipment Choices:
            <ul style={{ listStyleType: "none" }}>
              {classInfo.equipment.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
          <div>Class Features: </div>
          <ul style={{ listStyleType: "none" }}>
            {classInfo.features.map((feature) => {
              return (
                <li>
                  <b>{feature.name}:</b> {feature.desc}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>One Moment Please</div>
      )}
    </div>
  );
}
