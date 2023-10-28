import { React, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Topojson from "./topojson.json";

const MapChart = () => {
  const [currCountry, setCurrCountry] = useState("Indonesia");
  const [isVisible, setIsVisible] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const toggleVisibility = (country) => () => {
    if (country in images) {
      setIsVisible(!isVisible);
      setCurrCountry(country);
      setCurrentPhotoIndex(0);
    }
  };
  const navigateToNextPhoto = () => {
    if (currentPhotoIndex + 1 >= images[currCountry].length) {
      setCurrentPhotoIndex(0);
    } else {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  };

  const navigateToPreviousPhoto = () => {
    if (currentPhotoIndex <= 0) {
      setCurrentPhotoIndex(images[currCountry].length - 1);
    } else {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    }
  };
  var images = {
    Indonesia: [
      "/src/pages/travel/photos/indo_1.jpg",
      "/src/pages/travel/photos/indo_2.jpg",
      "/src/pages/travel/photos/indo_3.jpg",
      "/src/pages/travel/photos/indo_4.jpg",
    ],
    Japan: [
      "/src/pages/travel/photos/japan_1.jpg",
      "/src/pages/travel/photos/japan_2.jpg",
      "/src/pages/travel/photos/japan_3.jpg",
    ],
    "South Korea": [
      "/src/pages/travel/photos/korea_1.jpg",
      "/src/pages/travel/photos/korea_2.jpg",
      "/src/pages/travel/photos/korea_3.jpg",
      "/src/pages/travel/photos/korea_4.jpg",
    ],
    Malaysia: [
      "/src/pages/travel/photos/malaysia_1.jpg",
      "/src/pages/travel/photos/malaysia_2.jpg",
    ],
    Nepal: [
      "/src/pages/travel/photos/nepal_1.jpg",
      "/src/pages/travel/photos/nepal_2.jpg",
      "/src/pages/travel/photos/nepal_3.jpg",
      "/src/pages/travel/photos/nepal_4.jpg",
      "/src/pages/travel/photos/nepal_5.jpg",
      "/src/pages/travel/photos/nepal_6.jpg",
      "/src/pages/travel/photos/nepal_7.jpg",
    ],
    Philippines: [
      "/src/pages/travel/photos/philippines_1.jpg",
      "/src/pages/travel/photos/philippines_2.jpg",
      "/src/pages/travel/photos/philippines_3.jpg",
    ],
    Taiwan: [
      "/src/pages/travel/photos/taiwan_1.jpg",
      "/src/pages/travel/photos/taiwan_2.jpg",
      "/src/pages/travel/photos/taiwan_3.jpg",
      "/src/pages/travel/photos/taiwan_4.jpg",
      "/src/pages/travel/photos/taiwan_5.jpg",
    ],
    Thailand: [
      "/src/pages/travel/photos/thailand_1.jpg",
      "/src/pages/travel/photos/thailand_2.jpg",
      "/src/pages/travel/photos/thailand_3.jpg",
      "/src/pages/travel/photos/thailand_4.jpg",
      "/src/pages/travel/photos/thailand_5.jpg",
      "/src/pages/travel/photos/thailand_6.jpg",
    ],
    Vietnam: [
      "/src/pages/travel/photos/vietnam_1.jpg",
      "/src/pages/travel/photos/vietnam_2.jpg",
      "/src/pages/travel/photos/vietnam_3.jpg",
      "/src/pages/travel/photos/vietnam_4.jpg",
      "/src/pages/travel/photos/vietnam_5.jpg",
      "/src/pages/travel/photos/vietnam_6.jpg",
      "/src/pages/travel/photos/vietnam_7.jpg",
    ],
  };

  function render_countries(geo) {
    if (geo.properties.name in images) {
      return (
        <Geography
          key={geo.rsmKey}
          onClick={toggleVisibility(geo.properties.name)}
          geography={geo}
          stroke="#232323"
          strokeWidth="0.3"
          className="focus:outline-none"
          style={{
            default: { outline: "none", fill: "#5d71c9" },
            hover: { outline: "none", fill: "#4a5aa1" },
            pressed: { outline: "none", fill: "#303b6b" },
          }}
        />
      );
    } else {
      return (
        <Geography
          key={geo.rsmKey}
          onClick={toggleVisibility(geo.properties.name)}
          geography={geo}
          stroke="#232323"
          strokeWidth="0.3"
          className="focus:outline-none"
          style={{
            default: { outline: "none", fill: "#e8cdca" },
            hover: { outline: "none", fill: "#cfb8b6" },
            pressed: { outline: "none", fill: "#ad9997" },
          }}
        />
      );
    }
  }

  return (
    <div>
      <div
        style={{
          width: "auto",
          height: "75vh",
          position: "fixed",
          top: "50%",
          left: "50%",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          transform: "translate(-50%, -50%)",
          display: isVisible ? "grid" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <button
            className="popup_button_arrow_left"
            onClick={navigateToPreviousPhoto}
          >
            <img className="popup_arrow" src="/src/assets/left_arrow.png"></img>
          </button>
          <img
            className="popup_image"
            src={images[currCountry][currentPhotoIndex]}
          ></img>
          <button
            className="popup_button_arrow_right"
            onClick={navigateToNextPhoto}
          >
            <img
              className="popup_arrow"
              src="/src/assets/right_arrow.png"
            ></img>
          </button>
        </div>
        <button
          className="popup_button"
          onClick={toggleVisibility(currCountry)}
        >
          Close
        </button>
      </div>

      <ComposableMap
        projectionConfig={{
          scale: 400,
          center: [100, 10],
        }}
        style={{ height: "100%", width: "100%" }}
      >
        <Geographies geography={Topojson}>
          {({ geographies }) => geographies.map((geo) => render_countries(geo))}
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
