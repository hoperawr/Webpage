import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_text">
        <span className="footer_header">get in touch.</span>
        <div className="footer_buttons">
          <a href="https://www.linkedin.com/in/hopeleong/">
            <img
              className="footer_button_image"
              src="/src/components/linkedin.jpg"
            ></img>
          </a>
          <a href="https://github.com/hoperawr">
            <img
              className="footer_button_image"
              src="/src/components/github.png"
            ></img>
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
