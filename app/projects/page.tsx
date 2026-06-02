import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const featuredProjects = [
  {
    id: 1,
    title: "Generative-AI 3D Avatar Assistant – Swisscom",
    description:
      "Voice-enabled 3D generative-AI customer-service assistant for Swisscom's Digital Customer-Experience unit. Achieves <400 ms speech-to-avatar latency and autonomously resolves 78% of Tier-1 support queries using a GPT-4o RAG pipeline with pgvector, MetaHuman lip-sync, and WebRTC streaming.",
    technologies: ["Next.js 14", "FastAPI", "GPT-4o", "LangChain", "pgvector", "Supabase", "WebRTC", "Web Speech API", "Unreal Engine MetaHuman", "Docker", "GitHub Actions"],
    image: "/placeholder.svg?height=600&width=800",
    type: "featured",
  },
  {
    id: 2,
    title: "AdversEco – AI-Powered Digital Ad Creation SaaS",
    description:
      "AI-driven SaaS platform that automates digital advertisement creation using OpenAI generative models. Features OAuth-integrated direct publishing to Instagram, LinkedIn, Twitter, and Facebook with real-time ad generation and scheduling via a Heroku-deployed backend.",
    technologies: ["Next.js", "JavaScript", "OpenAI API", "Heroku", "OAuth 2.0", "REST APIs", "Instagram API", "LinkedIn API"],
    image: "/placeholder.svg?height=600&width=800",
    type: "featured",
  },
]

const githubProjects = [
  {
    id: 3,
    title: "Social Media Platform (Ruby on Rails)",
    description:
      "Full-featured social networking application with user profiles, friend requests, posts, comments, likes, and real-time messaging via Action Cable with Redis. Includes Devise auth, CarrierWave uploads, and PostgreSQL data management.",
    technologies: ["Ruby on Rails", "PostgreSQL", "Redis", "Action Cable", "Devise", "CarrierWave", "Bootstrap", "jQuery"],
    githubUrl: "https://github.com/aaviix",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Emotion Detection in Tweets – LSTM from Scratch",
    description:
      "End-to-end LSTM model classifying 20K+ tweets into six emotions (joy, sadness, anger, fear, love, surprise). Achieves 92% test accuracy with full preprocessing pipeline, t-SNE embedding visualizations, and confusion matrix evaluation.",
    technologies: ["Python", "PyTorch", "NLP", "LSTM", "Scikit-learn", "Matplotlib", "Pandas", "NumPy"],
    githubUrl: "https://github.com/aaviix",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 5,
    title: "U-WaTCH Research Application – MHH",
    description:
      "Application development supporting the U-WaTCH pediatric pulmonology research project at Medizinische Hochschule Hannover. Streamlines data entry and workflow automation for the interdisciplinary research team.",
    technologies: ["Python", "Data Analytics", "Application Development", "Research Workflows"],
    githubUrl: "https://github.com/aaviix",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Projects</h1>
          <p className="body-lg text-muted-foreground">
            A showcase of my work in Generative AI, RAG systems, machine learning, and full-stack development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-24">
          <h2 className="heading-lg mb-10 relative">
            Featured Projects
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">01</span>
          </h2>

          <div className="grid gap-16 md:gap-24">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="group">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <span className="text-8xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <h2 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                      {project.title}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`overflow-hidden rounded-lg ${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ML & Engineering Projects */}
        <div>
          <h2 className="heading-lg mb-10 relative">
            ML & Engineering Projects
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">02</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
            Deep machine learning research, full-stack systems, and applied AI projects available on GitHub.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {githubProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span>View on GitHub</span>
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
