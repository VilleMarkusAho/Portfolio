import { CyberCard } from "@/components/ui/cyber-card"
import { CyberButton } from "@/components/ui/cyber-button"
import { CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white cyber-text-glow">
          <span className="text-cyan-400">&gt;</span> ESTABLISH.CONNECTION()
        </h2>

        <p className="text-xl text-gray-300 mb-12">
          Ready to interface with quantum projects and neural collaborations. Let's sync our digital consciousness.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <CyberCard glowColor="cyan" className="text-center hover:cyber-card-glow transition-all duration-300">
            <CardContent className="pt-6">
              <Mail className="h-8 w-8 text-cyan-400 mx-auto mb-4 cyber-icon-glow" />
              <h3 className="font-semibold mb-2 text-white">NEURAL.MAIL</h3>
              <p className="text-gray-400">john.doe@quantum.net</p>
            </CardContent>
          </CyberCard>

          <CyberCard glowColor="blue" className="text-center hover:cyber-card-glow transition-all duration-300">
            <CardContent className="pt-6">
              <Linkedin className="h-8 w-8 text-blue-400 mx-auto mb-4 cyber-icon-glow" />
              <h3 className="font-semibold mb-2 text-white">NEURAL.LINK</h3>
              <p className="text-gray-400">linkedin.com/in/johndoe</p>
            </CardContent>
          </CyberCard>

          <CyberCard glowColor="purple" className="text-center hover:cyber-card-glow transition-all duration-300">
            <CardContent className="pt-6">
              <Github className="h-8 w-8 text-purple-400 mx-auto mb-4 cyber-icon-glow" />
              <h3 className="font-semibold mb-2 text-white">CODE.MATRIX</h3>
              <p className="text-gray-400">github.com/johndoe</p>
            </CardContent>
          </CyberCard>
        </div>

        <CyberButton size="lg" asChild>
          <a href="mailto:john.doe@quantum.net">
            <Mail className="h-5 w-5 mr-2" />
            INITIATE TRANSMISSION
          </a>
        </CyberButton>
      </div>
    </section>
  )
}
