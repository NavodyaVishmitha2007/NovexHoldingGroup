import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function SubsidiariesShowcase() {
  const subsidiaries = [
    {
      name: "NovexIT",
      description: "Pioneering the future with advanced software, AI, and robust IT infrastructure solutions.",
      image: "https://source.unsplash.com/random/800x600/?technology,futuristic,code",
      link: "#",
    },
    {
      name: "Ektakti",
      description:
        "Crafting iconic structures and sustainable urban landscapes through innovative design and engineering.",
      image: "https://source.unsplash.com/random/800x600/?architecture,engineering,modernbuilding",
      link: "#",
    },
    {
      name: "MarketX",
      description:
        "Elevating brands with data-driven digital strategies, creative campaigns, and unparalleled market reach.",
      image: "https://source.unsplash.com/random/800x600/?digitalmarketing,abstract,strategy",
      link: "#",
    },
    {
      name: "Ceylon Zen",
      description: "Delivering the world's finest, ethically sourced Ceylon teas, embodying purity and tradition.",
      image: "https://source.unsplash.com/random/800x600/?tea,plantation,luxuryfood",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-light text-nxg-dark">
      <div className="container px-6 md:px-12">
        <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-nxg-dark">
            Our Pillars of Innovation
          </h2>
          <p className="max-w-[1000px] text-lg md:text-xl lg:text-2xl font-light text-nxg-dark/80">
            Novex Holding Group's strength lies in the synergy of its specialized subsidiaries, each a leader in its
            domain, collectively driving progress and setting new industry benchmarks.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 xl:grid-cols-2">
          {subsidiaries.map((subsidiary, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-2xl transition-shadow duration-500 rounded-xl border-nxg-gray/20 bg-white dark:bg-nxg-dark dark:border-nxg-gray"
            >
              <Link href={subsidiary.link} className="block">
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={subsidiary.image || "/placeholder.svg"}
                    alt={subsidiary.name}
                    layout="fill"
                    objectFit="cover"
                    quality={80}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nxg-dark/80 to-transparent flex items-end p-8">
                    <h3 className="text-4xl font-bold text-nxg-light drop-shadow-lg">{subsidiary.name}</h3>
                  </div>
                </div>
                <CardContent className="p-8 bg-white dark:bg-nxg-dark">
                  <CardDescription className="text-nxg-dark/80 dark:text-nxg-light/70 text-lg leading-relaxed">
                    {subsidiary.description}
                  </CardDescription>
                  <Separator className="my-6 bg-nxg-gray/30 dark:bg-nxg-gray" />
                  <span className="text-nxg-gold font-semibold text-base group-hover:underline transition-colors">
                    Learn More &rarr;
                  </span>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
