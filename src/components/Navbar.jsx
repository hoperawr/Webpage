import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="site-title">
        <Link to="/" className="header-font-link">
          Hope
        </Link>
      </div>
      <ul>
        <CustomLink to="/about" className="links header-font-link">
          About
        </CustomLink>
        <CustomLink to="/projects" className="links header-font-link">
          Projects
        </CustomLink>
        <CustomLink to="/travel" className="links header-font-link">
          Travel
        </CustomLink>
        <CustomLink to="/sports" className="links header-font-link">
          Sports
        </CustomLink>
        <CustomLink to="/games" className="links header-font-link">
          Games
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

export default Navbar;
