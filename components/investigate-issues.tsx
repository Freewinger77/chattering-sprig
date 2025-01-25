import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Bot, ArrowRight } from "lucide-react"

const potentialIssues = [
  {
    id: "retention",
    title: "User Retention",
    description: "High drop-off rate after first week",
    metric: "-25% WoW",
    affectedUsers: 1250,
    avgTimeSpent: "2m 30s",
  },
  {
    id: "engagement",
    title: "Feature Engagement",
    description: "Low usage of core features",
    metric: "32% unused",
    affectedUsers: 3200,
    avgTimeSpent: "5m 45s",
  },
  {
    id: "onboarding",
    title: "Onboarding Flow",
    description: "Incomplete signup process",
    metric: "45% drop-off",
    affectedUsers: 980,
    avgTimeSpent: "1m 15s",
  },
]

interface InvestigateIssuesProps {
  onSubmit: (issue: string, description: string) => void
}

export function InvestigateIssues({ onSubmit }: InvestigateIssuesProps) {
  const [selectedIssue, setSelectedIssue] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = () => {
    if (description) {
      onSubmit(selectedIssue, description)
    }
  }

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Investigate Issues</h2>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          {potentialIssues.map((issue) => (
            <Card
              key={issue.id}
              className={cn(
                "cursor-pointer p-4 transition-all hover:shadow-md",
                selectedIssue === issue.id ? "border-primary bg-primary/5" : "border-border",
              )}
              onClick={() => setSelectedIssue(issue.id)}
            >
              <div className="space-y-2">
                <h3 className="font-medium">{issue.title}</h3>
                <p className="text-sm text-muted-foreground">{issue.description}</p>
                <div className="text-sm font-medium text-red-500">{issue.metric}</div>
                <div className="text-sm text-muted-foreground">
                  Affected Users: {issue.affectedUsers.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Avg. Time Spent: {issue.avgTimeSpent}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <Textarea
            placeholder="Describe the issue you want to investigate..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[100px]"
          />
          <Button onClick={handleSubmit} disabled={!description} className="w-full">
            <Bot className="mr-2 h-4 w-4" />
            Analyze and Generate Questions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}

