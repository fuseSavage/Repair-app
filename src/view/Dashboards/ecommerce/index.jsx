import { React, useEffect, useState } from "react";

import { Link } from "react-router-dom";

// Import services
import { FetctDetailByGarage } from "../../../services";

// import { useLocation } from "react-router-dom";

import { Row, Col, Divider, Result, Button, Statistic } from "antd";

//import Widget
import CanvasJSChart from "../../widget/widgetPie";
import ColumnJSChart from "../../widget/widgetColumn";

// const { Header } = Layout;

export default function Ecommerce() {
  // let location = useLocation();

  const [datas, setDatas] = useState([]);

  // const  detailID  = location.state
  // console.log(detailID)

  // console.log("datas", datas);

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

  return (
    <>
      {datas !== null ? (
        <>
          {/* <div className="display-flex-main"> */}
          {/* <div className="div-content-chart"> */}
          <Row gutter={[0, 16]} style={{ padding: "4%" }}>
            <Col xs={24} lg={{ span: 10, offset: 1 }}>
              <CanvasJSChart />
            </Col>
            <Col xs={24} lg={{ span: 10, offset: 2 }}>
              <ColumnJSChart />
            </Col>
          </Row>

          <Divider />

          <Row>
            <Col span={12}>
              <Row gutter={16}>
                <Col xs={24} lg={{ span: 11 }}>
                  <Statistic title="ลูกค้าทั้งหมดของระบบ" value={120} />
                </Col>
                <Col xs={24} lg={{ span: 11, offset: 1 }}>
                  <Statistic
                    title="ลูกค้าของฉัน"
                    value={12}
                    // precision={2}
                  />
                </Col>
              </Row>
            </Col>

            <Col span={12}>
              <Row gutter={16}>
                <Col xs={24} lg={{ span: 11 }}>
                  <Statistic title="การรายงาน" value={120} />
                </Col>
                <Col xs={24} lg={{ span: 11, offset: 1 }}>
                  <Statistic
                    title="รายได้ทั้งหมดของร้าน (บาท)"
                    value={19356}
                    precision={2}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          {/* </div> */}
          {/* </div> */}
        </>
      ) : (
        <>
          <div className="display-flex-main">
            <div className="div-content-chart">
              <Row className="content-chart">
                <Col xs={24} lg={24} className="chart">
                  <Result
                    title="ร้านของคุณยังไม่มีการซ่อม"
                    extra={
                      <Button className="bt-them" key="console">
                        <Link to={"/dashboard/add-detail"}>เพิ่มการซ่อม</Link>
                      </Button>
                    }
                  />
                </Col>
              </Row>
            </div>
          </div>
        </>
      )}

      {/* <CanvasJSChart className="chart" data={location.state} /> */}
    </>
  );
}
