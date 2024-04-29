import "./CompFooter.css";
import telegramICO from "../../img/telegramICO.png";
import gitHubICO from "../../img/gitHubICO.png";
import steamICO from "../../img/steamICO.png";
import "../CompColor.css";
import { dataE, dataI } from "../../data";

export default function CompFooterInfa({ children }) {
  return (
    <div>
      <p>{children}</p>
      <div className="sot-seti">
        <a href={dataI[children + "Telegram"]} className="sot-set btn-linia">
          <img className="telegramICO" src={telegramICO} alt=""></img>
          <p>{dataI[children + "TelegramName"]} </p>
        </a>
        <a href={dataI[children + "GitHub"]} className="sot-set btn-linia">
          <img className="telegramICO" src={gitHubICO} alt=""></img>
          <p>{dataI[children + "GitHubName"]} </p>
        </a>
        <a href={dataI[children + "Steam"]} className="sot-set btn-linia">
          <img className="telegramICO" src={steamICO} alt=""></img>
          <p>{dataI[children + "SteamName"]} </p>
        </a>
      </div>
    </div>
  );
}
