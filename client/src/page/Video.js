import React from "react";
import Video_C from "./component/Video_C";

import { Provider } from "react-redux";

import { createStore, Actions, Selectors } from "@andyet/simplewebrtc";

const API_KEY = '903c20aee9b1bf3cec128a9a';

const CONFIG_URL = `https://api.simplewebrtc.com/config/guest/${API_KEY}`

const store = createStore();

window.store = store;
window.actions = Actions;
window.selectors = Selectors;

const params = new URLSearchParams(window.location.search);

if (!params.get('room')) {
  window.location = `/video`;
}


function Video() {
  return (
    <div>
      <center><h1>hello</h1></center>
      <Provider store={store}>
      <Video_C
        configUrl={CONFIG_URL}
        roomName={params.get('room')}
        roomPassword={params.get('key') || ''}
      />
    </Provider>
    </div>
  );
}

export default Video;