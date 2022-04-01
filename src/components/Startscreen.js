import Startscreenimage from "../Startscreenimage.svg";
import "../index.css";

const Startscreen = ({ onClick }) => {
  const startimage = Startscreenimage;
  return (
    <div className="container">
      <div className="sc-div1">
        <img
          src={startimage}
          className="sc-img"
          width="180"
          height="180"
          alt="img"
        />
      </div>
      <div className="sc-div2">
        <span className="sc-text">
          Find out the weather in any capital city
        </span>
      </div>
      <div className="sc-div3">
        <button className="button-17" onClick={onClick}>
          Get Start
        </button>
      </div>
    </div>
  );
};

export default Startscreen;
