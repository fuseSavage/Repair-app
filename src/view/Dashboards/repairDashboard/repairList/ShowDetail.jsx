import React from "react";

// import {  Modal, Button, Input } from "antd";

// import { MobileOutlined, DollarOutlined } from "@ant-design/icons";

import { useLocation } from "react-router-dom";

// Import Component
import TitleShowDetail from "../../component/TitleShowDetail";
import SpareAdd from "../../component/SpareAdd";

// const { Meta } = Card;
// const { Text, Title } = Typography;

export default function ShowDetail() {
  let location = useLocation();

  //use State

  const detailID = location.state;
  //   console.log(detailID);

  return (
    <>
      <TitleShowDetail detailID={detailID.detailsID} />
      {/* Show Repair id = {detailID.detailsID} */}
      <SpareAdd detailID={detailID.detailsID} />
    </>
  );
}
