"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useRouter } from "next/navigation"
import { PieChart, Pie, Cell, Legend } from "recharts"
import dynamic from "next/dynamic"

const WorldMap = dynamic(() => import("@/components/world-map"), { ssr: false })

const initialData = [
  { time: "0min", users: 0, positiveResponses: 0, negativeResponses: 0 },
  { time: "5min", users: 20, positiveResponses: 12, negativeResponses: 8 },
  { time: "10min", users: 50, positiveResponses: 30, negativeResponses: 20 },
]

const userFeedback = [
  "Speed was an issue",
  "UI is confusing",
  "Love the new features",
  "Can't find the logout button",
  "App crashes frequently",
]

const issueTypes = [
  { name: "Performance", value: 30 },
  { name: "UI/UX", value: 25 },
  { name: "Functionality", value: 20 },
  { name: "Stability", value: 15 },
  { name: "Other", value: 10 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

export default function ActiveCampaignPage() {
  const [data, setData] = useState(initialData)
  const [progress, setProgress] = useState(0)
  const [kpis, setKpis] = useState({
    totalUsers: 0,
    positiveResponses: 0,
    negativeResponses: 0,
    averageCallDuration: 0,
  })
  const [feedbackList, setFeedbackList] = useState<string[]>([])
  const [isFinished, setIsFinished] = useState(false)
  const [issueData, setIssueData] = useState(issueTypes)
  const [worldData, setWorldData] = useState({})
  const router = useRouter()

  useEffect(() => {
    const storedProgress = localStorage.getItem("campaignProgress")
    if (storedProgress) {
      const { progress: storedProgressValue, kpis: storedKpis, data: storedData } = JSON.parse(storedProgress)
      setProgress(storedProgressValue)
      setKpis(storedKpis)
      setData(storedData)
      if (storedProgressValue === 100) {
        setIsFinished(true)
      }
    }

    if (isFinished) return

    const interval = setInterval(() => {
      setData((prevData) => {
        const lastEntry = prevData[prevData.length - 1]
        const newUsers = lastEntry.users + Math.floor(Math.random() * 20)
        const newPositive = lastEntry.positiveResponses + Math.floor(Math.random() * 10)
        const newNegative = lastEntry.negativeResponses + Math.floor(Math.random() * 5)
        const newEntry = {
          time: `${prevData.length * 5}min`,
          users: newUsers,
          positiveResponses: newPositive,
          negativeResponses: newNegative,
        }
        return [...prevData, newEntry]
      })

      setProgress((prevProgress) => {
        const newProgress = Math.min(prevProgress + 5, 100)
        if (newProgress === 100) {
          setIsFinished(true)
          clearInterval(interval)
          localStorage.setItem("campaignFinished", "true")
        }
        return newProgress
      })

      setKpis((prevKpis) => ({
        totalUsers: prevKpis.totalUsers + Math.floor(Math.random() * 20),
        positiveResponses: prevKpis.positiveResponses + Math.floor(Math.random() * 10),
        negativeResponses: prevKpis.negativeResponses + Math.floor(Math.random() * 5),
        averageCallDuration: Math.floor(Math.random() * 60) + 120, // 2-3 minutes
      }))

      const newFeedback = `User#${Math.floor(Math.random() * 1000)} mentioned: ${
        userFeedback[Math.floor(Math.random() * userFeedback.length)]
      }`
      setFeedbackList((prev) => [...prev, newFeedback])

      // Update issue data
      setIssueData((prevData) =>
        prevData.map((item) => ({
          ...item,
          value: item.value + Math.floor(Math.random() * 5),
        })),
      )

      // Update world data
      setWorldData((prevData) => {
        const countries = ["USA", "GBR", "CAN", "AUS", "DEU", "FRA", "JPN"]
        const country = countries[Math.floor(Math.random() * countries.length)]
        return {
          ...prevData,
          [country]: (prevData[country] || 0) + 1,
        }
      })

      localStorage.setItem("campaignProgress", JSON.stringify({ progress, kpis, data }))
    }, 5000) // Update every 5 seconds

    return () => {
      clearInterval(interval)
      if (progress < 100) {
        // If the user navigates away before the campaign is finished, complete it
        const finalProgress = 100
        const finalKpis = {
          totalUsers: 1000,
          positiveResponses: Math.floor(Math.random() * 300) + 600,
          negativeResponses: Math.floor(Math.random() * 100) + 100,
          averageCallDuration: Math.floor(Math.random() * 60) + 180,
        }
        const finalData = [
          ...data,
          {
            time: "100min",
            users: 1000,
            positiveResponses: finalKpis.positiveResponses,
            negativeResponses: finalKpis.negativeResponses,
          },
        ]
        localStorage.setItem(
          "campaignProgress",
          JSON.stringify({ progress: finalProgress, kpis: finalKpis, data: finalData }),
        )
      }
    }
  }, [isFinished])

  const responseRate = (kpis.totalUsers / 1000) * 100 // Assuming target is 1000 users

  const handleConfirm = () => {
    router.push(`/campaigns/active`)
  }

  if (isFinished) {
    const newCampaign = {
      id: Math.floor(Math.random() * 1000) + 2456, // Generate a random ID
      title: "New Campaign",
      successRate: Math.floor(Math.random() * 20) + 80, // Random success rate between 80-100%
      responseRate: responseRate,
      keyIssue: issueData.reduce((a, b) => (a.value > b.value ? a : b)).name,
      jiraTicketAssigned: Math.random() < 0.5, // 50% chance of having a Jira ticket assigned
    }

    // In a real application, you would send this data to an API
    console.log("New campaign completed:", newCampaign)

    // Navigate to the reports page
    router.push("/reports")
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Active Campaign Dashboard</h1>
        <p className="text-muted-foreground">Real-time updates on your ongoing campaign</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Campaign Progress</CardTitle>
          <CardDescription>Target: 1000 users</CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="w-full" />
          <p className="mt-2 text-sm text-muted-foreground">{progress}% complete</p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users Reached</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpis.totalUsers}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Positive Responses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpis.positiveResponses}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Negative Responses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpis.negativeResponses}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Call Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpis.averageCallDuration}s</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Issue Types Mentioned</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={issueData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
                {issueData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Global Issue Distribution</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px]">
          <WorldMap data={worldData} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Response Rate</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={[
                  { name: "Responded", value: responseRate },
                  { name: "Remaining", value: 100 - responseRate },
                ]}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                <Cell fill="#0088FE" />
                <Cell fill="#FFBB28" />
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Real-time Campaign Data</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#8884d8" name="Total Users" />
              <Line type="monotone" dataKey="positiveResponses" stroke="#82ca9d" name="Positive Responses" />
              <Line type="monotone" dataKey="negativeResponses" stroke="#ffc658" name="Negative Responses" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Latest User Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 max-h-[300px] overflow-y-auto">
            {feedbackList.map((feedback, index) => (
              <p key={index}>{feedback}</p>
            ))}
          </div>
        </CardContent>
      </Card>

      {isFinished && (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-lg font-semibold">Campaign Finished!</p>
            <div className="mt-4 flex justify-center">
              <button
                className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
                onClick={() => router.push("/reports")}
              >
                View Report
              </button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

