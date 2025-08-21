"use client"

import { Phone, Mail, MapPin, Facebook, Instagram, TextIcon as Telegram, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t, language } = useLanguage()

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "تلفن تماس",
      value: "+98 21 1234 5678",
      href: "tel:+982112345678",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "ایمیل",
      value: "info@pazirik.com",
      href: "mailto:info@pazirik.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "آدرس",
      value: "تهران، خیابان ولیعصر، پلاک ۱۲۳",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: "#",
      color: "hover:text-pink-500",
    },
    {
      icon: <Telegram className="w-5 h-5" />,
      label: "Telegram",
      href: "#",
      color: "hover:text-blue-500",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      href: "#",
      color: "hover:text-blue-700",
    },
  ]

  const quickLinks = [
    { key: "nav.home", href: "#home" },
    { key: "nav.services", href: "#services" },
    { key: "nav.about", href: "#about" },
    { key: "nav.contact", href: "#contact" },
  ]

  const serviceLinks = [
    { key: "services.visa.title", href: "#visa-services" },
    { key: "services.education.title", href: "#education-services" },
    { key: "services.transfer.title", href: "#transfer-services" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl font-serif">P</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-card-foreground font-serif">{t("company.name")}</h3>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {language === "fa"
                ? "ارائه‌دهنده خدمات تخصصی ویزا، تحصیل و حواله ارزی به روسیه با بیش از ده سال تجربه و تخصص"
                : "Поставщик специализированных услуг по визам, образованию и денежным переводам в Россию с более чем десятилетним опытом и экспертизой"}
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`text-muted-foreground ${social.color} transition-colors duration-300 hover:scale-110 transform`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-6 font-serif">دسترسی سریع</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-6 font-serif">{t("footer.services")}</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-6 font-serif">{t("footer.contact")}</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact) => (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    className="flex items-center space-x-3 space-x-reverse text-muted-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground/70">{contact.label}</div>
                      <div className="text-sm">{contact.value}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center md:text-right">{t("footer.copyright")}</div>

            {/* Additional Links */}
            <div className="flex space-x-6 space-x-reverse text-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                {language === "fa" ? "حریم خصوصی" : "Конфиденциальность"}
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                {language === "fa" ? "شرایط استفاده" : "Условия использования"}
              </a>
              <a href="#sitemap" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                {language === "fa" ? "نقشه سایت" : "Карта сайта"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
