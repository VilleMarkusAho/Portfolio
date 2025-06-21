import { CyberCard } from "@/components/ui/cyber-card"
import { CyberButton } from "@/components/ui/cyber-button"
import { CyberBadge } from "@/components/ui/cyber-badge"
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import { projects } from "@/data/projects"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white cyber-text-glow">
          <span className="text-cyan-400">&gt;</span> PROJECT.ARCHIVE()
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <CyberCard key={index} className="overflow-hidden group" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/20 transition-colors duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="group-hover:text-cyan-400 transition-colors duration-300 text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <CyberBadge
                      key={tech}
                      className="text-xs hover:scale-105 transition-transform duration-200"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </CyberBadge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <CyberButton variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      SOURCE
                    </a>
                  </CyberButton>
                  <CyberButton size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      DEPLOY
                    </a>
                  </CyberButton>
                </div>
              </CardContent>
            </CyberCard>
          ))}
        </div>
      </div>
    </section>
  )
}
