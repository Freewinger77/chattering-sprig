import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import type { CallLogType } from "../types/chattering"

interface CallProgressProps {
  callLogs: CallLogType[]
  totalCalls: number
}

export function CallProgress({ callLogs, totalCalls }: CallProgressProps) {
  const progress = (callLogs.length / totalCalls) * 100

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>
            Progress: {callLogs.length} of {totalCalls} calls completed
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} />
      </div>

      <ScrollArea className="h-[400px] border rounded-md p-4">
        {callLogs.map((log) => (
          <div key={log.id} className="mb-4 p-4 border rounded-md">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-medium">{log.userName}</div>
                <div className="text-sm text-muted-foreground">{new Date(log.timestamp).toLocaleString()}</div>
              </div>
              <Badge
                variant={
                  log.sentiment === "positive" ? "default" : log.sentiment === "negative" ? "destructive" : "secondary"
                }
              >
                {log.sentiment}
              </Badge>
            </div>
            <div className="text-sm">
              Duration: {Math.floor(log.duration / 60)}m {log.duration % 60}s
            </div>
            <div className="mt-2 text-sm">
              <div className="font-medium">Key Insights:</div>
              <ul className="list-disc list-inside">
                {log.keyInsights.map((insight, index) => (
                  <li key={index}>{insight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}

