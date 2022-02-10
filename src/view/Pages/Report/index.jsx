import React from "react";

import { Row, Col, Typography, Form, Input, Button, Select } from "antd";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
    md: {
      span: 24,
    },
    lg: {
      span: 24,
    },
    xl: {
      span: 24,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
    md: {
      span: 24,
    },
    lg: {
      span: 24,
    },
    xl: {
      span: 24,
    },
  },
};

const { Option } = Select;

const { Title } = Typography;
/* eslint-enable no-template-curly-in-string */

export default function App() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <Row className="report-box">
        <div className="report-content">
          <Col span={24} className="box-text-title">
            <Title level={4}>แจ้งปัญหาการใช้งาน</Title>
          </Col>
          <Col  className="div-form">
            <Form {...formItemLayout} name="nest-messages" onFinish={onFinish}>
              {/* Garage type ประเภทของร้านซ่อม */}
              <Form.Item
                name="party"
                label="ผู้ใช้งานที่แจ้งรายงาน"
                tooltip="เลือกประเภทของผู้ใช้"
                rules={[
                  {
                    required: true,
                    message: "กรุณาเลือกประเภทของร้านซ่อมของคุณ!",
                  },
                ]}
              >
                <Select
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select"
                >
                  <Option value="garage">ร้านซ่อมหรือศูนย์บริการ</Option>
                  <Option value="member">ลูกค้าสมาชิก</Option>
                </Select>
              </Form.Item>

              {/* User Name  ชื่อ-นามสกุล */}
              <Form.Item
                name="user_report"
                label="User ID"
                tooltip="ร้านซ่อมให้ใช้ ๊User ID  **หากเป็นลูกค้าให้ใช้เบอร์โทรศัพท์ที่ใช้สมัคร member"
                rules={[
                  {
                    required: true,
                    message: "กรุณาระบุ User ID ของคุณ!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              {/* User Name  ชื่อ-นามสกุล */}
              <Form.Item
                name="username"
                label="ชื่อ-นามสกุล"
                tooltip="ชื่อ-นามสกุล ของผู้ที่แจ้งปัญหา"
                rules={[
                  {
                    required: true,
                    message: "กรุณาระบุ ชื่อ-นามสกุล ของคุณ!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item name="report_detail" label="ปัญหาที่จะรายงาน">
                <Input.TextArea />
              </Form.Item>

              <Form.Item name="report_tel" label="หมายเลขโทรศัพท์ที่ติดติดต่อได้">
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ ...formItemLayout.wrapperCol }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </div>
      </Row>
    </>
  );
}
