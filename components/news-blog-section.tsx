import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NewsBlogSection() {
  const newsItems = [
    {
      title: "NXG Expands into Renewable Energy Sector",
      date: "July 10, 2025",
      description:
        "Novex Holding Group announces its strategic entry into the renewable energy market, reinforcing its commitment to sustainability.",
      link: "#",
    },
    {
      title: "NovexIT Launches New AI-Powered Platform",
      date: "June 25, 2025",
      description:
        "NovexIT unveils its latest AI-driven platform, designed to revolutionize data analytics and business intelligence.",
      link: "#",
    },
    {
      title: "Ektakti Wins Prestigious Architectural Award",
      date: "June 15, 2025",
      description:
        "Ektakti's innovative design for the new city complex receives top honors at the National Architecture Awards.",
      link: "#",
    },
    {
      title: "MarketX Achieves Record Client Growth",
      date: "May 30, 2025",
      description:
        "MarketX celebrates a significant milestone with unprecedented client acquisition, driven by its effective digital strategies.",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest News & Insights</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Stay updated with the latest developments, industry insights, and announcements from Novex Holding Group
              and its subsidiaries.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newsItems.map((item, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">{item.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </CardContent>
              <div className="p-4 pt-0">
                <Link href={item.link} className="text-blue-600 hover:underline text-sm font-medium">
                  Read More
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
