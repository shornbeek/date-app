
import React, { Component } from 'react';
// import Nav from "./components/Nav";

class Profile_C extends Component {
    render() {
        return (
           
         

            <div className="App">
                <div className="container">
                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Smiley face" width="100%" />

                    <div className="card mb-4">
                        <div className="card-header">
                            <button>Find Love</button>

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
                            <button>Connections</button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Profile_C;