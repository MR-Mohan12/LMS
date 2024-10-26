import "./Top.css";

const Top = () => {
  return (
    <div className="top">

      <div className="second">
        <div className="item">
        <a href="#">Internship</a>
        </div>
        <div className="separator">|</div>
        <div className="item">
          <a href="#">Free courses</a>
        </div>
        <div className="separator">|</div>
        <div className="item">
          <a href="#">Professional courses</a>
        </div>
        <div className="separator">|</div>
        <div className="item">
          <a href="#">Placements</a>
        </div>
        <div className="separator">|</div>
        <div className="item">
          <a href="#">Admission</a>
        </div>
      </div>

      <div className="third">
        <i className="fa-solid fa-envelope email"></i>
        <a href="mailto:lorem@gmail.com">lorem@gmail.com</a>
        <div className="separator">|</div>
        <i className="fa-solid fa-phone"> </i>
        <a href="tel:08089096300">08089096300</a>

        <div className="separator">|</div>
        <i className="fa-brands fa-whatsapp "></i>
        <a href="tel:+917406479555">+91 74064 79555</a>
      </div>
    </div>
  );
};

export default Top;
