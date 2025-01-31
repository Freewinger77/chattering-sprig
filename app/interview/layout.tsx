"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type React from "react"

const steps = [
  { number: 1, title: "Set interview objective" },
  { number: 2, title: "Design survey questions" },
  { number: 3, title: "Participate in interview" },
  { number: 4, title: "Generate insights" },
]

export default function InterviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const currentStep = Number.parseInt(pathname.split("/").pop() || "1")

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.number === currentStep
                      ? "bg-purple-600"
                      : step.number < currentStep
                        ? "bg-purple-600/50"
                        : "bg-white/10"
                  }`}
                >
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`w-16 h-0.5 mx-2 ${step.number < currentStep ? "bg-purple-600/50" : "bg-white/10"}`}
                  />
                )}
              </div>
            ))}
          </div>
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-purple-400">
              Exit
            </Button>
          </Link>
        </div>
        {children}
      </div>
    </div>
  )
}

