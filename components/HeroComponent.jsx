"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// packages
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForwardFast } from "@fortawesome/free-solid-svg-icons";

// images
import Img1 from "@/public/images/HeroImages/Image1.png";

const HeroComponent = () => {
  const [offset, setOffset] = useState(0);
  const [canScrollDown, setCanScrollDown] = useState(false);
   const [skipped, setSkipped] = useState(false);

  const minOffset = -3200; // Adjust based on text length
  const maxOffset = 0; // Start position

  useEffect(() => {
    const handleScroll = (event) => {
      // if (skipped) {
      //   window.scrollTo({ top: 0, behavior: "smooth" });
      // }; figure this out

      if (canScrollDown && event.deltaY < 0) {
        setCanScrollDown(false);
        document.body.style.overflow = "hidden";
      }

      if (!canScrollDown) {
        event.preventDefault(); // Stop default page scrolling

        let newOffset = offset;
        if (event.deltaY !== undefined) {
          newOffset -= event.deltaY * 0.5;
        } else if (event.key === "ArrowUp") {
          newOffset += 50;
        } else if (event.key === "ArrowDown") {
          newOffset -= 50;
        }

        // Restrict movement within limits
        if (newOffset <= minOffset) {
          newOffset = minOffset;
          setCanScrollDown(true);
          document.body.style.overflow = "auto";
        }
        if (newOffset > maxOffset) newOffset = maxOffset;

        setOffset(newOffset);
      }
    };

    document.body.style.overflow = canScrollDown ? "auto" : "hidden";

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("keydown", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleScroll);
    };
  }, [offset, canScrollDown, skipped]);

  const skipHero = () => {
    setSkipped(true);
    setCanScrollDown(true); // Allow vertical scrolling
    // document.body.style.overflow = "auto";

    // Scroll to Navbar
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }, 100);
  };

  return (
    <div>
      <button onClick={skipHero} className="absolute bg-lightPink p-3 rounded-full m-3 hover:bg-darkPink">
        <FontAwesomeIcon icon={faForwardFast} size="2x" className="text-white" />
      </button>
      <div className="h-screen flex items-center overflow-hidden bg-lightestPink">
        <motion.h1
          className="relative z-20 text-white tracking-[9rem] text-[20rem] font-bold whitespace-nowrap ml-[20rem] font-outline-10"
          animate={{ x: offset }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
        >
          <div className="">
            <h1>Janie Ella Doe</h1>
          </div>
        </motion.h1>
        <motion.div
          className="absolute  z-10 top-[50%] translate-y-[-50%] ml-[5rem]"
          animate={{ x: offset }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.57 }}
        >
          <div className="flex flex-row gap-[20rem]">
            <Image src={Img1} alt="Hero-image-1"/>
            <Image src={Img1} alt="Hero-image-1"/>
            <Image src={Img1} alt="Hero-image-1"/>
            <Image src={Img1} alt="Hero-image-1"/>
            <Image src={Img1} alt="Hero-image-1"/>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroComponent;