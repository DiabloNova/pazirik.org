"use client"

import { useLanguage } from "@/contexts/language-context"

export function PromotionalBanner() {
  const { t } = useLanguage()

  return (
    <div className="relative w-full h-16 bg-gradient-to-r from-primary via-primary/90 to-secondary overflow-hidden">
      {/* Dynamic background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 animate-pulse"></div>

      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-2 left-10 w-8 h-8 bg-white/10 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-4 right-20 w-6 h-6 bg-white/10 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-2 left-1/3 w-4 h-4 bg-white/10 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-3 right-1/4 w-5 h-5 bg-white/10 rounded-full animate-bounce delay-700"></div>
      </div>

      {/* Banner text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-white font-semibold text-sm md:text-base text-center px-4 animate-fade-in-up">
          {t("banner.text")}
        </p>
      </div>
    </div>
  )
}
