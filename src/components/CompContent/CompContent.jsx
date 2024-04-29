import Layout from "antd/es/layout/layout";
import { dataE } from "../../data";

const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 120px)",
  color: "#fff",
  backgroundColor: "#001529",
};

export default function CompContent() {
  return <Layout.Content style={contentStyle}>
    <p>text</p>
  </Layout.Content>;
}
