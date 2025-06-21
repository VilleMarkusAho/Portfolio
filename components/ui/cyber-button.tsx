import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CyberButtonProps {
  children: React.ReactNode
  variant?: "default" | "outline"
  size?: "sm" | "default" | "lg"
  className?: string
  onClick?: () => void
  asChild?: boolean
}

export function CyberButton({
  children,
  variant = "default",
  size = "default",
  className,
  ...props
}: CyberButtonProps) {
  const baseClasses = "hover:scale-105 transition-all duration-200"

  const variantClasses = {
    default:
      "cyber-button bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0",
    outline: "cyber-button-outline border-cyan-500 text-cyan-400 hover:bg-cyan-500/10",
  }

  return (
    <Button
      variant={variant === "outline" ? "outline" : "default"}
      size={size}
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Button>
  )
}
