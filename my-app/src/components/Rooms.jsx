import Image from "next/image";
const RoomBlock = ({ src, roomName, lights }) => (
  <article className="h-40 w-38 rounded-3xl pl-4 bg-white">
    <Image
      src={src}
      alt={`Image of ${roomName}`}
      width={71}
      height={71}
      className="mt-[25px]"
    />
    <h3>{roomName}</h3>
    <p className="text-orange-500">{lights} lights</p>
  </article>
);

const Rooms = () => {
  return (
    <main className="bg-gray-100 shadow-md bg m-auto mt-auto pt-10 z-40 rounded-t-[32px] min-h-screen">
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
