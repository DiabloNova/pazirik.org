"use client"

import { Moon, Sun, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"

export function ThemeLanguageToggle() {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent/20"
      >
        {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        <span className="sr-only">Toggle theme</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={toggleLanguage}
        className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent/20"
      >
        <Globe className="h-4 w-4" />
        <span className="sr-only">Toggle language</span>
      </Button>

      <div className="text-xs text-muted-foreground text-center">{language.toUpperCase()}</div>
    </div>
  )
}
