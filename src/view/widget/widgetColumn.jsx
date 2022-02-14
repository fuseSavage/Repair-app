import React, { useEffect, useState } from "react";

import { CanvasJSChart } from "canvasjs-react-charts";

// Import services
import { FetctDetailByGarage } from "../../services";

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

  // console.log("datas", datas.length);

  let carlist = [];
  let motolist = [];
  let agirculturelist = [];

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
  }

  const options = {
    animationEnabled: true,
    theme: "light1", // "light1", "dark1", "dark2"
    title: {
      text: "รายการซ่อมทั้งหมด",
    },
    data: [
      {
        type: "column",
        // indexLabel: "{label}: {y}%",
        startAngle: 60,
        dataPoints: [
          { y: carlist.length, label: "รถยนต์" },
          { y: motolist.length, label: "รถจักรยานยนต์" },
          { y: agirculturelist.length, label: "อุปกรณ์การเกษตร" },
          { y: carlist.length, label: "รถยนต์" },
          { y: motolist.length, label: "รถจักรยานยนต์" },
          { y: agirculturelist.length, label: "อุปกรณ์การเกษตร" },
          { y: carlist.length, label: "รถยนต์" },
        ],
      },
    ],
  };

  return (
    <>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </>
  );
}
