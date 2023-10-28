import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Games_Navbar = () => {
  return (
    <nav className="game_nav">
      <ul>
        <CustomLink
          to="/games/chess"
          className="game_nav_link header-font-link"
        >
          Chess
        </CustomLink>
        <CustomLink to="/games/TFT" className="game_nav_link header-font-link">
          Teamfight Tactics
        </CustomLink>
      </ul>
    </nav>
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

export default Games_Navbar;
