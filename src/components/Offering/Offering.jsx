import "./Offering.css";
import OfferingCard from "./OfferingCard";


const Offering = () => {
  return (
    <div className="offerings-container">
      <h2>Our Offerings</h2>

      <div className="tabs">
        <p>RTL Design</p>
        <p>RTL Verification</p>
        <p>Testing & Timing</p>
        <p className="active">Domain</p>
      </div>
      <hr />
             <OfferingCard/>
     
    </div>
  );
};

export default Offering;
