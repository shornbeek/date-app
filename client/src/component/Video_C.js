// import React, { Component } from 'react';
// // import Nav from "./components/Nav";

// class Video_C extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="container">
//         <center><h4>Add Video Here </h4></center>
//         </div>
//       </div>

//     );
//   }
// }
import React from 'react';

import {
  Provider,
  Connected,
  Connecting,
  Disconnected,
  Room,
  RequestUserMedia,
  RemoteAudioPlayer,
  Video,
  GridLayout
} from '@andyet/simplewebrtc';

const Video_C = ({ configUrl, userData, roomName, roomPassword }) => (
  <Provider configUrl={configUrl} userData={userData}>
    <RemoteAudioPlayer />
    <Connecting>
      <h1>Connecting...</h1>
    </Connecting>
    <Disconnected>
      <h1>Lost connection. Reattempting to join...</h1>
    </Disconnected>
    <Connected>
      <RequestUserMedia audio video auto />

      <Room name={roomName} password={roomPassword}>
        {({ room, peers, localMedia, remoteMedia }) => {
          if (!room.joined) {
            return <h1>Joining room...</h1>;
          }

          const remoteVideos = remoteMedia.filter(m => m.kind === 'video');

         return (
          
                  <GridLayout
                    className='videogrid'
                    items={remoteVideos}
                    renderCell={(item) => (<Video media={item} />)}
                  />
           
          );
        }}
      </Room>
    </Connected>
  </Provider>
);

export default Video_C;