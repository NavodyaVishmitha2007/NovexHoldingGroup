import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription } from "@/components/ui/card"

export default function SubsidiariesGrid() {
  const subsidiaries = [
    {
      name: "NovexIT",
      description: "Delivering cutting-edge technology solutions, software development, and IT consulting services.",
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      name: "Ektakti",
      description: "Specializing in innovative architecture, civil engineering, and construction management.",
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      name: "MarketX",
      description: "Crafting strategic digital marketing campaigns, branding, and online presence solutions.",
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      name: "Ceylon Zen",
      description: "Sourcing and distributing premium, ethically produced Ceylon teas to the global market.",
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Diverse Portfolio</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Novex Holding Group encompasses a range of dynamic companies, each a leader in its respective field,
              contributing to our collective strength and innovation.
            </p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {subsidiaries.map((subsidiary, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 rounded-lg"
            >
              <Link href={subsidiary.link} className="block">
                <div className="relative h-56 w-full">
                  <Image
                    src={subsidiary.image || "/placeholder.svg"}
                    alt={subsidiary.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                    <h3 className="text-3xl font-bold text-white drop-shadow-lg">{subsidiary.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardDescription className="text-gray-700 dark:text-gray-300 text-base">
                    {subsidiary.description}
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
