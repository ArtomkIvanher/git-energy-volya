import "./Button.css";
import "../CompColor.css"

export default function But({ children, onClick }) {
  return (
    <button onClick={onClick} className='active' id={children}>
      {children}
    </button>
  );
}
