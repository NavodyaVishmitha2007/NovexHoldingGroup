import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We&apos;d love to hear from you. Fill out the form below or reach out to us directly.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="grid gap-6 p-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-gray-500" />
              <div>
                <h3 className="text-lg font-bold">Address</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  123 Innovation Drive, Suite 400
                  <br />
                  Colombo, Sri Lanka 10001
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-gray-500" />
              <div>
                <h3 className="text-lg font-bold">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+94 11 234 5678</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-gray-500" />
              <div>
                <h3 className="text-lg font-bold">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">info@novexhg.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
