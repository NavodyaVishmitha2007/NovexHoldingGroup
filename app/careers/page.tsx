import SiteHeader from "@/components/site-header"
import HeroSection from "@/components/hero-section"
import SiteFooter from "@/components/site-footer"
import SectionHeading from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Briefcase, Lightbulb, Users } from "lucide-react"

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Senior Software Engineer (NovexIT)",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      link: "#",
    },
    {
      title: "Architectural Designer (Ektakti)",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      link: "#",
    },
    {
      title: "Digital Marketing Specialist (MarketX)",
      location: "Remote / Colombo, Sri Lanka",
      type: "Full-time",
      link: "#",
    },
    {
      title: "Supply Chain Manager (Ceylon Zen)",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      link: "#",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-nxg-dark">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection
          title="SHAPE THE FUTURE WITH US."
          subtitle="Join Novex Holding Group and become part of a dynamic team that is redefining industries through innovation, collaboration, and excellence."
          imageUrl="https://source.unsplash.com/random/1920x1080/?career,teamwork,futuristicoffice,collaboration"
          overlayOpacity="opacity-50"
        />

        {/* Why Work With Us Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-light text-nxg-dark">
          <div className="container px-6 md:px-12">
            <SectionHeading
              title="Why Choose a Career at NHG?"
              subtitle="We offer more than just jobs; we offer pathways to impactful careers where your talent is valued and your growth is prioritized."
              textColor="text-nxg-dark"
              separatorColor="bg-nxg-gold"
            />
            <div className="grid gap-12 md:grid-cols-3 text-center mt-16">
              <div className="flex flex-col items-center space-y-4">
                <Lightbulb className="h-16 w-16 text-nxg-gold" />
                <h3 className="text-2xl font-bold">Innovative Environment</h3>
                <p className="text-lg text-nxg-dark/80">
                  Work on groundbreaking projects and contribute to solutions that shape industries.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Users className="h-16 w-16 text-nxg-gold" />
                <h3 className="text-2xl font-bold">Collaborative Culture</h3>
                <p className="text-lg text-nxg-dark/80">
                  Thrive in a supportive and diverse environment where teamwork drives success.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Briefcase className="h-16 w-16 text-nxg-gold" />
                <h3 className="text-2xl font-bold">Growth Opportunities</h3>
                <p className="text-lg text-nxg-dark/80">
                  Benefit from continuous learning, professional development, and clear career progression paths.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-dark text-nxg-light">
          <div className="container px-6 md:px-12">
            <SectionHeading
              title="Current Career Opportunities"
              subtitle="Explore our open positions and find your next challenge at Novex Holding Group or one of our subsidiaries."
              textColor="text-nxg-light"
              separatorColor="bg-nxg-gold"
            />
            <div className="grid gap-8 mt-16">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center justify-between bg-nxg-gray/50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center md:text-left mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-nxg-light">{job.title}</h3>
                    <p className="text-lg text-nxg-light/70">
                      {job.location} &bull; {job.type}
                    </p>
                  </div>
                  <Link href={job.link}>
                    <Button className="bg-nxg-gold text-nxg-dark hover:bg-nxg-gold/90 transition-colors text-base px-8 py-5 rounded-full font-semibold">
                      APPLY NOW
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <p className="text-xl text-nxg-light/80 mb-6">
                Don't see a role that fits? Send us your resume for future consideration.
              </p>
              <Link href="/contact">
                <Button className="bg-nxg-gold text-nxg-dark hover:bg-nxg-gold/90 transition-colors text-lg px-10 py-7 rounded-full font-semibold shadow-lg hover:shadow-xl">
                  SUBMIT YOUR RESUME
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
