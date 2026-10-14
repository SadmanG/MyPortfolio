import BackgroundAnimation from "../components/Background";
import Projects from "../components/Projects";
import { motion } from "framer-motion";

import React, { useEffect } from "react";

import HomeStyles from "../styles/Home.module.css";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <motion.div
        className={HomeStyles.home}
        exit="exit"
        variants={{
          exit: {
            y: "100vw",
            transition: { ease: "easeInOut" },
          },
        }}
      >
        <div className={HomeStyles.heroContainer}>
         <div className={HomeStyles.introtext}>
          <motion.h1
            animate={{ scale: 1, opacity: 1, y: "0" }}
            transition={{
              delay: 0.25,
              duration: 0.75,
              type: "spring",
              stiffness: 190,
            }}
            initial={{ scale: 0, opacity: 0, y: "-100vh" }}
          >
            Welcome To My Personal Portfolio
          </motion.h1>
          <motion.p
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75 }}
            initial={{ scale: 0, opacity: 0 }}
          >
            Hi, I&apos;m Sadman. I build interactive, user-friendly web interfaces using JavaScript and modern web frameworks. Passionate about writing clean code and continuously learning new technologies.
          </motion.p>
         </div>
         <motion.div 
            className={HomeStyles.profileImageWrapper}
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.4, duration: 0.75 }}
          >
            <Image 
              src="/OreMeWatakshiUchiBoku.jpeg" 
              alt="Sadman" 
              width={300} 
              height={300} 
              className={HomeStyles.profileImg}
            />
          </motion.div>
        </div>
        <BackgroundAnimation />
      </motion.div> 
      <Projects />
      <Technologies />
      <Footer />
    </>
  );
}
