import "./CompFooter.css";
import "../CompColor.css";
import CompFooterInfa from "./CompFooterInfa";
import htmlICO from "../../img/htmlICO.png";
import reactICO from "../../img/reactICO.png";
import cssICO from "../../img/cssICO.png";


export default function CompFooter({ children }) {
  return (
    <div id={children}>
      <footer>
        <div className="footer__p">
          <p>footer</p>
        </div>

        <div className="infa">
          <CompFooterInfa>sasha</CompFooterInfa>
          <CompFooterInfa>artem</CompFooterInfa>
        </div>

        <div className="footer__footer">
          <a href="https://uk.wikipedia.org/wiki/HTML">
            <img src={htmlICO} alt="" />
          </a>
          <a href="https://uk.wikipedia.org/wiki/React">
            <img className="reactICO" src={reactICO} alt="" />
          </a>
          <a href="https://uk.wikipedia.org/wiki/CSS">
            <img src={cssICO} alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
}
