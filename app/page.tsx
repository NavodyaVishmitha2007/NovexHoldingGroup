'use client'

import SiteHeader from "@/components/site-header"
import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"
import SubsidiaryCard from "@/components/subsidiary-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Globe, Lightbulb } from "lucide-react"
import SiteFooter from "@/components/site-footer"
import Script from "next/script" // << ADDED

export default function Home() {
  const featuredSubsidiaries = [
    {
      id: "novexit",
      name: "NovexIT",
      description: "Pioneering the future with advanced software, AI, and robust IT infrastructure solutions.",
      image: "/novexit.jpg",
      link: "/subsidiaries#novexit",
    },
    {
      id: "ektakti",
      name: "Ektakti",
      description:
        "Crafting iconic structures and sustainable urban landscapes through innovative design and engineering.",
      image: "ektakti.jpg",
      link: "/subsidiaries#ektakti",
    },
    {
      id: "marketx",
      name: "MarketX",
      description:
        "Elevating brands with data-driven digital strategies, creative campaigns, and unparalleled market reach.",
      image: "marketx.jpg",
      link: "/subsidiaries#marketx",
    },
    {
      id: "ceylonzen",
      name: "Ceylon Zen",
      description: "Delivering the world's finest, ethically sourced Ceylon teas, embodying purity and tradition.",
      image: "ceylonzen.png",
      link: "/subsidiaries#ceylonzen",
    },
  ]

  const latestInsights = [
    {
      title: "The Future of AI in Enterprise: A NovexIT Perspective",
      date: "July 15, 2025",
      description: "Explore how NovexIT is shaping the next generation of AI-driven solutions for global enterprises.",
      link: "#",
    },
    {
      title: "Sustainable Urban Development: Ektakti's Vision for Tomorrow's Cities",
      date: "July 01, 2025",
      description: "Ektakti shares insights on integrating eco-friendly practices into modern architectural marvels.",
      link: "#",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-nxg-dark">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection
          title="PIONEERING EXCELLENCE. REDEFINING INDUSTRIES."
          subtitle="Novex Holding Group: A beacon of innovation, uniting visionary companies to forge a future of unparalleled achievement and sustainable impact."
          imageUrl="/istockphoto-459985213-612x612.jpg"
          buttonText="DISCOVER MORE"
          buttonLink="/about"
        />

        {/* Welcome Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-light text-nxg-dark">
          <div className="container px-6 md:px-12 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Welcome to Novex Holding Group</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              At Novex Holding Group, we are more than just a conglomerate; we are a collective of innovators,
              strategists, and visionaries. Our diverse portfolio spans critical sectors, each driven by a shared
              commitment to excellence, integrity, and transformative impact. We build legacies, empower progress, and
              shape the future.
            </p>
            <Link href="/about">
              <Button className="mt-10 bg-nxg-dark text-nxg-light hover:bg-nxg-gray transition-colors text-lg px-8 py-6 rounded-full font-semibold">
                LEARN ABOUT US
              </Button>
            </Link>
          </div>
        </section>

        {/* Featured Subsidiaries */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-dark text-nxg-light">
          <div className="container px-6 md:px-12">
            <SectionHeading
              title="Our Pillars of Innovation"
              subtitle="Novex Holding Group's strength lies in the synergy of its specialized subsidiaries, each a leader in its domain, collectively driving progress and setting new industry benchmarks."
              textColor="text-nxg-light"
              separatorColor="bg-nxg-gold"
            />
            <div className="grid gap-12 lg:grid-cols-2">
              {featuredSubsidiaries.slice(0, 2).map((subsidiary, index) => (
                <SubsidiaryCard key={index} {...subsidiary} isDark={true} />
              ))}
            </div>
            <div className="text-center mt-16">
              <Link href="/subsidiaries">
                <Button className="bg-nxg-gold text-nxg-dark hover:bg-nxg-gold/90 transition-colors text-lg px-10 py-7 rounded-full font-semibold shadow-lg hover:shadow-xl">
                  EXPLORE ALL SUBSIDIARIES
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 🔥 Adsterra Ad */}
        <section className="w-full py-10 bg-nxg-dark flex justify-center">
          <div className="w-[160px] h-[300px]">
            {/* Adsterra Config Script */}
            <Script id="adsterra-config" strategy="afterInteractive">
              {`
                atOptions = {
                  'key' : '743c6154364ee34a047a43571200fcda',
                  'format' : 'iframe',
                  'height' : 300,
                  'width' : 160,
                  'params' : {}
                };
              `}
            </Script>

            {/* Adsterra Invoke Script */}
            <Script
              id="adsterra-invoke"
              src="https://www.highperformanceformat.com/743c6154364ee34a047a43571200fcda/invoke.js"
              strategy="afterInteractive"
            />
          </div>
        </section>

        {/* Why Choose NHG */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-light text-nxg-dark">
          <div className="container px-6 md:px-12">
            <SectionHeading
              title="Why Partner with Novex Holding Group?"
              subtitle="Our commitment to excellence, innovation, and strategic partnerships sets us apart. Discover the advantages of collaborating with a leader."
              textColor="text-nxg-dark"
              separatorColor="bg-nxg-gold"
            />
            <div className="grid gap-10 md:grid-cols-3 text-center mt-16">
              <div className="flex flex-col items-center space-y-4">
                <Lightbulb className="h-16 w-16 text-nxg-gold" />
                <h3 className="text-2xl font-bold">Innovation at Core</h3>
                <p className="text-lg text-nxg-dark/80">
                  We invest in cutting-edge technologies and foster a culture of continuous innovation across all our
                  ventures.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <CheckCircle className="h-16 w-16 text-nxg-gold" />
                <h3 className="text-2xl font-bold">Unwavering Excellence</h3>
                <p className="text-lg text-nxg-dark/80">
                  Our commitment to quality and high standards ensures superior results and lasting value for our
                  partners.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Globe className="h-16 w-16 text-nxg-gold" />
                <h3 className="text-2xl font-bold">Global Reach & Impact</h3>
                <p className="text-lg text-nxg-dark/80">
                  With a diversified portfolio and strategic alliances, we drive impact on a global scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Insights */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-dark text-nxg-light">
          <div className="container px-6 md:px-12">
            <SectionHeading
              title="Latest Insights & Thought Leadership"
              subtitle="Stay ahead with expert analyses, industry trends, and company announcements from Novex Holding Group and our visionary subsidiaries."
              textColor="text-nxg-light"
              separatorColor="bg-nxg-gold"
            />
            <div className="grid gap-10 sm:grid-cols-2">
              {latestInsights.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col hover:shadow-xl transition-shadow duration-300 rounded-lg border border-nxg-gray bg-nxg-dark p-8"
                >
                  <h3 className="text-2xl font-bold text-nxg-light mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{item.date}</p>
                  <p className="text-nxg-light/70 text-base leading-relaxed flex-1 mb-6">{item.description}</p>
                  <Link
                    href={item.link}
                    className="text-nxg-gold hover:underline text-base font-semibold transition-colors"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <Link href="/insights">
                <Button className="bg-nxg-gold text-nxg-dark hover:bg-nxg-gold/90 transition-colors text-lg px-10 py-7 rounded-full font-semibold shadow-lg hover:shadow-xl">
                  VIEW ALL INSIGHTS
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-light text-nxg-dark">
          <div className="container px-6 md:px-12 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Collaborate?</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-10">
              Whether you're a potential partner, client, or a talented individual, we invite you to connect with Novex
              Holding Group. Let's build the future together.
            </p>
            <Link href="/contact">
              <Button className="bg-nxg-dark text-nxg-light hover:bg-nxg-gray transition-colors text-lg px-8 py-6 rounded-full font-semibold">
                CONTACT US
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
