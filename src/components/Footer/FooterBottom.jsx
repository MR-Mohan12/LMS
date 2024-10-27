import './Footer.css'
import fb from "../../assets/fb.png";
import insta from "../../assets/Insta.png";
import youtube from "../../assets/youtube.png";
import linkdin from "../../assets/linkdin.png";

const FooterBottom = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-right">
          <p>
            @ Copyright 2024 Skillvity, All right Reserved, Privacy and Terms
          </p>
        </div>

        <div className="footer-top-left">
          <div className="social-icons">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={youtube} alt="" />
            <img src={linkdin} alt="" />
            
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-1">
          <a>Physical Design Interview Questions</a>
          <a>Physical Design Course</a>
          <a>VLSI Physical Design Flow</a>
          <a>VLSI Training Institute in Hyderabad</a>
          <a href="#">SystemVerilog Assertions</a>
        </div>
        <div className="footer-bottom-2">
          <a href="#">Verilog Interview Questions</a>
          <a href="#">DFT Interview Questions</a>
          <a href="#">VLSI Interview Questions</a>
          <a href="#">SystemVerilog Interview Questions</a>
          <a href="#">SystemVerilog Course</a>
        </div>
        <div className="footer-bottom-3">
          <a href="#">VLSI Course online</a>
          <a href="#">ASIC Verification</a>
          <a href="#">UVM Verification</a>
          <a href="#">Systemverilog Tutorial</a>
          <a href="#">Internship in electronics</a>
        </div>
        <div className="footer-bottom-4">
          <a href="#"> VLSI Design</a>
          <a href="#"> VLSI projects</a>
          <a href="#"> VLSI System Design</a>
          <a href="#"> VLSI Internship in Bangalore</a>
        </div>
      </div>
    </div>
  )
}

export default FooterBottom
