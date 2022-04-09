const SearchList = ({
  filteredData,
  activeSuggestionIndex,
  suggestionList,
  onClick,
}) => {
  return suggestionList ? (
    <div className="dataResult">
      {filteredData.map((value, index) => {
        let className;
        if (index === activeSuggestionIndex) {
          className = "suggestionsmatch";
        }
        return (
          <section key={index} className={className} onClick={onClick}>
            <p>{value}</p>
          </section>
        );
      })}
    </div>
  ) : (
    <div></div>
  );
};

export default SearchList;
