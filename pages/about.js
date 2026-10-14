import React, { useState } from "react";
import AboutStyles from "../styles/about.module.css";
import { motion } from "framer-motion";


import Year from "../components/Year";

const About = () => {




  const [year, setYear] = useState([
    {
      id: "1",
      numyear: "2005",
      para: "Date of Birth",
    },
    {
      id: "2",
      numyear: "2022",
      para: "Completed Secondary School Certificate",
    },
    {
      id: "3",
      numyear: "2024",
      para: "Completed Higher School Certificate",
    },
    {
      id: "4",
      numyear: "2025",
      para: "Started B.Sc. in\nCSE at IIUC",
    },
    {
      id: "5",
      numyear: "2026",
      para: "Completed a six-month long course from Programming Hero",
    },
  ]);
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: "100vw", opacity: 0 }}
      transition={{
        delay: 0.15,
        duration: 0.5,
        type: "spring",
        stiffness: 130,
      }}
      exit="exit"
      variants={{
        exit: {
          x: "-100vw",
          transition: { ease: "easeInOut" },
        },
      }}
      className={AboutStyles.about}
    >
      <h1>About Me</h1>
      <div className={AboutStyles.text}>
        <p>
          <p>Gender     : MALE</p>
          <p>Religion   : ISLAM</p>
          <p>Nationality: BANGLADESHI</p>
        </p>

        <div className={AboutStyles.yearslist}>
          {year.map((y) => {
            return <Year title={y.numyear} para={y.para} key={y.id} />;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
