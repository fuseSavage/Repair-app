import React, { useState } from "react";

import { useLocation } from "react-router-dom";

import { PageHeader, Button, Row, Col, Modal } from "antd";
// import { ExclamationCircleOutlined } from "@ant-design/icons";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import {  ApproveGarage } from "../../../services";


import IconCar from "../../../assets/icons/car.png";

function DetailApprove() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  let location = useLocation;
  const data = location().state.data;

  let newLatLng = [
    {
      lat: JSON.parse(data.address_map)[0],
      lng: JSON.parse(data.address_map)[1],
    },
  ];

  // console.log(newLatLng);

  const MapWithAMarker = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap defaultZoom={15} defaultCenter={newLatLng[0]}>
        <Marker
          position={newLatLng[0]}
          icon={{
            url: IconCar,
            scaledSize: new window.google.maps.Size(40, 40),
          }}
        />
      </GoogleMap>
    ))
  );

  const showModal = () => {
    setVisible2(true);
    
  };
  //   console.log("data", data);

  const handleOk = (id) => {
    let data = {
        garageID: id
    }
    ApproveGarage(data)
    // console.log("id", id);
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible2(false);
      setConfirmLoading(false);

      window.location.reload(false)
    }, 2000);
  };

  const handleCancel = () => {
    // console.log("Clicked cancel button");
    setVisible2(false);
  };

  return (
    <>
      <Row className="div-p-5">
        <Col span={24} className="pageHeader" style={{ padding: "2%" }}>
          <PageHeader
            className="site-page-header"
            onBack={() => window.history.back()}
            title={data.garage_name}
            subTitle="ข้อมูลของร้าน"
            extra={[
              <Button key="3" onClick={() => setVisible(true)}>
                ดูตำแหน่งของร้าน
              </Button>,
            ]}
          >
            <Row className="text-left" gutter={[0, 16]}>
              <Col sx={24} sm={24} lg={{ span: 11, offset: 1 }}>
                เจ้าของร้าน : คุณ {data.user_name}{" "}
              </Col>
              <Col sx={24} sm={24} lg={{ span: 11, offset: 1 }}>
                ชื่อร้าน : {data.garage_name}{" "}
              </Col>
              <Col sx={24} sm={24} lg={{ span: 11, offset: 1 }}>
                ประเภท : {JSON.parse(data.garage_type).join(",  ")}{" "}
              </Col>
              <Col sx={24} sm={24} lg={{ span: 11, offset: 1 }}>
                สมัครเข้าร่วมเมื่อ : {data.registration_date}{" "}
              </Col>
              <Col sx={24} sm={24} lg={{ span: 11, offset: 1 }}>
                E-mail : {data.email}{" "}
              </Col>
              <Col sx={24} sm={24} lg={{ span: 11, offset: 1 }}>
                หมายเลขติดต่อ : {data.tel}{" "}
              </Col>
              <Col sx={24} sm={24} lg={{ span: 23, offset: 1 }}>
                เวลาเปิด-ปิด ของร้าน : {data.on_time} - {data.off_time} น.{" "}
              </Col>
              <Col sx={24} sm={24} lg={{ span: 23, offset: 1 }}>
                <b>ที่อยู่ของร้าน</b> : {data.address_number} หมู่ {data.moo}{" "}
                ซอย {data.alley} ถนน {data.road} ต.{data.sub_district} อ.
                {data.district} จ.{data.province} {data.pos_code}{" "}
              </Col>
            </Row>
            <Col style={{ padding: "3% 0 0 0" }} span={24}>
              <Button
                className="bt-them"
                onClick={showModal}
              >
                อนุมัติ
              </Button>
            </Col>
          </PageHeader>
        </Col>
      </Row>

      <Modal
        title={<>ตำแหน่งของร้าน {data.garage_name}</>}
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={700}
      >
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYQsoMGSxKVOe6vilIiEedgPhRDjcPbC8&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "400px" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </Modal>

      <Modal
        title="อนุมัติร้านซ่อม"
        visible={visible2}
        onOk={() => {
          handleOk(data.garageID);
        }}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>ยืนยันที่จะให้ร้าน {data.garage_name} เข้าร่วมกับระบบจัดการร้านซ่อม</p>
      </Modal>
    </>
  );
}

export default DetailApprove;
