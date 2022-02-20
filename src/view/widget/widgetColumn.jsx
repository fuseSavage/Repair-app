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
  let repairSum = []
  let succeed = []
  let notSucceed = []

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
      // console.log(datas[i].status)
      repairSum.push(datas[i].length)
  
      if (datas[i].status === "อยู่ระหว่างการซ่อม") {
        succeed.push(datas[i].status)
        // console.log(datas[i].status)
      }
      if (datas[i].status === "สำเร็จ") {
        notSucceed.push(datas[i].status)
      }
    }
  }
  

  const options = {
    animationEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title: {
      text: "สรุปการซ่อม",
    },
    data: [
      {
        // Change type to "bar", "area", "spline", "pie",etc.
        type: "column", 
        // indexLabel: "{label}: {y}%",
        startAngle: 90,
        dataPoints: [
          { y: repairSum.length, label: "การซ่อมทั้งหมด" },
          { y: notSucceed.length, label: "สำเร็จ" },
          { y: succeed.length, label: "กำลังดำเนินการซ่อม" },
          
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
