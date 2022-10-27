import Logo from "components/Logo/Logo";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import { BsChevronDown } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-scroll";
import "../Footer/footer.css";

const Navbar = () => {
  const [darkNav, setDarkNav] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const listenScrollEvent = () => {
    window.screen.availHeight - 150 < window.scrollY
      ? setDarkNav(true)
      : setDarkNav(false);
  };
  const listenScreenSize = () => {
    if (window.innerWidth > 1100) {
      setMobileView(false);
      return setNavOpen(false);
    } else {
      return setMobileView(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    window.addEventListener("resize", listenScreenSize);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
      window.removeEventListener("resize", listenScreenSize);
    };
  }, []);

  const toggle = () => setNavOpen(!navOpen);
  return (
    <>
      {mobileView && !navOpen && (
        <GiHamburgerMenu className="hamBurger" onClick={toggle} />
      )}
      <nav className={`${!navOpen && "navClose"} `}>
        {mobileView && navOpen && (
          <div className="closeNav" onClick={toggle}>
            <MdOutlineCancel />
          </div>
        )}
        <Link to="home" smooth={true} duration={300} className="menuItem">
          <Logo dark={darkNav && !mobileView} />
        </Link>

        <div className="menu">
          <Link
            to="explore"
            smooth={true}
            duration={300}
            className={`${
              darkNav && !mobileView ? "footerMenuItem" : "menuItem"
            }`}
          >
            Explore
          </Link>

          <Link
            to="aboutus"
            smooth={true}
            duration={300}
            className={`${
              darkNav && !mobileView ? "footerMenuItem" : "menuItem"
            }`}
          >
            About Us
          </Link>

          <div
            className={`${
              darkNav && !mobileView ? "footerMenuItem" : "menuItem"
            }`}
          >
            Cities <BsChevronDown className="downIcon" />
          </div>
          <div
            className={`${
              darkNav && !mobileView
                ? "footerMenuItem footerOutline"
                : "menuItem outline"
            }`}
          >
            Call
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
