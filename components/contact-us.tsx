import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function ContactUs() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-dark text-nxg-light">
      <div className="container px-6 md:px-12">
        <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-nxg-gold">
            Connect with Novex Holding Group
          </h2>
          <p className="max-w-[1000px] text-lg md:text-xl lg:text-2xl font-light text-nxg-light/80">
            We welcome inquiries from potential partners, clients, and exceptional talent. Reach out to explore
            collaborations, discuss opportunities, or learn more about our ventures.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          <Card className="p-10 shadow-2xl rounded-xl border-nxg-gray bg-nxg-dark text-nxg-light">
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl font-bold text-nxg-light">Send Us a Message</CardTitle>
              <Separator className="w-20 h-1 bg-nxg-gold mt-2" />
            </CardHeader>
            <CardContent>
              <form className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-lg text-nxg-light/90">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your Full Name"
                    className="h-12 text-base bg-nxg-gray border-nxg-gray text-nxg-light placeholder:text-nxg-light/60 focus:border-nxg-gold"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-lg text-nxg-light/90">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@example.com"
                    className="h-12 text-base bg-nxg-gray border-nxg-gray text-nxg-light placeholder:text-nxg-light/60 focus:border-nxg-gold"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject" className="text-lg text-nxg-light/90">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Inquiry Subject"
                    className="h-12 text-base bg-nxg-gray border-nxg-gray text-nxg-light placeholder:text-nxg-light/60 focus:border-nxg-gold"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message" className="text-lg text-nxg-light/90">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your detailed message..."
                    className="min-h-[180px] text-base bg-nxg-gray border-nxg-gray text-nxg-light placeholder:text-nxg-light/60 focus:border-nxg-gold"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-14 text-lg font-semibold bg-nxg-gold text-nxg-dark hover:bg-nxg-gold/90 transition-colors shadow-md hover:shadow-lg"
                >
                  Submit Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="grid gap-10 p-8">
            <div className="flex items-start gap-6">
              <MapPin className="h-9 w-9 text-nxg-gold flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-nxg-light">Our Headquarters</h3>
                <p className="text-nxg-light/70 text-lg">
                  123 Innovation Drive, Suite 400
                  <br />
                  Colombo, Sri Lanka 10001
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <Phone className="h-9 w-9 text-nxg-gold flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-nxg-light">Call Us</h3>
                <p className="text-nxg-light/70 text-lg">+94 11 234 5678</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <Mail className="h-9 w-9 text-nxg-gold flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-nxg-light">Email Us</h3>
                <p className="text-nxg-light/70 text-lg">info@novexhg.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
