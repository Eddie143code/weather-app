import Startscreenimage from "../Startscreenimage.svg";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Startscreen = ({ onClick, user }) => {
  const startimage = Startscreenimage;

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/Login");
    }
  });

  return (
    <div
      className="flex-wrap items-center justify-center 
      m-auto bg-violet-200 border-0 rounded-2xl h-135 w-75 "
    >
      <div className="flex items-center justify-center m-auto p-10">
        <img src={startimage} width="220" height="220" alt="img" />
      </div>
      <div className="flex-wrap bg-white rounded-lg mt-8 mx-3">
        <div className="flex items-center justify-center p-6">
          <span className="flex m-auto px-4">
            Find out the weather in any capital city
          </span>
        </div>
        <div className="flex m-auto p-6 items-center justify-center">
          <button className="button-17" onClick={onClick}>
            Get Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Startscreen;
