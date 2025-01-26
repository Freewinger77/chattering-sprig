"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Phone,
  Users,
  Clock,
  TrendingUp,
  DollarSign,
  Activity,
  ArrowUp,
  ArrowDown,
  Zap,
  PhoneCall,
  UserCheck,
  BadgeCheck,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const metrics = [
  {
    title: "Total Campaigns",
    value: "24",
    change: "+12%",
    trend: "up",
    icon: Phone,
    description: "Active voice feedback campaigns",
  },
  {
    title: "Users Reached",
    value: "2,841",
    change: "+18%",
    trend: "up",
    icon: Users,
    description: "Total users interviewed",
  },
  {
    title: "Avg. Call Duration",
    value: "4m 12s",
    change: "-8%",
    trend: "down",
    icon: Clock,
    description: "Average feedback session length",
  },
  {
    title: "Response Rate",
    value: "76%",
    change: "+5%",
    trend: "up",
    icon: TrendingUp,
    description: "User participation rate",
  },
  {
    title: "Campaign Budget",
    value: "$14,250",
    change: "+24%",
    trend: "up",
    icon: DollarSign,
    description: "Total spent on campaigns",
  },
]

const performanceData = [
  { name: "Jan", uptime: 99.9, responseTime: 250, calls: 420 },
  { name: "Feb", uptime: 99.8, responseTime: 255, calls: 380 },
  { name: "Mar", uptime: 99.9, responseTime: 245, calls: 520 },
  { name: "Apr", uptime: 99.7, responseTime: 260, calls: 480 },
  { name: "May", uptime: 99.9, responseTime: 240, calls: 600 },
  { name: "Jun", uptime: 99.8, responseTime: 250, calls: 580 },
]

const systemMetrics = [
  {
    title: "System Uptime",
    value: "99.9%",
    icon: Zap,
    description: "Last 30 days average",
  },
  {
    title: "API Response Time",
    value: "245ms",
    icon: Activity,
    description: "Average response time",
  },
  {
    title: "Active Calls",
    value: "42",
    icon: PhoneCall,
    description: "Current ongoing calls",
  },
  {
    title: "Success Rate",
    value: "98.2%",
    icon: BadgeCheck,
    description: "Call completion rate",
  },
]

const mockCampaigns = [
  {
    id: 2453,
    title: "Customer Feedback Q2",
    successRate: 85,
    responseRate: 78,
    keyIssue: "UI Complexity",
    jiraTicketAssigned: true,
  },
  {
    id: 2454,
    title: "Product Feature Survey",
    successRate: 92,
    responseRate: 81,
    keyIssue: "Missing Features",
    jiraTicketAssigned: false,
  },
  {
    id: 2455,
    title: "User Experience Improvement",
    successRate: 88,
    responseRate: 75,
    keyIssue: "Navigation Issues",
    jiraTicketAssigned: true,
  },
]

export default function HomePage() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleCallMe = () => {
    // Implement call functionality here
    console.log(`Calling ${phoneNumber}`)
  }

  return (
    <div className="space-y-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Welcome to Our Platform</CardTitle>
          <CardDescription>
            Experience AI Voice agent campaigns for customer interviews. We've designed this demo on a limited problem
            and would like you to be a sample customer.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Input
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button onClick={handleCallMe}>Call me now</Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Button onClick={() => router.push("/campaigns")}>New Campaign</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center text-xs">
                  {metric.trend === "up" ? (
                    <ArrowUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-red-500" />
                  )}
                  <span className={metric.trend === "up" ? "text-green-500" : "text-red-500"}>{metric.change}</span>
                  <span className="ml-1 text-muted-foreground">vs last month</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{metric.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>System performance and call volume metrics</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="uptime" stroke="#8884d8" name="Uptime %" />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="responseTime"
                  stroke="#82ca9d"
                  name="Response Time (ms)"
                />
                <Line yAxisId="right" type="monotone" dataKey="calls" stroke="#ffc658" name="Total Calls" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
            <CardDescription>Current system metrics and status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemMetrics.map((metric) => (
                <div key={metric.title} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-background">
                      <metric.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{metric.title}</div>
                      <div className="text-xs text-muted-foreground">{metric.description}</div>
                    </div>
                  </div>
                  <div className="font-bold">{metric.value}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest campaign activities and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockCampaigns.map((campaign) => (
                <Link key={campaign.id} href={`/reports/${campaign.id}`} className="block">
                  <div className="flex items-center space-x-4 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="p-2 rounded-full bg-muted">
                      <UserCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Campaign #{campaign.id} completed</div>
                      <div className="text-sm text-muted-foreground">
                        {campaign.responseRate}% response rate • {campaign.successRate}% success rate
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Budget Overview</CardTitle>
            <CardDescription>Campaign spending and budget allocation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Total Budget Spent</div>
                  <div className="text-2xl font-bold">$14,250</div>
                </div>
                <div>
                  <div className="font-medium">Remaining Budget</div>
                  <div className="text-2xl font-bold">$5,750</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">Budget Utilization</div>
                <div className="h-2 bg-muted rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: "71%" }} />
                </div>
                <div className="text-xs text-muted-foreground">71% of total budget utilized</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/*Removed the dialog as per the update request*/}
    </div>
  )
}

