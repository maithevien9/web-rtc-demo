import React, { useContext } from 'react';
import { Button } from 'antd';

import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around', background: 'white' }}>
          <h1 style={{ color: 'black', fontSize: 18 }}>{call.name} is calling:</h1>
          <Button type='primary' onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
