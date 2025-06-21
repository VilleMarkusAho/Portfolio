"use client"

import { useState, useEffect } from "react"

export function useSkillsAnimation() {
  const [skillsInView, setSkillsInView] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === "skills") {
            setSkillsInView(true)
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
  }, [])

  const animateSkill = (skillName: string, level: number, delay = 0) => {
    if (skillsInView) {
      setTimeout(() => {
        setAnimatedSkills((prev) => ({
          ...prev,
          [skillName]: level,
        }))
      }, delay)
    }
  }

  return { skillsInView, animatedSkills, animateSkill }
}
