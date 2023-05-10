import React, { useRef } from "react";
import logo from "../assets/logo.png";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navLinks = useRef(null);

  return (
    <nav className="flex justify-between items-center h-16 px-16 max-sm:px-8">
      <div className="logo">
        <img src={logo} alt="logo" className="w-8 aspect-square" />
      </div>
      <div
        ref={navLinks}
        className="nav-links max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:w-[100%] max-sm:h-[100%] max-sm:grid max-sm:place-items-center transition-[transform] duration-[0.5s] max-sm:translate-x-[-100vw] max-sm:bg-orange-500	"
      >
        <ul className="flex gap-5 max-sm:flex-col max-sm:items-center max-sm:justify-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
        <button
          className="hidden max-sm:block max-sm:absolute top-10 right-10"
          onClick={() => {
            if (
              !navLinks.current.classList.contains(
                "max-sm:translate-x-[-100vw]"
              )
            )
              navLinks.current.classList.add("max-sm:translate-x-[-100vw]");
          }}
        >
          <ImCross />
        </button>
      </div>
      <div className="toogleNav hidden max-sm:block">
        <button
          className="max-sm:block"
          onClick={() => {
            if (
              navLinks.current.classList.contains("max-sm:translate-x-[-100vw]")
            )
              navLinks.current.classList.remove("max-sm:translate-x-[-100vw]");
          }}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
