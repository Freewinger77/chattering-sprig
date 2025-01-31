"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { useState } from "react"

const countryCodes = [
  { code: "1", country: "US" },
  { code: "44", country: "UK" },
  // Add more as needed
]

export default function FeedbackPage() {
  const router = useRouter()
  const [countryCode, setCountryCode] = useState("1")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [feedback, setFeedback] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    router.push("/")
  }

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Thank you for trying us out!</h1>
        <p className="text-blue-400">Feel free to either put your number to provide us feedback</p>
      </div>

      <div className="flex gap-2">
        <Select value={countryCode} onValueChange={setCountryCode}>
          <SelectTrigger className="w-[120px] bg-white/5 border-white/10">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {countryCodes.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                +{country.code} ({country.country})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your number"
          className="flex-1 bg-white/5 border-white/10"
        />
        <Button className="bg-purple-600 hover:bg-purple-700">Call me now</Button>
      </div>

      <div className="space-y-4">
        <p className="text-center">Or if you prefer to write your feedback, you can shoot it across here!</p>
        <Textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write your feedback here..."
          className="min-h-[150px] bg-white/5 border-white/10"
        />
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </div>
  )
}

