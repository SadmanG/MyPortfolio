import React from "react";

import FooterStyles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={FooterStyles.footer}>
      <hr />
      <div className={FooterStyles.container}>
        <div className="firsttext">
          <h2>Call</h2>
          <p>+8801714-464544</p>
        </div>
        <div className="secondtext">
          <h2>Email</h2>
          <p>sadmangergees@gmail.com</p>
        </div>
      </div>
      <div className={FooterStyles.secondcontainer}>
        <p>Innovating one project at a time</p>
        <ul>
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
      </div>
    </div>
  );
};

export default Footer;
