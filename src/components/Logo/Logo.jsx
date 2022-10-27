import React from "react";
import "./logo.css";

const Logo = ({ dark, copyright, footer }) => {
  return (
    <div className={`logo ${dark && "dark"} ${footer && "footerLogoStyling"}`}>
      Your Logo <br />
      {copyright && (
        <span>
          &#169; 2022 Company Name. {footer && <br />} All Rights Reserved
        </span>
      )}
    </div>
  );
};

export default Logo;
