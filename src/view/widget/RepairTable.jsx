import React, { useState, useEffect } from "react";

import { Table, Space, Typography } from "antd";
import { Link } from "react-router-dom";

// Import services
import { FetctDetailByGarage } from "../../services";

const { Column, ColumnGroup } = Table;
const { Text } = Typography;

export default function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getDetailByGarage = async () => {
      let local = {
        garageID: JSON.parse(localStorage.getItem("user")).userData.userId,
      };
      // console.log("local", local);
      // console.log(local);
      await FetctDetailByGarage(local).then(async (response) => {
        await setDatas(response.data);
      });
    };
    getDetailByGarage();
  }, []);

  // console.log("datas", datas);

  // const clickMore = (key) => {
  //   console.log("key", key);
  // };

  return (
    <>
      <Table dataSource={datas} scroll={{ x: 1000, y: 400 }}>
        <ColumnGroup title="ลูกค้า">
          <Column
            title="ชื่อลูกค้า"
            dataIndex="member_name"
            key="member_name"
          />
          <Column title="รหัสลูกค้า" dataIndex="member_tel" key="member_tel" />
        </ColumnGroup>

        <ColumnGroup title="รายละเอียด">
          <Column
            title="ประเภทการซ่อม"
            dataIndex="device_type"
            key="device_type"
          />

          <Column
            title="ทะเบียน/ชนิด"
            key="detailsID"
            render={(text, record) => (
              <>
                {record.device_type === "รถจักรยานยนต์" ||
                record.device_type === "รถยนต์" ? (
                  <>
                    <Space size="small">
                      <Text style={{ fontWeight: "bold" }}>
                        {record.car_number}
                      </Text>
                    </Space>
                    {<br />}
                    <Text>{record.car_province}</Text>
                  </>
                ) : (
                  <>
                    <Text>
                      {record.equipment}
                    </Text>
                  </>
                )}
              </>
            )}
          />

          <Column
            title="รายละเอียดการซ่อมเบื้องต้น"
            dataIndex="repair_details"
            key="repair_details"
          />
          <Column
            title="วันที่รับซ่อม"
            dataIndex="repair_date"
            key="repair_date"
          />
          <Column title="สถานะ" dataIndex="status" key="status" />
          <Column
            title="เพิ่มเติม"
            key="detailsID"
            render={(text, record) => (
              <Space size="middle">
                <Link
                  to={{
                    pathname: "/dashboard/all-repair/detail",
                    state: { detailsID: record.detailsID },
                  }}
                >
                  <Text style={{ color: "blue" }}>จัดการ</Text>
                </Link>
              </Space>
            )}
          />
        </ColumnGroup>
      </Table>
    </>
  );
}
