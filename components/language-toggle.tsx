"use client"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface LanguageToggleProps {
  language: "en" | "sw"
  onLanguageChange: (language: "en" | "sw") => void
}

export function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  const toggleLanguage = () => {
    onLanguageChange(language === "en" ? "sw" : "en")
  }

  return (
    <Button onClick={toggleLanguage} variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
      <Globe className="h-4 w-4" />
      <span>{language === "en" ? "English" : "Kiswahili"}</span>
    </Button>
  )
}
