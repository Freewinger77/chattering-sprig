"use client"

import * as React from "react"
import { Bot, Pipette, Phone, FileText, Edit2, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { QuestionList } from "@/components/question-list"
import { CallProgress } from "@/components/call-progress"
import { InsightsDashboard } from "@/components/insights-dashboard"
import { LiveMetrics } from "@/components/live-metrics"
import type { QuestionType, CallLogType, ReportType } from "@/types/chattering"

export default function Chattering() {
  const [step, setStep] = React.useState(1)
  const [prompt, setPrompt] = React.useState("")
  const [isAnalyzing, setIsAnalyzing] = React.useState(false)
  const [questions, setQuestions] = React.useState<QuestionType[]>([])
  const [isDeploying, setIsDeploying] = React.useState(false)
  const [callLogs, setCallLogs] = React.useState<CallLogType[]>([])
  const [report, setReport] = React.useState<ReportType | null>(null)

  const handlePromptSubmit = async () => {
    setIsAnalyzing(true)
    // Simulate AI analysis
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setQuestions([
      {
        id: "1",
        question: "What made you sign up for our app initially?",
        category: "Motivation",
        isSelected: true,
      },
      {
        id: "2",
        question: "What challenges have you faced while trying to use the app?",
        category: "Usability",
        isSelected: true,
      },
      {
        id: "3",
        question: "How often do you find yourself needing the functionality our app provides?",
        category: "Usage Patterns",
        isSelected: true,
      },
    ])
    setIsAnalyzing(false)
    setStep(2)
  }

  const handleDeployAgents = async () => {
    setIsDeploying(true)
    // Simulate deployment
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsDeploying(false)
    setStep(3)
    // Simulate incoming call logs
    simulateCallLogs()
  }

  const simulateCallLogs = () => {
    const interval = setInterval(() => {
      setCallLogs((prev) => {
        if (prev.length >= 10) {
          clearInterval(interval)
          setStep(4)
          generateReport()
          return prev
        }
        return [
          ...prev,
          {
            id: Date.now().toString(),
            userId: `user_${prev.length + 1}`,
            userName: `Test User ${prev.length + 1}`,
            timestamp: new Date(),
            duration: Math.floor(Math.random() * 300) + 60,
            transcript: "Sample transcript...",
            sentiment: ["positive", "neutral", "negative"][Math.floor(Math.random() * 3)] as
              | "positive"
              | "neutral"
              | "negative",
            keyInsights: ["Found UI confusing", "Needs better onboarding"],
          },
        ]
      })
    }, 2000)
  }

  const generateReport = () => {
    setReport({
      totalCalls: 10,
      completedCalls: 10,
      averageDuration: 180,
      callsAccepted: 8,
      callsDeclined: 2,
      responseRate: 80,
      topInsights: [
        {
          id: "1",
          topic: "User Interface",
          severity: "high",
          description: "Users find the interface confusing and difficult to navigate",
        },
        {
          id: "2",
          topic: "Onboarding",
          severity: "medium",
          description: "Better onboarding process needed to explain core features",
        },
      ],
      sentimentBreakdown: {
        positive: 30,
        neutral: 50,
        negative: 20,
      },
      mentions: [
        { topic: "Confusing UI", count: 20, trend: "up" },
        { topic: "App Style", count: 16, trend: "neutral" },
        { topic: "Loading Speed", count: 12, trend: "down" },
        { topic: "Missing Features", count: 10, trend: "up" },
      ],
      metrics: [
        {
          id: "1",
          label: "Response Rate",
          value: 80,
          previousValue: 75,
          change: 5,
        },
        {
          id: "2",
          label: "Avg. Call Duration",
          value: 180,
          previousValue: 160,
          change: 12,
        },
        {
          id: "3",
          label: "Positive Sentiment",
          value: 30,
          previousValue: 28,
          change: 2,
        },
        {
          id: "4",
          label: "Issues Identified",
          value: 24,
          previousValue: 20,
          change: 20,
        },
      ],
    })
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Pipette className="h-6 w-6" />
            Probe
          </CardTitle>
          <CardDescription>AI-powered voice agent deployment for quick feedback collection</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="flex justify-between mb-8">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className={`flex items-center ${s === step ? "text-primary" : "text-muted-foreground"}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                    ${s === step ? "border-primary" : "border-muted"}`}
                  >
                    {s}
                  </div>
                  {s < 4 && <div className={`w-24 h-0.5 ${s < step ? "bg-primary" : "bg-muted"}`} />}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Describe the issue you want to investigate..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <Button onClick={handlePromptSubmit} disabled={!prompt || isAnalyzing} className="w-full">
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Analyzing
                        </>
                      ) : (
                        <>
                          <Bot className="mr-2 h-4 w-4" />
                          Analyze and Generate Questions
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="space-y-4">
                    <QuestionList questions={questions} onQuestionsChange={setQuestions} />
                    <Button
                      onClick={handleDeployAgents}
                      disabled={!questions.some((q) => q.isSelected) || isDeploying}
                      className="w-full"
                    >
                      {isDeploying ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Deploying Voice Agents
                        </>
                      ) : (
                        <>
                          <Phone className="mr-2 h-4 w-4" />
                          Deploy Voice Agents
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <CallProgress callLogs={callLogs} totalCalls={10} />
                </motion.div>
              )}

              {step === 4 && report && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="space-y-8">
                    <LiveMetrics metrics={report.metrics} mentions={report.mentions} />
                    <InsightsDashboard report={report} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

