import React, { useState } from "react";

export default function ColorPalette() {
  const colors = [
    "bg-palete-orange",
    "bg-palete-green",
    "bg-palete-blue",
    "bg-palete-purple",
    "bg-palete-dark-purple",
    "bg-palete-yellow",
  ];

  const colorHueMapping = {
    "bg-palete-orange": 1000,
    "bg-palete-green": 20000,
    "bg-palete-blue": 45000,
    "bg-palete-purple": 50000,
    "bg-palete-dark-purple": 60000,
    "bg-palete-yellow": 11000,
  };
  console.log(colorHueMapping);

  const [selectedColor, setSelectedColor] = useState("");

  const handleColorClick = (color) => {
    setSelectedColor(color);

    const hueValue = colorHueMapping[color];
    const body = {
      on: true,
      sat: 254,
      bri: 254,
      hue: hueValue,
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

  const addColor = () => {};

  return (
    <div className="flex items-center gap-2">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`w-10 h-10 ${color} cursor-pointer rounded-full border-2 ${
            selectedColor === color ? "border-white" : "border-transparent"
          }  shadow-md`}
          onClick={() => handleColorClick(color)}
        ></div>
      ))}

      <button
        onClick={addColor}
        className="w-6 h-6 flex items-center justify-center bg-white rounded-full border-none text-lg text-blue-600"
      >
        +
      </button>
    </div>
  );
}
