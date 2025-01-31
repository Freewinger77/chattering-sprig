"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CallSuccessPage() {
  const router = useRouter()
  const [isFinishing, setIsFinishing] = useState(false)

  const handleTryAgain = () => {
    router.push("/interview/3")
  }

  const handleFinishCall = async () => {
    setIsFinishing(true)
    // Simulate finishing call process
    await new Promise((resolve) => setTimeout(resolve, 1000))
    router.push("/interview/4")
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-8 max-w-xl mx-auto">
      <div className="text-center space-y-4">
        <p className="text-xl">The call is happening now - please don&apos;t exit the screen!</p>
      </div>

      <div className="relative w-32 h-32">
        <div className="absolute inset-0 rounded-full bg-purple-600/20 animate-ping" />
        <div className="absolute inset-4 rounded-full bg-purple-600/40 animate-pulse" />
        <div className="absolute inset-8 rounded-full bg-purple-600/60 animate-pulse delay-75" />
      </div>

      <div className="flex flex-col items-center space-y-4">
        <Button onClick={handleFinishCall} className="bg-purple-600 hover:bg-purple-700" disabled={isFinishing}>
          {isFinishing ? "Finishing call..." : "Finish call"}
        </Button>

        <div className="text-center space-y-2">
          <p className="text-gray-400">Didn&apos;t receive the call?</p>
          <Button
            variant="link"
            className="text-purple-400 hover:text-purple-300"
            onClick={handleTryAgain}
            disabled={isFinishing}
          >
            Try again
          </Button>
        </div>
      </div>
    </div>
  )
}

