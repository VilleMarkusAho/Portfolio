import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
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
          <Card className="cyber-card text-center bg-cyber-dark/50 border-cyan-500/30 hover:cyber-card-glow transition-all duration-300">
            <CardContent className="pt-6">
              <Mail className="h-8 w-8 text-cyan-400 mx-auto mb-4 cyber-icon-glow" />
              <h3 className="font-semibold mb-2 text-white">NEURAL.MAIL</h3>
              <p className="text-gray-400">john.doe@quantum.net</p>
            </CardContent>
          </Card>

          <Card className="cyber-card text-center bg-cyber-dark/50 border-blue-500/30 hover:cyber-card-glow transition-all duration-300">
            <CardContent className="pt-6">
              <Linkedin className="h-8 w-8 text-blue-400 mx-auto mb-4 cyber-icon-glow" />
              <h3 className="font-semibold mb-2 text-white">NEURAL.LINK</h3>
              <p className="text-gray-400">linkedin.com/in/johndoe</p>
            </CardContent>
          </Card>

          <Card className="cyber-card text-center bg-cyber-dark/50 border-purple-500/30 hover:cyber-card-glow transition-all duration-300">
            <CardContent className="pt-6">
              <Github className="h-8 w-8 text-purple-400 mx-auto mb-4 cyber-icon-glow" />
              <h3 className="font-semibold mb-2 text-white">CODE.MATRIX</h3>
              <p className="text-gray-400">github.com/johndoe</p>
            </CardContent>
          </Card>
        </div>

        <Button
          size="lg"
          asChild
          className="cyber-button bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
        >
          <a href="mailto:john.doe@quantum.net">
            <Mail className="h-5 w-5 mr-2" />
            INITIATE TRANSMISSION
          </a>
        </Button>
      </div>
    </section>
  )
}
