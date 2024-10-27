import { useState, useEffect } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="logo">
        <a href="#"><img src={logo} alt="LogoImg" /></a>
      </div>

      
      <div className="hamburger" onClick={toggleMenu}>
        <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
      </div>

      
      <div className={`ul ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Home</a><i className="fa-solid fa-chevron-down"></i></li>
          <li><a href="#">Courses</a><i className="fa-solid fa-chevron-down"></i></li>
          <li><a href="#">Blogs</a><i className="fa-solid fa-chevron-down"></i></li>
          <li><a href="#">Placement</a><i className="fa-solid fa-chevron-down"></i></li>
          <li><a href="#">Resources</a><i className="fa-solid fa-chevron-down"></i></li>
          <li><a href="#">Institutional</a><i className="fa-solid fa-chevron-down"></i></li>
          <li><a href="#">About Us</a><i className="fa-solid fa-chevron-down"></i></li>
          <li className='btns btn enquire-now'><a href="#">Enquire Now</a></li>
          <li className='btns btn learner-login'><a href="#">Learner Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
