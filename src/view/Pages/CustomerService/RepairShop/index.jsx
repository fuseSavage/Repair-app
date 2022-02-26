import React from "react";
import { Row, Col, Typography } from "antd";

import GoogleMaps from "./googleMaps";

const { Title, Text } = Typography;
// const { Search } = Input;

export default function App() {
  // const [valueInput, setValueInput] = useState();

  // const onSearch = (value) => {
  //   // console.log('value', typeof(value));
  //   setValueInput(value);
  // };

  return (
    <>
      <Row gutter={[0, 32]}>
        <Col xs={{ span: 24 }} lg={{ span: 24 }} className="w-auto bg-freecar ">
          <Row className="div-p-5" gutter={[0, 32]}>
            <Col span={24}>
              <Title level={2}>
                <Text style={{ color: "#aaabb8" }}>
                  ร้านซ่อมที่มีในระบบทั้งหมด
                </Text>
              </Title>
            </Col>

            <Col span={24}>
              <Text style={{ color: "#a4b3b6" }}>
                ระบบจะแสดงร้านซ่อมที่มีในระบบทั้งหมด
                โดยทุกร้านได้ทำการสมัครเข้าร่วมกับระบบ Repair Center
                ระบบจัดการร้านซ่อม เรียบร้อยแล้ว
              </Text>
            </Col>

            {/* <Col span={24}>
              <Row>
                <Col xs={1} lg={{ span: 6 }}></Col>
                <Col xs={22} lg={{ span: 12 }}>
                  <Search
                    // style={{border: '1px solid yellow'}}
                    placeholder="กรอกหมายเลขโทรศัพท์ของลูกค้า"
                    allowClear
                    enterButton="ค้นหา"
                    size="large"
                    onSearch={onSearch}
                  />
                </Col>
                <Col xs={1} lg={{ span: 6 }}></Col>
              </Row>
            </Col> */}
          </Row>
        </Col>
      </Row>

      <Row style={{ padding: "2% 15% 2% 15%" }}>
        <Col className="border" span={24}>
          <GoogleMaps />
        </Col>
      </Row>
    </>
  );
}
