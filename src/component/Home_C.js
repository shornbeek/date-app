import React, { Component } from 'react';
import FaceBookBtn_C from "./FaceBookBtn_C";

class Home_C extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <FaceBookBtn_C/>
        <center><h4>Find Love On FaceBook </h4>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65W8cfOEUl0ykopjGU1gd8SyuMDjZR4ckWbsO6NoW_DOvpgZLnQ" alt="Smiley face" width="30%" /></center>
          <FaceBookBtn_C/>
        </div>
      </div>

    );
  }
}

export default Home_C;