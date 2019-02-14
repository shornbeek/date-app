import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Nav2_C from "./Nav2_C";
import userAPI from "../utils/userApi.js";
import axios from "axios";
import "../style/FaceBookBtn_C.css";
import FacebookLogin from "react-facebook-login";

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
    findMan: false,
    findWoman: false,
  };

  handleInputChangeAge = event => {
    this.setState({ age: event.target.value });
  }
  handleInputChangeDescription = event => {
    this.setState({ description: event.target.value });
  }
  handleInputChangeGender = event => {
    this.setState({ gender: event.target.value });
  }
  handleInputChangeLooking = event => {
    console.log(event.target.value)
    if(event.target.value === "Men"){
      this.setState({findMan: true});
      this.setState({findWoman: false});
    }else if (event.target.value === "Women"){
      this.setState({findWoman: true});
      this.setState({findMan: false});
    }else{
      this.setState({findMan: true});
      this.setState({findWoman: true});
    }
  }

  handleFormSubmit = event => {
    // event.preventDefault();

    axios.post('/users/createOrUpdate', this.state)
    .then(function (response) {
      let userId = response.data.id;
      console.log(userId);
      localStorage.setItem("userId", userId);
    })
    .catch(function (error) {
      console.log(error);
    });
    
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
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>
    <Nav2_C/>
  <center> {fbContent} </center>

      {this.state.isLoggedIn ?
      
        <div className="App">
          <div className="container">
            <div className="card mb-4">
              <div className="card-header">
                <center><h4>One more step to your next match...</h4></center>
              </div>
              <div className="card-body">
                <div className="content">
                  <form>
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Age</label>
                      <input onChange={this.handleInputChangeAge} type="number" class="form-control" id="Age" placeholder="18" />
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlSelect1">Gender</label>
                      <select onChange={this.handleInputChangeGender} className="form-control" id="Gender">
                        <option value="" selected disabled>Please select</option>
                        <option value="false" >Man</option>
                        <option value="true" >Woman</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlTextarea1">Tell them something about yourself...</label>
                      <textarea onChange={this.handleInputChangeDescription} className="form-control" id="Description" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlSelect1">Looking for</label>
                      <select onChange={this.handleInputChangeLooking} className="form-control" id="LookingFor">
                        <option value="" selected disabled>Please select</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Both">Both</option>
                      </select>
                    </div>
                    <Link to='./Find'>
                    <center>
                      <button type="button" className="btn btn-info" type="submit" id="submit" onClick={this.handleFormSubmit}>Submit</button>
                    </center>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}




    </div>

  }
}



export default Profile_C;