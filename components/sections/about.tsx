import { CyberCard } from "@/components/ui/cyber-card"
import { CyberBadge } from "@/components/ui/cyber-badge"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white cyber-text-glow">
          <span className="text-cyan-400">&gt;</span> SYSTEM.ABOUT()
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <CyberCard className="p-6">
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
              <CyberBadge variant="cyan">Quantum Solver</CyberBadge>
              <CyberBadge variant="blue">Neural Architect</CyberBadge>
              <CyberBadge variant="purple">Matrix Explorer</CyberBadge>
              <CyberBadge variant="green">Open Source</CyberBadge>
            </div>
          </CyberCard>

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
