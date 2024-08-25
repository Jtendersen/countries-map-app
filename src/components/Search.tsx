"use client";

import { useState } from "react";

type SearchProps = {
  onSearch: (query: string) => void;
};

const Search = ({ onSearch }: SearchProps) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleInputChange}
      placeholder="Search by country name, region, or ISO code"
      style={{
        width: "100%",
        padding: "10px",
        color: "black",
      }}
    />
  );
};

export default Search;
