"use client"

import { useState } from "react"
import { Bot, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { AnalyticsOverview } from "@/components/analytics-overview"

export default function AnalyticsPage() {
  const router = useRouter()

  return (
    <div className="container p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Overview</h1>
          <p className="text-muted-foreground">Monitor your app performance and user engagement</p>
        </div>
      </div>

      <AnalyticsOverview />
    </div>
  )
}

