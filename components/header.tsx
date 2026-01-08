"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          {/* <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <svg className="h-6 w-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-bold">TechFlow</span> */}
          <Image src="/logo.png" alt="System Tech Logo" width={220} height={220} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#servicios"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Servicios
          </a>
          <a
            href="#tecnologias"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Tecnologías
          </a>
          <a
            href="#nosotros"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Nosotros
          </a>
          <ThemeToggle />
          <Button>Contactar</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-lg md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-6 py-4">
            <a
              href="#servicios"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Servicios
            </a>
            <a
              href="#tecnologias"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Tecnologías
            </a>
            <a
              href="#nosotros"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Nosotros
            </a>
            <Button className="w-full">Contactar</Button>
          </div>
        </div>
      )}
    </header>
  )
}
