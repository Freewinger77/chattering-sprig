"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { WorldMap } from "./world-map"

const data = [
  { name: "Jan", users: 400, sessions: 240, newUsers: 100 },
  { name: "Feb", users: 300, sessions: 139, newUsers: 80 },
  { name: "Mar", users: 200, sessions: 980, newUsers: 70 },
  { name: "Apr", users: 278, sessions: 390, newUsers: 60 },
  { name: "May", users: 189, sessions: 480, newUsers: 90 },
  { name: "Jun", users: 239, sessions: 380, newUsers: 120 },
]

export function AnalyticsOverview() {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="demographics" className="opacity-50 cursor-not-allowed hover:text-muted-foreground pointer-events: none">Demographics</TabsTrigger>
        <TabsTrigger value="behavior" className="opacity-50 cursor-not-allowed hover:text-muted-foreground pointer-events: none">Behavior</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,850</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,253</div>
              <p className="text-xs text-muted-foreground">+10.5% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Session Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4m 32s</div>
              <p className="text-xs text-muted-foreground">+7.2% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42.3%</div>
              <p className="text-xs text-muted-foreground">-3.1% from last month</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>User Activity</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="users" stroke="#8884d8" name="Total Users" />
                  <Line type="monotone" dataKey="sessions" stroke="#82ca9d" name="Sessions" />
                  <Line type="monotone" dataKey="newUsers" stroke="#ffc658" name="New Users" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Geographic Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <WorldMap />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}

