import Startscreenimage from "../Startscreenimage.svg";
import "../index.css";

const Startscreen = ({ onClick }) => {
  const startimage = Startscreenimage;
  return (
    <div
      class="flex-wrap items-center justify-center 
      m-auto bg-cyan-200 border-0 rounded-md h-131.25 w-75 shadow-slate-400 shadow-2l"
    >
      <div class="flex items-center justify-center m-auto h-81.25 w-75">
        <img
          src={startimage}
          className="sc-img"
          width="220"
          height="220"
          alt="img"
        />
      </div>
      <div class="flex-wrap bg-white rounded-md">
        <div class="flex items-center justify-center h-25 w-75">
          <span class="flex w-50">
            Find out the weather in any capital city
          </span>
        </div>
        <div class="flex h-25 w-75 items-center justify-center">
          <button className="button-17" onClick={onClick}>
            Get Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Startscreen;
