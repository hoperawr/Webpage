import React from "react";
import Games_Navbar from "./Games_Navbar";

const TFT = () => {
  return (
    <div>
      <h1 className="component_header">Games</h1>
      <div className="game_main">
        <Games_Navbar />
        <div className="game_component">
          <div className="tft_image_box">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                className="tft_image"
                src={"/src/pages/games/tft_2.png"}
              ></img>
            </div>
            <img className="tft_image" src={"/src/pages/games/tft_1.png"}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TFT;
