"use client"

import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export function WorldMap() {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#e5e7eb"
              stroke="#fff"
              strokeWidth={0.5}
              style={{
                default: { outline: "none" },
                hover: { fill: "#d1d5db", outline: "none" },
                pressed: { outline: "none" },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}

