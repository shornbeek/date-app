import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile_C from "./component/Profile_C";
import MatchCard_C from "./component/MatchCard_C";
import Find_C from "./component/Find_C";
import Video_C from "./component/Video_C";
import { Provider } from '@andyet/simplewebrtc';






class App extends Component {
  render() {
    return (
 <Provider>
        <Router>
          <div className="App">
            <center> Tinder but better.</center>
           
            {/* <center><FaceBookBtn_C/></center> */}
            <Switch>
              <Route exact path="/" component={Profile_C} />
              <Route exact path="/Find" component={Find_C} />
              <Route exact path="/Match" component={MatchCard_C}/>
              <Route exact path="/Profile" component={Profile_C} />
              <Route exact path="/Video" component={Video_C} />
            </Switch>
          </div>
        </Router>
 </Provider>

    );
  }
}

export default App;