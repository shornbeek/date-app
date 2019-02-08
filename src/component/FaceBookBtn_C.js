import React, { Component } from 'react';
// import Nav from "./components/Nav";

class FaceBookBtn_C extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <center><div class="fb-login-button" data-width="300" data-size="large" data-button-type="continue_with" data-auto-logout-link="true" data-use-continue-as="true"></div> </center>       
        </div>
      </div>

    );
  }
}

export default FaceBookBtn_C;

