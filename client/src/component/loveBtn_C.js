import React, { Component } from 'react';



const Match = ({ match, onLike, }) =>
    <div>
        {match.text}
        <p>Likes: {match.like}</p>
        <button onClick={() => onLike(match.id)}>Like</button>
    </div>

class MatchList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            matches: []
        }
        this.handleLike = this.handleLike.bind(this)
    }

    handleLike(id) {
        this.setState(prevState => ({
            ...prevState,
            matches: prevState.matches.map(match => ({
                ...match,
                like: match.id === id ? match.like + 1 : match.like
            }))
        }))
    }  

    render() {
        return (
            <div>
                <ul>
                    {this.state.matches.map(match =>
                        <li key={match.id}>
                            <Match
                                match={match}
                                onLike={this.handleLike}
                            />
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}


export default MatchList;
