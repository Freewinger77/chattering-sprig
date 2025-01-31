"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function StepOnePage() {
  const router = useRouter()
  const [objective, setObjective] = useState("")

  const handleSubmit = async () => {
    // In a real app, you'd save this to your backend/state management
    router.push("/interview/2")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Set interview objective</h1>
        <p className="text-gray-400">Describe the issue you&apos;d like to investigate with customer interviews.</p>
      </div>

      <div className="p-4 bg-white/5 rounded-lg border border-white/10">
        <p className="text-sm text-blue-400 mb-2">Example:</p>
        <p className="text-sm text-gray-400">
          You are interviewing for TravelXYZ.com, a travel booking site where you can purchase flights and hotels. I
          want to investigate why there are so many users that churn after making their first flight purchase
          specifically in the UK, where logo retention is 30pp than other markets.
        </p>
      </div>

      <Textarea
        value={objective}
        onChange={(e) => setObjective(e.target.value)}
        placeholder="Describe your objective..."
        className="min-h-[150px] bg-white/5 border-white/10"
      />

      <div className="flex justify-end">
        <Button onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-700" disabled={!objective.trim()}>
          Generate questions with AI
        </Button>
      </div>
    </div>
  )
}

