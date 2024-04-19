import React, { useState } from "react";

const calculateColorIntensity = (brightness) => {
  const intensity = Math.round((brightness / 254) * 255);
  return `rgb(${intensity}, ${Math.round(intensity / 2)}, 0)`; // Adjust color intensity here
};

const BrightnessControl = ({ initialBrightness, onBrightnessChange }) => {
  const [brightness, setBrightness] = useState(initialBrightness);

  const handleSliderChange = (event) => {
    const newBrightness = parseInt(event.target.value, 10);
    setBrightness(newBrightness);
    onBrightnessChange(newBrightness);
  };

  const sliderTrackStyle = {
    background: `linear-gradient(to right, ${calculateColorIntensity(
      brightness
    )} ${(brightness / 254) * 100}%, lightgray ${(brightness / 254) * 100}%)`,
    height: "8px",
    borderRadius: "5px",
    transition: "background 0.2s ease-in-out", // Transition for the track color
  };

  const sliderThumbStyle = {
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    background: "white",
    cursor: "pointer",
    // Add CSS transition for smooth sliding
    transition: "background 0.2s ease-in-out",
  };

  return (
    <div
      style={{
        position: "relative",
        padding: "15px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ marginRight: "10px" }}>🌑</div>
      <input
        type="range"
        min="0"
        max="254"
        value={brightness}
        onChange={handleSliderChange}
        style={{
          width: "300px",
          WebkitAppearance: "none", // Removes default styling in WebKit browsers
          appearance: "none",
          ...sliderTrackStyle,
        }}
        className="slider"
      />
      <div style={{ marginLeft: "10px" }}>🌕</div>
      <style>
        {`.slider::-webkit-slider-thumb {
          appearance: none;
          ${Object.entries(sliderThumbStyle)
            .map(([key, value]) => `${key}: ${value};`)
            .join(" ")}
        }`}
      </style>
    </div>
  );
};

const LightControlPanel = () => {
  const [brightness, setBrightness] = useState(127);

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
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="mb-14">
      <h2 className="font-bold">Intensity</h2>
      <BrightnessControl
        initialBrightness={brightness}
        onBrightnessChange={handleBrightnessChange}
      />
    </div>
  );
};

export default LightControlPanel;
