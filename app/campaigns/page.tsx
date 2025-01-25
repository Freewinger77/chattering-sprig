"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InvestigateIssues } from "@/components/investigate-issues"

export default function CampaignsPage() {
  const router = useRouter()

  const handleIssueSubmit = (issue: string, description: string) => {
    router.push(`/campaigns/new?issue=${encodeURIComponent(issue)}&description=${encodeURIComponent(description)}`)
  }

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

