"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const RoomBlock = ({ id, roomName, lights, isLightOn }) => (
  <Link href={`/groups/${id}`}>
    <div className="block w-34 h-auto pb-6 shadow-xl pt-6 rounded-3xl pl-6 bg-white cursor-pointer">
      <Image src="/balcony.png" width={60} height={60} alt={roomName} />
      <h3 className="truncate">{roomName}</h3>
      <p className={isLightOn ? "text-green-500" : "text-orange-500"}>
        {lights} lights
      </p>
    </div>
  </Link>
);
const roomTypeToImage = {};

const getImageForRoomType = (roomType) => {
  return roomTypeToImage[roomType.toLowerCase()] || "/default.png";
};

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const apiBase =
    "http://192.168.1.225/api/3CrPrmCobGPLPiBWZN6MWBHS0b368pRELVPowmRW/groups/";

  useEffect(() => {
    fetch(apiBase)
      .then((response) => response.json())
      .then((data) => {
        const roomArray = Object.entries(data).map(([id, room]) => ({
          id,
          name: room.name,
          lights: room.lights.length,
          isLightOn: room.state.all_on,
          src: getImageForRoomType(room.class),
        }));
        setRooms(roomArray);
      })
      .catch((error) => console.error("Error fetching rooms:", error));
  }, []);

  return (
    <main className="bg-gray-100 shadow-md bg m-auto mt-auto pt-4 z-40 rounded-t-[32px] min-h-screen">
      <h2 className="pb-5 font-bold">All Rooms</h2>
      <section className="grid grid-cols-2 gap-4 VerticalMovieListContainer">
        {rooms.map((room) => (
          <RoomBlock
            key={room.id}
            id={room.id}
            src={room.src}
            roomName={room.name}
            lights={room.lights}
            isLightOn={room.isLightOn}
          />
        ))}
      </section>
    </main>
  );
};

export default Rooms;
