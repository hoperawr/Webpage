import React from "react";
import Background from "/src/assets/background.jpg";
import { useState } from "react";

const Photos_popup = () => {
  console.log("Photos_popup");
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div
      className="popup-window"
      style={{ display: isVisible ? "block" : "none" }}
    >
      <h1>This is a popup window!</h1>
      <button onClick={toggleVisibility}>Close</button>
    </div>
  );
};

export default Photos_popup;
