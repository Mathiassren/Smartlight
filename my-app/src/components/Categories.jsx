import {
  FaLightbulb,
  FaBed,
  FaDesktop,
  FaBath,
  FaTree,
  FaChair,
} from "react-icons/fa";

const CategoryItem = ({ icon, children }) => (
  <div className="inline-flex items-center space-x-1 bg-header-light rounded-[20px] px-[24px] py-[15px] hover:bg-dark-blue hover:text-white transition-colors text-dark-blue mr-4">
    {icon}
    <span>{children}</span>
  </div>
);

const Categories = () => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap py-2 no-scrollbar">
      <CategoryItem icon={<FaLightbulb />}>Main Light</CategoryItem>
      <CategoryItem icon={<FaDesktop />}>Desk Lights</CategoryItem>
      <CategoryItem icon={<FaBed />}>Bed</CategoryItem>
      <CategoryItem icon={<FaBath />}>Bathroom</CategoryItem>
      <CategoryItem icon={<FaTree />}>Outdoor</CategoryItem>
      <CategoryItem icon={<FaChair />}>Balcony</CategoryItem>
    </div>
  );
};

export default Categories;
