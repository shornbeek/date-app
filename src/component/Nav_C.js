import React, { Component } from 'react';
import { Link } from "react-router-dom";

// import Nav from "./components/Nav";

class Nav_C extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <nav className="navbar navbar-light ">
                    <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Home
        </Link>
        </li>
        <li className="nav-item">
                        <Link
                            to="/Find"
                            className={window.location.pathname === "/Find" ? "nav-link active" : "nav-link"}>
                            Find
        </Link>
        </li>
        <li className="nav-item">
        <Link
          to="/Match"
          className={window.location.pathname === "/Match" ? "nav-link active" : "nav-link"}
        >
          Match
        </Link>
        </li>
        <li className="nav-item">
        <Link
          to="/Profile"
          className={window.location.pathname === "/Profile" ? "nav-link active" : "nav-link"}
        >
          Profile
        </Link>
        </li>
        <li className="nav-item">
        <Link
          to="/Video"
          className={window.location.pathname === "/Video" ? "nav-link active" : "nav-link"}
        >
          Video
        </Link>
        </li>

</ul>
                    </nav>
                </div>
            </div>

        );
    }
}

export default Nav_C;
