import React, { Component } from 'react';
// import Nav_C from "./Nav_C";
import "./styleFind.css";

class Find_C extends Component {
    render() {
        return (
           
            <div className="App">
                <div className="container">
                {/* <Nav_C/> */}
                    <img src="http://reductress.com/wp-content/uploads/2016/10/woman-coffee-820x500.jpg" alt="Smiley face" width="100%" />


                    <div className="card mb-4">
                        <div className="card-header">
                            {/* <button>Wink</button> */}

                        </div>
                        <div className="card-body">
                            <div className="content">
                                <ul>
                                    <li>
                                        <strong>Name:</strong>
                                    </li>
                                    <li>
                                        <strong>Occupation:</strong>
                                    </li>
                                    <li>
                                        <strong>Location:</strong>
                                    </li>
                                </ul>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    {/* <button>No</button> */}
                                    <div class="toggle">
                                        <input type="checkbox"  />
                                        <span class="button"></span>
                                        <span class="label">+</span>
                                    </div>

                                </div>
                                <div class="col-6">
                                    {/* <button>Yes</button> */}
                                    <div class="toggle">
                                        <input type="checkbox"  />
                                        <span class="button"></span>
                                        <span class="label">–</span>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>


                </div>

            </div>

        );
    }
}

export default Find_C;