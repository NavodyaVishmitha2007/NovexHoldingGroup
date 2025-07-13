import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription } from "@/components/ui/card"

export default function SubsidiariesSection() {
  const subsidiaries = [
    {
      name: "NovexIT",
      description: "Leading the way in cutting-edge technology solutions and services.",
      image: "https://source.unsplash.com/random/800x600/?technology,futuristic,code",
      link: "#",
    },
    {
      name: "Ektakti",
      description: "Delivering innovative architecture and engineering designs.",
      image: "https://source.unsplash.com/random/800x600/?architecture,engineering,modernbuilding",
      link: "#",
    },
    {
      name: "MarketX",
      description: "Crafting impactful digital marketing strategies for global reach.",
      image: "https://source.unsplash.com/random/800x600/?digitalmarketing,abstract,strategy",
      link: "#",
    },
    {
      name: "Ceylon Zen",
      description: "Bringing the finest premium teas from the heart of Ceylon.",
      image: "/shrilanka-tea-estates.jpg",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Diverse Portfolio</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Novex Holding Group encompasses a range of dynamic companies, each a leader in its respective field.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {subsidiaries.map((subsidiary, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <Link href={subsidiary.link} className="block">
                <div className="relative h-48 w-full">
                  <Image
                    src={subsidiary.image || "/placeholder.svg"}
                    alt={subsidiary.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">{subsidiary.name}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <CardDescription className="text-gray-600 dark:text-gray-300">
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
