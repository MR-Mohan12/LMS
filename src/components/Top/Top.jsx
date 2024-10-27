import "./Top.css";

const Top = () => {
  return (
    <div className="top-web">

      <div className="second-top">
        <div className="item-top">
        <a href="#">Internship</a>
        </div>
        <div className="separator">|</div>
        <div className="item-top">
          <a href="#">Free courses</a>
        </div>
        <div className="separator">|</div>
        <div className="item-top">
          <a href="#">Professional courses</a>
        </div>
        <div className="separator">|</div>
        <div className="item-top">
          <a href="#">Placements</a>
        </div>
        <div className="separator">|</div>
        <div className="item-top">
          <a href="#">Admission</a>
        </div>
      </div>

      <div className="third-top">
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
