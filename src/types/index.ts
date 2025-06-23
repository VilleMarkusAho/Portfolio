export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  frontend: Skill[]
  backend: Skill[]
  tools: Skill[]
}

export interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  live: string
  image: string
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  description: string
  achievements: string[]
  gpa: string | null
}

export interface MousePosition {
  x: number
  y: number
}
