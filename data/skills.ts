import type { SkillCategory } from "@/types"

export const skills: SkillCategory = {
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
