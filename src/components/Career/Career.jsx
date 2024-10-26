import "./Career.css";
import Learn from "../../assets/Learn.png";
import Achieve from "../../assets/Achieve.png";
import Hired from "../../assets/Hired.png";

const Career = () => {
  return (
    <div className="career">
      <h1>Start Transforming your VLSI Design Career Today</h1>

      <div className="content-career">
        <div className="career-about">
          <div>
            <img src={Learn} alt="ImgLearn" />
            <h1>Learn</h1>
            <p>Lorem ipsum dipsum Lorem ipsum dipsum</p>
          </div>
          <div>
            <img src={Achieve} alt="ImgAchieve" />
            <h1>Achieve</h1>
            <p>Lorem ipsum dipsum Lorem ipsum dipsum</p>
          </div>
          <div>
            <img src={Hired} alt="ImgGetHired" />
            <h1>Get hired</h1>
            <p>Lorem ipsum dipsum Lorem ipsum dipsum</p>
          </div>
        </div>
        <div className="counsel-btn">
          <button>
            Free Counselling <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Career;
