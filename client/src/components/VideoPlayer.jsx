import React, { useContext } from 'react';

import { SocketContext } from '../Context';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  const styles = {
    video: {
      width: '550px',
    },
    myVideo: {
      width: '300px',
    },
    gridContainer: {
      justifyContent: 'center',
    },
    paper1: {
      padding: '10px',
      margin: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      bottom: 0,
      right: 0,
      position: 'fixed',
    },

    paper2: {
      padding: '10px',
      margin: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    text: {
      color: 'black',
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.gridContainer}>
      {stream && (
        <div style={styles.paper1}>
          <p style={styles.text}>{name || 'Name'}</p>
          <video playsInline muted ref={myVideo} autoPlay style={styles.myVideo} />
        </div>
      )}
      {callAccepted && !callEnded && (
        <div style={styles.paper2}>
          <div>
            <p style={styles.text}>{call.name || 'Name'}</p>
            <video playsInline ref={userVideo} autoPlay style={styles.video} />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
