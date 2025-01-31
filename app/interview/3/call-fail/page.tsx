"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CallFailPage() {
  const router = useRouter()

  const handleTryAgain = () => {
    router.push("/interview/3")
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-8 max-w-xl mx-auto">
      <div className="text-center space-y-4">
        <p className="text-xl">
          You should be receiving a call now, Feel free to say &apos;Hello&apos; to initiate the conversation!
        </p>
        <div className="space-y-2">
          <p className="text-gray-400">Did not receive a call?</p>
          <Button variant="link" className="text-purple-400 hover:text-purple-300" onClick={handleTryAgain}>
            Try again
          </Button>
        </div>
      </div>
    </div>
  )
}

