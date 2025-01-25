export type InsightType = {
  id: string
  topic: string
  severity: "high" | "medium" | "low"
  description: string
}

export type QuestionType = {
  id: string
  question: string
  category: string
  isSelected: boolean
}

export type CallLogType = {
  id: string
  userId: string
  userName: string
  timestamp: Date
  duration: number
  transcript: string
  sentiment: "positive" | "neutral" | "negative"
  keyInsights: string[]
}

export type MetricType = {
  id: string
  label: string
  value: number
  previousValue: number
  change: number
}

export type MentionType = {
  topic: string
  count: number
  trend: "up" | "down" | "neutral"
}

export type ReportType = {
  totalCalls: number
  completedCalls: number
  averageDuration: number
  callsAccepted: number
  callsDeclined: number
  responseRate: number
  topInsights: InsightType[]
  sentimentBreakdown: {
    positive: number
    neutral: number
    negative: number
  }
  mentions: MentionType[]
  metrics: MetricType[]
}

