import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { MetricType, MentionType } from "../types/chattering"

interface LiveMetricsProps {
  metrics: MetricType[]
  mentions: MentionType[]
}

export function LiveMetrics({ metrics, mentions }: LiveMetricsProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center mt-1 text-sm">
                <span
                  className={
                    metric.change > 0 ? "text-green-600" : metric.change < 0 ? "text-red-600" : "text-gray-600"
                  }
                >
                  {metric.change > 0 && "+"}
                  {metric.change}%
                </span>
                <span className="text-muted-foreground ml-1">vs previous</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Common Mentions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mentions.map((mention) => (
              <div key={mention.topic} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{mention.topic}</span>
                  {mention.trend === "up" && <ArrowUp className="w-4 h-4 text-green-600" />}
                  {mention.trend === "down" && <ArrowDown className="w-4 h-4 text-red-600" />}
                  {mention.trend === "neutral" && <ArrowRight className="w-4 h-4 text-gray-600" />}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">{mention.count}</span>
                  <span className="text-sm text-muted-foreground">mentions</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

