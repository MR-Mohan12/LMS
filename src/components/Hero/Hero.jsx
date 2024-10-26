// import React from 'react'
import "./Hero.css";
import SkillAbout from "./SkillAbout";

const Hero = () => {
  return (
    <>
    <div className="hero">
      <div className="head">
        <h1>
          “Learn with <span>Leaders</span>” <br />
          and &ldquo;Learn from <span>trainers</span>  <br />
          with 10+ years of industry <br />
          experience.&ldquo;
        </h1>
        <p>
          Join our Professional Courses: 360° Training covering theory, labs,
          <br />
          practical projects, aptitude, resume building, interview preparation,
          <br />
          and placement assistance
        </p>
      </div>
      <div className="hero-buttons">
        <button>Explore Course <i className="fa-solid fa-arrow-right"></i>
        </button>
        <button>View Recent Placements</button>
      </div>
    </div>

    <div className="skillabout">
      <SkillAbout/>
    </div>
    </>
  );
};

export default Hero;
