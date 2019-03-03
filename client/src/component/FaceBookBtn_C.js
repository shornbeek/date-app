import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import "../style/FaceBookBtn_C.css";

export default class FaceBookBtn_C extends Component {
  state = {
    isLoggedIn: "",
    userID: "",
    name: "",
    email: "",
    picture: "",
    redirect: false
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

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  };

  renderRedirect = () => {
    if (this.state.redirect || this.state.isLoggedIn){
      return <Redirect to="/Profile" />
    }
  };

  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = (
        <div id="FBLogIn">
          <img
            id="FBpicture" src={this.state.picture} alt={this.state.name} />
          <h2> {this.state.name}</h2>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="355803105005829"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.setRedirect}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>
        {this.renderRedirect()}
        <center>{fbContent}</center>
        </div>;
  }
}

