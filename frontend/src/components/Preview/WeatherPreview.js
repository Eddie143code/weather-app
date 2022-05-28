const WeatherPreview = ({ preview }) => {
  return (
    <>
      <div className="flex-wrap border-solid h-22 w-24 border-2 border-slate-150 rounded-md bg-slate-100 shadow-2xl">
        <div className="flex text-sm">{preview.city}</div>
        <div className="flex">
          <span>
            <img src={preview.image} alt="" height="25" width="25" />
          </span>
          <span className="flex text-xs relative left-2">
            {preview.temp} °C
          </span>
        </div>
        <div className="flex">
          <span className="text-xs">Precipitation:</span>
          <span className="text-xs relative left-1">{preview.precip}</span>
        </div>
        <div className="flex">
          <span className="text-xs">Wind:</span>
          <span className="text-xs relative left-1">{preview.wind}</span>
        </div>
      </div>
    </>
  );
};

export default WeatherPreview;
