import { Flex } from "antd";
import Layout from "antd/es/layout/layout";
import CompSiderImg from "./CompoSiderImg";
import "./CompSider.css"
import "../CompColor.css"

export default function CompSider({children}) {
  return (
    <div className="sider">
      <CompSiderImg>{children}</CompSiderImg>
      <CompSiderImg>{children}</CompSiderImg>
      <CompSiderImg>{children}</CompSiderImg>
      <CompSiderImg>{children}</CompSiderImg>
    
      
    </div>
  );
}
