"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Award, Clock, Shield, Zap, Users, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface Reason {
  id: number
  icon: React.ReactNode
  titleKey: string
  description: string
  stat: string
  statLabel: string
}

export function WhyPazirikSection() {
  const { t } = useLanguage()
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  const reasons: Reason[] = [
    {
      id: 1,
      icon: <Award className="w-8 h-8" />,
      titleKey: "why.expertise",
      description: "بیش از ۱۰ سال تجربه در ارائه خدمات ویزا و مهاجرت",
      stat: "10+",
      statLabel: "سال تجربه",
    },
    {
      id: 2,
      icon: <Clock className="w-8 h-8" />,
      titleKey: "why.support",
      description: "پشتیبانی مستمر و پاسخگویی در تمام مراحل",
      stat: "24/7",
      statLabel: "پشتیبانی",
    },
    {
      id: 3,
      icon: <Shield className="w-8 h-8" />,
      titleKey: "why.reliability",
      description: "نرخ موفقیت بالا و تضمین کیفیت خدمات",
      stat: "98%",
      statLabel: "نرخ موفقیت",
    },
    {
      id: 4,
      icon: <Zap className="w-8 h-8" />,
      titleKey: "why.speed",
      description: "پردازش سریع درخواست‌ها و ارائه نتایج به موقع",
      stat: "48h",
      statLabel: "زمان پردازش",
    },
  ]

  // Animate items on scroll or load
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems((prev) => {
        if (prev.length < reasons.length) {
          return [...prev, prev.length]
        }
        return prev
      })
    }, 300)

    return () => clearInterval(timer)
  }, [reasons.length])

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-primary/3 to-secondary/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif animate-fade-in-up">
            {t("why.title")}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 animate-fade-in-up delay-200"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            پازیریک با ترکیب تجربه، تخصص و تعهد به کیفیت، بهترین انتخاب برای دریافت خدمات ویزا، تحصیل و حواله ارزی به
            روسیه است
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={reason.id}
              className={`group text-center transition-all duration-700 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Icon and Stat Container */}
              <div className="relative mb-6">
                {/* Background Circle */}
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative">
                  {/* Icon */}
                  <div className="text-primary group-hover:text-secondary transition-colors duration-300">
                    {reason.icon}
                  </div>

                  {/* Animated Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-500 animate-pulse"></div>
                </div>

                {/* Stat Badge */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {reason.stat}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 font-serif group-hover:text-primary transition-colors duration-300">
                {t(reason.titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">{reason.description}</p>
              <p className="text-xs text-primary font-medium">{reason.statLabel}</p>
            </div>
          ))}
        </div>

        {/* Animated Features List */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Additional Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-serif">مزایای همکاری با پازیریک</h3>
              <div className="space-y-4">
                {[
                  "مشاوره رایگان و تخصصی",
                  "پیگیری مستمر پرونده",
                  "شفافیت کامل در فرآیند",
                  "قیمت‌های رقابتی و منصفانه",
                  "تیم متخصص و با تجربه",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 space-x-reverse transition-all duration-500 ${
                      visibleItems.length > 0 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                    style={{ transitionDelay: `${(index + 4) * 200}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Customer Satisfaction */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
                <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2 font-serif">5000+</div>
                <div className="text-muted-foreground mb-4">مشتری راضی</div>
                <div className="flex justify-center space-x-1 space-x-reverse">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 bg-gradient-to-r from-secondary to-primary rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 200}ms` }}
                    ></div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground mt-2">رضایت ۱۰۰٪ مشتریان</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
