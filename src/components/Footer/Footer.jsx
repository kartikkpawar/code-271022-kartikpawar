import Logo from "components/Logo/Logo";
import React from "react";
import "./footer.css";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <Link to="home" smooth={true} duration={300} className="footerMenuItem">
        <Logo dark copyright footer />
      </Link>

      <div className="footerMenu">
        <Link
          to="explore"
          smooth={true}
          duration={300}
          className="footerMenuItem"
        >
          Explore
        </Link>
        <Link
          to="aboutus"
          smooth={true}
          duration={300}
          className="footerMenuItem"
        >
          About Us
        </Link>

        <div className="footerMenuItem">
          Cities <BsChevronDown className="downIcon" />
        </div>
        <div className="footerMenuItem footerOutline">Call</div>
      </div>
    </footer>
  );
};

export default Footer;
