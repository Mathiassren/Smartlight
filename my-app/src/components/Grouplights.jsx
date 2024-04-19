import React, { useState, useEffect } from "react";
import Link from "next/link";

const GroupLights = ({ groupId }) => {
  const [lights, setLights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLights = async () => {
    try {
      const response = await fetch(
        `http://192.168.1.225/api/3CrPrmCobGPLPiBWZN6MWBHS0b368pRELVPowmRW/lights?group=${groupId}`
      );
      const data = await response.json();
      setLights(Object.values(data));
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLights();
  }, [groupId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading lights: {error}</p>;

  return (
    <div>
      <h2>Lights in Group {groupId}</h2>
      {lights.map((light) => (
        <div key={light.uniqueid}>
          <p>{light.name}</p>
          <p>Status: {light.state.on ? "On" : "Off"}</p>
          {/* Additional light details */}
        </div>
      ))}
    </div>
  );
};

export default GroupLights;
