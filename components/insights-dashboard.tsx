import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { ReportType } from "../types/chattering"

interface InsightsDashboardProps {
  report: ReportType
}

export function InsightsDashboard({ report }: InsightsDashboardProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{report.totalCalls}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.floor(report.averageDuration / 60)}m {report.averageDuration % 60}s
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Sentiment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>Positive</span>
                <span>{report.sentimentBreakdown.positive}%</span>
              </div>
              <div className="flex justify-between">
                <span>Neutral</span>
                <span>{report.sentimentBreakdown.neutral}%</span>
              </div>
              <div className="flex justify-between">
                <span>Negative</span>
                <span>{report.sentimentBreakdown.negative}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {report.topInsights.map((insight) => (
              <div key={insight.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{insight.topic}</h3>
                  <Badge
                    variant={
                      insight.severity === "high"
                        ? "destructive"
                        : insight.severity === "medium"
                          ? "default"
                          : "secondary"
                    }
                  >
                    {insight.severity}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

