const WeatherSummaryView = ({
  city,
  image,
  temp,
  precip,
  wind,
  humid,
  press,

  displayWeather,
  error,
  info,
  displayBlock,
  handleInfo,

}) => {
  return (
    <>
      {displayWeather && !error && displayBlock && (
        <>
          <div
            className="flex-wrap border-solid h-25 w-28 border-2 border-slate-150 rounded-md bg-slate-100 shadow-2xl"
            onClick={handleInfo}
          >
            <div className="flex text-sm">{city}</div>
            <div className="flex">
              <span>
                <img src={image} alt="" height="30" width="30" />
              </span>
              <span className="flex text-sm relative left-2">{temp} °C</span>
            </div>
            <div className="flex">
              <span className="text-sm">Precipitation:</span>
              <span className="text-sm relative left-2">{precip}</span>
            </div>
            <div className="flex">
              <span className="text-sm">Wind:</span>
              <span className="text-sm relative left-2">{wind}</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default WeatherSummaryView;

/*<div className="image-container-2">
{displayWeather && !error && info && (
  <>
    <div className="image-container-2-div1">
      <div className="image-container-2-div1-details1">
        <span className="precip">Precipitation:</span>{" "}
        <span className="windpos">Wind:</span>
      </div>
      <div className="image-container-2-div1-details2">
        <span className="precipamountpos">{precip}</span>
        <span className="windamountpos">{wind}</span>
      </div>
    </div>
    <div className="image-container-2-div2">
      <div className="image-container-2-div2-details1">
        <span className="humid">Humidity:</span>{" "}
        <span className="prespos">Pressure:</span>
      </div>
      <div className="image-container-2-div2-details2">
        <span className="humidamountpos">{humid}</span>
        <span className="pressamountpos">{press}</span>
      </div>
    </div>
  </>
)}
</div>

*/
