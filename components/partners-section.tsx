import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PartnersSection() {
  const partnerLogos = [
    { src: "/placeholder.svg?height=90&width=180", alt: "Partner Logo 1" },
    { src: "/placeholder.svg?height=90&width=180", alt: "Partner Logo 2" },
    { src: "/placeholder.svg?height=90&width=180", alt: "Partner Logo 3" },
    { src: "/placeholder.svg?height=90&width=180", alt: "Partner Logo 4" },
    { src: "/placeholder.svg?height=90&width=180", alt: "Partner Logo 5" },
    { src: "/placeholder.svg?height=90&width=180", alt: "Partner Logo 6" },
  ]

  return (
    <section className="w-full">
      <div className="bg-amber-400 py-12 md:py-24 lg:py-32 text-center text-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Strong partnerships with trusted brands
          </h2>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl lg:text-base xl:text-xl mb-8">
            Novex Holding Group collaborates with leading organizations worldwide, building strong and lasting
            partnerships that drive innovation and deliver exceptional value across diverse sectors.
          </p>
          <Button
            variant="outline"
            className="bg-white text-amber-400 hover:bg-gray-100 hover:text-amber-500 border-white"
          >
            LEARN MORE
          </Button>
        </div>
      </div>
      <div className="bg-white py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  width={180}
                  height={90}
                  alt={logo.alt}
                  className="aspect-[2/1] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
