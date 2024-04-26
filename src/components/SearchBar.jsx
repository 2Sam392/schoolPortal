import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(event) {
    setSearchQuery(event.target.value.toLowerCase());
  }

  return (
    <div className="flex justify-start items-center gap-2 bg-white text-sm font-medium p-2 rounded-xl shadow-lg w-full md:w-1/4">
      <label htmlFor="search">
        <IoMdSearch />
      </label>
      <input
        type="search"
        placeholder="Search"
        onChange={handleSearch}
        value={searchQuery}
        id="search"
        className="search outline-none w-full"
      />
    </div>
  );
};

export default SearchBar;
