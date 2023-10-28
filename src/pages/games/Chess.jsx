import React, { useState, useEffect } from "react";
import Games_Navbar from "./Games_Navbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const headers = {
  Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
};

const Chess = (mode) => {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://lichess.org/api/account", {
        headers,
      }).then((res) => res.json());
      setResult(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://lichess.org/api/user/hoperawr/rating-history",
        {
          headers,
        }
      ).then((res) => res.json());
      setHistory(result);
    };
    fetchData();
  }, []);

  function get_data(arr) {
    var result = [];
    for (let x in arr) {
      result.push({ Points: arr[x][3] });
    }
    return result;
  }

  function render(mode) {
    if (history != null && result != null) {
      var bullet = get_data(history[0].points);
      var blitz = get_data(history[1].points);
      var rapid = get_data(history[2].points);
      let data = rapid;
      if (mode.mode == "bullet") {
        data = bullet;
      } else if (mode.mode == "blitz") {
        data = blitz;
      } else if (mode.mode == "rapid") {
        data = rapid;
      } else {
        return <div>ERROR</div>;
      }
      return (
        <div className="game_subcomponent">
          <nav className="chess_nav">
            <ul>
              <CustomLink
                to="/games/chess/bullet"
                className="links header-font-link"
              >
                Bullet: {result.perfs.bullet.rating}
              </CustomLink>
              <CustomLink
                to="/games/chess/blitz"
                className="links header-font-link"
              >
                Blitz: {result.perfs.blitz.rating}
              </CustomLink>
              <CustomLink
                to="/games/chess/rapid"
                className="links header-font-link"
              >
                Rapid: {result.perfs.rapid.rating}
              </CustomLink>
            </ul>
          </nav>
          <div className="game_graph">
            <ResponsiveContainer height="100%" width="80%">
              <LineChart
                data={data}
                margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
              >
                <Line
                  type="monotone"
                  dot={false}
                  dataKey="Points"
                  stroke="#8884d8"
                />
                <CartesianGrid stroke="#ccc" />
                <XAxis hide />
                <YAxis domain={["dataMin", "dataMax"]} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
  return (
    <div>
      <h1 className="component_header">Games</h1>
      <div className="game_main">
        <Games_Navbar />
        <div className="game_component">{render(mode)}</div>
      </div>
    </div>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive == to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default Chess;
