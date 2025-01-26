"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InteractiveMap } from "@/components/interactive-map"
import { CountryList } from "@/components/country-list"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"

interface CampaignReport {
  id: number
  title: string
  userPickupRate: number
  keyIssues: { issue: string; percentage: number }[]
  totalUsers: number
  positiveResponses: number
  negativeResponses: number
  averageCallDuration: number
  issueTypes: { name: string; value: number }[]
  performanceData: { time: string; users: number; positiveResponses: number; negativeResponses: number }[]
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

const mockCampaignReport: CampaignReport = {
  id: 2453,
  title: "Customer Feedback Campaign",
  userPickupRate: 78,
  keyIssues: [
    { issue: "Slow app performance", percentage: 18 },
    { issue: "Confusing UI", percentage: 25 },
    { issue: "Missing features", percentage: 15 },
    { issue: "Frequent crashes", percentage: 12 },
    { issue: "Poor customer support", percentage: 20 },
    { issue: "Difficulty in navigation", percentage: 10 },
  ],
  totalUsers: 1000,
  positiveResponses: 780,
  negativeResponses: 220,
  averageCallDuration: 180,
  issueTypes: [
    { name: "UI Complexity", value: 40 },
    { name: "Performance", value: 30 },
    { name: "Missing Features", value: 20 },
    { name: "Other", value: 10 },
  ],
  performanceData: [
    { time: "0min", users: 0, positiveResponses: 0, negativeResponses: 0 },
    { time: "30min", users: 250, positiveResponses: 195, negativeResponses: 55 },
    { time: "60min", users: 500, positiveResponses: 390, negativeResponses: 110 },
    { time: "90min", users: 750, positiveResponses: 585, negativeResponses: 165 },
    { time: "120min", users: 1000, positiveResponses: 780, negativeResponses: 220 },
  ],
}


export default function CampaignReportPage() {
  const params = useParams()
  const router = useRouter()
  const [report, setReport] = useState<CampaignReport | null>(null)
  const [targetingElements, setTargetingElements] = useState("")
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)


  useEffect(() => {
    // In a real application, you would fetch the report data from an API here
    // using the params.id to get the specific report
    setReport(mockCampaignReport)
  }, [params.id])

  const handleRunAnotherCampaign = () => {
    router.push(`/campaigns/new?reference=${report?.id}&targeting=${encodeURIComponent(targetingElements)}`)
  }

  if (!report) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Campaign Report #{report.id}</h1>
        <p className="text-muted-foreground">{report.title}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{report.totalUsers}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">User Pickup Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{report.userPickupRate}%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Positive Responses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{report.positiveResponses}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Negative Responses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{report.negativeResponses}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Key Issues Identified</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={report.keyIssues} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="issue" type="category" width={150} />

              <Bar dataKey="percentage" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Issue Types</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={report.issueTypes}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {report.issueTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Campaign Performance</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={report.performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />

              <Line type="monotone" dataKey="users" stroke="#8884d8" name="Total Users" />
              <Line type="monotone" dataKey="positiveResponses" stroke="#82ca9d" name="Positive Responses" />
              <Line type="monotone" dataKey="negativeResponses" stroke="#ffc658" name="Negative Responses" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
     
      <Card>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            The campaign "{report.title}" achieved a user pickup rate of {report.userPickupRate}%. The most significant
            issue identified was "{report.keyIssues[0].issue}", mentioned by {report.keyIssues[0].percentage}% of users.
            Other notable concerns include "{report.keyIssues[1].issue}" and "{report.keyIssues[2].issue}". These
            insights suggest that focusing on improving app performance, simplifying the UI, and enhancing customer
            support could significantly improve user satisfaction.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Suggest Targeting Elements</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Enter specific elements to target in the next campaign..."
            value={targetingElements}
            onChange={(e) => setTargetingElements(e.target.value)}
            className="mb-4"
          />
          <Button onClick={handleRunAnotherCampaign}>Run Another Campaign</Button>
        </CardContent>
      </Card>
    </div>
  )
}

