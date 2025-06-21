import { TimelineItem } from "@/components/ui/timeline-item"
import { experience } from "@/data/experience"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white cyber-text-glow">
          <span className="text-cyan-400">&gt;</span> EXPERIENCE.LOG()
        </h2>
        <p className="text-center text-gray-400 mb-16">Neural pathway progression and quantum achievements</p>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent cyber-timeline"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <TimelineItem
                key={index}
                title={job.title}
                subtitle={job.company}
                period={job.period}
                description={job.description}
                achievements={job.achievements}
                index={index}
                dotColor="cyan"
              />
            ))}
          </div>

          {/* Timeline End */}
          <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 bottom-0 w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full border-4 border-cyber-dark shadow-lg cyber-pulse">
            <div className="absolute inset-1 bg-cyber-dark rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
