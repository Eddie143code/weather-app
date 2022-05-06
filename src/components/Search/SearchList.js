const SearchList = ({
  filteredData,
  activeSuggestionIndex,
  suggestionList,
  onClick,
}) => {
  return suggestionList ? (
    <div className="relative h-20 w-44 bg-white shadow-md overflow-hidden overflow-y-auto">
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
