import { Badge } from "../ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white cyber-text-glow">
          <span className="text-cyan-400">&gt;</span> SYSTEM.ABOUT()
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="cyber-card p-6">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              <span className="text-cyan-400">&gt;</span> Neural interface specialist with 4+ years of experience in
              quantum computing and advanced web architectures. Passionate about bridging the gap between human
              consciousness and digital realms.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              <span className="text-cyan-400">&gt;</span> When not coding in the matrix, I explore quantum algorithms,
              contribute to open-source neural networks, and mentor the next generation of cyber-architects.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge className="cyber-badge bg-cyan-500/20 text-cyan-400 border-cyan-500/50">Quantum Solver</Badge>
              <Badge className="cyber-badge bg-blue-500/20 text-blue-400 border-blue-500/50">Neural Architect</Badge>
              <Badge className="cyber-badge bg-purple-500/20 text-purple-400 border-purple-500/50">
                Matrix Explorer
              </Badge>
              <Badge className="cyber-badge bg-green-500/20 text-green-400 border-green-500/50">Open Source</Badge>
            </div>
          </div>

          <div className="relative">
            <div className="cyber-hologram-frame">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Neural Interface"
                className="rounded-lg cyber-image-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
