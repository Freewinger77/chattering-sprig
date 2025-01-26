import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { scaleLinear } from "d3-scale"

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

const colorScale = scaleLinear<string>().domain([0, 5]).range(["#ffedea", "#ff5233"])

interface WorldMapProps {
  data: { [key: string]: number }
}

export default function WorldMap({ data }: WorldMapProps) {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const d = data[geo.properties.ISO_A3] || 0
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={d ? colorScale(d) : "#F5F4F6"}
                stroke="#D6D6DA"
                strokeWidth={0.5}
              />
            )
          })
        }
      </Geographies>
    </ComposableMap>
  )
}

