"use client"

import { Button } from "../ui/button"
// import { Github, Linkedin, Mail, ChevronDown, Zap, Terminal } from "lucide-react"
import { Github, Mail, ChevronDown, Zap, Terminal } from "lucide-react"
import { scrollToSection } from "../../utils/navigation"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="cyber-hologram mb-8">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 cyber-text-glow">
            <span className="text-white">INITIALIZING</span>
            <br />
            <span className="text-cyan-400 typing-animation">Ville-Markus Aho</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 cyber-fade-in">
          <span className="text-cyan-400">&gt;</span> Full Stack Developer | IT Engineer
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="cyber-button bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0"
          >
            <Zap className="w-4 h-4 mr-2" />
            EXECUTE PROJECTS
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="cyber-button-outline border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
          >
            <Terminal className="w-4 h-4 mr-2" />
            ESTABLISH CONNECTION
          </Button>
        </div>

        <div className="flex justify-center space-x-8">
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:cyber-icon-glow">
            <Github className="h-8 w-8" />
          </a>
          {/*
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:cyber-icon-glow">
            <Linkedin className="h-8 w-8" />
          </a>
          */}
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:cyber-icon-glow">
            <Mail className="h-8 w-8" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-cyan-400 cyber-pulse" />
        </div>
      </div>
    </section>
  )
}
