import type React from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CyberBadgeProps {
  children: React.ReactNode
  variant?: "cyan" | "blue" | "purple" | "green"
  className?: string
}

export function CyberBadge({ children, variant = "cyan", className }: CyberBadgeProps) {
  const variantClasses = {
    cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/50",
    blue: "bg-blue-500/20 text-blue-400 border-blue-500/50",
    purple: "bg-purple-500/20 text-purple-400 border-purple-500/50",
    green: "bg-green-500/20 text-green-400 border-green-500/50",
  }

  return <Badge className={cn("cyber-badge", variantClasses[variant], className)}>{children}</Badge>
}
