"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { useState } from "react"

const countryCodes = [
  { code: "1", country: "US" },
  { code: "44", country: "UK" },
  // Add more as needed
]

export default function StepThreePage() {
  const router = useRouter()
  const [countryCode, setCountryCode] = useState("1")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate API call with 50% success rate
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      const success = Math.random() > 0.5

      if (success) {
        router.push("/interview/3/call-success")
      } else {
        router.push("/interview/3/call-fail")
      }
    } catch (error) {
      router.push("/interview/3/call-fail")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Experience being an end customer in your own interview!</h1>
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
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleSubmit}
          className="bg-purple-600 hover:bg-purple-700"
          disabled={!phoneNumber.trim() || isSubmitting}
        >
          {isSubmitting ? "Initiating call..." : "Call me now"}
        </Button>
      </div>
    </div>
  )
}

