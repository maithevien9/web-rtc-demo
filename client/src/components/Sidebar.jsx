import React, { useState, useContext } from 'react';
import { Button, Form, Input, Row, Col } from 'antd';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { SocketContext } from '../Context';

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const [form] = Form.useForm();

  const styles = {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    gridContainer: {
      width: '100%',
    },
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
    },
    margin: {
      marginTop: 20,
    },
    padding: {
      padding: 20,
    },
    paper: {
      padding: '10px 20px',
    },
    formContainer: {
      background: 'white',
      width: '60%',
      padding: '10px 20px',
      paddingTop: 30,
    },
  };

  return (
    <div style={styles.container}>
      <Form layout='vertical' style={styles.formContainer} form={form}>
        <Row>
          <Col span={11}>
            <Form.Item label='Account Info' name='name'>
              <Input
                placeholder='Name'
                value={name}
                onChange={(values) => {
                  setName(values.target.value);
                }}
              />
            </Form.Item>

            <CopyToClipboard text={me} style={styles.margin}>
              <Button type='primary'>Copy Your ID</Button>
            </CopyToClipboard>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item label='Make a call' name='idToCall'>
              <Input
                placeholder='ID to Call'
                value={idToCall}
                onChange={(values) => {
                  setIdToCall(values.target.value);
                }}
              />
            </Form.Item>

            <Form.Item>
              {callAccepted && !callEnded ? (
                <Button color='secondary' onClick={leaveCall} style={styles.margin}>
                  Hang Up
                </Button>
              ) : (
                <Button
                  type='primary'
                  onClick={() => {
                    callUser(form.getFieldValue('idToCall'));
                  }}
                  style={styles.margin}
                >
                  Call
                </Button>
              )}
            </Form.Item>
          </Col>
        </Row>

        {children}
      </Form>
    </div>
  );
};

export default Sidebar;
