"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Button } from "@/components/ui/button"

const data = [
  { name: "Jan", users: 400, sessions: 240, newUsers: 100 },
  { name: "Feb", users: 300, sessions: 139, newUsers: 80 },
  { name: "Mar", users: 200, sessions: 980, newUsers: 70 },
  { name: "Apr", users: 278, sessions: 390, newUsers: 60 },
  { name: "May", users: 189, sessions: 480, newUsers: 90 },
  { name: "Jun", users: 239, sessions: 380, newUsers: 120 },
]

const campaignInsights = [
  {
    id: 1,
    insight: "In the UK, most customers complained that there was no automatic address picker in the sign-up flow",
  },
  {
    id: 2,
    insight:
      "63% of the respondents so far have complained about customer service - specifically at the long waiting times once they submit their information",
  },
  {
    id: 3,
    insight: "85% of users found the onboarding process confusing and requested more guided tutorials",
  },
  {
    id: 4,
    insight: "Mobile app users reported 30% more satisfaction with the UI compared to web app users",
  },
  {
    id: 5,
    insight:
      "40% of churned customers cited lack of integration with popular third-party tools as a primary reason for leaving",
  },
]

export default function AnalyticsPage() {
  return (
    <div className="container p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Overview</h1>
          <p className="text-muted-foreground">Monitor your app performance and user engagement</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
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
          <Card>
            <CardHeader>
              <CardTitle>Campaign Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaignInsights.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      <p className="text-sm mb-2">{item.insight}</p>
                      <Button variant="outline" size="sm">
                        Create Jira ticket
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

