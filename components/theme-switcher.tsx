"use client"

import { useState, useEffect } from "react"
import { Check, Palette, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const themes = [
  { name: "Dark", value: "dark", color: "#1e293b", description: "Classic dark theme" },
  { name: "Light", value: "light", color: "#f8fafc", description: "Clean light theme" },
  { name: "Green", value: "green", color: "#064e3b", description: "Nature inspired" },
  { name: "Blue", value: "blue", color: "#0c4a6e", description: "Ocean vibes" },
  { name: "Purple", value: "purple", color: "#4c1d95", description: "Royal elegance" },
]

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <Button className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-lg bg-card border border-border">
          <Palette className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
        </Button>
      </div>
    )
  }

  return (
    <>
      {/* Floating Theme Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        {/* Theme Options Panel */}
        {isOpen && (
          <div className="absolute bottom-12 sm:bottom-16 right-0 mb-2 w-64 sm:w-72 bg-card border border-border rounded-lg shadow-2xl p-3 sm:p-4 animate-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-xs sm:text-sm font-semibold text-foreground">Choose Theme</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-5 w-5 sm:h-6 sm:w-6 p-0 hover:bg-muted"
              >
                <X className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              </Button>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              {themes.map((t) => (
                <button
                  key={t.value}
                  className={`w-full flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg transition-colors hover:bg-muted ${
                    theme === t.value ? "bg-primary/10 border border-primary/20" : "border border-transparent"
                  }`}
                  onClick={() => {
                    setTheme(t.value)
                    // Keep the panel open for a moment to see the change
                    setTimeout(() => setIsOpen(false), 300)
                  }}
                >
                  <div
                    className="h-4 w-4 sm:h-5 sm:w-5 rounded-full border-2 border-border flex-shrink-0"
                    style={{ backgroundColor: t.color }}
                  />
                  <div className="flex-1 text-left min-w-0">
                    <div className="text-xs sm:text-sm font-medium text-foreground truncate">{t.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{t.description}</div>
                  </div>
                  {theme === t.value && <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />}
                </button>
              ))}
            </div>

            <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">Theme preference is saved automatically</p>
            </div>
          </div>
        )}

        {/* Floating Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-lg transition-all duration-200 ${
            isOpen
              ? "bg-primary text-primary-foreground scale-110"
              : "bg-card border border-border hover:bg-muted hover:scale-105"
          }`}
        >
          <Palette
            className={`h-4 w-4 sm:h-5 sm:w-5 transition-colors ${isOpen ? "text-primary-foreground" : "text-foreground"}`}
          />
        </Button>
      </div>

      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />}
    </>
  )
}
