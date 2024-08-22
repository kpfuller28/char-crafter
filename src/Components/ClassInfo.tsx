import { useEffect, useState } from "react";
import axios from "axios";

export default function ClassInfo({ characterClass }) {
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

  const test = classInfo.resources ? (
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
    <div>
      {Object.keys(classInfo).length > 0 ? (
        <div>
          <div>Class Name: {characterClass}</div>
          <div>Level: 1</div>
          <div>Hit Dice: 1d{classInfo.hitDice.value}</div>
          <div>Hit Points: {classInfo.hp.value} + (CON Mod * Level)</div>
          <div>
            Starting Equipment Choices:
            <ul style={{ listStyleType: "none" }}>
              {classInfo.equipment.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
          {test}
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
