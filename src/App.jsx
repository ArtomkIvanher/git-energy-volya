import { Layout } from "antd";
import CompSider from "./components/CompSider/CompSider";
import CompContent from "./components/CompContent/CompContent";
import But from "./components/Button/Button";
import { useState } from "react";
import { dataE } from "./data";
import "./components/Button/Button.css"
import CompFooter from "./components/CompFooter/CompFooter";
import "./components/CompColor.css"

export default function App() {
  const [stateBtn, setStateBtn] = useState('red')

  function handleClick(type) {
    setStateBtn(type)

  }

  return (
    <Layout style={{ display: "flex", flexDirection: "row", maxHeight: "100vh" }}>
      <CompSider>{stateBtn}</CompSider>
      <Layout className={stateBtn}>
        <Layout.Header style={{height: "60px", zIndex: 100}} className="header">
          <ul className="btn-linia">
            <But onClick={() => handleClick("red")}>{dataE.redName}</But>
            <But onClick={() => handleClick("green")}>{dataE.greenName}</But>
            <But onClick={() => handleClick("yellow")}>{dataE.yellowName}</But>
            <But onClick={() => handleClick("pink")}>{dataE.pinkName}</But>
          </ul>
        </Layout.Header>
        <CompContent>{stateBtn}</CompContent>
        <CompFooter>{stateBtn}</CompFooter>
      </Layout>
    </Layout>
  );
}
