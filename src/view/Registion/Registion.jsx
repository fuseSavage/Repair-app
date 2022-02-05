import React, { useState } from "react";
// import axios from "axios";
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Button,
  Divider,
  TimePicker,
} from "antd";
import moment from "moment";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import { sendToken } from '../../services'

let newLatLng = [{ lat: 15.118524429823255, lng: 104.9075726928711 }];

const onMarkerDragEnd = (event) => {
  newLatLng[0].lat = event.latLng.lat();
  newLatLng[0].lng = event.latLng.lng();
  console.log("newLat", newLatLng[0].lat, "newLng", newLatLng[0].lng);
};

const MapWithAMarker = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap defaultZoom={8} defaultCenter={newLatLng[0]}>
      <Marker
        draggable={true}
        position={newLatLng[0]}
        onDragEnd={(e) => onMarkerDragEnd(e)}
      />
    </GoogleMap>
  ))
);

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

//Main Function
export default function RegistrationForm() {
  const [ontime, setOnTime] = useState();
  const [offtime, setOffTime] = useState();

  const [form] = Form.useForm();

  const onFinish = (values) => {
   
    const data = {
      party: "garage",
      garageID: values.userID,
      password: values.password,
      user_name: values.username,
      garage_name: values.garagename,
      email: values.email,
      garage_type: values.garagetype,
      address_number: values.addressnumber,
      moo: values.moo,
      alley: values.alley,
      road: values.road,
      sub_district: values.subdistrict,
      district: values.district,
      province: values.province,
      pos_code: values.poscode,
      address_map: [newLatLng[0].lat, newLatLng[0].lng],
      on_time: ontime,
      off_time: offtime,
      tel: values.phone
    }

    sendToken(data).then((response) => console.log('response', response))

  };

  const handleOnTime = (time, timeString) => {
    setOnTime(timeString);
  };

  const handleOffTime = (time, timeString) => {
    setOffTime(timeString);
  };

  return (
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
        <Divider orientation="left">
          <b>รายละเอียดของร้าน</b>
        </Divider>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          {/* User ID */}
          <Form.Item
            name="userID"
            label="User ID"
            tooltip="User ID เพื่อใช้ในการเข้าระบบในครั้งต่อไป"
            rules={[
              {
                required: true,
                message: "กรุณาระบุ userID ของคุณ",
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* Password  รหัสผ่าน*/}
          <Form.Item
            name="password"
            label="รหัสผ่าน"
            rules={[
              {
                required: true,
                message: "กรุณาใส่รหัสผ่านของคุณ!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          {/* confirm Password  ยืนยันรหัสผ่าน */}
          <Form.Item
            name="confirm"
            label="ยืนยันรหัสผ่าน"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "กรุณายืนยันรหัสผ่านของคุณ!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error("รหัสผ่านทั้งสองที่คุณป้อนไม่ตรงกัน!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* User Name  ชื่อ-นามสกุล */}
          <Form.Item
            name="username"
            label="ชื่อ-นามสกุล"
            tooltip="ชื่อเจ้าของร้าน หรือผู้ที่ได้รับผิดชอบ"
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

          {/* Garage Name ชื่อร้านซ่อม */}
          <Form.Item
            name="garagename"
            label="ชื่อร้านซ่อม"
            tooltip="ชื่อร้านซ่อม หรืออู่ซ่อมรถ"
            rules={[
              {
                required: true,
                message: "กรุณาระบุ ชื่อร้านซ่อม หรืออู่ซ่อมรถ ของคุณ!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* Gmail */}
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "ข้อมูลที่ป้อนไม่ถูกต้อง ตามรูปแบบ E-mail!",
              },
              {
                required: true,
                message: "กรุณาใส่อีเมลของคุณ!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* Garage type ประเภทของร้านซ่อม */}
          <Form.Item
            name="garagetype"
            label="ประเภทของร้านซ่อม"
            tooltip="เลือกประเภทของร้านซ่อม (สามารถเลือกได้มากกว่าหนึ่งประเภท)"
            rules={[
              {
                required: true,
                message: "กรุณาเลือกประเภทของร้านซ่อมของคุณ!",
              },
            ]}
          >
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
            >
              <Option value="ศูนย์บริการรถยนต์">ศูนย์บริการรถยนต์</Option>
              <Option value="อู่ซ่อมรถยนต์">อู่ซ่อมรถยนต์</Option>
              <Option value="ศูนย์บริการรถจักรยานยนต์">
                ศูนย์บริการรถจักรยานยนต์
              </Option>
              <Option value="อู่ซ่อมรถจักรยานยนต์">อู่ซ่อมรถจักรยานยนต์</Option>
              <Option value="ร้านบริการซ่อมอุปกรณ์การเกษตร">
                ร้านบริการซ่อมอุปกรณ์การเกษตร
              </Option>
            </Select>
          </Form.Item>

          {/* หมายเลขโทรศัพท์ */}
          <Form.Item
            style={{ marginTop: "20px" }}
            name="phone"
            label="หมายเลขโทรศัพท์"
            rules={[
              {
                required: true,
                message: "กรุณาใส่หมายเลขโทรศัพท์ของคุณ!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* เวลาที่ร้านเปิด */}
          <Form.Item
            style={{ marginTop: "20px" }}
            label="เวลาที่ร้านเปิด"
            rules={[
              {
                // required: true,
                // message: "กรุณาระบุเวลาเปิด-ปิดร้านของคุณ",
              },
            ]}
          >
            <Row>
              <TimePicker
                defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
                onChange={handleOnTime}
              />
              <div className="div-time">ถึงเวลา</div>

              <TimePicker
                defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
                onChange={handleOffTime}
              />
            </Row>
          </Form.Item>

          <Divider orientation="left">
            <b>ที่อยู่ของร้าน</b>
          </Divider>

          <Row>
            {/* Addess Number บ้านเลขที่*/}
            <Form.Item
              name="addressnumber"
              label="ตั้งอยู่เลขที่"
              rules={[
                {
                  required: true,
                  message: "กรุณาระที่อยู่ให้ครบ!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            {/* หมู่ที่ */}
            <Form.Item
              name="moo"
              label="หมู่ที่"
              rules={[
                {
                  required: true,
                  message: "กรุณาระที่อยู่ให้ครบ!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Row>

          <Row>
            {/* ตรอก/ซอย */}
            <Form.Item
              name="alley"
              label="ตรอก/ซอย"
              rules={[
                {
                  required: true,
                  message: "กรุณาระที่อยู่ให้ครบ!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            {/* ถนน */}
            <Form.Item
              name="road"
              label="ถนน"
              rules={[
                {
                  required: true,
                  message: "กรุณาระที่อยู่ให้ครบ!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Row>

          {/* ตำบล/แขวง */}
          <Form.Item
            name="subdistrict"
            label="ตำบล/แขวง"
            rules={[
              {
                required: true,
                message: "กรุณาระที่อยู่ให้ครบ!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* อำเภอ/เขต */}
          <Form.Item
            name="district"
            label="อำเภอ/เขต"
            rules={[
              {
                required: true,
                message: "กรุณาระที่อยู่ให้ครบ!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* จังหวัด */}
          <Form.Item
            name="province"
            label="จังหวัด"
            rules={[
              {
                required: true,
                message: "กรุณาระที่อยู่ให้ครบ!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* รหัสไปรษณีย์ */}
          <Form.Item
            name="poscode"
            label="รหัสไปรษณีย์"
            rules={[
              {
                required: true,
                message: "กรุณาระที่อยู่ให้ครบ!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Divider orientation="left">
            <b>กรุณาปักหมุดที่อยู่ของร้าน</b>
          </Divider>

          {/* ปักหมุดแผนที่ */}
          <Col md={24} span={24}>
            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBKBdBAnDzrOkcfHq9InQFfYM7Inig-Zeg&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "300px" }} />}
              mapElement={<div style={{ height: "100%" }} />}
            />
          </Col>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" style={{marginTop: "30px"}}>
              ยืนยันการสมัคร
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
  );
}