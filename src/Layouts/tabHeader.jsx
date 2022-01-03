import { React } from "react";
import { Col, Layout, Row } from "antd";
import { useHistory } from "react-router-dom";

const { Header } = Layout;

export default function App() {
  const history = useHistory();

  const clicklogo = () => {
    history.push("/");
  };
  return (
    <Header className="header-home" style={{ zIndex: 1 }}>
      <div>
        {/* <img src={logo} alt="Logo" width={30} height={30}/> */}
        <Row>
          <Col span={20}>
            <Row className="main-logo" onClick={clicklogo}>
              <div> Repair </div>&nbsp;
              <div className="logo"> Center</div>
            </Row>
          </Col>
        </Row>
      </div>
    </Header>
  );
}
