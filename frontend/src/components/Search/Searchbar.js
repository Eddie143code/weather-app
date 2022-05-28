import React, { useState } from "react";
import SearchList from "./SearchList";
import "../../index.css";

function SearchBar({ data, onKeyPress }) {
  // Dropdown list of cities
  const [filteredData, setFilteredData] = useState([]);
  // Counter that follows the value chosen by keyboard on the dropdown list
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  // The input in the search bar
  const [input, setInput] = useState("");

  const [suggestionList, setSuggestionList] = useState(false);

  // Filter the list of reccommended words to autocomplete

  const handleFilter = (event) => {
    const temp = event.target.value;
    const input = temp.charAt(0).toUpperCase() + temp.slice(1);
    const newFilter = data.filter((value) => {
      return value.includes(input);
    });
    setInput(temp);
    setFilteredData(newFilter);
    setSuggestionList(true);
  };

  // Use keyboard to choose a city from the dropdown list
  const onKeyDown = (e) => {
    // Enter key removes dropdown list and sets input to the value at counter
    if (e.keyCode === 13) {
      if (activeSuggestionIndex >= 0) {
        setInput(filteredData[activeSuggestionIndex]);
        setActiveSuggestionIndex(0);
        setSuggestionList(false);
      } else {
        return;
      }
    }
    // Up-arrow scrolls upwards by decrementing the counter
    if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
      console.log(activeSuggestionIndex);
    }

    // Down-arrow scrolls downwards by incrementing the counter
    else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === filteredData.length) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
      console.log(activeSuggestionIndex);
    }

    // On every backspace see if the input is empty, then set the list to empty which will hide the dropdown list

    if (input === "") {
      setSuggestionList(false);
    }
  };

  const handleClick = (event) => {
    setFilteredData([]);
    setInput(event.target.innerText);
    setActiveSuggestionIndex(0);
    setSuggestionList(false);
  };

  return (
    <>
      <div className="relative">
        <input
          type="text"
          className="flex"
          placeholder="Search for a city"
          onKeyPress={onKeyPress}
          onChange={handleFilter}
          onKeyDown={onKeyDown}
          value={input}
        />
      </div>
      <div className="relative z-10">
        <SearchList
          filteredData={filteredData}
          activeSuggestionIndex={activeSuggestionIndex}
          suggestionList={suggestionList}
          onClick={handleClick}
        />
      </div>
    </>
  );
}

export default SearchBar;
