import React, { useState } from "react";
import "../index.css";

function SearchBar({ placeholder, data, onKeyPress }) {
  // Dropdown list of cities
  const [filteredData, setFilteredData] = useState([]);
  // Counter that follows the value chosen by keyboard on the dropdown list
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  // The input in the search bar
  const [input, setInput] = useState();

  // Filter the list of reccommended words to autocomplete

  const handleFilter = (event) => {
    setInput(event.target.value);

    const searchWord = input;
    const newFilter = data.filter((value) => {
      return value.includes(searchWord);
    });

    setFilteredData(newFilter);
  };

  // Use keyboard to choose a city from the dropdown list
  const onKeyDown = (e) => {
    // Enter key removes dropdown list and sets input to the value at counter
    if (e.keyCode === 13) {
      setInput(filteredData[activeSuggestionIndex - 1]);
      setActiveSuggestionIndex(0);
      setFilteredData([]);
    }
    // Up-arrow scrolls upwards by decrementing the counter
    else if (e.keyCode === 38) {
      if (activeSuggestionIndex <= 0) {
        return;
      }

      setActiveSuggestionIndex(activeSuggestionIndex - 1);
      setInput(filteredData[activeSuggestionIndex]);
    }
    // Down-arrow scrolls downwards by incrementing the counter
    else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === filteredData.length) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
      setInput(filteredData[activeSuggestionIndex]);
    }
    // On every backspace see if the input is empty, then set the list to empty which will hide the dropdown list
    else if (e.keyCode === 8) {
      if (input.length < 2) {
        setInput();
        setFilteredData([]);
      }
    }
  };

  return (
    <>
      <div className="searchInputs searchinp">
        <input
          className="inputfield"
          type="text"
          placeholder={placeholder}
          onKeyPress={onKeyPress}
          onChange={handleFilter}
          onKeyDown={onKeyDown}
          value={input}
        />
      </div>
      <div className="filt-data">
        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.map((value, key) => {
              return (
                <section className="dataItem">
                  <p>{value}</p>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBar;
