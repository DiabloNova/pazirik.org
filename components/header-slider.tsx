"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

interface Slide {
  id: number
  image: string
  titleKey: string
  descriptionKey: string
  ctaKey: string
  href: string
}

export function HeaderSlider() {
  const { t, language } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides: Slide[] = [
    {
      id: 1,
      image: "/placeholder.svg?height=600&width=1200",
      titleKey: "slider.visa.title",
      descriptionKey: "slider.visa.description",
      ctaKey: "button.learn_more",
      href: "#visa-services",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=600&width=1200",
      titleKey: "slider.education.title",
      descriptionKey: "slider.education.description",
      ctaKey: "button.learn_more",
      href: "#education-services",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=600&width=1200",
      titleKey: "slider.transfer.title",
      descriptionKey: "slider.transfer.description",
      ctaKey: "button.learn_more",
      href: "#transfer-services",
    },
  ]

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-muted">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative w-full h-full flex-shrink-0">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-end">
              <div className="w-full p-6 md:p-12">
                <div className={`max-w-2xl ${language === "fa" ? "mr-auto" : "ml-auto"}`}>
                  <div className="animate-fade-in-up">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif leading-tight">
                      {t(slide.titleKey)}
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">{t(slide.descriptionKey)}</p>
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <a href={slide.href}>{t(slide.ctaKey)}</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className={`absolute top-1/2 -translate-y-1/2 ${
          language === "fa" ? "right-4" : "left-4"
        } z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:scale-110`}
        aria-label="Previous slide"
      >
        {language === "fa" ? (
          <ChevronRight className="w-6 h-6 text-white" />
        ) : (
          <ChevronLeft className="w-6 h-6 text-white" />
        )}
      </button>

      <button
        onClick={goToNext}
        className={`absolute top-1/2 -translate-y-1/2 ${
          language === "fa" ? "left-4" : "right-4"
        } z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:scale-110`}
        aria-label="Next slide"
      >
        {language === "fa" ? (
          <ChevronLeft className="w-6 h-6 text-white" />
        ) : (
          <ChevronRight className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-primary transition-all duration-300 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  )
}
