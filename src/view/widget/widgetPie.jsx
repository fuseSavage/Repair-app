import React, { useEffect, useState } from "react";
import { Typography } from "antd";

import { Link } from "react-router-dom";

import { CanvasJSChart } from "canvasjs-react-charts";

// Import services
import { FetctDetailByGarage } from "../../services";

const { Title } = Typography;

export default function Ecommerce(props) {
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
  // console.log("datas", datas.length);
  let carlist = [];
  let motolist = [];
  let agirculturelist = [];
  let totol = [];

  if (datas !== null) {
    for (let i = 0; i < datas.length; i++) {
      if (datas[i].device_type === "รถยนต์") {
        // console.log(datas[i].device_type);
        carlist.push(datas[i].device_type);
      }
      if (datas[i].device_type === "รถจักรยานยนต์") {
        motolist.push(datas[i].device_type);
      }
      if (datas[i].device_type === "อุปกรณ์การเกษตร") {
        agirculturelist.push(datas[i].device_type);
      }
      totol.push(datas[i]);
    }
  } else {
    // console.log('data is null', datas)
  }

  // console.log("datas", carlist,motolist, agirculturelist );

  const options = {
    animationEnabled: true,
    theme: "light1", // "light1", "dark1", "dark2"
    title: {
      text: "รายการซ่อมทั้งหมด",
    },
    data: [
      {
        type: "doughnut", //doughnut
        startAngle: -90,
        // style={{width: '50px'}},
        dataPoints: [
          { y: carlist.length, label: "รถยนต์" },
          { y: motolist.length, label: "รถจักรยานยนต์" },
          { y: agirculturelist.length, label: "อุปกรณ์การเกษตร" },
        ],
      },
    ],
  };

  return (
    <div style={{ heigth: "200px" }}>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      <Link to={"/dashboard/all-repair"}>
        <Title level={5}>การซ่อมทั้งหมด {totol.length} รายการ</Title>
      </Link>
    </div>
  );
}
