import  { useState, useEffect } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

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

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="logo">
        <a href="#"><img src={logo} alt="LogoImg" /></a>
      </div>
      <div className="ul">
        <ul>
          <li><a href="#">Home</a><i className="fa-solid fa-chevron-down"></i></li>
          <li><a href="#">Courses</a><i className="fa-solid fa-chevron-down"></i></li>
          <li><a href="#">Blogs</a><i className="fa-solid fa-chevron-down"></i></li>
          <li><a href="#">Placement</a><i className="fa-solid fa-chevron-down"></i></li>
          <li><a href="#">Resources</a><i className="fa-solid fa-chevron-down"></i></li>
          <li><a href="#">Institutional</a><i className="fa-solid fa-chevron-down"></i></li>
          <li><a href="#">About Us</a><i className="fa-solid fa-chevron-down"></i></li>
        </ul>
      </div>
      <div className="btns">
        <button>Enquire Now</button>
        <button>Learner Login</button>
      </div>
    </nav>
  );
};

export default Navbar;



// import "./Navbar.css";
// import logo from "../../assets/logo.png";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//       <a href="#"><img src={logo} alt="LogoImg" /></a>  
//       </div>
//       <div className="ul">
//         <ul>
//           <li>
//             <a href="#">Home</a> <i className="fa-solid fa-chevron-down"></i>
//           </li>
//           <li>
//             <a href="#">Courses </a>
//             <i className="fa-solid fa-chevron-down"></i>
//           </li>
//           <li>
//             <a href="#">Blogs</a> <i className="fa-solid fa-chevron-down"></i>
//           </li>
//           <li>
//             <a href="#">Placement </a>{" "}
//             <i className="fa-solid fa-chevron-down"></i>
//           </li>
//           <li>
//             <a href="#"> Resources </a>{" "}
//             <i className="fa-solid fa-chevron-down"></i>
//           </li>
//           <li>
//             <a href="#">Institutional </a>{" "}
//             <i className="fa-solid fa-chevron-down"></i>
//           </li>
//           <li>
//             <a href="#"> About Us </a>
//             <i className="fa-solid fa-chevron-down"></i>
//           </li>
//         </ul>
//       </div>
//       <div className="btns">
//         <button>Enquire Now</button>
//         <button>Learner Login</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;