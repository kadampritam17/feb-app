import React from "react";
import { Link } from "react-router-dom";

export default function BookRouteF() {
  return (
    <div>
      <div >
        <nav className="navbar navbar-nav sticky-top navbar-expand-md navbar-dark bg-primary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="showBook" className="navbar-brand">
                    Show books
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
