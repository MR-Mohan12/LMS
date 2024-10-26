import "./Desgin.css";
import Design from "../../assets/desgin.png";

const DesignPage = () => {
  return (
    <div className="desgin-page">
      <h1>For designers of every level</h1>
      <div className="desgin-section">
        <div className="desgin-img">
          <img src={Design} alt="DesginImg" />
        </div>
        <div className="desgin-text">
          <h1>Our VLSI Courses for Mid Career Professionals</h1>
          <p>
            The rapidly changing nature of jobs and workplace challenges have
            made realtime upskilling a fundamental needs for every professional
            today.
          </p>
          <p>
            Our transformation learning process will add real value in your
            professional career. Given the rapid shift and evolution in the
            professional landscape
          </p>

          <a href="#">
            Advance Courses <i className="fa-solid fa-arrow-right"></i>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default DesignPage;
