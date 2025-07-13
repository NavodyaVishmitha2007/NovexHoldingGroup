import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

interface SubsidiaryCardProps {
  id: string
  name: string
  description: string
  image: string
  link: string
  isDark?: boolean
}

export default function SubsidiaryCard({ id, name, description, image, link, isDark = false }: SubsidiaryCardProps) {
  const textColor = isDark ? "text-nxg-light" : "text-nxg-dark"
  const cardBg = isDark ? "bg-nxg-dark" : "bg-white"
  const borderColor = isDark ? "border-nxg-gray" : "border-nxg-gray/20"
  const descColor = isDark ? "text-nxg-light/70" : "text-nxg-dark/80"
  const separatorColor = isDark ? "bg-nxg-gray" : "bg-nxg-gray/30"

  return (
    <Card
      id={id}
      className={cn(
        "overflow-hidden group hover:shadow-2xl transition-shadow duration-500 rounded-xl",
        cardBg,
        borderColor,
      )}
    >
      <Link href={link} className="block">
        <div className="relative h-72 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            layout="fill"
            objectFit="cover"
            quality={80}
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nxg-dark/80 to-transparent flex items-end p-8">
            <h3 className="text-4xl font-bold text-nxg-light drop-shadow-lg">{name}</h3>
          </div>
        </div>
        <CardContent className={cn("p-8", cardBg)}>
          <CardDescription className={cn("text-lg leading-relaxed", descColor)}>{description}</CardDescription>
          <Separator className={cn("my-6", separatorColor)} />
          <span className="text-nxg-gold font-semibold text-base group-hover:underline transition-colors">
            Learn More &rarr;
          </span>
        </CardContent>
      </Link>
    </Card>
  )
}
