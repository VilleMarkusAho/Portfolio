"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Code, Server, Cpu } from "lucide-react"
import { useSkillsAnimation } from "../../hooks/useSkillsAnimation"
import { useEffect } from "react"

interface Skill {
  name: string
  level: number
}

interface SkillsData {
  frontend: Skill[]
  backend: Skill[]
  tools: Skill[]
}

interface SkillsSectionProps {
  skills: SkillsData
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const { skillsInView, animatedSkills, animateSkill } = useSkillsAnimation()

  useEffect(() => {
    if (skillsInView) {
      Object.values(skills)
        .flat()
        .forEach((skill, index) => {
          animateSkill(skill.name, skill.level, index * 100)
        })
    }
  }, [skillsInView, skills, animateSkill])

  return (
    <section id="skills" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white cyber-text-glow">
          <span className="text-cyan-400">&gt;</span> NEURAL.CAPABILITIES()
        </h2>
        <p className="text-center text-gray-400 mb-12">Quantum-enhanced skill matrix and technological proficiencies</p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <Card className="cyber-card group hover:cyber-card-glow transition-all duration-500 hover:-translate-y-2 bg-cyber-dark/50 border-cyan-500/30">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 cyber-icon-glow">
                <Code className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">FRONTEND.SYS</CardTitle>
              <CardDescription className="text-gray-400">Neural interface construction protocols</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.frontend.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-300">{skill.name}</span>
                    <span className="text-sm text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden cyber-progress-bg">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000 ease-out cyber-progress-bar"
                      style={{
                        width: skillsInView ? `${animatedSkills[skill.name] || 0}%` : "0%",
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Backend Skills */}
          <Card className="cyber-card group hover:cyber-card-glow transition-all duration-500 hover:-translate-y-2 bg-cyber-dark/50 border-green-500/30">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 cyber-icon-glow">
                <Server className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">BACKEND.CORE</CardTitle>
              <CardDescription className="text-gray-400">Quantum server architecture systems</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.backend.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-300">{skill.name}</span>
                    <span className="text-sm text-green-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden cyber-progress-bg">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-teal-600 rounded-full transition-all duration-1000 ease-out cyber-progress-bar"
                      style={{
                        width: skillsInView ? `${animatedSkills[skill.name] || 0}%` : "0%",
                        transitionDelay: `${(index + skills.frontend.length) * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tools & Others */}
          <Card className="cyber-card group hover:cyber-card-glow transition-all duration-500 hover:-translate-y-2 bg-cyber-dark/50 border-purple-500/30">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 cyber-icon-glow">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">TOOLS.MATRIX</CardTitle>
              <CardDescription className="text-gray-400">Advanced development utilities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.tools.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-300">{skill.name}</span>
                    <span className="text-sm text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden cyber-progress-bg">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full transition-all duration-1000 ease-out cyber-progress-bar"
                      style={{
                        width: skillsInView ? `${animatedSkills[skill.name] || 0}%` : "0%",
                        transitionDelay: `${(index + skills.frontend.length + skills.backend.length) * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
