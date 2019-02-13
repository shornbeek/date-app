import React, { Component } from 'react';



const Match = ({ match, onDislike }) =>
  <div>
    {match.text}
    <p>Likes: {match.like}</p>
    <button onClick={() => onDislike(match.id)}>Deslike</button>
  </div>

class MatchList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      matches: []
    }

    this.handleDeslike = this.handleDeslike.bind(this)
  }


  handleDeslike(id) {
    this.setState(prevState => ({
      ...prevState,
      matches: prevState.matches.map(match => ({
        ...match,
        like: match.id === id ? match.like - 1 : match.like
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
                onDislike={this.handleDeslike}
              />
            </li>
          )}
        </ul>
      </div>
    )
  }
}


export default MatchList;
