import Headerrooms from "../components/HeaderRooms";
import Categories from "../components/Categories";
const Mainroom = () => {
  return (
    <>
      <Headerrooms />
      <div className="pt-20 pl-8">
        <Categories />
      </div>
    </>
  );
};

export default Mainroom;
