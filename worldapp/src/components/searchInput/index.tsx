import "./styles.css";
import { InputTS } from "../../types/Input";
import { useState } from "react";
import { useDebounce } from "./Debounce";
import { ChevronDown, Search } from "react-feather";

const delay = 500;

export const SearchInput = ({ value, setSearch }: InputTS) => {
  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const debouncedChange = useDebounce(setSearch, delay);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    setSearchInput(selectedValue);
    debouncedChange(selectedValue);
  };

  const handleFilterChange: React.MouseEventHandler<HTMLLIElement> = (e) => {
    const selectedValue = e.currentTarget.dataset.value;
    setFilterInput(selectedValue || "");
    setSearch(selectedValue || "");
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <section className="inputArea">
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search by Country"
          value={searchInput}
          onChange={handleSearchChange}
        />
        <Search className="searchIcon" size={20} />
      </div>
      <div className={`dropdown ${dropdownOpen ? "open" : ""}`}>
        <button className="dropdownButton" onClick={toggleDropdown}>
          {filterInput ? filterInput : "Filter by Region"}
          <ChevronDown className="dropdownIcon" size={20} />
        </button>
        <ul className="dropdownList">
          {/* <li className="dropdownOption" data-value="" onClick={handleFilterChange}>
            Filter by Region
          </li> */}
          <li
            className="dropdownOption"
            data-value="Africa"
            onClick={handleFilterChange}
          >
            Africa
          </li>
          <li
            className="dropdownOption"
            data-value="America"
            onClick={handleFilterChange}
          >
            Americas
          </li>
          <li
            className="dropdownOption"
            data-value="Asia"
            onClick={handleFilterChange}
          >
            Asia
          </li>
          <li
            className="dropdownOption"
            data-value="Europe"
            onClick={handleFilterChange}
          >
            Europe
          </li>
          <li
            className="dropdownOption"
            data-value="Oceania"
            onClick={handleFilterChange}
          >
            Oceania
          </li>
        </ul>
      </div>
    </section>
  );
};
