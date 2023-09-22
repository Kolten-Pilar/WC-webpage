import React from "react";
import WC from "../assets/images/WC.jpg";
import cartIcon from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";

function Header() {

  // Function to scroll to the "About" section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav id="header" className="bg-black text-white">
      <div className="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-2 container">
        <div className="logo-wrapper pl-4 flex items-center">
          <Link
            to={"/"}
            className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          >
            <img src={WC} alt="logo" className="h-20 w-40 object-cover" />
          </Link>
        </div>
        <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
          <Link to="/" className="text-xl">
            Home
          </Link>
          <Link to="#about" className="text-xl" onClick={scrollToAbout}>
            About
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link to="/cart">
            <img src={cartIcon} alt="cart" />
          </Link>
          <Link to='/login' >Log In</Link>
          <Link to='/register'>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
