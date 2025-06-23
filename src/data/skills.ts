import type { SkillCategory } from "@/types"

export const skills: SkillCategory = {
  frontend: [
    { name: "Angular", level: 90 },
    { name: "TypeScript", level: 98 },
    { name: "RxJS", level: 70},
    { name: "Chart.js", level: 80},
    { name: "Bootstrap", level: 85 },
    { name: "Tailwind CSS", level: 20 },
    { name: "React", level: 60 },
  ],
  backend: [
    { name: ".NET/C#", level: 99 },
    { name: "ASP.NET Core", level: 95 },
    { name: "REST API", level: 95 },
    { name: "Node.js", level: 80 },    
    { name: "Python", level: 50 },
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 80 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 70 },
    { name: "Azure", level: 50 },
    { name: "ChatGPT", level: 90 },
    { name: "GitHub Copilot", level: 88 },
    { name: "GitHub Actions", level: 60 },
    { name: "Jira", level: 75 },
    { name: "v0", level: 65 },
  ],
}
