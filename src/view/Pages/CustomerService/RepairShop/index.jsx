import React from "react";
import { Row, Col, Typography } from "antd";

import GoogleMaps from "./googleMaps";

const { Title } = Typography;



export default function App() {
  return (
    <>
      <Row>
        <Col span={24}>
          <Title level={3}>ค้นหาร้านซ่อม</Title>
        </Col>
        <Col span={24}>
          <GoogleMaps />
        </Col>
      </Row>
    </>
  );
}
