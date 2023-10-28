import { React, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Topojson from "./topojson.json";
import indo1 from "/src/pages/travel/indo_1.jpg";
import indo2 from "/src/pages/travel/indo_2.jpg";
import indo3 from "/src/pages/travel/indo_3.jpg";
import indo4 from "/src/pages/travel/indo_4.jpg";
import japan1 from "/src/pages/travel/japan_1.jpg";
import japan2 from "/src/pages/travel/japan_2.jpg";
import japan3 from "/src/pages/travel/japan_3.jpg";
import korea1 from "/src/pages/travel/korea_1.jpg";
import korea2 from "/src/pages/travel/korea_2.jpg";
import korea3 from "/src/pages/travel/korea_3.jpg";
import korea4 from "/src/pages/travel/korea_4.jpg";
import malaysia1 from "/src/pages/travel/malaysia_1.jpg";
import malaysia2 from "/src/pages/travel/malaysia_2.jpg";
import nepal1 from "/src/pages/travel/nepal_1.jpg";
import nepal2 from "/src/pages/travel/nepal_2.jpg";
import nepal3 from "/src/pages/travel/nepal_3.jpg";
import nepal4 from "/src/pages/travel/nepal_4.jpg";
import nepal5 from "/src/pages/travel/nepal_5.jpg";
import nepal6 from "/src/pages/travel/nepal_6.jpg";
import nepal7 from "/src/pages/travel/nepal_7.jpg";
import phil1 from "/src/pages/travel/philippines_1.jpg";
import phil2 from "/src/pages/travel/philippines_2.jpg";
import phil3 from "/src/pages/travel/philippines_3.jpg";
import taiwan1 from "/src/pages/travel/taiwan_1.jpg";
import taiwan2 from "/src/pages/travel/taiwan_2.jpg";
import taiwan3 from "/src/pages/travel/taiwan_3.jpg";
import taiwan4 from "/src/pages/travel/taiwan_4.jpg";
import taiwan5 from "/src/pages/travel/taiwan_5.jpg";
import thailand1 from "/src/pages/travel/thailand_1.jpg";
import thailand2 from "/src/pages/travel/thailand_2.jpg";
import thailand3 from "/src/pages/travel/thailand_3.jpg";
import thailand4 from "/src/pages/travel/thailand_4.jpg";
import thailand5 from "/src/pages/travel/thailand_5.jpg";
import thailand6 from "/src/pages/travel/thailand_6.jpg";
import vietnam1 from "/src/pages/travel/vietnam_1.jpg";
import vietnam2 from "/src/pages/travel/vietnam_2.jpg";
import vietnam3 from "/src/pages/travel/vietnam_3.jpg";
import vietnam4 from "/src/pages/travel/vietnam_4.jpg";
import vietnam5 from "/src/pages/travel/vietnam_5.jpg";
import vietnam6 from "/src/pages/travel/vietnam_6.jpg";
import vietnam7 from "/src/pages/travel/vietnam_7.jpg";
import left_arrow from "/src/pages/travel/left_arrow.png";
import right_arrow from "/src/pages/travel/right_arrow.png";

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
    Indonesia: [indo1, indo2, indo3, indo4],
    Japan: [japan1, japan2, japan3],
    "South Korea": [korea1, korea2, korea3, korea4],
    Malaysia: [malaysia1, malaysia2],
    Nepal: [nepal1, nepal2, nepal3, nepal4, nepal5, nepal6, nepal7],
    Philippines: [phil1, phil2, phil3],
    Taiwan: [taiwan1, taiwan2, taiwan3, taiwan4, taiwan5],
    Thailand: [
      thailand1,
      thailand2,
      thailand3,
      thailand4,
      thailand5,
      thailand6,
    ],
    Vietnam: [
      vietnam1,
      vietnam2,
      vietnam3,
      vietnam4,
      vietnam5,
      vietnam6,
      vietnam7,
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
            <img className="popup_arrow" src={left_arrow}></img>
          </button>
          <img
            className="popup_image"
            src={images[currCountry][currentPhotoIndex]}
          ></img>
          <button
            className="popup_button_arrow_right"
            onClick={navigateToNextPhoto}
          >
            <img className="popup_arrow" src={right_arrow}></img>
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
