import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import translate from 'i18n/translate';

const NavItem = ({ name, path, location }) => {
  console.log(path);
  return (
    <li className={`nav-item ${location === path ? 'active' : ''}`}>
      <Link to={path} className="nav-link">
        {name}
      </Link>
    </li>
  );
};

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-sm navbar-light center-container">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavItem
            name="Početna"
            path="/"
            location={location.pathname}
          ></NavItem>
          <NavItem
            name={translate('aboutUs')}
            path="/about"
            location={location.pathname}
          ></NavItem>
          <NavItem
            name="Struktura"
            path="/structure"
            location={location.pathname}
          ></NavItem>
          <NavItem
            name="Članovi"
            path="/members"
            location={location.pathname}
          ></NavItem>

          <NavItem
            name="Projekti"
            path="/projects"
            location={location.pathname}
          ></NavItem>
          <NavItem
            name="Kontakt"
            path="/"
            location={location.pathname}
          ></NavItem>
          <NavItem
            name="Uloguj se"
            path="/login"
            location={location.pathname}
          ></NavItem>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
