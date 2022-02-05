// import liff from "@line/liff";
import { React, Fragment } from "react";

import { Form, Input, Button, Checkbox, Row, Col, Divider } from "antd";

import { sendLogin } from '../../services'

function App() {
  console.log(process.env.REACT_APP_SECRET_API);

  const onFinish = (values) => {
    const data = {
      garageID : values.garageID,
      password : values.password
    }
    console.log(data)

    sendLogin(data).then((response) => console.log('response', response))
  };



  return (
    <Fragment>
      <Row>
        <Col
          span={6}
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
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
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
    </Fragment>
  );
}

export default App;
