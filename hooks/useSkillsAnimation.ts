"use client"

import { useState, useEffect } from "react"
import type { SkillCategory } from "@/types"

export function useSkillsAnimation(skills: SkillCategory) {
  const [skillsInView, setSkillsInView] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === "skills") {
            setSkillsInView(true)
            Object.values(skills)
              .flat()
              .forEach((skill, index) => {
                setTimeout(() => {
                  setAnimatedSkills((prev) => ({
                    ...prev,
                    [skill.name]: skill.level,
                  }))
                }, index * 100)
              })
          }
        })
      },
      { threshold: 0.3 },
    )

    const skillsSection = document.getElementById("skills")
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => observer.disconnect()
  }, [skills])

  return { skillsInView, animatedSkills }
}
