import React, { Component } from 'react';
import FaceBookBtn_C from "./FaceBookBtn_C";
import "../style/Home_C.css";

class Home_C extends Component {
  render() {
    return (
      <div className="App">
        <h1>ChatMe Maybey</h1>
        <div className="container">
          <center><h2>Login with FaceBook to find Love! </h2>
            <FaceBookBtn_C />
          </center>
          <center> <h3>Search! Match! Video Chat!</h3> </center>
          <center> <img src="https://i.ibb.co/qRmFNZB/homepagedate.png" alt="Screen-Shot-2019-02-09-at-1-19-10-PM" border="0" width="70%" /></center>
          <center> <img src="https://cdn.shopify.com/s/files/1/0285/1316/products/26g_HowFarLoveCanTravel_1000x1000.jpg?v=1418410296" alt="Smiley face" width="30%" /></center>
          <center> <img src="https://s3-ap-southeast-2.amazonaws.com/2ser-wordpress/wp-content/aws/uploads/2017/09/26032145/shutterstock_127513112-685x368.jpg" alt="Smiley face" width="30%" /></center>
        </div>
      </div>

    );
  }
}

export default Home_C;