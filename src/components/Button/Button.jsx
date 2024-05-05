import "./Button.css";
import "../btnLinia.css";
import "../CompColor.css"

export default function But({ children, onClick }) {
  return (
    <button onClick={onClick} className='active btn-linia' id={children}>
      {children}
    </button>
  );
}
