import Searchbar from "./Search/Searchbar";
import capitalcities from "./capitalcities";
import { BiArrowBack } from "react-icons/bi";
import "../index.css";
import WeatherSummaryView from "./WeatherSummary/WeatherSummaryView";
import WeatherPreview from "./Preview/WeatherPreview";

const Day = ({
  onKeyPress,
  displayWeather,
  error,
  onClick,
  onClickclear,

  displayBlock,

  info,
  handleInfo,

  weatherData,

  onClickadd,

  preview,

  onClickRefresh,
}) => {
  return (
    <div
      className="flex flex-wrap items-center justify-center 
    m-auto bg-violet-200 border-0 rounded-2xl h-135 w-75"
    >
      <div className="flex mr-14 p-2">
        <button className="flex border-0 rounded-2xl" onClick={onClick}>
          <BiArrowBack
            className="bg-transparent border-transparent"
            size="25px"
          />
        </button>
        <span className="flex text-base pl-8">Saved Weather Cities</span>
      </div>

      <div className="flex flex-wrap justify-center h-6 w-75">
        <Searchbar data={capitalcities} onKeyPress={onKeyPress} />
      </div>
      <div className="flex flex-wrap h-28 w-75 items-center justify-center ">
        {!error && preview && <WeatherPreview preview={preview} />}
        {error && (
          <span className=" text-red-600 font-bold font-sans">
            Invalid input. Please enter the name of a capital city
          </span>
        )}
      </div>

      <div className="flex h-8 w-75 justify-end">
        <button className="button-2" onClick={onClickadd}>
          Add
        </button>
      </div>
      <div className="flex  h-8 w-75 justify-end">
        <button className="button-1" onClick={onClickclear}>
          Clear All
        </button>
      </div>
      <div className="flex  h-8 w-75 justify-end">
        <button className="button-3" onClick={onClickRefresh}>
          Refresh
        </button>
      </div>
      <div className="flex flex-wrap bg-slate-50 rounded-2xl h-60 w-72 justify-center justify-around">
        {weatherData.map((data, i) => {
          return (
            <WeatherSummaryView
              key={i}
              {...data}
              displayBlock={displayBlock}
              error={error}
              displayWeather={displayWeather}
              info={info}
              handleInfo={handleInfo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Day;
