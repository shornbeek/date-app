import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import '../style/FaceBookBtn_C.css';


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
        <div id='FBpicture'> 
          <img id='FBlogIn' src={this.state.picture} alt={this.state.name} />
          <h2> {this.state.name}</h2>
          <h2>{this.state.email}</h2>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="355803105005829"
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

