"use client"

import { useState } from "react"
import { Terminal, Menu, X } from "lucide-react"
import { scrollToSection } from "@/utils/navigation"

interface NavigationProps {
  activeSection: string
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"]

  const handleNavClick = (item: string) => {
    scrollToSection(item.toLowerCase())
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-cyber-dark/80 backdrop-blur-md border-b border-cyan-500/30 z-50 cyber-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-cyan-400 cyber-text-glow">
            <Terminal className="inline-block w-6 h-6 mr-2" />
            PORTFOLIO.EXE
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 hover:cyber-text-glow ${
                  activeSection === item.toLowerCase() ? "text-cyan-400 cyber-text-glow" : "text-gray-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button className="md:hidden text-cyan-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-cyber-dark/90 border-t border-cyan-500/30">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 w-full text-left transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
