import React from "react";
import { Link } from "react-router-dom";

export default function NavBarF() {
  return (
    <div>
      <nav className="navbar navbar-nav sticky-top navbar-expand-md navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="showBook" className="navbar-brand">
                  Show books
                </Link>
              </li>
              <li className="nav-item">
                <Link to="incr" className="navbar-brand">
                  Increment
                </Link>
              </li>
              <li className="nav-item">
                <Link to="math" className="navbar-brand">
                  Maths-util
                </Link>
              </li>
              <li className="nav-item">
                <Link to="color" className="navbar-brand">
                  Colored-text
                </Link>
              </li>
              <li className="nav-item">
                <Link to="conditional" className="navbar-brand">
                Conditional
                </Link>
              </li>
              <li className="nav-item">
                <Link to="poet" className="navbar-brand">
                Poet
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
