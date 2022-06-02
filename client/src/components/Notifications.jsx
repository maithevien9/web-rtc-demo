import React, { useContext } from 'react';
import { Modal } from 'antd';

import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      <Modal title='Video Call' visible={call.isReceivingCall && !callAccepted} onOk={answerCall} onCancel={callAccepted}>
        <div style={{ display: 'flex', justifyContent: 'space-around', background: 'white' }}>
          <h1 style={{ color: 'black', fontSize: 18 }}>{call.name} is calling:</h1>
        </div>
      </Modal>
    </>
  );
};

export default Notifications;
