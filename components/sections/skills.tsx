import { CyberCard } from "@/components/ui/cyber-card"
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Code, Server, Cpu } from "lucide-react"
import { useSkillsAnimation } from "@/hooks/useSkillsAnimation"
import { skills } from "@/data/skills"

export function SkillsSection() {
  const { skillsInView, animatedSkills } = useSkillsAnimation(skills)

  const skillCategories = [
    {
      key: "frontend" as const,
      title: "FRONTEND.SYS",
      description: "Neural interface construction protocols",
      icon: Code,
      gradient: "from-cyan-500 to-blue-600",
      color: "cyan",
    },
    {
      key: "backend" as const,
      title: "BACKEND.CORE",
      description: "Quantum server architecture systems",
      icon: Server,
      gradient: "from-green-500 to-teal-600",
      color: "green",
    },
    {
      key: "tools" as const,
      title: "TOOLS.MATRIX",
      description: "Advanced development utilities",
      icon: Cpu,
      gradient: "from-purple-500 to-pink-600",
      color: "purple",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white cyber-text-glow">
          <span className="text-cyan-400">&gt;</span> NEURAL.CAPABILITIES()
        </h2>
        <p className="text-center text-gray-400 mb-12">Quantum-enhanced skill matrix and technological proficiencies</p>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <CyberCard key={category.key} glowColor={category.color as any}>
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 cyber-icon-glow`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">{category.title}</CardTitle>
                  <CardDescription className="text-gray-400">{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skills[category.key].map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-300">{skill.name}</span>
                        <span className={`text-sm text-${category.color}-400`}>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden cyber-progress-bg">
                        <div
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out cyber-progress-bar`}
                          style={{
                            width: skillsInView ? `${animatedSkills[skill.name] || 0}%` : "0%",
                            transitionDelay: `${(categoryIndex * skills[category.key].length + index) * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </CyberCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
