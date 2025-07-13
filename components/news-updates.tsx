import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NewsUpdates() {
  const newsItems = [
    {
      title: "NovexIT Unveils Next-Gen AI Solutions for Enterprise",
      date: "July 15, 2025",
      description:
        "NovexIT's new AI platform promises to revolutionize data processing and decision-making for large organizations.",
      link: "#",
    },
    {
      title: "Ektakti Secures Landmark Urban Development Project",
      date: "July 01, 2025",
      description:
        "Ektakti's innovative design and sustainable approach win bid for a major city revitalization initiative.",
      link: "#",
    },
    {
      title: "MarketX Drives Record ROI for E-commerce Clients",
      date: "June 20, 2025",
      description: "MarketX's tailored digital strategies lead to unprecedented returns for its e-commerce partners.",
      link: "#",
    },
    {
      title: "Ceylon Zen Expands Global Distribution Network",
      date: "June 05, 2025",
      description: "Ceylon Zen announces new partnerships, bringing premium Ceylon tea to more markets worldwide.",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest News & Updates</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Stay informed with the latest developments, industry insights, and announcements from Novex Holding Group
              and our subsidiaries.
            </p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {newsItems.map((item, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
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
