import React, { useState, useEffect } from "react";

import {
//   Row,
//   Col,
  Modal,
  Button,
  Input,
  Divider,
  Table,
  Typography,
} from "antd";

import { PlusCircleFilled } from "@ant-design/icons";

// import Service
import { FetctDetailByGarageID } from '../../../services'

const { Column, ColumnGroup } = Table;
const { Text } = Typography;

// const data = [
// //   {
// //     key: "1",
// //     name: "ยางใน",
// //     age: 32,
// //     address: "New York No. 1 Lake Park",
// //     tags: ["nice", "developer"],
// //   },
// //   {
// //     key: "2",
// //     name: "น้ำมันเครื่อง",
// //     age: 42,
// //     address: "London No. 1 Lake Park",
// //     tags: ["loser"],
// //   },
// //   {
// //     key: "3",
// //     name: "test",
// //     age: 32,
// //     address: "Sidney No. 1 Lake Park",
// //     tags: ["cool", "teacher"],
// //   },
// ];

export default function SpareAdd(props) {
  const detailID = props;
//   console.log(detailID);

  // Set State
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [ datas, setDatas  ] = useState([])
  // const [modalText, setModalText] = useState("Content of the modal");

  useEffect(() => {
    const getDetailByGarage = async () => {

      await FetctDetailByGarageID(detailID).then(async (response) => {
        await setDatas(response.data);
        // console.log('data', response.data)
      });
    };
    getDetailByGarage();
  }, [detailID]);


  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <>
      <Divider />
      {/* <div className="div-p-5">
        <Row gutter={[0, 32]}>
          <Col xs={24} md={{ span: 11, offset: 1 }} lg={{ span: 7, offset: 1 }}>
            test
          </Col>
          <Col xs={24} md={{ span: 11, offset: 1 }} lg={{ span: 7, offset: 1 }}>
            test
          </Col>
          <Col xs={24} md={{ span: 11, offset: 1 }} lg={{ span: 7, offset: 1 }}>
            test
          </Col>
        </Row>
      </div> */}

      <div className="div-p-5">
        <Button className="bt-them" onClick={showModal}>
          <Text className="color-fff-hover">
            <PlusCircleFilled /> เพิ่มรายการอะไหล่
          </Text>
        </Button>
        <Table dataSource={datas} scroll={{ x: 400 }} className="border">
          <ColumnGroup title="รายละเอียดการซ่อม">
            <Column
              title="ลำดับ"
              dataIndex="key"
              key="member_name"
              width={"10%"}
            />
            <Column
              title="รายการอะไหล่"
              dataIndex="name"
              key="member_tel"
              width={"60%"}
            />

            <Column
              title="จำนวน"
              dataIndex="device_type"
              key="device_type"
              width={"10%"}
            />

            <Column
              title="ราคาต่อหน่วย"
              dataIndex="device_type"
              key="device_type"
              width={"10%"}
            />
            <Column
              title="ราคาประเมิน"
              dataIndex="device_type"
              key="device_type"
              width={"10%"}
            />
          </ColumnGroup>
        </Table>
      </div>

      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={1000}
      >
        <Input />
      </Modal>
    </>
  );
}
