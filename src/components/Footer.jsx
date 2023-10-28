import React from "react";
import linkedin from "/src/components/linkedin.jpg";
import github from "/src/components/github.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_text">
        <span className="footer_header">get in touch.</span>
        <div className="footer_buttons">
          <a href="https://www.linkedin.com/in/hopeleong/">
            <img className="footer_button_image" src={linkedin}></img>
          </a>
          <a href="https://github.com/hoperawr">
            <img className="footer_button_image" src={github}></img>
          </a>
        </div>

        <div className="footer_quote">
          "The only limit to our realization of tomorrow will be our doubts of
          today." - Franklin D. Roosevelt
        </div>
      </div>
    </div>
  );
};

export default Footer;
