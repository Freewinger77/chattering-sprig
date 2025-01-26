"use client"

import { useState } from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import { Tooltip, TooltipRoot, TooltipTrigger, TooltipContent, TooltipArrow } from "@/components/ui/tooltip"

const geoUrl = "https://raw.githubusercontent.com/subyfly/topojson/refs/heads/master/world-countries.json"

const heatmapData = {
  USA: 0.8,
  GBR: 0.6,
  CAN: 0.5,
  AUS: 0.4,
  DEU: 0.7,
  FRA: 0.5,
  JPN: 0.6,
  // Add more countries as needed
}

interface InteractiveMapProps {
  onSelectCountry: (country: string) => void
}

export function InteractiveMap({ onSelectCountry }: InteractiveMapProps) {
  const [tooltipContent, setTooltipContent] = useState("")

  return (
    <>
      <ComposableMap projection="geoMercator">
        <ZoomableGroup center={[0, 30]} zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const intensity = heatmapData[geo.properties.ISO_A3] || 0
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={`rgba(255, 0, 0, ${intensity})`}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "#F53" },
                      pressed: { outline: "none" },
                    }}
                    onMouseEnter={() => {
                      setTooltipContent(`${geo.properties.NAME}: ${(intensity * 100).toFixed(0)}% affected`)
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("")
                    }}
                    onClick={() => onSelectCountry(geo.properties.NAME)}
                  />
                )
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      {tooltipContent && <Tooltip>{tooltipContent}</Tooltip>}
    </>
  )
}

