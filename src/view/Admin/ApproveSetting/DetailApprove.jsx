import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { useLocation } from "react-router-dom";

import { PageHeader, Button, Row, Col, Modal } from "antd";
// import { ExclamationCircleOutlined } from "@ant-design/icons";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import { ApproveGarage } from "../../../services";

import IconCar from "../../../assets/icons/car.png";

function DetailApprove() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const form = useRef();

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
      garageID: id,
    };

    sendEmail();
    // console.log('email', sendEmail())

    ApproveGarage(data);
    // console.log("id", id);
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible2(false);
      setConfirmLoading(false);

      window.location.reload(false);
    }, 2000);
  };

  const handleCancel = () => {
    // console.log("Clicked cancel button");
    setVisible2(false);
  };

  const sendEmail = () => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_fvdfink",
        "template_f4fea9i",
        form.current,
        "RxwNfn5jn6WDcuzBK"
      )
      // console.log(form.current)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  console.log("data => ", data);

  // function FormEmail() {
  //   return (
  //     <>
  //       <form ref={form} onSubmit={sendEmail}>
  //         <label>Name</label>
  //         <input value="chaiwat 555" type="text" name="user_name" />
  //         <label>Email</label>
  //         <input type="email" name="user_email" />
  //         <label>Message</label>
  //         <textarea name="message" />
  //         <input type="submit" value="Send" />
  //       </form>
  //     </>
  //   );
  // }

  return (
    <>
      <Row className="div-p-5" ref={form}>
        <Col span={24} className="pageHeader" style={{ padding: "2%" }}>
          <PageHeader
            className="site-page-header"
            onBack={() => window.history.back()}
            title={data.garage_name}
            subTitle="???????????????????????????????????????"
            extra={[
              <Button key="3" onClick={() => setVisible(true)}>
                ????????????????????????????????????????????????
              </Button>,
            ]}
          >
            <Row className="text-left" gutter={[0, 16]}>
              <Col sx={24} sm={24} lg={{ span: 11, offset: 1 }}>
                ????????????????????????????????? : ????????? {data.user_name}{" "}
              </Col>
              <Col sx={24} sm={24} lg={{ span: 11, offset: 1 }}>
                ???????????????????????? : {data.garage_name}{" "}
              </Col>
              <Col sx={24} sm={24} lg={{ span: 11, offset: 1 }}>
                ?????????????????? : {JSON.parse(data.garage_type).join(",  ")}{" "}
              </Col>
              <Col sx={24} sm={24} lg={{ span: 11, offset: 1 }}>
                ?????????????????????????????????????????????????????? : {data.registration_date}{" "}
              </Col>
              <Col sx={24} sm={24} lg={{ span: 11, offset: 1 }}>
                E-mail : {data.email}{" "}
              </Col>
              <Col sx={24} sm={24} lg={{ span: 11, offset: 1 }}>
                ??????????????????????????????????????? : {data.tel}{" "}
              </Col>
              <Col sx={24} sm={24} lg={{ span: 23, offset: 1 }}>
                ????????????????????????-????????? ????????????????????? : {data.on_time} - {data.off_time} ???.{" "}
              </Col>
              <Col sx={24} sm={24} lg={{ span: 23, offset: 1 }}>
                <b>??????????????????????????????????????????</b> : {data.address_number} ???????????? {data.moo}{" "}
                ????????? {data.alley} ????????? {data.road} ???.{data.sub_district} ???.
                {data.district} ???.{data.province} {data.pos_code}{" "}
              </Col>
            </Row>
            <Col style={{ padding: "3% 0 0 0" }} span={24}>
              <Button className="bt-them" onClick={showModal}>
                ?????????????????????
              </Button>
            </Col>
          </PageHeader>
        </Col>
      </Row>

      <Modal
        title={<>?????????????????????????????????????????? {data.garage_name}</>}
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
        title="?????????????????????????????????????????????"
        visible={visible2}
        onOk={() => {
          handleOk(data.garageID);
        }}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>
          ?????????????????????????????????????????????????????? {data.garage_name} ???????????????????????????????????????????????????????????????????????????????????????
        </p>
      </Modal>

      {/* Send Email To Email Garage */}
      <div>
        <form hidden ref={form} onSubmit={sendEmail}>
          <input value={data.user_name} type="text" name="user_name" />
          <input value={data.garage_name} type="text" name="garage_name" />
          <input value={data.registration_date} type="text" name="regis_date" />
          <input value={data.email} type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  );
}

export default DetailApprove;
