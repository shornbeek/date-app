
import React, { Component } from 'react';

class MatchCard_C extends Component {
    render() {
        return (

            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="card mb-4">
                            <div className="card-header">
                                <div class="row">
                                    <div class="col-4">
                                        <img src="https://www.wxxv25.com/wp-content/uploads/2019/02/img_1182_copy_2_7b3ebba530b1f643cd6fad6490bb63d9-10-1.jpg" alt="Smiley face" width="100%" />

                                    </div>
                                    <div class="col-8">
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
                            {/* <div className="card-body">
                                <img src="https://www.wxxv25.com/wp-content/uploads/2019/02/img_1182_copy_2_7b3ebba530b1f643cd6fad6490bb63d9-10-1.jpg" alt="Smiley face" width="100%" />
                            </div>
                            <div className="card mb-8">
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
                                </div> */}

                            {/* <button>Video Call</button>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default MatchCard_C;