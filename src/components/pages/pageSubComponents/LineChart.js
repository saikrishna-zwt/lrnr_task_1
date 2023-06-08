import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import lineChart from "./linesChart";

function LineChart() {
  const { Title, Paragraph } = Typography;

  return (
    <>
      <div className="linechart">
        <div>
          <Title level={5}>Total Timesheetwork</Title>
          <Paragraph className="lastweek">than last week</Paragraph>
        </div>
        <div className="sales">
          <ul>
            <li>{<MinusOutlined />} Approved Task</li>
            <li>{<MinusOutlined />} Pending Task</li>
          </ul>
        </div>
      </div>

      <ReactApexChart
        className="full-width"
        options={lineChart.options}
        series={lineChart.series}
        type="area"
        height={350}
        width={"100%"}
      />
    </>
  );
}

export default LineChart;
