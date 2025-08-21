"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

interface Offer {
  id: number
  image: string
  titleKey: string
  descriptionKey: string
  href: string
  discount?: string
}

export function SpecialOffers() {
  const { t, language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const offers: Offer[] = [
    {
      id: 1,
      image: "/placeholder.svg?height=200&width=300",
      titleKey: "offers.visa_discount.title",
      descriptionKey: "offers.visa_discount.description",
      href: "#visa-services",
      discount: "20%",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=200&width=300",
      titleKey: "offers.education_consultation.title",
      descriptionKey: "offers.education_consultation.description",
      href: "#education-services",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=200&width=300",
      titleKey: "offers.transfer_bonus.title",
      descriptionKey: "offers.transfer_bonus.description",
      href: "#transfer-services",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=200&width=300",
      titleKey: "offers.fast_visa.title",
      descriptionKey: "offers.fast_visa.description",
      href: "#visa-services",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=200&width=300",
      titleKey: "offers.group_discount.title",
      descriptionKey: "offers.group_discount.description",
      href: "#visa-services",
      discount: "30%",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=200&width=300",
      titleKey: "offers.student_package.title",
      descriptionKey: "offers.student_package.description",
      href: "#education-services",
    },
  ]

  // Auto-rotate offers every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, offers.length - 2))
    }, 4000)

    return () => clearInterval(interval)
  }, [offers.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, offers.length - 2)) % Math.max(1, offers.length - 2))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, offers.length - 2))
  }

  const getVisibleOffers = () => {
    const visibleOffers = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % offers.length
      visibleOffers.push(offers[index])
    }
    return visibleOffers
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">{t("offers.title")}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        {/* Offers Container */}
        <div className="relative">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {getVisibleOffers().map((offer, index) => (
              <Card
                key={`${offer.id}-${currentIndex}`}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border/50 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => (window.location.href = offer.href)}
              >
                <div className="relative">
                  {/* Offer Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={offer.image || "/placeholder.svg"}
                      alt={t(offer.titleKey)}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Discount Badge */}
                    {offer.discount && (
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                        {offer.discount}
                      </div>
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Card Content */}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-3 font-serif group-hover:text-primary transition-colors duration-300">
                      {t(offer.titleKey)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{t(offer.descriptionKey)}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 bg-transparent"
                    >
                      {t("button.learn_more")}
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300 bg-transparent"
            >
              {language === "fa" ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              <span className="sr-only">Previous offers</span>
            </Button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {Array.from({ length: Math.max(1, offers.length - 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to offer set ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300 bg-transparent"
            >
              {language === "fa" ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              <span className="sr-only">Next offers</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
