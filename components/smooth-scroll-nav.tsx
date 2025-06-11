"use client"

import { useEffect } from "react"

export function SmoothScrollNav() {
  useEffect(() => {
    // Handle smooth scrolling for all navigation links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const href = target.getAttribute("href")
        if (href) {
          const element = document.querySelector(href)
          if (element) {
            const navbarHeight = 73 // Height of sticky navbar
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - navbarHeight

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }
        }
      }
    }

    // Add event listener to document
    document.addEventListener("click", handleClick)

    // Cleanup
    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return null
}
