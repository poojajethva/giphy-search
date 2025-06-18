import React, { useEffect, useState } from "react";
import useFetchGiphy from "../hooks/useFetchGiphy";
import constants from "../utilities/constants";

function Header({ handleSearchClick }) {
  const [inputVal, setInputVal] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSelection, setIsSelection] = useState(false);
  const { data } = useFetchGiphy({
    query: debouncedQuery,
    category: constants.TAGS,
    limit: 5,
  });

  useEffect(() => {
    if (!inputVal.trim()) {
      setShowSuggestions(false);
      return;
    }
    if (isSelection) {
      setIsSelection(false);
      return;
    }
    const delay = setTimeout(() => {
      setDebouncedQuery(inputVal.trim());
      setShowSuggestions(true);
    }, 800);

    return () => clearTimeout(delay);
  }, [inputVal]);

  const handleSelect = (term) => {
    setIsSelection(true);
    setInputVal(term);
    setShowSuggestions(false);
    handleSearchClick(term);
  };

  const handleSearchButton = () => {
    if (!inputVal.trim()) return;
    setShowSuggestions(false);
    handleSearchClick(inputVal);
  };

  const handleSearchChange = (e) => {
    setInputVal(e.target.value);
    setShowSuggestions(true);
  };

  return (
    <header>
      <div className="container">
        <h2 className="logo-container">
          <span className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                fill="#ff6666"
                d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"
              />
            </svg>
          </span>
          <span>Giphy Search</span>
        </h2>
        <div className="searchbox-wrapper">
          <div className="searchbox">
            <input
              type="text"
              placeholder="Search Giphy"
              className="searchinput"
              value={inputVal}
              onChange={handleSearchChange}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
              onFocus={() => inputVal && setShowSuggestions(true)}
            />
            <div className="search-icon" onClick={handleSearchButton}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#ffffff"
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                />
              </svg>
            </div>
          </div>
          {showSuggestions && data.data?.length > 0 && (
            <ul className="autocomplete">
              {data?.data.map((str, i) => (
                <li key={str.name} onClick={() => handleSelect(str.name)}>
                  {str.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
