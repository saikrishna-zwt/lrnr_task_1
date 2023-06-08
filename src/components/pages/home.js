import { Col, Row, Card, Typography } from "antd";
import React from "react";
import { CalendarOutlined } from "@ant-design/icons";
import LineChart from "./pageSubComponents/LineChart";

const Home = () => {
  const { Title } = Typography;
  const count = [
    {
      today: "Total Timesheet",
      title: "5",

      icon: <CalendarOutlined />,
      bnb: "bnb2",
    },
    {
      today: "Approved Timesheet",
      title: "3",

      icon: <CalendarOutlined />,
      bnb: "bnb2",
    },
    {
      today: "Pending Timesheet",
      title: "1",

      icon: <CalendarOutlined />,
      bnb: "redtext",
    },
    {
      today: "Rejected Timesheet",
      title: "1",

      icon: <CalendarOutlined />,
      bnb: "redtext",
    },
  ];

  return (
    <>
      <div style={{ margin: "20px" }} className="layout-content">
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {count.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={6}
              xl={6}
              className="mb-24"
            >
              <Card bordered={false} className="criclebox">
                <div className="number">
                  <Row align="middle" gutter={[24, 0]}>
                    <Col xs={18}>
                      <span>{c.today}</span>
                      <Title level={3}>
                        {c.title} <small className={c.bnb}>{c.persent}</small>
                      </Title>
                    </Col>
                    <Col xs={6}>
                      <div className="icon-box">{c.icon}</div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <LineChart />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
