import SiteHeader from "@/components/site-header"
import HeroSection from "@/components/hero-section"
import SiteFooter from "@/components/site-footer"
import SectionHeading from "@/components/section-heading"
import SubsidiaryCard from "@/components/subsidiary-card"

export default function SubsidiariesPage() {
  const subsidiaries = [
    {
      id: "novexit",
      name: "NovexIT",
      description:
        "NovexIT is at the forefront of technological innovation, delivering bespoke software solutions, advanced AI integration, cloud services, and robust IT infrastructure management. We empower businesses to thrive in the digital age with scalable and secure technology.",
      image: "/novexit.jpg",
      link: "#", // Link to specific subsidiary page if created
    },
    {
      id: "ektakti",
      name: "Ektakti",
      description:
        "Ektakti redefines urban landscapes through visionary architecture, sustainable civil engineering, and meticulous construction management. Our projects blend aesthetic brilliance with environmental responsibility, creating spaces that inspire and endure.",
      image: "/ektakti.jpg",
      link: "#",
    },
    {
      id: "marketx",
      name: "MarketX",
      description:
        "MarketX is a powerhouse in digital marketing, crafting strategic campaigns that elevate brands and drive unparalleled market reach. From data-driven SEO and engaging content to social media mastery, we ensure your brand resonates with its audience.",
      image: "/marketx.jpg",
      link: "#",
    },
    {
      id: "ceylonzen",
      name: "Ceylon Zen",
      description:
        "Ceylon Zen brings the world's finest, ethically sourced Ceylon teas directly from the lush plantations to your cup. We embody purity, tradition, and sustainable practices, offering an exquisite range of teas that delight the senses.",
      image: "/ceylonzen.png",
      link: "#",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-nxg-dark">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection
          title="OUR DIVERSE PORTFOLIO"
          subtitle="Novex Holding Group's strength lies in the synergy of its specialized subsidiaries, each a leader in its domain, collectively driving progress and setting new industry benchmarks."
          imageUrl="https://source.unsplash.com/random/1920x1080/?diversified,business,innovation,global"
          overlayOpacity="opacity-50"
        />

        <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-light text-nxg-dark">
          <div className="container px-6 md:px-12">
            <SectionHeading
              title="Pillars of Our Success"
              subtitle="Explore the individual strengths and unique contributions of each company under the Novex Holding Group umbrella."
              textColor="text-nxg-dark"
              separatorColor="bg-nxg-gold"
            />
            <div className="grid gap-12 lg:grid-cols-2 xl:grid-cols-2 mt-16">
              {subsidiaries.map((subsidiary, index) => (
                <SubsidiaryCard key={index} {...subsidiary} isDark={false} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
