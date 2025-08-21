"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, language } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { key: "nav.home", href: "#home" },
    { key: "nav.services", href: "#services" },
    { key: "nav.about", href: "#about" },
    { key: "nav.contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name - Left side for RTL, Right side for LTR */}
          <div className={`flex items-center space-x-3 ${language === "fa" ? "space-x-reverse" : ""}`}>
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg font-serif">P</span>
              </div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-foreground font-serif">{t("company.name")}</h1>
            </div>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:block">
            <div className={`flex items-baseline space-x-8 ${language === "fa" ? "space-x-reverse" : ""}`}>
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-accent/10 rounded-md"
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button - Right side for RTL, Left side for LTR */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-foreground hover:text-primary hover:bg-accent/10 transition-all duration-200"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64 opacity-100 border-b border-border" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-foreground hover:text-primary hover:bg-accent/10 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t(item.key)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
