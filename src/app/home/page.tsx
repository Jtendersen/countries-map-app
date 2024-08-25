import { CountriesData, Country, ExtendedCountry } from "@/types/countries";
import { client } from "../../lib/graphql-client";
import { GET_COUNTRIES } from "../../lib/queries";
import countriesData from "@/lib/countries.json";
import MapWithSearch from "@/components/MapWithSearch";
import Navbar from "@/components/Navbar";

export default async function Home() {
  let initialCountries: ExtendedCountry[] = [];

  try {
    const data: CountriesData = await client.request(GET_COUNTRIES);
    initialCountries = data.countries
      .map((country: Country) => {
        const coordinates = countriesData.find(
          (item) => item["ISO Code"] === country.code
        );
        return coordinates
          ? {
              ...country,
              latitude: coordinates?.Latitude,
              longitude: coordinates?.Longitude,
            }
          : null;
      })
      .filter((c) => c !== null) as ExtendedCountry[];
  } catch (error) {
    console.error("Error fetching countries data:", error);
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <div className="pt-14">
      <Navbar />
      <MapWithSearch countries={initialCountries} />
    </div>
  );
}
