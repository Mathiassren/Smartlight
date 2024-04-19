"use client";
import React, { useState, useEffect } from "react";
import Scenes from "./Scenes";
import Colors from "./Colors";
import Intensity from "./Intensity";

const Lightroom = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  useEffect(() => {
    fetch(
      "http://192.168.1.225/api/3CrPrmCobGPLPiBWZN6MWBHS0b368pRELVPowmRW/lights/9"
    )
      .then((response) => response.json())
      .then((data) => setIsLightOn(data.state.on))
      .catch((error) => console.error("Error fetching light state:", error));
  }, []);

  const toggleLight = () => {
    const newState = !isLightOn;
    fetch(
      "http://192.168.1.225/api/3CrPrmCobGPLPiBWZN6MWBHS0b368pRELVPowmRW/lights/9/state",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ on: newState }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data[0] && data[0].success) {
          setIsLightOn(newState);
        }
      })
      .catch((error) => console.error("Error updating light state:", error));
  };

  return (
    <main className="bg-gray-100 shadow-md bg m-auto mt-auto pt-10 z-40 rounded-t-[32px] min-h-screen">
      <Intensity />
      <div
        className="flex justify-end transistion -mt-[190px]"
        onClick={toggleLight}
      >
        <img
          src={isLightOn ? "/poweron.png" : "/poweroff.png"}
          alt="Toggle Light"
        />
      </div>

      <section className="pt-5">
        <h2 className="pt-14 pb-4 font-bold">Colors</h2>
        <Colors />
      </section>
      <section className="pt-2">
        <Scenes />
      </section>
      <section className="grid grid-cols-2 gap-4 VerticalMovieLtContainer"></section>
    </main>
  );
};

export default Lightroom;
