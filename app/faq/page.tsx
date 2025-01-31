import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="container max-w-3xl pt-24 pb-12 text-white">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How does the AI interviewer work?</AccordionTrigger>
          <AccordionContent>
            Our AI interviewer uses advanced natural language processing to conduct dynamic conversations with your
            customers. It adapts its questions based on responses, ensuring relevant and insightful discussions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What kind of insights can I expect?</AccordionTrigger>
          <AccordionContent>
            You'll receive detailed qualitative feedback, sentiment analysis, trend identification, and actionable
            recommendations. Our platform analyzes both what customers say and how they say it.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is my data secure?</AccordionTrigger>
          <AccordionContent>
            Yes, we take data security seriously. All interviews are encrypted, and we comply with GDPR and other
            relevant data protection regulations. Your customer data is never used for training our AI.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How long does implementation take?</AccordionTrigger>
          <AccordionContent>
            You can be up and running in less than a day. Our platform requires minimal setup and integrates seamlessly
            with most CRM and customer feedback systems.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

