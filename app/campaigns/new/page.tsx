"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const COST_PER_USER = 0.5

export default function NewCampaignPage() {
  const [title, setTitle] = useState("")
  const [targetUsers, setTargetUsers] = useState([100])
  const [showConfirm, setShowConfirm] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const issue = searchParams.get("issue")

  const totalCost = targetUsers[0] * COST_PER_USER

  const handleConfirm = () => {
    router.push(`/campaigns/active?id=${Date.now()}`)
  }

  return (
    <div className="container p-8 max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>New Campaign</CardTitle>
          <CardDescription>Configure your voice agent campaign</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Campaign Title</Label>
            <Input
              id="title"
              placeholder="Enter campaign title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Issue to Investigate</Label>
            <div className="p-4 bg-muted rounded-lg">{issue || "No issue specified"}</div>
          </div>

          <div className="space-y-4">
            <Label>Target Users: {targetUsers[0]}</Label>
            <Slider value={targetUsers} onValueChange={setTargetUsers} min={50} max={1000} step={50} />
            <div className="text-sm text-muted-foreground">
              Estimated cost: ${totalCost.toFixed(2)} (${COST_PER_USER} per user)
            </div>
          </div>

          <Button className="w-full" onClick={() => setShowConfirm(true)} disabled={!title}>
            Continue
          </Button>
        </CardContent>
      </Card>

      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Campaign</DialogTitle>
            <DialogDescription>Please review your campaign details before proceeding.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="font-medium">Campaign Title</div>
              <div>{title}</div>
              <div className="font-medium">Target Users</div>
              <div>{targetUsers[0]}</div>
              <div className="font-medium">Total Cost</div>
              <div>${totalCost.toFixed(2)}</div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirm(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirm}>Confirm & Start Campaign</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

