import SiteHeader from "@/components/site-header"
import HeroSection from "@/components/hero-section"
import SiteFooter from "@/components/site-footer"
import SectionHeading from "@/components/section-heading"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { Award, Handshake, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-nxg-dark">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection
          title="OUR STORY. OUR VISION."
          subtitle="Discover the journey, principles, and aspirations that define Novex Holding Group as a leader in innovation and sustainable growth."
          imageUrl="/worldmao.jpg"
          overlayOpacity="opacity-50"
        />

        {/* Our Story Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-light text-nxg-dark">
          <div className="container px-6 md:px-12">
            <SectionHeading
              title="The Genesis of Excellence"
              subtitle="From humble beginnings to a diversified global conglomerate, Novex Holding Group's journey is marked by strategic vision, relentless innovation, and an unwavering commitment to progress."
              textColor="text-nxg-dark"
              separatorColor="bg-nxg-gold"
            />
            <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
              <div className="space-y-8 text-lg leading-relaxed text-nxg-dark/80">
                <p>
                  Founded on the principles of integrity and foresight, Novex Holding Group embarked on a mission to
                  identify and nurture groundbreaking ventures across critical sectors. Our initial focus on technology
                  quickly expanded, driven by a deep understanding of market needs and a passion for transformative
                  solutions.
                </p>
                <p>
                  Over the decades, we have strategically diversified our portfolio, integrating companies that not only
                  excel in their respective fields but also align with our core values of sustainability, collaboration,
                  and societal impact. This organic growth, coupled with strategic acquisitions, has positioned NHG as a
                  formidable force in the global economy.
                </p>
                <p>
                  Today, NHG stands as a testament to what can be achieved when innovation meets dedication. We continue
                  to explore new frontiers, invest in future-forward technologies, and empower our subsidiaries to
                  redefine industry standards, all while maintaining our commitment to ethical practices and creating
                  lasting value for our stakeholders.
                </p>
              </div>
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/Screenshot_12-7-2025_182948_www.instagram.com.jpeg"
                  alt="Modern corporate office interior"
                  layout="fill"
                  objectFit="cover"
                  quality={80}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Values, Vision Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-dark text-nxg-light">
          <div className="container px-6 md:px-12">
            <SectionHeading
              title="Our Guiding Principles"
              subtitle="The foundation of Novex Holding Group is built upon a clear mission, unwavering values, and an ambitious vision for the future."
              textColor="text-nxg-light"
              separatorColor="bg-nxg-gold"
            />
            <div className="mx-auto grid max-w-6xl items-start gap-12 py-16 sm:grid-cols-1 lg:grid-cols-3">
              <div className="grid gap-4 text-center">
                <h3 className="text-3xl font-bold text-nxg-light">Our Mission</h3>
                <Separator className="w-24 h-1 bg-nxg-gold mx-auto" />
                <p className="text-lg text-nxg-light/70">
                  To empower global progress through pioneering solutions, cultivating a legacy of innovation and
                  unwavering commitment to excellence in every endeavor.
                </p>
              </div>
              <div className="grid gap-4 text-center">
                <h3 className="text-3xl font-bold text-nxg-light">Our Values</h3>
                <Separator className="w-24 h-1 bg-nxg-gold mx-auto" />
                <p className="text-lg text-nxg-light/70">
                  Integrity, Innovation, Excellence, Collaboration, and Sustainability form the bedrock of our
                  operations, guiding our every decision and interaction.
                </p>
              </div>
              <div className="grid gap-4 text-center">
                <h3 className="text-3xl font-bold text-nxg-light">Our Vision</h3>
                <Separator className="w-24 h-1 bg-nxg-gold mx-auto" />
                <p className="text-lg text-nxg-light/70">
                  To be the preeminent global holding group, recognized for our transformative impact, ethical
                  leadership, and a relentless pursuit of a better future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-light text-nxg-dark">
          <div className="container px-6 md:px-12">
            <SectionHeading
              title="Driving Positive Impact"
              subtitle="Novex Holding Group is committed to creating value not just for our shareholders, but for society and the environment."
              textColor="text-nxg-dark"
              separatorColor="bg-nxg-gold"
            />
            <div className="grid gap-12 md:grid-cols-3 text-center mt-16">
              <div className="flex flex-col items-center space-y-4">
                <TrendingUp className="h-16 w-16 text-nxg-gold" />
                <h3 className="text-2xl font-bold">Economic Growth</h3>
                <p className="text-lg text-nxg-dark/80">
                  Our ventures stimulate economies, create jobs, and foster technological advancement globally.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Handshake className="h-16 w-16 text-nxg-gold" />
                <h3 className="text-2xl font-bold">Community Engagement</h3>
                <p className="text-lg text-nxg-dark/80">
                  We actively participate in community development, supporting education and local initiatives.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Award className="h-16 w-16 text-nxg-gold" />
                <h3 className="text-2xl font-bold">Environmental Stewardship</h3>
                <p className="text-lg text-nxg-dark/80">
                  Sustainability is integrated into our operations, minimizing our footprint and promoting green
                  practices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
