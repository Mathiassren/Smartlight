import Image from "next/image";
import React, { useState, useEffect } from "react";

const RoomBlock = ({ src, roomName, lights }) => (
  <article className="w-34 h-auto pb-2 shadow-xl rounded-3xl pl-6 bg-white">
    <Image
      src={src}
      alt={`Image of ${roomName}`}
      width={60}
      height={60}
      className="mt-[24px]"
    />
    <h3>{roomName}</h3>
    <p className="text-orange-500">{lights} lights</p>
  </article>
);

const Rooms = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  useEffect(() => {
    fetch(
      "http://192.168.8.100/api/RBDJ5SoKISP8jr0iRKwvD8xUbS18QUOA3hvvLC0l/lights/47"
    )
      .then((response) => response.json())
      .then((data) => setIsLightOn(data.state.on))
      .catch((error) => console.error("Error fetching light state:", error));
  }, []);

  const toggleLight = () => {
    const newState = !isLightOn;
    console.log(toggleLight);
    fetch(
      "http://192.168.8.100/api/RBDJ5SoKISP8jr0iRKwvD8xUbS18QUOA3hvvLC0l/lights/47/state",
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
    <main className="bg-gray-100 shadow-md bg m-auto mt-auto pt-4 z-40 rounded-t-[32px] min-h-screen">
      <div onClick={toggleLight} className="flex justify-end -mt-8">
        <img
          src={isLightOn ? "/poweron.png" : "/poweroff.png"}
          alt="Toggle Light"
        />
      </div>
      <h2 className="pb-5 font-bold">All Rooms</h2>
      <section className="grid grid-cols-2 gap-4 VerticalMovieListContainer">
        <RoomBlock src="/bed.png" roomName="Bed Room" lights="4" />
        <RoomBlock src="/room.png" roomName="Office" lights="3" />
        <RoomBlock src="/kitchen.png" roomName="Living Room" lights="3" />
        <RoomBlock src="/bathtube.png" roomName="Kitchen" lights="4" />
        <RoomBlock src="/house.png" roomName="Bath Room" lights="4" />
        <RoomBlock src="/balcony.png" roomName="Balcony" lights="2" />
      </section>
    </main>
  );
};

export default Rooms;
