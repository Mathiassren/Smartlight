import React, { useState } from "react";
import { FaRegLightbulb } from "react-icons/fa";

const SceneButton = ({ label, onClick, color }) => {
  return (
    <button
      key={label}
      className={`px-4 py-4 rounded-xl flex items-center gap-2 ${color} text-white`}
      onClick={onClick}
    >
      <FaRegLightbulb className="w-4 h-4" />
      {label}
    </button>
  );
};

export default function Scenes() {
  const [selectedScene, setSelectedScene] = useState(null);

  const sceneSettings = {
    Birthday: { hue: 1000, sat: 254, bri: 254 },
    Party: { hue: 20000, sat: 254, bri: 254 },
    Relax: { hue: 45000, sat: 254, bri: 254 },
    Fun: { hue: 50000, sat: 254, bri: 254 },
  };

  const colors = [
    "bg-palete-orange",
    "bg-palete-green",
    "bg-palete-blue",
    "bg-palete-purple",
    "bg-palete-dark-purple",
    "bg-palete-yellow",
  ];

  const handleSceneClick = (scene) => {
    setSelectedScene(scene);
    const body = {
      on: true,
      ...sceneSettings[scene],
    };

    fetch(
      "http://192.168.8.105/api/RBDJ5SoKISP8jr0iRKwvD8xUbS18QUOA3hvvLC0l/lights/47/state",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Scenes</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(sceneSettings).map((scene, index) => (
          <SceneButton
            key={scene}
            label={scene}
            color={colors[index % colors.length]}
            onClick={() => handleSceneClick(scene)}
          />
        ))}
      </div>
      {selectedScene && <p>Selected Scene: {selectedScene}</p>}
    </div>
  );
}
