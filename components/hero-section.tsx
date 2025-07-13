import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroSectionProps {
  title: string
  subtitle: string
  imageUrl: string
  buttonText?: string
  buttonLink?: string
  overlayOpacity?: string // e.g., "opacity-40"
}

export default function HeroSection({
  title,
  subtitle,
  imageUrl,
  buttonText,
  buttonLink,
  overlayOpacity = "opacity-40",
}: HeroSectionProps) {
  return (
    <section className="relative h-[700px] w-full overflow-hidden md:h-[800px] lg:h-[900px] flex items-center justify-center text-center">
    <Image
  src={imageUrl || "/istockphoto-459985213-612x612.jpg"}
  alt={title}
  layout="fill"
  objectFit="cover"
  quality={100}
  className={cn("z-0 transition-opacity duration-1000 brightness-125", overlayOpacity)}
/>
      <div className="absolute inset-0 bg-gradient-to-t from-nxg-dark to-transparent z-10" />
      <div className="relative z-20 px-4 text-nxg-light max-w-5xl mx-auto space-y-8 animate-fade-in-up">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-light drop-shadow-md max-w-3xl mx-auto">{subtitle}</p>
        {buttonText && buttonLink && (
          <Link href={buttonLink}>
            <Button className="bg-nxg-gold text-nxg-dark hover:bg-nxg-gold/90 transition-colors text-lg px-10 py-7 rounded-full font-semibold shadow-lg hover:shadow-xl">
              {buttonText}
            </Button>
          </Link>
        )}
      </div>
    </section>
  )
}
