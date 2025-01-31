import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="container max-w-3xl pt-24 pb-12 text-white">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid gap-6">
        <p className="text-muted-foreground">
          Have questions about Proximity? We'd love to hear from you. Send us a message and we'll respond as soon as
          possible.
        </p>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your email address" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="How can we help?" className="min-h-[150px]" />
          </div>
          <Button className="w-full sm:w-auto">Send Message</Button>
        </form>
      </div>
    </div>
  )
}

