import React, { FC } from "react";
import { WeatherLocation } from "../model/Weather";

interface LocationResultsProps {
    locations: WeatherLocation[];
}

export const LocationResults: FC<LocationResultsProps> = ({ locations }) => (
  <div>
    <h2>Locations</h2>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {locations.map((location, index) => (
          <tr key={index}>
            <td>{location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
