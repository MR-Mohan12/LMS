import FooterBottom from "./FooterBottom";
import './FooterTop.css';
import arm from '../../assets/arm.png';
import rcm from '../../assets/risc.png';
import skillvity from '../../assets/skilvity.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='both-footer'>
     <div className="container">
      <div className="first">
        <div className="first_1">
          <img src={skillvity} alt="SkillvityLogo" />
          <p>Quick Links</p>
          <a href="#">Why Skillvity</a>
          <a href="#">Success Stories</a>
          <a href="#">Training Calender</a>
        </div>
        <div className="first_2">
          <p>Job Oriented VLSI Course</p>
          <a href="#">Advanced Embedded System Design Course - [ESD]</a>
          <a href="#">Advanced VLSI Design and Verification Course - [VLSI RN]</a>
          <a href="#">Advanced ASIC Verification Course - [VLSI VM]</a>
          <a href="#">Advanced ASIC Design and DFT Course - [VLSI DFT]</a>
          <a href="#">Advanced Physical Design Course [VLSI PD]</a>
        </div>
        <div className="first_3">
          <p>Online VLSI Course</p>
          <a href="#">Online VLSI Design Course</a>
          <a href="#">Online VLSI Verification Course</a>
        </div>
        <div className="first_4">
          <p>Part Time Programs</p>
          <a href="#">Advanced ASIC Verification</a>
          <a href="#">Course [VLSI VM-PT]</a>
          <a href="#">VLSI Design Course [VLSI DM-PT]</a>
        </div>
      </div>

      <div className="second">
        <div className="second-text"> </div>
          <div className="second_1">
            <p>VLSI Internship</p>
            <p>Academia</p>
          </div>
          <div className="second_2">
            <p>Online VLSI Course</p>
            <a href="#">Free VLSI Courses</a>
            <a href="#">VLSI jobs for freshers</a>
            <a href="#">Free VLSI Projects</a>
            <a href="#">Free VLSI Workshop</a>
            <a href="#">Maven Podc</a>
          </div>
          <div className="second_3">
            <p>Skillvity Placements</p>
            <p>Skillvity Career</p>
            <p>Contact Us</p>

        </div>
      </div>

      <div className="third">
        <div className="third-text"></div>
        <div className="third_1">
          <p>Global Training Partner</p>
          <div className="third_1-container">
            <div className="third_1-img1">
              <img src={arm} alt="ARM Programs" />
              <p>ARM <br />Programs</p>
            </div>
            <div className="third_1-img2">
              <img src={rcm} alt="RISC V Programs" />
              <p>RISC V <br />Programs</p>
            </div>
          </div>
        </div>

        <div className="third_2">
          <p>Global Programs</p>
          <p>Corporate</p>
          <a href="#">Hire Talent</a>
          <a href="#">Corporate Training</a>
        </div>
      </div>

      <div className="fourth">
        <div className="fourth-first">
          <button className="fourth-btn">Apply Now</button>
          <p>Download the Skillvity <br />learning App</p>
          <a href="#">
          <FontAwesomeIcon icon={faMapMarkerAlt} />  South Taluk, 21/1A, III Floor, MS Plaza,
            Gottigere Uttarahali Hobli,
            Bannerghatta Main Rd, Bengaluru,
            Karnataka 5
          </a>
        </div>
      </div>



  </div>
  <hr />
  <FooterBottom/>
  </div>
  );
};

export default Footer;
