import React, { Component } from 'react';
import Nav_C from "./Nav_C";
import "../style/Find_C.css";
import Profile_C from './Profile_C';
import LoveBtn_C from './loveBtn_C';
import DislikeBtn_C from './DislikeBtn_C';
import axios from "axios";



class Find_C extends Component {

    state = {
        count: 0,
        userId: localStorage.getItem("userId"),
        users: [],
        likedId: "",
        picture: ""
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
                likedId: this.state.users[this.state.count].id
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
        this.setState({count: (this.setState.count+1)})
    });
}

clickDown = () => {
    this.setState({count: (this.setState.count+1)})
}

    render() {
        return (
            <div className="App">
                <div className="container">
                <Nav_C/>
                    <img src={this.state.picture} alt="Smiley face" width="100%" />
                    <div className="card mb-4">
                        <div className="card-header">
                        </div>
                        <div className="card-body">
                            {/* <div className="content">
                                <ul>
                                    <li>
                                        <strong>name</strong> */}
                                        {/* <Link to="/Find">About</Link> */}
                                    {/* </li>
                                    <li>
                                        <strong>Occupation:</strong>
                                    </li>
                                    <li>
                                        <strong>Location:</strong>
                                    </li>
                                </ul>
                            </div> */}

                            <div className="row">
                                <div className="col-6">
                                    {/* <button>No</button> */}
                                    <div onClick={this.clickDown} id='thumbs-down' >
                                        <i onlick="myFunction(this)" className="fa fa-thumbs-down"></i>
                                        <DislikeBtn_C />
                                    </div>
                                </div>
                                <div onClick={()=> this.clickHeart(this.state.userId, this.state.likedId)} className="col-6">
                                    {/* <button>Yes</button> */}
                                    <div id='heart'>
                                    <LoveBtn_C />
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


// import React, { Component } from 'react';
// import Nav_C from "./Nav_C";
// import "./styleFind.css";
// // import Nav_C from "./component/Nav_C";



// class Find_C extends Component {
//     render() {
//         return (
           
//             <div className="App">
//                 <div className="container">
//                 <Nav_C/>
                
//                     <img src="http://reductress.com/wp-content/uploads/2016/10/woman-coffee-820x500.jpg" alt="Smiley face" width="100%" />


//                     <div className="card mb-4">
//                         <div className="card-header">
//                             {/* <button>Wink</button> */}

//                         </div>
//                         <div className="card-body">
//                             <div className="content">
//                                 <ul>
//                                     <li>
//                                         <strong>Name:</strong>
//                                         {/* <Link to="/Find">About</Link> */}
//                                     </li>
//                                     <li>
//                                         <strong>Occupation:</strong>
//                                     </li>
//                                     <li>
//                                         <strong>Location:</strong>
//                                     </li>
//                                 </ul>
//                             </div>

//                             <div className="row">
//                                 <div className="col-6">
//                                     {/* <button>No</button> */}
//                                     <div className="toggle">
//                                         <input type="checkbox"  />
//                                         <span className="button"></span>
//                                         <span className="label">+</span>
//                                     </div>

//                                 </div>
//                                 <div className="col-6">
//                                     {/* <button>Yes</button> */}
//                                     <div className="toggle">
//                                         <input type="checkbox"  />
//                                         <span className="button"></span>
//                                         <span className="label">–</span>
//                                     </div>

//                                 </div>

//                             </div>
//                         </div>
//                     </div>


//                 </div>

//             </div>

//         );
//     }
// }

// export default Find_C;