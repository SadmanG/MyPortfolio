import React from "react";

import Link from "next/link";

import NavStyle from "../styles/nav.module.css";

import { motion } from "framer-motion";

const Nav = () => {
  return (
    <nav className={NavStyle.nav}>
      <motion.h1 drag>
        <motion.span
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            delay: 0.25,
            duration: 0.5,
            type: "spring",
            stiffness: 150,
          }}
        >
          Sadman Gergees
        </motion.span>
        
      </motion.h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <a href="https://docs.google.com/document/d/1sTAAT9xK3zpUNcoai8Xr8-TKIv8aUEEy/edit?usp=drive_link&ouid=109560157693979683346&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Resume</a>
        </li>
      </ul>

      <ul className={NavStyle.iconlinks}>
        <li>
          <a href="https://github.com/SadmanG" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="mailto:sadmangergees@gmail.com" target="_blank" rel="noopener noreferrer">
           <i className="far fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/sadman.gergees" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-facebook"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
