import React from 'react';
import Notifications from './components/Notifications';
import Sidebar from './components/Sidebar';
import VideoPlayer from './components/VideoPlayer';

const App = () => {
  const styles = {
    wrapper: {
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      },
    },
  };

  return (
    <div style={styles.wrapper}>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default App;
