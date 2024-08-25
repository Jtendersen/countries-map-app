"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { ExtendedCountry } from "@/types/countries";
import { useEffect } from "react";

const MapHandler = ({ countries }: { countries: ExtendedCountry[] }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    if (countries.length === 1) {
      const { latitude, longitude } = countries[0];
      map.setView([latitude, longitude], 6);
    } else if (countries.length > 1) {
      const bounds = countries.map((country) => [
        country.latitude,
        country.longitude,
      ]);
      map.fitBounds(bounds as L.LatLngBoundsExpression);
    }
  }, [countries, map]);

  return null;
};

const LeafletMap = ({ countries }: { countries: ExtendedCountry[] }) => {
  return (
    <MapContainer
      center={[0, -60]}
      zoom={3}
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {countries.map((country) => {
        const emojiIcon = L.divIcon({
          html: `<div style="font-size: 24px;">${country.emoji}</div>`,
          className: "",
        });

        return (
          <Marker
            key={country.code}
            position={[country.latitude, country.longitude]}
            icon={emojiIcon}
          >
            <Popup>
              <div>
                <h1 className="text-lg text-center font-bold mb-2">
                  {country.name} ({country.code})
                </h1>
                <p>
                  <span className="font-semibold">Capital:</span>{" "}
                  {country.capital}
                </p>
                <p>
                  <span className="font-semibold">Continent:</span>{" "}
                  {country.continent.name}
                </p>
                <p>
                  <span className="font-semibold">Languages:</span>{" "}
                  {country.languages.map((lang) => lang.name).join(", ")}
                </p>
                <p>
                  <span className="font-semibold">Flag:</span> {country.emoji}
                </p>
                <p>
                  <span className="font-semibold">AWS Region:</span>{" "}
                  {country.awsRegion}
                </p>
              </div>
            </Popup>
          </Marker>
        );
      })}
      <MapHandler countries={countries} />
    </MapContainer>
  );
};

export default LeafletMap;
