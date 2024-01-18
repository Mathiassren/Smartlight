import React, { useState } from "react";

const BrightnessControl = ({ initialBrightness, onBrightnessChange }) => {
  // State hook for brightness
  const [brightness, setBrightness] = useState(initialBrightness);

  const handleSliderChange = (event) => {
    const newBrightness = parseInt(event.target.value, 10);
    setBrightness(newBrightness);
    onBrightnessChange(newBrightness); // Propagate the change up to the parent component
  };

  return (
    <input
      type="range"
      min="0"
      max="254"
      value={brightness}
      onChange={handleSliderChange}
      style={{ width: "300px" }}
    />
  );
};

const LightControlPanel = () => {
  const [brightness, setBrightness] = useState(127); // Set initial brightness

  const handleBrightnessChange = (newBrightness) => {
    setBrightness(newBrightness);
    updateLightBrightness(newBrightness);
  };

  const updateLightBrightness = (brightness) => {
    const body = {
      on: true,
      bri: brightness,
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
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <h2>Adjust Light Brightness</h2>
      <BrightnessControl
        initialBrightness={brightness}
        onBrightnessChange={handleBrightnessChange}
      />
    </div>
  );
};

export default LightControlPanel;
