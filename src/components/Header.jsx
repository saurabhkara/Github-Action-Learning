import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <NavLink to="/" className="no-underline">
              <h1>World Atlas</h1>
            </NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/" className="no-underline">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="no-underline">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="no-underline">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/country" className="no-underline">
                  Country
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
