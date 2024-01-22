"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FaRegLightbulb, FaHouseChimneyWindow, FaReact } from "react-icons/fa6";
import tw from "tailwind-styled-components";
import Rooms from "./Rooms";
import Lightroom from "./Lightroom";
import Mainroom from "./Mainroom";
import Head from "./Header";

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
  const [popupContent, setPopupContent] = useState(null);
  const [mainContent, setMainContent] = useState("Mainroom");
  const controls = useAnimation();

  const handleIconClick = (popup, main) => {
    setPopupContent(popupContent === popup ? null : popup);
    setMainContent(main);
    controls.start({ opacity: 1, x: 0 });
  };

  useEffect(() => {
    controls.start({ opacity: 0, x: -100 });
  }, [controls]);

  const pageTransition = {
    ease: "easeInOut",
    duration: 0.3,
  };

  return (
    <>
      <StyledNav style={{ zIndex: 60 }}>
        <FaRegLightbulb
          className="text-2xl hover:cursor-pointer"
          onClick={() => handleIconClick("Lightroom", "Mainroom")}
        />
        <FaHouseChimneyWindow
          className="text-2xl hover:cursor-pointer"
          onClick={() => handleIconClick("Rooms", "Head")}
        />
        <FaReact className="text-2xl hover:cursor-pointer" />
      </StyledNav>

      <AnimatePresence>
        {popupContent === "Lightroom" && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "calc(100% - 29rem)" }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed bottom-16 bg-lightroom-color left-0 w-full h-1/2 z-50"
          >
            <Lightroom />
          </motion.div>
        )}

        {popupContent === "Rooms" && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "calc(100% - 34rem)" }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed bottom-16 bg-header-blue left-0 w-full h-1/2 z-50"
          >
            <Rooms />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mainContent === "Mainroom" && (
          <motion.div
            key="mainroom"
            initial="initial"
            animate={controls}
            exit={{ opacity: 0, x: 100 }}
            transition={pageTransition}
            className="main-content"
          >
            <Mainroom />
          </motion.div>
        )}
        {mainContent === "Head" && (
          <motion.div
            key="head"
            initial="initial"
            animate={controls}
            exit={{ opacity: 0, x: 100 }}
            transition={pageTransition}
            className="main-content"
          >
            <Head />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
