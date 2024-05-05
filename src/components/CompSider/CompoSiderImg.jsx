import "./CompSider.css";
import redImg from "../../img/volya-red-img.png";
import yellowImg from "../../img/volya-yellow-img.png";
import greenImg from "../../img/volya-green-img.png";
import pinkImg from "../../img/volya-pink-img.png";

export default function CompSiderImg({ children }) {
  const images = { redImg, greenImg, yellowImg, pinkImg };

  return (
    <div className="sider-anima">
      <img src={images[children + "Img"]} alt="" />
    </div>
  );
}
