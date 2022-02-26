import React, { useState, useEffect } from "react";

import { Collapse, Col, Row, Typography, Divider } from "antd";
// import services
import { FetchGarageAll } from "../../services";

const { Title, Text } = Typography;
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function Garage() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getGarage = async () => {
      await FetchGarageAll().then(async (response) => {
        if (response.code === 500) {
          console.log("data", response);
        } else {
          await setDatas(response.data[0]);
          //  console.log('data', response.data)
        }
        // console.log('data', response)
      });
    };
    getGarage();
  }, []);

  function callback(key) {
    console.log(key);
  }

  return (
    <>
      <Row className="div-p-5">
        <Col span={24}>
          <Title level={3}> รายชื่อร้านซ่อมทั้งหมด </Title>
        </Col>

        <Col span={24}>
          <Collapse onChange={callback}>
            <Panel header={datas.garage_name} key="1" extra={datas.province}>
              <Row gutter={[0, 16]}>
                <Divider orientation="left" plain>
                  รายละเอียดร้านซ่อม
                </Divider>
                <Col
                  xs={24}
                  md={{ span: 11, offset: 1 }}
                  lg={{ span: 7, offset: 1 }}
                >
                  <Text style={{ fontWeight: "bold" }}>User ID : </Text>
                  <Text>{datas.garageID} </Text>
                </Col>

                <Col
                  xs={24}
                  md={{ span: 11, offset: 1 }}
                  lg={{ span: 7, offset: 1 }}
                >
                  <Text style={{ fontWeight: "bold" }}>ชื่อร้าน : </Text>
                  <Text>{datas.garage_name} </Text>
                </Col>

                <Col
                  xs={24}
                  md={{ span: 11, offset: 1 }}
                  lg={{ span: 7, offset: 1 }}
                >
                  <Text style={{ fontWeight: "bold" }}>ชื่อ-สกุล : </Text>
                  <Text>{datas.user_name} </Text>
                </Col>

                <Col
                  xs={24}
                  md={{ span: 11, offset: 1 }}
                  lg={{ span: 7, offset: 1 }}
                >
                  <Text style={{ fontWeight: "bold" }}>E-Mail : </Text>
                  <Text>{datas.email} </Text>
                </Col>

                <Col
                  xs={24}
                  md={{ span: 11, offset: 1 }}
                  lg={{ span: 7, offset: 1 }}
                >
                  <Text style={{ fontWeight: "bold" }}>ประเภทร้านซ่อม : </Text>
                  <Text>{datas.garage_type} </Text>
                </Col>
              </Row>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </>
  );
}

export default Garage;
