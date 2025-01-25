import { Edit2 } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import type { QuestionType } from "../types/chattering"

interface QuestionListProps {
  questions: QuestionType[]
  onQuestionsChange: (questions: QuestionType[]) => void
}

export function QuestionList({ questions, onQuestionsChange }: QuestionListProps) {
  const handleQuestionChange = (id: string, changes: Partial<QuestionType>) => {
    onQuestionsChange(questions.map((q) => (q.id === id ? { ...q, ...changes } : q)))
  }

  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <div key={question.id} className="flex items-start space-x-4">
          <Checkbox
            checked={question.isSelected}
            onCheckedChange={(checked) => handleQuestionChange(question.id, { isSelected: !!checked })}
          />
          <div className="flex-1 space-y-1">
            <Input
              value={question.question}
              onChange={(e) => handleQuestionChange(question.id, { question: e.target.value })}
            />
            <div className="text-sm text-muted-foreground">Category: {question.category}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

