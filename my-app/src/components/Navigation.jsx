"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRegLightbulb, FaHouseChimneyWindow, FaReact } from "react-icons/fa6";
import tw from "tailwind-styled-components";
import Rooms from "../../pages/groups/Rooms";
import Lightroom from "./Lightroom";
import Mainroom from "./Mainroom";
import Head from "./Header";
import Link from "next/link";

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

// Framer Motion animation variants for the loader
const dotVariants = {
  initial: { x: 0, opacity: 0.5 },
  animate: {
    x: [0, 20, 0], // Move each dot 20px to the right and back to the original position
    opacity: [0.5, 1, 0.5], // Change the opacity from 0.5 to 1 and back to 0.5
    transition: {
      duration: 1.5, // Duration for one cycle of the animation
      repeat: Infinity, // Repeat the animation indefinitely
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const Loader = () => (
  <div className="fixed top-0 left-0 right-0 flex justify-center items-center h-16 bg-white bg-opacity-75 z-50">
    {[...Array(3)].map((_, i) => (
      <motion.span
        key={i}
        className="block w-2 h-2 bg-blue-500 rounded-full mx-1"
        variants={dotVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: `${i * 0.2}s` }} // Stagger the start of each dot's animation
      />
    ))}
  </div>
);

const Navigation = () => {
  const [popupContent, setPopupContent] = useState(null);
  const [mainContent, setMainContent] = useState("Mainroom");
  const [isLoading, setLoading] = useState(false);

  const handleIconClick = (popup, main) => {
    setLoading(true);
    setTimeout(() => {
      setPopupContent(popupContent === popup ? null : popup);
      setMainContent(main);
      setLoading(false);
    }, 1000); // Simulate loading for 2 seconds
  };

  return (
    <>
      {isLoading && <Loader />}

      <StyledNav style={{ zIndex: 60 }}>
        <FaRegLightbulb
          className="text-2xl hover:cursor-pointer"
          onClick={() => handleIconClick("Lightroom", "Mainroom")}
        />
        <FaHouseChimneyWindow
          className="text-2xl hover:cursor-pointer"
          onClick={() => handleIconClick("Rooms", "Head")}
        />
        <Link href="/settings">
          <FaReact className="text-2xl hover:cursor-pointer" />
        </Link>
      </StyledNav>

      {popupContent === "Lightroom" && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "calc(100% - 115%)" }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", bounce: 0.25, stiffness: 100 }}
          className="fixed bottom-16 bg-lightroom-color left-0 w-full h-1/2 z-50"
        >
          <Lightroom />
        </motion.div>
      )}

      {popupContent === "Rooms" && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "calc(100% - 150%)" }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", bounce: 0.25, stiffness: 100 }}
          className="fixed bottom-16 bg-header-blue left-0 w-full h-1/2 z-50"
        >
          <Rooms />
        </motion.div>
      )}

      {mainContent === "Mainroom" && (
        <div className="main-content">
          <Mainroom />
        </div>
      )}
      {mainContent === "Head" && (
        <div className="main-content">
          <Head />
        </div>
      )}
    </>
  );
};

export default Navigation;
