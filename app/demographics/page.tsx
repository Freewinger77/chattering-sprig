"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InteractiveMap } from "@/components/interactive-map"
import { CountryList } from "@/components/country-list"

export default function DemographicsPage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Demographics</h1>
        <p className="text-muted-foreground">Analyze user demographics and regional insights</p>
      </div>

      <Tabs defaultValue="map" className="space-y-4">
        <TabsList>
          <TabsTrigger value="map">Map View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>
        <TabsContent value="map" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Global User Distribution</CardTitle>
              <CardDescription>Click on a country to see detailed information</CardDescription>
            </CardHeader>
            <CardContent className="h-[600px]">
              <InteractiveMap onSelectCountry={setSelectedCountry} />
            </CardContent>
          </Card>
          {selectedCountry && (
            <Card>
              <CardHeader>
                <CardTitle>{selectedCountry} Details</CardTitle>
              </CardHeader>
              <CardContent>
                <CountryList country={selectedCountry} />
              </CardContent>
            </Card>
          )}
        </TabsContent>
        <TabsContent value="list">
          <Card>
            <CardHeader>
              <CardTitle>Country-wise User Data</CardTitle>
              <CardDescription>Detailed list of user data by country</CardDescription>
            </CardHeader>
            <CardContent>
              <CountryList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

