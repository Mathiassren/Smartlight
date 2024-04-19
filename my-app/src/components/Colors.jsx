import React, { useState } from "react";
import { motion } from "framer-motion";

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
      "http://192.168.1.225/api/3CrPrmCobGPLPiBWZN6MWBHS0b368pRELVPowmRW/lights/9/state",
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

  // Animation variants for framer-motion
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex items-center gap-2">
      {colors.map((color, index) => (
        <motion.div
          key={color}
          className={`w-10 h-10 ${color} cursor-pointer rounded-full border-2 ${
            selectedColor === color ? "border-white" : "border-transparent"
          } shadow-md`}
          onClick={() => handleColorClick(color)}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
        />
      ))}
      <button
        onClick={() => {}}
        className="w-6 h-6 flex items-center justify-center bg-white rounded-full border-none text-lg text-blue-600"
      >
        +
      </button>
    </div>
  );
}
