"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Campaign {
  id: number
  title: string
  successRate: number
  responseRate: number
  keyIssue: string
  jiraTicketAssigned: boolean
}

const mockCampaigns: Campaign[] = [
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
  {
    id: 2456,
    title: "Mobile App Usability",
    successRate: 79,
    responseRate: 72,
    keyIssue: "Performance Issues",
    jiraTicketAssigned: false,
  },
  {
    id: 2457,
    title: "Customer Support Satisfaction",
    successRate: 95,
    responseRate: 85,
    keyIssue: "Response Time",
    jiraTicketAssigned: true,
  },
]

export default function ReportsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns)

  useEffect(() => {
    const storedCampaigns = JSON.parse(localStorage.getItem("campaigns") || "[]")
    setCampaigns([...mockCampaigns, ...storedCampaigns])
  }, [])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Campaign Reports</h1>
        <p className="text-muted-foreground">View detailed reports for all completed campaigns</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {campaigns.map((campaign) => (
          <Card key={campaign.id}>
            <CardHeader>
              <CardTitle>Campaign #{campaign.id}</CardTitle>
              <CardDescription>{campaign.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Success Rate:</span>
                  <span className="font-medium">{campaign.successRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Response Rate:</span>
                  <span className="font-medium">{campaign.responseRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Issue:</span>
                  <span className="font-medium">{campaign.keyIssue}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Jira Ticket:</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      campaign.jiraTicketAssigned ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {campaign.jiraTicketAssigned ? "Assigned" : "Not Assigned"}
                  </span>
                </div>
              </div>
              <Button asChild className="w-full mt-4">
                <Link href={`/reports/${campaign.id}`}>View Full Report</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

