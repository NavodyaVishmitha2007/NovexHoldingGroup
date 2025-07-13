import SiteHeader from "@/components/site-header"
import HeroSection from "@/components/hero-section"
import SiteFooter from "@/components/site-footer"
import SectionHeading from "@/components/section-heading"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InsightsPage() {
  const insightsItems = [
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
    {
      title: "Decoding Digital: MarketX's Blueprint for Brand Dominance",
      date: "June 20, 2025",
      description:
        "Uncover the strategies MarketX employs to ensure unparalleled digital presence and ROI for its clients.",
      link: "#",
    },
    {
      title: "The Art of Tea: Ceylon Zen's Commitment to Purity and Heritage",
      date: "June 05, 2025",
      description: "A deep dive into Ceylon Zen's meticulous process of bringing the finest Ceylon teas to the world.",
      link: "#",
    },
    {
      title: "Novex Holding Group's Q2 Performance Highlights",
      date: "May 28, 2025",
      description:
        "A comprehensive overview of our financial achievements and strategic milestones in the second quarter.",
      link: "#",
    },
    {
      title: "Innovation in Supply Chain: Lessons from Our Global Operations",
      date: "May 10, 2025",
      description: "Insights into how NHG optimizes its global supply chains for efficiency and resilience.",
      link: "#",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-nxg-dark">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection
          title="INSIGHTS & THOUGHT LEADERSHIP"
          subtitle="Stay ahead with expert analyses, industry trends, and company announcements from Novex Holding Group and our visionary subsidiaries."
          imageUrl="https://source.unsplash.com/random/1920x1080/?knowledge,data,abstract,futuristic"
          overlayOpacity="opacity-50"
        />

        <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-light text-nxg-dark">
          <div className="container px-6 md:px-12">
            <SectionHeading
              title="Latest Articles & Updates"
              subtitle="Dive into our curated collection of insights, news, and expert opinions shaping the future of our industries."
              textColor="text-nxg-dark"
              separatorColor="bg-nxg-gold"
            />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-16">
              {insightsItems.map((item, index) => (
                <Card
                  key={index}
                  className="flex flex-col hover:shadow-xl transition-shadow duration-300 rounded-lg border-nxg-gray/20 dark:bg-nxg-dark dark:border-nxg-gray"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-nxg-dark dark:text-nxg-light">{item.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-500 dark:text-gray-400">{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 pb-6">
                    <p className="text-nxg-dark/80 dark:text-nxg-light/70 text-base leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Link
                      href={item.link}
                      className="text-nxg-gold hover:underline text-base font-semibold transition-colors"
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
