import ProjectStyles from "../styles/projects.module.css";

import Image from "next/image";
import BackgroundAnimation from "./Background";
import BackgroundAnimation2 from "./Background2";

const Projects = () => {

  return (
    <div className={ProjectStyles.project}>
      <h1>Projects</h1>

      <div className={ProjectStyles.cardgroup}>
        <div className="card card1">
          <Image
            src="/StudyNook.png"
            alt="Picture of the author"
            width={500}
            height={300}
          />
          <h1>StudyNook</h1>
          <hr />
          <p>
            StudyNook is a specialized digital platform designed to streamline study space management. It allows users to browse available study rooms, view detailed room specifications, and seamlessly book rooms for their educational needs.
          </p>

          <div className={ProjectStyles.buttongroup}>
            <a
              href="https://github.com/SadmanG/B13-A9-StudyNook-Client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Repo</button>
            </a>
            <a
              href="https://studynook-client-sand.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Live</button>
            </a>
          </div>
        </div>
        <div className="card card1">
          <Image
            src="/SunCart.png"
            alt="Picture of the author"
            width={500}
            height={300}
          />
          <h1>SunCart</h1>
          <hr />
          <p>
            SunCart is a summer essentials store like an e-commerce platform, where users can view detailed products and order their necessary products after an easy sign-in / sign-up.
          </p>

          <div className={ProjectStyles.buttongroup}>
            <a
              href="https://github.com/SadmanG/B13-A8-SunCart"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Repo</button>
            </a>
            <a
              href="https://b13-a8-sun-cart-flax.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Live</button>
            </a>
          </div>
        </div>
        <div className="card card1">
          <Image
            src="/KeenKeeper.png"
            alt="Picture of the author"
            width={500}
            height={300}
          />
          <h1>KeenKeeper</h1>
          <hr />
          <p>
            Just as the name suggests, it is a webpage to keep one&apos;s track of communication, meeting and status with their friends. The website is well organized and has easy to use features.
          </p>

          <div className={ProjectStyles.buttongroup}>
            <a
              href="https://github.com/SadmanG/B13-A7-Keen-Keeper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Repo</button>
            </a>
            <a
              href="https://keen-keeper-taupe-tau.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Live</button>
            </a>
          </div>
        </div>
        <div className="card card1">
          <Image
            src="/GHIssueTrack.png"
            alt="Picture of the author"
            width={500}
            height={300}
          />
          <h1>GitHub Issue Tracker</h1>
          <hr />
          <p>
            This very front-end houses problems faced in GitHub and displays them considering their priority nicely on your screen. This project was made by me as a part of assignment on Programming Hero course.
          </p>

          <div className={ProjectStyles.buttongroup}>
            <a
              href="https://github.com/SadmanG/B13-A5-Github-Issue-Tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Repo</button>
            </a>
            <a
              href="https://b13-a5-github-issue-tracker-sadg.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Live</button>
            </a>
          </div>
        </div>
      </div>
      <BackgroundAnimation />
      <BackgroundAnimation2 />
    </div>
  );
};

export default Projects;
