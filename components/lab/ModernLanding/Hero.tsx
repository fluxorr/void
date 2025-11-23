"use client";

import Image from "next/image";
import ScreenImage from "./assets/ipadscreen.png";
import { easeOut, motion } from "motion/react";

const Hero = () => {
  return (
    <div className="flex flex-col relative justify-between items-center mt-12 mx-28 h-[85vh]  ">
      <h1 className="font-crimson-text tracking-tighter text-[160px] ">
        Browse everything
      </h1>

      <motion.div
        animate={{
          opacity: [0, 1],
          y: [20, 0],
        }}
        transition={{
          duration: 0.8,
          ease: easeOut,
        }}
        className="bg-black  z-10  p-4 rounded-t-[24px] h-[600px] w-[980px]  border-t-2 border-x-2 border-neutral-500 absolute top-69 bottom-0 "
      >
        <Image
          draggable="false"
          src={ScreenImage}
          className="  z-10 h-[580px] w-[980px] rounded-t-[16px]  "
          alt="Product demo image"
        ></Image>
      </motion.div>
      <div className="bg-picbg h-92 rounded-4xl z-0 w-[calc(100%-20px)]"></div>
    </div>
  );
};

export default Hero;
