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
            class="flex-wrap h-28 w-30 border-solid border-2 border-slate-150 rounded-md bg-slate-100 shadow-2xl"
            onClick={handleInfo}
          >
            <div class="flex text-lg h-6 w-15">{city}</div>
            <div class="flex">
              <span>
                <img src={image} alt="" height="40" width="40" />
              </span>
              <span class="flex relative left-2">{temp} °C</span>
            </div>
            <div class="flex">
              <span class="text-sm">Precipitation:</span>
              <span class="relative left-2">{precip}</span>
            </div>
            <div class="flex">
              <span class="text-sm">Wind:</span>
              <span class="relative left-2">{wind}</span>
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
