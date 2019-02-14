
import React, { Component } from 'react';
// import Nav2_C from "./Nav2_C";
import Nav3_C from "./Nav3_C";
import axios from "axios";



class MatchCard_C extends Component {

    state = {
        userId: localStorage.getItem("userId"),
        matches: []
    }

    componentDidMount = () => {
        console.log(this.state.userId);
        axios.post("/matches/create", {
            id: this.state.userId
        }).then(() => {
            axios.get("/matches/find", {
                userId: this.state.userId
            }).then(result => {
                this.setState({matches: result.data});
                console.log(result.data);
            });
        });
    }

    render() {
        return (

            <div className="App">
                <div className="container">
                <Nav3_C/>
                    <div className="row">
                    {/* <Nav2_C/> */}
                   

                        <div className="card mb-4">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-4">
                                        <img src="https://www.wxxv25.com/wp-content/uploads/2019/02/img_1182_copy_2_7b3ebba530b1f643cd6fad6490bb63d9-10-1.jpg" alt="Smiley face" width="100%" />

                                    </div>
                                    <div className="col-8">
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
                                    </div>
                                </div>
                            </div>
                            <button>Video Call</button>
                        </div>
                    </div>

                                    <div className="container">
                    <div className="row">
                        <div className="card mb-4">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-4">
                                        <img src="https://www.wxxv25.com/wp-content/uploads/2019/02/img_1182_copy_2_7b3ebba530b1f643cd6fad6490bb63d9-10-1.jpg" alt="Smiley face" width="100%" />

                                    </div>
                                    <div className="col-8">
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
                                    </div>
                                </div>
                            </div>
                            <button>Video Call</button>
                        </div>
                    </div>

                                    <div className="container">
                    <div className="row">
                        <div className="card mb-4">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-4">
                                        <img src="https://www.wxxv25.com/wp-content/uploads/2019/02/img_1182_copy_2_7b3ebba530b1f643cd6fad6490bb63d9-10-1.jpg" alt="Smiley face" width="100%" />

                                    </div>
                                    <div className="col-8">
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
                                    </div>
                                </div>
                            </div>
                            <button>Video Call</button>
                        </div>
                    </div>

                                    <div className="container">
                    <div className="row">
                        <div className="card mb-4">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-4">
                                        <img src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2012/01/shutterstock_59343583.jpg" alt="Smiley face" width="100%" />

                                    </div>
                                    <div className="col-8">
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
                                    </div>
                                </div>
                            </div>
                            <button>Video Call</button>
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



export default MatchCard_C;