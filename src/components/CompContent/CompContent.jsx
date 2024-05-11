import Layout from "antd/es/layout/layout";
import { dataE } from "../../data";
import "./CompContent.css";
import "../CompColor.css";
import CompContentVideo from "./CompContentVideo";

export default function CompContent({ children }) {
  return (
    <Layout.Content className="content">
      {/* <CompContentVideo>{children}</CompContentVideo> */}
      <div className="content__text">
        <p>{dataE[children + "Text1"]}</p>
        <p>{dataE[children + "Text2"]}</p>
        <p>{dataE[children + "Text3"]}</p>
        <p>{dataE[children + "Text4"]}</p>
      </div>
    </Layout.Content>
  );
}
