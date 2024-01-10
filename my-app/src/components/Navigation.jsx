"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegLightbulb, FaHouseChimneyWindow, FaReact } from "react-icons/fa6";
import tw from "tailwind-styled-components";
import Rooms from "./Rooms";

const StyledNav = tw.nav`
  fixed 
  bottom-0
  w-full
  flex 
  justify-evenly
  items-center 
  h-16
  bg-gray
  text-blue-500
  dark:bg-white
`;

const Navigation = () => {
  const [isRoomsVisible, setIsRoomsVisible] = useState(false);

  const toggleRooms = () => {
    setIsRoomsVisible(!isRoomsVisible);
  };

  return (
    <>
      <StyledNav style={{ zIndex: 60 }}>
        <FaRegLightbulb
          className="text-2xl hover:cursor-pointer"
          onClick={toggleRooms}
        />
        <FaHouseChimneyWindow className="text-2xl hover:cursor-pointer" />
        <FaReact className="text-2xl hover:cursor-pointer" />
      </StyledNav>

      <AnimatePresence>
        {isRoomsVisible && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "calc(100% - 38rem)" }} // Adjust for the height of the nav bar
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed bottom-16 bg-header-blue left-0 w-full h-1/2  z-50"
          >
            <Rooms />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
