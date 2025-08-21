"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "fa" | "ru"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  fa: {
    // Navigation
    "nav.home": "خانه",
    "nav.services": "خدمات",
    "nav.about": "درباره ما",
    "nav.contact": "تماس با ما",

    // Promotional Banner
    "banner.text": "مشاوره تخصصی رایگان با پازیریک",

    // Company
    "company.name": "راشا گستر پازیریک",

    // Header Slider
    "slider.visa.title": "دریافت انواع ویزای روسیه",
    "slider.visa.description": "خدمات کامل ویزای روسیه با بهترین قیمت",
    "slider.education.title": "تحصیل در روسیه",
    "slider.education.description": "راهنمایی کامل برای تحصیل در بهترین دانشگاه‌های روسیه",
    "slider.transfer.title": "ارسال حواله ارزی به روسیه",
    "slider.transfer.description": "انتقال سریع و امن پول به روسیه",

    // Services
    "services.title": "خدمات ما",
    "services.visa.title": "دریافت انواع ویزای روسیه",
    "services.visa.description": "ارائه خدمات کامل ویزای توریستی، تجاری و تحصیلی روسیه",
    "services.education.title": "تحصیل در روسیه",
    "services.education.description": "راهنمایی و مشاوره برای ادامه تحصیل در دانشگاه‌های معتبر روسیه",
    "services.transfer.title": "ارسال حواله ارزی به روسیه",
    "services.transfer.description": "انتقال سریع و امن پول با بهترین نرخ ارز",

    // Special Offers
    "offers.title": "پیشنهادات ویژه",
    "offers.visa_discount.title": "تخفیف ویژه ویزای توریستی",
    "offers.visa_discount.description": "۲۰٪ تخفیف برای درخواست ویزای توریستی روسیه تا پایان ماه",
    "offers.education_consultation.title": "مشاوره رایگان تحصیل",
    "offers.education_consultation.description": "مشاوره کامل و رایگان برای انتخاب رشته و دانشگاه در روسیه",
    "offers.transfer_bonus.title": "بونوس حواله ارزی",
    "offers.transfer_bonus.description": "نرخ ویژه و کمیسیون صفر برای اولین حواله ارزی شما",
    "offers.fast_visa.title": "ویزای فوری",
    "offers.fast_visa.description": "دریافت ویزای روسیه در کمتر از ۴۸ ساعت با خدمات فوری ما",
    "offers.group_discount.title": "تخفیف گروهی",
    "offers.group_discount.description": "تخفیف تا ۳۰٪ برای درخواست گروهی ویزا (بیش از ۵ نفر)",
    "offers.student_package.title": "پکیج کامل دانشجویی",
    "offers.student_package.description": "ویزا + اقامت + بیمه + راهنمایی کامل با قیمت ویژه دانشجویان",

    // Why Pazirik
    "why.title": "چرا پازیریک بهترین انتخاب است؟",
    "why.expertise": "تخصص و تجربه بالا",
    "why.support": "پشتیبانی ۲۴ ساعته",
    "why.reliability": "قابلیت اعتماد بالا",
    "why.speed": "سرعت در ارائه خدمات",

    // Common
    "button.learn_more": "اطلاعات بیشتر",
    "button.contact": "تماس با ما",
    "button.get_started": "شروع کنید",

    // Footer
    "footer.contact": "اطلاعات تماس",
    "footer.services": "خدمات",
    "footer.about": "درباره ما",
    "footer.copyright": "© ۲۰۲۵ راشا گستر پازیریک. تمامی حقوق محفوظ است.",
  },
  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.services": "Услуги",
    "nav.about": "О нас",
    "nav.contact": "Контакты",

    // Promotional Banner
    "banner.text": "Бесплатная специализированная консультация с Пазирик",

    // Company
    "company.name": "Раша Гостар Пазирик",

    // Header Slider
    "slider.visa.title": "Получение различных типов российских виз",
    "slider.visa.description": "Полный спектр визовых услуг по лучшим ценам",
    "slider.education.title": "Обучение в России",
    "slider.education.description": "Полное руководство по обучению в лучших российских университетах",
    "slider.transfer.title": "Денежные переводы в Россию",
    "slider.transfer.description": "Быстрые и безопасные денежные переводы в Россию",

    // Services
    "services.title": "Наши услуги",
    "services.visa.title": "Получение различных типов российских виз",
    "services.visa.description": "Полный спектр услуг по туристическим, деловым и учебным визам в Россию",
    "services.education.title": "Обучение в России",
    "services.education.description": "Консультации и помощь в поступлении в престижные российские университеты",
    "services.transfer.title": "Денежные переводы в Россию",
    "services.transfer.description": "Быстрые и безопасные переводы по лучшему курсу",

    // Special Offers
    "offers.title": "Специальные предложения",
    "offers.visa_discount.title": "Скидка на туристическую визу",
    "offers.visa_discount.description": "20% скидка на оформление туристической визы в Россию до конца месяца",
    "offers.education_consultation.title": "Бесплатная консультация по образованию",
    "offers.education_consultation.description":
      "Полная бесплатная консультация по выбору специальности и университета в России",
    "offers.transfer_bonus.title": "Бонус денежного перевода",
    "offers.transfer_bonus.description": "Специальный курс и нулевая комиссия за ваш первый денежный перевод",
    "offers.fast_visa.title": "Срочная виза",
    "offers.fast_visa.description": "Получение российской визы менее чем за 48 часов с нашими срочными услугами",
    "offers.group_discount.title": "Групповая скидка",
    "offers.group_discount.description": "Скидка до 30% при групповой подаче на визу (более 5 человек)",
    "offers.student_package.title": "Полный студенческий пакет",
    "offers.student_package.description":
      "Виза + проживание + страховка + полное сопровождение по специальной цене для студентов",

    // Why Pazirik
    "why.title": "Почему Пазирик - лучший выбор?",
    "why.expertise": "Высокая экспертиза и опыт",
    "why.support": "Круглосуточная поддержка",
    "why.reliability": "Высокая надежность",
    "why.speed": "Скорость предоставления услуг",

    // Common
    "button.learn_more": "Подробнее",
    "button.contact": "Связаться с нами",
    "button.get_started": "Начать",

    // Footer
    "footer.contact": "Контактная информация",
    "footer.services": "Услуги",
    "footer.about": "О нас",
    "footer.copyright": "© 2025 Раша Гостар Пазирик. Все права защищены.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fa")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute("dir", language === "fa" ? "rtl" : "ltr")
    document.documentElement.setAttribute("lang", language)
    localStorage.setItem("language", language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fa" ? "ru" : "fa"))
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
