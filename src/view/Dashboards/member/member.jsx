import React, { useState, useEffect } from "react";

import { Table, Input, Button, Space, Row, Col, Typography } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

// import Service
import { FetctMemberByGarage } from "../../../services";

const { Title } = Typography

export default function Member() {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const [datas, setDatas] = useState([]);

  let userId = JSON.parse(localStorage.getItem("user")).userData.userId;

  useEffect(() => {
    let data = {
      userId: userId,
    };
    const getMember = async () => {
      await FetctMemberByGarage(data).then(async (response) => {
        if (response.code === 500) {
          console.log("data", response);
        } else {
          await setDatas(response.data);
        }
        // console.log('data', response)
      });
    };
    getMember();
  }, [userId]);

  let listData = [];

  if (datas.length !== 0) {
    for (let i = 0; i < datas.length; i++) {
      let ads = JSON.parse(datas[i].member_ads);

      let newData = {
        member_name: datas[i].member_name,
        member_tel: datas[i].member_tel,
        register: datas[i].registration_date,
        address_details: ads.address_details,
        sub_district: ads.sub_district,
        district: ads.district,
        province: ads.province,
        poscode: ads.poscode,
      };
      listData.push(newData);
    }
  }

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            // searchInput = node;
          }}
          placeholder={`ค้นหา ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            ค้นหา
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            ล้าง
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        // setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
    // this.setState({
    //   searchText: selectedKeys[0],
    //   searchedColumn: dataIndex,
    // });
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    // this.setState({ searchText: "" });
    setSearchText("");
  };

  const columns = [
    {
      title: "หมายเลขสมาชิก",
      dataIndex: "member_tel",
      key: "member_tel",
      width: "20%",
      ...getColumnSearchProps("member_tel"),
    },
    {
      title: "ชื่อ",
      dataIndex: "member_name",
      key: "member_name",
      width: "20%",
      ...getColumnSearchProps("member_name"),
    },
    {
      title: "ที่อยู่",
      render: (record) => {
        return (
          <>
            {record.address_details}, {record.sub_district}, {record.district},{" "}
            {record.province}, {record.poscode}
          </>
        );
      },
    },
    {
      title: "วันที่ลงทะเบียน",
      dataIndex: "register",
      key: "register",
      width: "20%",
      ...getColumnSearchProps("register"),
    },
  ];

  return (
    <>
    <Row style={{padding: "3% 0 0 0"}}>
      <Col span={24}>
        <Title level={3}>ลูกค้าทั้งหมดของร้าน</Title>
      </Col>
    </Row>
      <div className="div-p-5">
        <Table
          scroll={{ x: 500 }}
          bordered
          columns={columns}
          dataSource={listData}
        />
      </div>
    </>
  );
}
