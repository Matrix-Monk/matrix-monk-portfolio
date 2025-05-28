import { assets } from "../../assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to open mobile menu
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  // Function to close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Add scroll event listener for navbar background change
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Navbar */}

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : "bg-transparent"
        }`}
      >
        {/* Left: Logo */}
        <a href="#top" className="z-10">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt=""
            className="w-28 cursor-pointer"
          />
        </a>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center z-0">
          <ul className="flex items-center gap-6 lg:gap-8 rounded-full px-8 py-2 bg-white bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent whitespace-nowrap">
            <li>
              <a className="font-Ovo" href="#top">
                Home
              </a>
            </li>
            <li>
              <a className="font-Ovo" href="#about">
                About me
              </a>
            </li>
            <li>
              <a className="font-Ovo" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="font-Ovo" href="#work">
                My work
              </a>
            </li>
            <li>
              <a className="font-Ovo" href="#contact">
                Contact me
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Theme toggle + Contact + Menu */}
        <div className="flex items-center gap-4 z-10">
          <button>
            <Image
              onClick={() => setIsDarkMode((prev) => !prev)}
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt=""
            />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ul
        ref={sideMenuRef}
        className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 right-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 ${
          isScroll
            ? "dark:bg-darkHover dark:text-white"
            : "dark:bg-darkHover dark:text-white"
        }`}
        style={{
          animation: isMenuOpen
            ? "slideIn 0.5s forwards"
            : "slideOut 0.5s forwards",
        }}
      >
        {/* Close Button */}
        <div className="absolute right-6 top-6" onClick={closeMenu}>
          <Image
            src={isDarkMode ? assets.close_white : assets.close_black}
            alt="Close Menu"
            className="w-5 cursor-pointer"
          />
        </div>

        <li>
          <a className="font-Ovo" href="#top" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a className="font-Ovo" href="#about" onClick={closeMenu}>
            About me
          </a>
        </li>
        <li>
          <a className="font-Ovo" href="#services" onClick={closeMenu}>
            Services
          </a>
        </li>
        <li>
          <a className="font-Ovo" href="#work" onClick={closeMenu}>
            My work
          </a>
        </li>
        <li>
          <a className="font-Ovo" href="#contact" onClick={closeMenu}>
            Contact me
          </a>
        </li>
      </ul>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
