import Headerrooms from "../components/HeaderRooms";
import Categories from "../components/Categories";
const Mainroom = () => {
  return (
    <>
      <Headerrooms />
      <div className="pt-6 pl-2">
        <Categories />
      </div>
    </>
  );
};

export default Mainroom;
