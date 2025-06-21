import { Background } from "./components/layout/background"
import { Navigation } from "./components/layout/navigation"
import { HeroSection } from "./components/sections/hero"
import { AboutSection } from "./components/sections/about"
import { SkillsSection } from "./components/sections/skills"
import { ProjectsSection } from "./components/sections/projects"
import { ExperienceSection } from "./components/sections/experience"
import { EducationSection } from "./components/sections/education"
import { ContactSection } from "./components/sections/contact"
import { useScrollSpy } from "./hooks/useScrollSpy"

function App() {
  const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"]
  const activeSection = useScrollSpy(sections)

  const skills = {
    frontend: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 75 },
      { name: "Angular", level: 70 },
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Express", level: 88 },
      { name: "FastAPI", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 82 },
    ],
    tools: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 78 },
      { name: "AWS", level: 75 },
      { name: "Vercel", level: 90 },
      { name: "Figma", level: 70 },
      { name: "VS Code", level: 98 },
    ],
  }

  const projects = [
    {
      title: "Neural Commerce Platform",
      description: "AI-powered e-commerce solution with quantum-encrypted transactions",
      tech: ["React", "Node.js", "PostgreSQL", "AI/ML"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Quantum Task Orchestrator",
      description: "Real-time collaborative workspace with neural network optimization",
      tech: ["Next.js", "WebRTC", "MongoDB", "TensorFlow"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Atmospheric Data Matrix",
      description: "Advanced weather analytics with predictive AI algorithms",
      tech: ["Vue.js", "Python", "FastAPI", "D3.js"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const experience = [
    {
      title: "Senior Quantum Developer",
      company: "NeuralTech Solutions",
      period: "2022 - Present",
      description:
        "Architecting next-generation applications using quantum computing principles and neural networks. Leading cross-dimensional development teams.",
    },
    {
      title: "Full Stack Architect",
      company: "CyberSpace Dynamics",
      period: "2020 - 2022",
      description:
        "Developed immersive digital experiences and holographic interfaces. Specialized in quantum-resistant security protocols.",
    },
    {
      title: "Interface Designer",
      company: "Digital Nexus Hub",
      period: "2019 - 2020",
      description:
        "Created responsive neural interfaces and collaborated with AI systems to implement adaptive user experiences.",
    },
  ]

  const education = [
    {
      degree: "Master of Quantum Computing",
      institution: "Neo-Stanford Institute",
      period: "2017 - 2019",
      description:
        "Advanced studies in quantum algorithms and neural network optimization. Thesis on multi-dimensional data processing.",
      achievements: ["Quantum Excellence Award", "Neural Research Fellow", "Holographic Honor Society"],
      gpa: "3.8/4.0",
    },
    {
      degree: "Bachelor of Cybernetic Sciences",
      institution: "Digital Berkeley Academy",
      period: "2013 - 2017",
      description:
        "Foundation in quantum mechanics, neural networks, and advanced computational theory. Active in cyber-security competitions.",
      achievements: ["Magna Cum Laude", "Quantum Programming Team", "Cyber Defense League"],
      gpa: "3.9/4.0",
    },
    {
      degree: "Neural Interface Certification",
      institution: "Matrix Academy",
      period: "2019",
      description: "Intensive program covering brain-computer interfaces and quantum-neural hybrid systems.",
      achievements: ["Top Neural Graduate", "Interface Excellence", "Quantum Mentor"],
      gpa: null,
    },
  ]

  return (
    <div className="min-h-screen bg-cyber-dark relative overflow-x-hidden">
      <Background />
      <Navigation activeSection={activeSection} />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experience={experience} />
        <EducationSection education={education} />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-cyan-500/30 bg-cyber-dark/80 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            <span className="text-cyan-400">&copy;</span> 2024 JOHN.DOE | NEURAL.ARCHITECTURE | QUANTUM.POWERED
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
