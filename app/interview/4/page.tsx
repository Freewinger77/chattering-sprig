"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download } from "lucide-react"
import Link from "next/link"

export default function StepFourPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Results</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Synthesised insights</h2>
          <Card className="bg-white/5 border-white/10 p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Top Insights</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-white/5 rounded-lg">Users find the interface confusing</div>
                  <div className="p-3 bg-white/5 rounded-lg">Payment process needs improvement</div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Key Metrics</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-500">60</div>
                    <div className="text-xs text-gray-400">NPS Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">150</div>
                    <div className="text-xs text-gray-400">Responses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-500">30</div>
                    <div className="text-xs text-gray-400">Issues Found</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-500">24</div>
                    <div className="text-xs text-gray-400">Actions Items</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Call transcript</h2>
          <Card className="bg-white/5 border-white/10 p-6 h-[300px] flex flex-col">
            <div className="flex-1">
              <p className="text-gray-400">&quot;found that adding a card is difficult&quot;</p>
            </div>
            <Button variant="outline" className="w-full">
              <Download className="w-4 h-4 mr-2" />
              Download full transcript
            </Button>
          </Card>
        </div>
      </div>

      <div className="flex justify-end">
        <Link href="/interview/feedback">
          <Button className="bg-purple-600 hover:bg-purple-700">Next</Button>
        </Link>
      </div>
    </div>
  )
}

