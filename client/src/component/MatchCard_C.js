
import React, { Component } from 'react';
// import Nav2_C from "./Nav2_C";
import Nav3_C from "./Nav3_C";
import axios from "axios";



class MatchCard_C extends Component {

    state = {
        userId: localStorage.getItem("userId"),
        matches: [],
        count: 0,
        matchInfo: []
    }

    componentDidMount = () => {
        axios.post("/matches/create", {
            id: this.state.userId
        }).then(result => {
            axios.get(`/matches/find/${this.state.userId}`, {
            }).then(result => {
                this.setState({matches: result.data});
                for(let i =0; i < this.state.matches.length; i++){
                    console.log(this.state.matches);
                    console.log(`/users/${this.state.matches[i].user2Id}`);
                    axios.get(`/users/${this.state.matches[i].user2Id}`)
                    .then(result => {
                        let matchInfo = [...this.state.matchInfo, result.data[0]]
                        this.setState({matchInfo});
                    });
                }
            });
        });
    }

    showMatches = () => {
        return (
        <div>
            {this.state.matchInfo.map(result => (
                    <div className="card mb-12">
                        <div className="card-header">
                           
                                <div className="col-4">
                                    <img src={result.picture} alt="Smiley face" width="100%"/>

                                </div>
                                    <div className="col-8">
                                        <div className="content">
                                       <left>     <ul>
                                                <li>
                                                    <strong>{result.name}</strong>
                                                </li>
                                                <li>
                                                    <strong>{result.description}</strong>
                                                </li>
                                                <li>
                                                    <strong>Age: {result.age}</strong>
                                                   
                                                </li>
                                            </ul> 
                                     </left>
                                        </div>
                                    </div>
                            
                        </div>
                        <button onClick={this.getMatchInfo}>Video Call</button>
                    </div>
               
                
            ))}
        </div>
        )
    }

    render() {
        return (

            <div className="App">
                <center>

                <div className="container">
                <Nav3_C/>
                    {this.showMatches()}
                </div>
                </center>

            </div>
        );
    }
}



export default MatchCard_C;