import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
      <Fragment>
        <nav>
          <div className="nav-wrapper grey darken-4">
            <div className="container">
              <Link to="/" className="brand-logo">
                Rick and Morty
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/">Personajes</Link>
                </li>
                <li>
                  <a href="badges.html">Planetas</a>
                </li>
                <li>
                  <a href="collapsible.html">Episodios</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div style={{ padding: "0 50px", marginTop: "50px" }}>{props.children}</div>
      </Fragment>
    );
}

export default Navbar

