import SiteHeader from "@/components/site-header"
import HeroSection from "@/components/hero-section"
import SiteFooter from "@/components/site-footer"
import SectionHeading from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-nxg-dark">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection
          title="CONNECT WITH NOVEX HOLDING GROUP"
          subtitle="We welcome inquiries from potential partners, clients, and exceptional talent. Reach out to explore collaborations, discuss opportunities, or learn more about our ventures."
          imageUrl="https://source.unsplash.com/random/1920x1080/?contact,global,network,abstract"
          overlayOpacity="opacity-50"
        />

        <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-light text-nxg-dark">
          <div className="container px-6 md:px-12">
            <SectionHeading
              title="Get in Touch with NHG"
              subtitle="Our team is ready to assist you. Please fill out the form below or use our direct contact information."
              textColor="text-nxg-dark"
              separatorColor="bg-nxg-gold"
            />
            <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 mt-16">
              <Card className="p-10 shadow-2xl rounded-xl border-nxg-gray/20 bg-white text-nxg-dark">
                <CardHeader className="pb-8">
                  <CardTitle className="text-3xl font-bold text-nxg-dark">Send Us a Message</CardTitle>
                  <Separator className="w-20 h-1 bg-nxg-gold mt-2" />
                </CardHeader>
                <CardContent>
                  <form className="grid gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="name" className="text-lg text-nxg-dark/90">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your Full Name"
                        className="h-12 text-base bg-gray-100 border-gray-300 text-nxg-dark placeholder:text-gray-500 focus:border-nxg-gold"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-lg text-nxg-dark/90">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@example.com"
                        className="h-12 text-base bg-gray-100 border-gray-300 text-nxg-dark placeholder:text-gray-500 focus:border-nxg-gold"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="subject" className="text-lg text-nxg-dark/90">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="Inquiry Subject"
                        className="h-12 text-base bg-gray-100 border-gray-300 text-nxg-dark placeholder:text-gray-500 focus:border-nxg-gold"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message" className="text-lg text-nxg-dark/90">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Your detailed message..."
                        className="min-h-[180px] text-base bg-gray-100 border-gray-300 text-nxg-dark placeholder:text-gray-500 focus:border-nxg-gold"
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
              <div className="grid gap-10 p-8 bg-nxg-dark rounded-xl shadow-2xl border border-nxg-gray">
                <div className="flex items-start gap-6">
                  <MapPin className="h-9 w-9 text-nxg-gold flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-nxg-light">Our Headquarters</h3>
                    <p className="text-nxg-light/70 text-lg">
                       Borella,Colombo, Sri Lanka
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <Phone className="h-9 w-9 text-nxg-gold flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-nxg-light">Call Us</h3>
                    <p className="text-nxg-light/70 text-lg">+94 77 5246 498</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <Mail className="h-9 w-9 text-nxg-gold flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-nxg-light">Email Us</h3>
                    <p className="text-nxg-light/70 text-lg">apexsoftwarecompany@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
