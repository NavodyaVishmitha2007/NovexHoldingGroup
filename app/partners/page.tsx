import SiteHeader from "@/components/site-header"
import HeroSection from "@/components/hero-section"
import SiteFooter from "@/components/site-footer"
import SectionHeading from "@/components/section-heading"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Lightbulb, Users } from "lucide-react"

export default function PartnersPage() {
  const partnerLogos = [
    { src: "/microsoft.png", alt: "microsoft" },
    { src: "/adsterra.jpg", alt: "adsterra" },
    { src: "/openai.jpg", alt: "openai" },
    { src: "/google.webp", alt: "google" },
    { src: "ceylontea.png", alt: "ceylontea" },
    { src: "aws.png", alt: "aws" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-nxg-dark">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection
          title="STRATEGIC ALLIANCES. GLOBAL IMPACT."
          subtitle="Novex Holding Group cultivates robust and enduring partnerships with industry leaders and visionary enterprises worldwide."
          imageUrl="https://source.unsplash.com/random/1920x1080/?corporate,handshake,partnership,abstract"
          overlayOpacity="opacity-50"
        />

        {/* Partnership Philosophy Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-light text-nxg-dark">
          <div className="container px-6 md:px-12">
            <SectionHeading
              title="Our Partnership Philosophy"
              subtitle="We believe in fostering symbiotic relationships that drive mutual growth, innovation, and sustainable success."
              textColor="text-nxg-dark"
              separatorColor="bg-nxg-gold"
            />
            <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/bussiness.jpg"
                  alt="Business meeting collaboration"
                  layout="fill"
                  objectFit="cover"
                  quality={80}
                />
              </div>
              <div className="space-y-8 text-lg leading-relaxed text-nxg-dark/80">
                <p>
                  At Novex Holding Group, partnerships are more than just collaborations; they are foundational to our
                  collective strength and vision. We seek out organizations that share our commitment to excellence,
                  innovation, and ethical practices. Our approach is built on trust, transparency, and a shared desire
                  to achieve transformative outcomes.
                </p>
                <p>
                  We work closely with our partners to leverage combined expertise, resources, and market insights. This
                  synergistic relationship enables us to tackle complex challenges, explore new opportunities, and
                  deliver unparalleled value across diverse sectors.
                </p>
                <p>
                  Whether it's co-developing cutting-edge technologies, expanding into new markets, or driving
                  sustainable initiatives, our partnerships are designed for long-term success and mutual benefit. Join
                  us in shaping the future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Benefits Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-dark text-nxg-light">
          <div className="container px-6 md:px-12">
            <SectionHeading
              title="Benefits of Partnering with NHG"
              subtitle="Collaborate with a leading conglomerate and unlock new avenues for growth, innovation, and market leadership."
              textColor="text-nxg-light"
              separatorColor="bg-nxg-gold"
            />
            <div className="grid gap-12 md:grid-cols-3 text-center mt-16">
              <div className="flex flex-col items-center space-y-4">
                <Lightbulb className="h-16 w-16 text-nxg-gold" />
                <h3 className="text-2xl font-bold">Access to Innovation</h3>
                <p className="text-lg text-nxg-light/80">
                  Leverage our R&D capabilities and cutting-edge technologies across our diverse subsidiaries.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Users className="h-16 w-16 text-nxg-gold" />
                <h3 className="text-2xl font-bold">Expanded Market Reach</h3>
                <p className="text-lg text-nxg-light/80">
                  Gain access to new markets and customer segments through our extensive global network.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <CheckCircle className="h-16 w-16 text-nxg-gold" />
                <h3 className="text-2xl font-bold">Shared Expertise</h3>
                <p className="text-lg text-nxg-light/80">
                  Benefit from cross-industry knowledge, strategic insights, and operational excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Logos Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-light text-nxg-dark">
          <div className="container px-6 md:px-12">
            <SectionHeading
              title="Our Valued Partners"
              subtitle="We are proud to collaborate with a distinguished network of global leaders and innovative companies."
              textColor="text-nxg-dark"
              separatorColor="bg-nxg-gold"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center justify-center mt-16">
              {partnerLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    width={180}
                    height={90}
                    alt={logo.alt}
                    className="aspect-[2/1] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <Link href="/contact">
                <Button className="bg-nxg-dark text-nxg-light hover:bg-nxg-gray transition-colors text-lg px-10 py-7 rounded-full font-semibold shadow-lg hover:shadow-xl">
                  BECOME A PARTNER
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
