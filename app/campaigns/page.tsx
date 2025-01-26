"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InvestigateIssues } from "@/components/investigate-issues"

interface Campaign {
  id: number
  title: string
  successRate: number
  responseRate: number
  keyIssue: string
  jiraTicketAssigned: boolean
}

export default function CampaignsPage() {
  const router = useRouter()
  const [campaigns, setCampaigns] = useState<Campaign[]>([])

  const handleIssueSubmit = (issue: string, description: string) => {
    const newCampaign: Campaign = {
      id: Math.floor(Math.random() * 1000) + 2458,
      title: `Campaign on ${issue}`,
      successRate: Math.floor(Math.random() * 20) + 80,
      responseRate: Math.floor(Math.random() * 20) + 70,
      keyIssue: issue,
      jiraTicketAssigned: Math.random() < 0.5,
    }
    setCampaigns([...campaigns, newCampaign])
    router.push(`/campaigns/new?issue=${encodeURIComponent(issue)}&description=${encodeURIComponent(description)}`)
  }

  useEffect(() => {
    if (campaigns.length > 0) {
      const existingCampaigns = JSON.parse(localStorage.getItem("campaigns") || "[]")
      localStorage.setItem("campaigns", JSON.stringify([...existingCampaigns, ...campaigns]))
    }
  }, [campaigns])

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Active Campaigns</CardTitle>
            <CardDescription>Currently running voice agent campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Users Reached</CardTitle>
            <CardDescription>Number of users interviewed this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,234</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Avg. Response Rate</CardTitle>
            <CardDescription>Percentage of users who completed the interview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">78%</div>
          </CardContent>
        </Card>
      </div>

      <InvestigateIssues onSubmit={handleIssueSubmit} />
    </div>
  )
}

