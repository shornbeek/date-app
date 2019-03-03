import React, { Component } from 'react';
import Nav_C from "./Nav_C";
import "../style/Find_C.css";
import axios from "axios";



class Find_C extends Component {

    state = {
        count: 0,
        userId: localStorage.getItem("userId"),
        users: [],
        likedName:"",
        likedId: "",
        picture: "",
        description: ""
    }

componentDidMount = () => {
    let userId = localStorage.getItem("userId")
    console.log(userId);
    axios.get(`/users/genderfind/${userId}`)
    .then(result => {
        console.log(result.data);
        this.setState({users: result.data}, () => {
            this.setState({
                picture: this.state.users[this.state.count].picture,
                likedId: this.state.users[this.state.count].id,
                likedName: this.state.users[this.state.count].name,
                description: this.state.users[this.state.count].description

            });
        });
    })
}

clickHeart = (currentUserId, likedUserId) => {
    console.log(likedUserId);
    axios.post("/liked/create", {
        userId: currentUserId,
        liked: likedUserId
    }).then(result => {
        console.log(`Created like between user ${currentUserId} and ${likedUserId}`);
        console.log(result);
        this.setState({count: (this.state.count+1)})
        this.setState({
            picture: this.state.users[this.state.count].picture,
            likedId: this.state.users[this.state.count].id,
            likedName: this.state.users[this.state.count].name,
            description: this.state.users[this.state.count].description

        })
    });
}

clickDown = () => {
    console.log(this.state.count);
    this.setState({count: (this.state.count+1)});
    this.setState({
        picture: this.state.users[this.state.count].picture,
        likedId: this.state.users[this.state.count].id,
        likedName: this.state.users[this.state.count].name,
        description: this.state.users[this.state.count].description

    });
}

    render() {
        return (
            <div className="App">
                <div className="container">
                <Nav_C/>
                    <h2>{this.state.likedName}</h2>
                    <img src={this.state.picture} alt="Smiley face" width="100%" />
                    <h3>{this.state.description}</h3>

                    <div className="card mb-4">
                        <div className="card-header">
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    {/* <button>No</button> */}
                                    <div onClick={this.clickDown} id='thumbs-down' >
                                        <i onlick="myFunction(this)" className="fa fa-thumbs-down"></i>
                                    </div>
                                </div>
                                <div onClick={()=> this.clickHeart(this.state.userId, this.state.likedId)} className="col-6">
                                    {/* <button>Yes</button> */}
                                    <div id='heart'>
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

export default Find_C;
