import { React } from "react";
import { Col, Layout, Row } from "antd";
import { useHistory } from "react-router-dom";

const { Header } = Layout;

export default function App() {
  const history = useHistory();

  const clicklogo = () => {
    history.push("/");
  };
  // const onclickLogin = () => {
  //   console.log('click login')
  // }
  return (
    <Header className="header-home" style={{ zIndex: 1 }}>
      {/* <img src={logo} alt="Logo" width={30} height={30}/> */}
      <Row gutter={[32, 32]} justify="space-between">
        <Col span={15}>
          <Row>
            <Row className="main-logo" onClick={clicklogo}>
              <div> Repair </div>&nbsp;
              <div className="logo"> Center</div>
            </Row>
          </Row>
        </Col>
      </Row>
    </Header>
  );
}
