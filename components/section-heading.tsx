import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle: string
  textColor?: string
  separatorColor?: string
}

export default function SectionHeading({
  title,
  subtitle,
  textColor = "text-nxg-dark",
  separatorColor = "bg-nxg-gold",
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
      <h2 className={cn("text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl", textColor)}>{title}</h2>
      <Separator className={cn("w-24 h-1", separatorColor)} />
      <p
        className={cn(
          "max-w-[1000px] text-lg md:text-xl lg:text-2xl font-light",
          textColor.replace("text-", "text-") + "/80",
        )}
      >
        {subtitle}
      </p>
    </div>
  )
}
