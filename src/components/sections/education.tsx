import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"

interface EducationItem {
  degree: string
  institution: string
  period: string
  description: string
  achievements: string[]
  gpa: string | null
}

interface EducationSectionProps {
  education: EducationItem[]
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white cyber-text-glow">
          <span className="text-cyan-400">&gt;</span> EDUCATION.DATABASE()
        </h2>
        <p className="text-center text-gray-400 mb-16">Neural network training and quantum knowledge acquisition</p>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent cyber-timeline"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-cyber-dark shadow-lg z-10 cyber-pulse">
                  <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? "" : "md:text-right"}`}>
                  <Card className="cyber-card group hover:cyber-card-glow transition-all duration-500 hover:-translate-y-2 bg-cyber-dark/50 border-l-4 border-l-purple-500">
                    <CardHeader className="pb-3">
                      <div className="flex flex-col space-y-2">
                        <Badge
                          className={`cyber-badge w-fit text-xs font-medium bg-purple-500/20 text-purple-400 border-purple-500/50 ${index % 2 === 0 ? "" : "md:ml-auto"}`}
                        >
                          {edu.period}
                        </Badge>
                        <CardTitle className="text-xl group-hover:text-purple-400 transition-colors duration-300 text-white">
                          {edu.degree}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-purple-400">
                          {edu.institution}
                        </CardDescription>
                        {edu.gpa && (
                          <div className={`flex items-center gap-2 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                            <Badge className="cyber-badge text-xs bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
                              NEURAL.SCORE: {edu.gpa}
                            </Badge>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 leading-relaxed mb-4">{edu.description}</p>

                      {/* Achievement highlights */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                        {edu.achievements.map((achievement, achIndex) => (
                          <Badge
                            key={achIndex}
                            className="cyber-badge text-xs bg-blue-500/20 text-blue-400 border-blue-500/50"
                          >
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>

          {/* Timeline End */}
          <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 bottom-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full border-4 border-cyber-dark shadow-lg cyber-pulse">
            <div className="absolute inset-1 bg-cyber-dark rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
