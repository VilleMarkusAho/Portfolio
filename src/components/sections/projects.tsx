import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  live: string
  image: string
}

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white cyber-text-glow">
          <span className="text-cyan-400">&gt;</span> PROJECT.ARCHIVE()
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="cyber-card overflow-hidden hover:cyber-card-glow transition-all duration-500 hover:-translate-y-3 group bg-cyber-dark/50 border-cyan-500/30"
              style={{ animationDelay: `${index * 200}ms` }}
            >
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
                    <Badge
                      key={tech}
                      className="cyber-badge text-xs hover:scale-105 transition-transform duration-200 bg-cyan-500/20 text-cyan-400 border-cyan-500/50"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="cyber-button-outline border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:scale-105 transition-all duration-200"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      SOURCE
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="cyber-button bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 hover:scale-105 transition-all duration-200"
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      DEPLOY
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
