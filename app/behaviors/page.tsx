"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
} from "recharts"

const sessionData = [
  { name: "0-30s", sessions: 5000 },
  { name: "30s-2m", sessions: 3000 },
  { name: "2-5m", sessions: 2000 },
  { name: "5-10m", sessions: 1500 },
  { name: "10m+", sessions: 1000 },
]

const retentionData = [
  { day: 1, retention: 100 },
  { day: 3, retention: 70 },
  { day: 7, retention: 50 },
  { day: 14, retention: 40 },
  { day: 30, retention: 30 },
]

const engagementData = [
  { feature: "Dashboard", usage: 80 },
  { feature: "Analytics", usage: 65 },
  { feature: "Campaigns", usage: 55 },
  { feature: "Reports", usage: 40 },
  { feature: "Settings", usage: 30 },
]

export default function BehaviorsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">User Behaviors</h1>
        <p className="text-muted-foreground">Analyze user engagement and retention patterns</p>
      </div>

      <Tabs defaultValue="session" className="space-y-4">
        <TabsList>
          <TabsTrigger value="session">Session Duration</TabsTrigger>
          <TabsTrigger value="retention">User Retention</TabsTrigger>
          <TabsTrigger value="engagement">Feature Engagement</TabsTrigger>
        </TabsList>
        <TabsContent value="session">
          <Card>
            <CardHeader>
              <CardTitle>Session Duration Distribution</CardTitle>
              <CardDescription>Breakdown of user session lengths</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sessionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sessions" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="retention">
          <Card>
            <CardHeader>
              <CardTitle>User Retention</CardTitle>
              <CardDescription>Percentage of users retained over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={retentionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="retention" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="engagement">
          <Card>
            <CardHeader>
              <CardTitle>Feature Engagement</CardTitle>
              <CardDescription>Usage percentage of different features</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={engagementData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="feature" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="usage" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

