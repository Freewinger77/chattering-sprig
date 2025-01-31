"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function StepTwoPage() {
  const router = useRouter()
  const [questions, setQuestions] = useState<string[]>(["", "", ""])

  const handleSubmit = async () => {
    // In a real app, you'd save this to your backend/state management
    router.push("/interview/3")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Design survey questions</h1>
        <div className="flex gap-4 text-sm text-blue-400">
          <span>Prompt specific flight purchase</span>
          <span>•</span>
          <span>Prompt user not transacting after a while</span>
          <span>•</span>
          <span>Clarify if the user is based in UK or not</span>
        </div>
      </div>

      <div className="space-y-4">
        {questions.map((question, index) => (
          <Input
            key={index}
            value={question}
            onChange={(e) => {
              const newQuestions = [...questions]
              newQuestions[index] = e.target.value
              setQuestions(newQuestions)
            }}
            placeholder={`Question ${index + 1}`}
            className="bg-white/5 border-white/10"
          />
        ))}
      </div>

      <p className="text-sm text-gray-400">Demo is limited to 3 questions only</p>

      <div className="flex justify-end">
        <Button
          onClick={handleSubmit}
          className="bg-purple-600 hover:bg-purple-700"
          disabled={questions.some((q) => !q.trim())}
        >
          Generate questions with AI
        </Button>
      </div>
    </div>
  )
}

