import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function PartnersShowcase() {
  const partnerLogos = [
    { src: "https://source.unsplash.com/random/180x90/?logo,brand,tech", alt: "Global Partner Logo 1" },
    { src: "https://source.unsplash.com/random/180x90/?logo,brand,finance", alt: "Global Partner Logo 2" },
    { src: "https://source.unsplash.com/random/180x90/?logo,brand,design", alt: "Global Partner Logo 3" },
    { src: "https://source.unsplash.com/random/180x90/?logo,brand,energy", alt: "Global Partner Logo 4" },
    { src: "https://source.unsplash.com/random/180x90/?logo,brand,health", alt: "Global Partner Logo 5" },
    { src: "https://source.unsplash.com/random/180x90/?logo,brand,automotive", alt: "Global Partner Logo 6" },
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-dark text-nxg-light">
      <div className="container px-6 md:px-12">
        <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-nxg-gold">
            Strategic Alliances. Global Impact.
          </h2>
          <p className="mx-auto max-w-[1000px] text-lg md:text-xl lg:text-2xl font-light text-nxg-light/80">
            Novex Holding Group cultivates robust and enduring partnerships with industry leaders and visionary
            enterprises worldwide. These strategic alliances are the cornerstone of our collective success, enabling us
            to expand our reach and amplify our impact.
          </p>
          <Button className="bg-nxg-gold text-nxg-dark hover:bg-nxg-gold/90 transition-colors text-lg px-10 py-7 rounded-full font-semibold shadow-lg hover:shadow-xl">
            VIEW ALL PARTNERS
          </Button>
        </div>
        <Separator className="my-16 bg-nxg-gray" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center justify-center">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                width={180}
                height={90}
                alt={logo.alt}
                className="aspect-[2/1] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
