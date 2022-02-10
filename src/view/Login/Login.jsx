// import liff from "@line/liff";
import React, { useEffect, useState, useRef } from "react";

import { Form, Input, Button, Row, Col, Divider } from "antd";

import BIRDS from "vanta/dist/vanta.birds.min";

import { sendLogin } from "../../services";

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xffffff,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // const user = JSON.parse(localStorage.getItem('user'))
  // console.log(user)

  const onFinish = (values) => {
    const data = {
      garageID: values.garageID,
      password: values.password,
    };
    // console.log(data);

    sendLogin(data).then((response) => {
      // console.log('response', response.userData)
      setTimeout(() => {
        window.location.reload(false);
      }, 1000);
    });
  };

  // const removestr = () => {
  //   sendLogout();
  //   window.location.reload(false);
  // }

  return (
    <div className="h-100" ref={myRef}>
      <Row>
        <Col
          span={4}
          xs={{ order: 1 }}
          sm={{ order: 2 }}
          md={{ order: 3 }}
          lg={{ order: 4 }}
        ></Col>
        <Col
          // style={{ textAlign: "center" }}
          span={12}
          xs={{ order: 1 }}
          sm={{ order: 2 }}
          md={{ order: 3 }}
          lg={{ order: 4 }}
        >
          <div className="title"></div>
          <Divider orientation="center">
            <b>เข้าสู่ระบบร้านซ่อม</b>
          </Divider>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="User ID"
              name="garageID"
              rules={[
                {
                  required: true,
                  message: "กรุณากรอก User ID ของคุณ!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="รหัสผ่าน"
              name="password"
              rules={[
                {
                  required: true,
                  message: "กรุณากรอกรหัสผ่านของคุณ!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                ยืนยัน
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col
          span={6}
          xs={{ order: 1 }}
          sm={{ order: 2 }}
          md={{ order: 3 }}
          lg={{ order: 4 }}
        ></Col>
      </Row>
    </div>
  );
}

export default App;
