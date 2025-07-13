import { Separator } from "@/components/ui/separator"

export default function AboutSection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-nxg-dark text-nxg-light">
      <div className="container px-6 md:px-12">
        <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-nxg-gold">
            About Novex Holding Group
          </h2>
          <p className="max-w-[1000px] text-lg md:text-xl lg:text-2xl font-light text-nxg-light/80">
            Novex Holding Group (NHG) stands as a testament to visionary leadership and strategic diversification. We
            are a conglomerate dedicated to fostering innovation, driving sustainable growth, and delivering exceptional
            value across a spectrum of high-impact industries. Our commitment extends beyond business, aiming to create
            a positive societal footprint.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-12 py-16 sm:grid-cols-1 lg:grid-cols-3">
          <div className="grid gap-4 text-center">
            <h3 className="text-3xl font-bold text-nxg-light">Our Mission</h3>
            <Separator className="w-24 h-1 bg-nxg-gold mx-auto" />
            <p className="text-lg text-nxg-light/70">
              To empower global progress through pioneering solutions, cultivating a legacy of innovation and unwavering
              commitment to excellence in every endeavor.
            </p>
          </div>
          <div className="grid gap-4 text-center">
            <h3 className="text-3xl font-bold text-nxg-light">Our Values</h3>
            <Separator className="w-24 h-1 bg-nxg-gold mx-auto" />
            <p className="text-lg text-nxg-light/70">
              Integrity, Innovation, Excellence, Collaboration, and Sustainability form the bedrock of our operations,
              guiding our every decision and interaction.
            </p>
          </div>
          <div className="grid gap-4 text-center">
            <h3 className="text-3xl font-bold text-nxg-light">Our Vision</h3>
            <Separator className="w-24 h-1 bg-nxg-gold mx-auto" />
            <p className="text-lg text-nxg-light/70">
              To be the preeminent global holding group, recognized for our transformative impact, ethical leadership,
              and a relentless pursuit of a better future.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
