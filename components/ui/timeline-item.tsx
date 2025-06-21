import { CyberCard } from "./cyber-card"
import { CyberBadge } from "./cyber-badge"
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

interface TimelineItemProps {
  title: string
  subtitle: string
  period: string
  description: string
  achievements: string[]
  index: number
  dotColor?: "cyan" | "purple"
  gpa?: string | null
}

export function TimelineItem({
  title,
  subtitle,
  period,
  description,
  achievements,
  index,
  dotColor = "cyan",
  gpa,
}: TimelineItemProps) {
  const dotColorClasses = {
    cyan: "bg-cyan-500",
    purple: "bg-purple-500",
  }

  const borderColorClasses = {
    cyan: "border-l-cyan-500",
    purple: "border-l-purple-500",
  }

  return (
    <div
      className={`relative flex items-center ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col md:gap-8`}
    >
      {/* Timeline Dot */}
      <div
        className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 ${dotColorClasses[dotColor]} rounded-full border-4 border-cyber-dark shadow-lg z-10 cyber-pulse`}
      >
        <div className={`absolute inset-0 ${dotColorClasses[dotColor]} rounded-full animate-ping opacity-20`}></div>
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? "" : "md:text-right"}`}>
        <CyberCard className={`border-l-4 ${borderColorClasses[dotColor]}`}>
          <CardHeader className="pb-3">
            <div className="flex flex-col space-y-2">
              <CyberBadge
                variant={dotColor}
                className={`w-fit text-xs font-medium ${index % 2 === 0 ? "" : "md:ml-auto"}`}
              >
                {period}
              </CyberBadge>
              <CardTitle
                className={`text-xl group-hover:text-${dotColor}-400 transition-colors duration-300 text-white`}
              >
                {title}
              </CardTitle>
              <CardDescription className={`text-lg font-semibold text-${dotColor}-400`}>{subtitle}</CardDescription>
              {gpa && (
                <div className={`flex items-center gap-2 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                  <CyberBadge variant="cyan" className="text-xs">
                    NEURAL.SCORE: {gpa}
                  </CyberBadge>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 leading-relaxed mb-4">{description}</p>

            {/* Achievement highlights */}
            <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
              {achievements.map((achievement, achIndex) => (
                <CyberBadge key={achIndex} variant="blue" className="text-xs">
                  {achievement}
                </CyberBadge>
              ))}
            </div>
          </CardContent>
        </CyberCard>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block w-5/12"></div>
    </div>
  )
}
