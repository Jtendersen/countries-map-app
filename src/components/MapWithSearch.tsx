"use client";

import { useState } from "react";
import Search from "./Search";
import { ExtendedCountry } from "@/types/countries";
import LeafletMap from "./LeafletMap";

const MapWithSearch = ({ countries }: { countries: ExtendedCountry[] }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = countries.filter(
      (country) =>
        country.name.toLowerCase().includes(lowerCaseQuery) ||
        country.continent.name.toLowerCase().includes(lowerCaseQuery) ||
        country.code.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="w-screen">
      <Search onSearch={handleSearch} />
      <LeafletMap countries={filteredCountries} />
    </div>
  );
};

export default MapWithSearch;
