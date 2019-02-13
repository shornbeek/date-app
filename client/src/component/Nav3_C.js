import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Nav3_C extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                     <nav className="navbar navbar-light ">
                        <ul className="nav nav-tabs">
                            <Link to="/Profile" className={window.location.pathname === "/Profile" ? "nav-link active" : "nav-link"}>
                                Profile
                            </Link>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <Link to="/Find" className={window.location.pathname === "/Find" ? "nav-link active" : "navbar-right nav-link" }>
                                Find
                            </Link>
                        </ul>
                    </nav> 
                </div>
            </div>

        );
    }
}

export default Nav3_C;
