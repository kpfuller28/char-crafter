import { useEffect, useState } from "react";
import axios from "axios";

export default function ClassInfo({ characterClass }) {
  const [classInfo, setClassInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const charClass = characterClass.toLowerCase();
        const data = await axios.get(`/${charClass}`);
        setClassInfo(data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
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
