import type React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CyberCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: "cyan" | "blue" | "purple" | "green"
}

export function CyberCard({ children, className, glowColor = "cyan" }: CyberCardProps) {
  const glowClasses = {
    cyan: "border-cyan-500/30 hover:cyber-card-glow",
    blue: "border-blue-500/30 hover:border-blue-500/60",
    purple: "border-purple-500/30 hover:border-purple-500/60",
    green: "border-green-500/30 hover:border-green-500/60",
  }

  return (
    <Card
      className={cn(
        "cyber-card bg-cyber-dark/50 transition-all duration-500 hover:-translate-y-2",
        glowClasses[glowColor],
        className,
      )}
    >
      {children}
    </Card>
  )
}
