// import React, { Component } from 'react';
// // import Nav from "./components/Nav";

// class FaceBookBtn_C extends Component {
//   state = {
// user: null,
//   }

  
//   render() {

//     const responseFacebook = (response) => {
//       console.log(response);
//     }

//     return (
//       <div className="App">
//         <div className="container">
//         <center><div class="fb-login-button" data-width="300" data-size="large" data-button-type="continue_with" data-auto-logout-link="true" data-use-continue-as="true"></div> </center>       
//         {/* <FacebookLogin
//     appId="355803105005829"
//     autoLoad={true}
//     fields="name,email,picture"
//     onClick={componentClicked}
//     callback={responseFacebook} />, */}
        
//         </div>
//       </div>

//     );
//   }
// }

// export default FaceBookBtn_C;

import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class FaceBookBtn_C extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };
  
  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        > 
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
  
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="189486938370592"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}

