import React, { useState } from "react";

import { Row, Col, Typography, Image } from "antd";

// Import Images 264098267_614589809650713_7432399148669275975_n.png
import reportImg from "../../../../assets/images/Example/263773393_1270118020174602_2666156037006331548_n.png";
import userUseImg from "../../../../assets/images/Example/264098267_614589809650713_7432399148669275975_n.png";
import detailImg from "../../../../assets/images/Example/266805480_2127046747444617_6752024179146129762_n.png";

const { Title, Text } = Typography;

function App() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  return (
    <Row gutter={[16, 16]} className="content-box">
      <Col span={24} className="box-text-title">
        <Title level={4}>รูปตัวอย่างการใช้งาน</Title>
      </Col>

      <Col
        xs={{ span: 12, offset: 6 }}
        sm={{ span: 8, offset: 8 }}
        md={{ span: 6, offset: 4 }}
        lg={{ span: 5, offset: 1 }}
        xl={{ span: 4, offset: 2 }}
        className="Col-content"
      >
        <div>
          <div></div>
          <Image
            preview={{ visible1: false }}
            width={200}
            src={reportImg}
            onClick={() => setVisible1(true)}
          />
          <div style={{ display: "none" }}>
            <Image.PreviewGroup
              preview={{ visible1, onVisibleChange: (vis) => setVisible1(vis) }}
            >
              <Image src={reportImg} />
            </Image.PreviewGroup>
          </div>
          <Text>รูปการเพิ่มรายละเอียดของการซ่อม</Text>
        </div>
      </Col>
      <Col
        xs={{ span: 12, offset: 6 }}
        sm={{ span: 8, offset: 8 }}
        md={{ span: 4, offset: 4 }}
        lg={{ span: 5, offset: 1 }}
        xl={{ span: 4, offset: 2 }}
        span={8}
        className="Col-content"
      >
        <div>
          <Image
            preview={{ visible2: false }}
            width={200}
            src={detailImg}
            onClick={() => setVisible2(true)}
          />
          <div style={{ display: "none" }}>
            <Image.PreviewGroup
              preview={{ visible2, onVisibleChange: (vis) => setVisible2(vis) }}
            >
              <Image src={detailImg} />
            </Image.PreviewGroup>
          </div>
          <Text>รูปแสดงหน้าหลักของระบบ</Text>
        </div>
      </Col>
      <Col
        xs={{ span: 12, offset: 6 }}
        sm={{ span: 8, offset: 8 }}
        md={{ span: 6, offset: 4 }}
        lg={{ span: 5, offset: 1 }}
        xl={{ span: 4, offset: 2 }}
        span={8}
        className="Col-content"
      >
        <div>
          <Image
            preview={{ visible3: false }}
            width={200}
            src={reportImg}
            onClick={() => setVisible3(true)}
          />
          <div style={{ display: "none" }}>
            <Image.PreviewGroup
              preview={{ visible3, onVisibleChange: (vis) => setVisible3(vis) }}
            >
              <Image src={reportImg} />
            </Image.PreviewGroup>
          </div>
          <Text>รูปแสดงรายละเอียดของร้าน</Text>
        </div>
      </Col>

      <Col
        xs={{ span: 12, offset: 6 }}
        sm={{ span: 8, offset: 8 }}
        md={{ span: 4, offset: 4 }}
        lg={{ span: 5, offset: 1 }}
        xl={{ span: 4, offset: 2 }}
        className="Col-content"
      >
        <div>
          <Image
            preview={{ visible4: false }}
            width={200}
            src={userUseImg}
            onClick={() => setVisible4(true)}
          />
          <div style={{ display: "none" }}>
            <Image.PreviewGroup
              preview={{ visible4, onVisibleChange: (vis) => setVisible4(vis) }}
            >
              <Image src={userUseImg} />
            </Image.PreviewGroup>
          </div>
          <Text>รูปหน้าบริการลูกค้า</Text>
        </div>
      </Col>
    </Row>
  );
}

export default App;
