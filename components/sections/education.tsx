import { TimelineItem } from "@/components/ui/timeline-item"
import { education } from "@/data/education"

export function EducationSection() {
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
              <TimelineItem
                key={index}
                title={edu.degree}
                subtitle={edu.institution}
                period={edu.period}
                description={edu.description}
                achievements={edu.achievements}
                index={index}
                dotColor="purple"
                gpa={edu.gpa}
              />
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
