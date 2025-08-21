"use client"

import type React from "react"

import { StampIcon as Passport, GraduationCap, CreditCard } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

interface Service {
  id: number
  icon: React.ReactNode
  titleKey: string
  descriptionKey: string
  href: string
  gradient: string
}

export function ServicesSection() {
  const { t } = useLanguage()

  const services: Service[] = [
    {
      id: 1,
      icon: <Passport className="w-12 h-12" />,
      titleKey: "services.visa.title",
      descriptionKey: "services.visa.description",
      href: "#visa-services",
      gradient: "from-primary to-primary/80",
    },
    {
      id: 2,
      icon: <GraduationCap className="w-12 h-12" />,
      titleKey: "services.education.title",
      descriptionKey: "services.education.description",
      href: "#education-services",
      gradient: "from-secondary to-secondary/80",
    },
    {
      id: 3,
      icon: <CreditCard className="w-12 h-12" />,
      titleKey: "services.transfer.title",
      descriptionKey: "services.transfer.description",
      href: "#transfer-services",
      gradient: "from-primary/80 to-secondary",
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">{t("services.title")}</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ما در پازیریک با بیش از ده سال تجربه، خدمات تخصصی و قابل اعتماد در زمینه ویزا، تحصیل و حواله ارزی ارائه
            می‌دهیم
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group relative overflow-hidden bg-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardContent className="relative p-8 text-center">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                  >
                    {service.icon}
                  </div>
                  {/* Decorative Ring */}
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-500 animate-pulse"></div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-4 font-serif group-hover:text-primary transition-colors duration-300">
                  {t(service.titleKey)}
                </h3>

                {/* Service Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                  {t(service.descriptionKey)}
                </p>

                {/* Learn More Button */}
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:shadow-primary/25"
                >
                  <a href={service.href}>{t("button.learn_more")}</a>
                </Button>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </CardContent>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-serif">
              آماده شروع همکاری با ما هستید؟
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              تیم متخصص ما آماده ارائه بهترین خدمات و مشاوره رایگان به شما است
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                {t("button.contact")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
              >
                مشاهده نمونه کارها
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
