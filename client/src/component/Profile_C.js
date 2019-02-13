
import React, { Component } from 'react';
import Nav2_C from "./Nav2_C";
import userAPI from "../utils/userApi.js";
import FacebookLogin from "react-facebook-login";
import '../style/FaceBookBtn_C.css';


class Profile_C extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: "",
        age: "",
        description: "",
        gender: "",
        looking: ""
      };

      handleInputChangeAge = event => {
        this.setState({ age: event.target.value});
      }
      handleInputChangeDescription = event => {
        this.setState({ description: event.target.value});
      }
      handleInputChangeGender = event => {
        this.setState({ gender: event.target.value});
      }
      handleInputChangeLooking = event => {
        this.setState({ looking: event.target.value})
      }

      handleFormSubmit = event => {
        event.preventDefault();
        console.log(userAPI.findIfUserExists(3));
      }

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
            // <Profile_C>
            <div id='FBpicture'>
              <img id='FBlogIn' src={this.state.picture} alt={this.state.name} />
              <h2> {this.state.name}</h2>
              <h2>{this.state.email}</h2>
            </div>
          // </Profile_C>
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
    
    return <div>
      <Nav2_C />
      {fbContent}
      <div className="App">
        <div className="container">
          <div className="card mb-4">
            <div className="card-body">
              <div className="content">
                <form>
                  <div className="form-group">
                    <label for="exampleFormControlInput1">Your Age</label>
                    <input onChange={this.handleInputChangeAge} type="number" class="form-control" id="Age" placeholder="18-100 " />
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlSelect1">Gender</label>
                    <select onChange={this.handleInputChangeGender} className="form-control" id="Gender">
                      <option value="" selected disabled>Please select</option>
                      <option>Man</option>
                      <option>Woman</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlTextarea1">Tell us about yourself</label>
                    <textarea onChange={this.handleInputChangeDescription} className="form-control" id="Description" rows="3"></textarea>
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlSelect1">Looking for</label>
                    <select onChange={this.handleInputChangeLooking} className="form-control" id="LookingFor">
                      <option value="" selected disabled>Please select</option>
                      <option>Men</option>
                      <option>Women</option>
                    </select>
                  </div>
                  <button type="submit" id="submit" onClick={this.handleFormSubmit} style={{cursor:'pointer'}}>Find Love</button>
                  <button type='logout' id='logout' href='/'style={{float:'right', cursor:'pointer'}}>Log Out</button>
                </form>
              </div>
            </div>
          </div>
          <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-numposts="5"></div>
          <div class="fb-save" data-uri="https://www.instagram.com/facebook/" data-size="large"></div>
        </div>
      </div></div>
  }
}



export default Profile_C;