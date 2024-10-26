import domain from "../../assets/domain-removebg-preview.png";
import "./Offering.css";

const OfferingCard = () => {
  return (
    <>
       <div className="card-container">
        <div className="card">
          <div className="img">

            <div className="card-header">
            <span className="tag">Domain</span>
          </div>

            <img src={domain} alt="Course Image" className="card-image" />
          </div>

          <div className="card-body">
            <h3>RISC-V Design & Verification</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Turpis amet condimentum
              iaculis non posuere.
            </p>
            <a href="#" className="explore-button">
              Explore Course →
            </a>
          </div>
        </div>

        <div className="card">
          <div className="img">
            <div className="card-header">
            <span className="tag">Domain</span>
          </div>
            <img src={domain} alt="Course Image" className="card-image" />
          </div>
          <div className="card-body">
            <h3>RISC-V Design & Verification</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Turpis amet condimentum
              iaculis non posuere.
            </p>
            <a href="#" className="explore-button">
              Explore Course →
            </a>
          </div>
        </div>

        <div className="card">
       
          <div className="img">
            <div className="card-header">
            <span className="tag">Domain</span>
          </div>

            <img src={domain} alt="Course Image" className="card-image" />
          </div>
          <div className="card-body">
            <h3>RISC-V Design & Verification</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Turpis amet condimentum
              iaculis non posuere.
            </p>
            <a href="#" className="explore-button">
              Explore Course →
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default OfferingCard
