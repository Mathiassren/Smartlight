import Headerrooms from "../components/HeaderRooms";
import Categories from "../components/Categories";
const Mainroom = () => {
  return (
    <>
      <Headerrooms />

      <main className="pt-20">
        <Categories />
      </main>
    </>
  );
};

export default Mainroom;
