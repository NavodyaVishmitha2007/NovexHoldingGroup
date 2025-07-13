"use client"

import React, { useState, useEffect } from "react"
import { ChevronDown, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-nxg-gray focus:bg-nxg-gray",
              className,
            )}
            {...props}
          >
            <div className="text-lg font-medium leading-none text-nxg-light">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

export default function SiteHeader() {
  // useState + useEffect to safely get current path on client only, to avoid hydration mismatch
  const [currentPath, setCurrentPath] = useState<string | null>(null)

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Partners", href: "/partners" },
    { name: "Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex h-24 w-full items-center px-6 md:px-12 text-nxg-light bg-gradient-to-b from-nxg-dark/80 to-transparent">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden text-nxg-light hover:bg-nxg-gray">
            <Menu className="h-7 w-7" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-nxg-dark text-nxg-light border-r border-nxg-gray">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <Image
              src="/logo.jpg"
              width={180}
              height={50}
              alt="Novex Holding Group Logo"
              className="h-12 w-auto"
            />
            <span className="sr-only">Novex Holding Group</span>
          </Link>
          <div className="grid gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex w-full items-center py-3 text-xl font-semibold hover:text-nxg-gold transition-colors",
                  currentPath === link.href && "text-nxg-gold",
                )}
              >
                {link.name}
              </Link>
            ))}
            <NavigationMenu className="w-full">
              <NavigationMenuList className="flex-col items-start space-x-0">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xl font-semibold p-0 h-auto bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-nxg-light hover:text-nxg-gold transition-colors">
                    Subsidiaries{" "}
                    <ChevronDown className="relative top-[1px] ml-2 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-full border border-nxg-gray bg-nxg-dark">
                    <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-1 lg:w-[500px]">
                      <ListItem href="/subsidiaries#novexit" title="NovexIT">
                        Cutting-edge technology solutions.
                      </ListItem>
                      <ListItem href="/subsidiaries#ektakti" title="Ektakti">
                        Innovative architecture & engineering.
                      </ListItem>
                      <ListItem href="/subsidiaries#marketx" title="MarketX">
                        Strategic digital marketing.
                      </ListItem>
                      <ListItem href="/subsidiaries#ceylonzen" title="Ceylon Zen">
                        Premium Ceylon tea products.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </SheetContent>
      </Sheet>

      {/* Logo for desktop */}
      <div className="flex-1 flex justify-center items-center">
        <Link href="/" className="hidden lg:block">
          <Image
            src="/logo.jpg"
            width= "100"
            height="100"
            alt="Novex Holding Group Logo"
            className="h-50 w-50"
          />
          <span className="sr-only">Novex Holding Group</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-1 justify-end">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:text-nxg-gold focus:text-nxg-gold focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-nxg-gold data-[state=open]:text-nxg-gold",
                      currentPath === link.href && "text-nxg-gold",
                    )}
                  >
                    {link.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-nxg-light bg-transparent hover:text-nxg-gold focus:text-nxg-gold data-[state=open]:text-nxg-gold text-base font-medium">
                Subsidiaries{" "}
                <ChevronDown className="relative top-[1px] ml-2 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="border border-nxg-gray bg-nxg-dark">
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-nxg-gray/50 to-nxg-gray p-6 no-underline outline-none focus:shadow-md"
                        href="/subsidiaries"
                      >
                        <Image
                          src="/logo.jpg"
                          width={50}
                          height={50}
                          alt="NXG Icon"
                          className="h-12 w-12 mb-4"
                        />
                        <div className="mb-2 mt-4 text-xl font-medium text-nxg-light">Novex Holding Group</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          A conglomerate driving innovation across diverse sectors.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/subsidiaries#novexit" title="NovexIT">
                    Cutting-edge technology solutions.
                  </ListItem>
                  <ListItem href="/subsidiaries#ektakti" title="Ektakti">
                    Innovative architecture & engineering.
                  </ListItem>
                  <ListItem href="/subsidiaries#marketx" title="MarketX">
                    Strategic digital marketing.
                  </ListItem>
                  <ListItem href="/subsidiaries#ceylonzen" title="Ceylon Zen">
                    Premium Ceylon tea products.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
