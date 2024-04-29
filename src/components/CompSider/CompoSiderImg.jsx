import "./CompSider.css";
import redImg from "../../img/volya-red-v6.png";
import greenImg from "../../img/volya-zelena-v5.png";
import yellowImg from "../../img/volya-dgovta-v11.png";
import pinkImg from "../../img/volya-pink-v8.png";

export default function CompSiderImg({ children }) {
  const images = { redImg, greenImg, yellowImg, pinkImg };

  return (
    <div className="img-div-anima">
      <img src={images[children + "Img"]} alt="" />
    </div>
  );
}
