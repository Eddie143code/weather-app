import Searchbar from "./Searchbar";
import capitalcities from "./capitalcities";
import { BiArrowBack } from "react-icons/bi";
import { WiStrongWind } from "react-icons/wi";
import "../index.css";

const Day = ({
  temperature,
  condition,
  city,
  onKeyPress,
  image,
  displayWeather,
  error,
  onClick,
  wind,
}) => {
  // Determine today's date

  const date = new Date();
  const today =
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();

  return (
    <div className="container">
      <div>
        <button className="arrow-div" onClick={onClick}>
          <BiArrowBack className="arrow" size="25px" />
        </button>
      </div>
      <div className="date-div">
        <div className="date-container">{today}</div>
      </div>
      <div className="error-div">
        <div className="error">{error && "Invalid input"}</div>
      </div>
      <div className="searchbar-div">
        <Searchbar
          placeholder="Enter a city"
          data={capitalcities}
          onKeyPress={onKeyPress}
        />
      </div>
      <div className="categories-div city-div">City: {city}</div>
      <div className="image-container">
        {displayWeather && !error && (
          <>
            <img
              className="img"
              src={image}
              alt="img"
              width="125"
              height="125"
            />
            <span className="temperature-div">{temperature} °C</span>
            <span className="wind-div">
              <WiStrongWind className="wind-icon" />
              {wind}
            </span>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Day;
