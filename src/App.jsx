import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import Games from "./pages/games/Games";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Sports from "./pages/sports/Sports";
import Travel from "./pages/travel/Travel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Chess from "./pages/games/Chess";
import TFT from "./pages/games/TFT";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="component">
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/travel" element={<Travel />}></Route>
          <Route path="/sports" element={<Sports />}></Route>
          <Route path="/games" element={<Games />}></Route>
          <Route path="/games/chess" element={<Chess mode={"rapid"} />}></Route>
          <Route path="/games/TFT" element={<TFT />}></Route>
          <Route
            path="/games/chess/blitz"
            element={<Chess mode={"blitz"} />}
          ></Route>
          <Route
            path="/games/chess/rapid"
            element={<Chess mode={"rapid"} />}
          ></Route>
          <Route
            path="/games/chess/bullet"
            element={<Chess mode={"bullet"} />}
          ></Route>
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
