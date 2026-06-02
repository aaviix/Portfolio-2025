import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="container-custom section-spacing flex flex-col justify-center min-h-[90vh]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground text-lg mb-2 font-medium">Hello, I'm</p>
              <h1 className="heading-xl mb-4">Avanish Singh</h1>
              <h2 className="heading-md text-muted-foreground">AI Engineer</h2>
            </div>
            <p className="body-lg text-muted-foreground max-w-md">
              Building production-grade generative AI systems — RAG pipelines, LLM applications, and applied machine learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/#contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-muted rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-muted rounded-full opacity-50"></div>
            <div className="relative z-10 aspect-square bg-muted rounded-2xl overflow-hidden border border-border">
              <Image
                src="/placeholder.jpeg?height=600&width=600"
                alt="Avanish Singh"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a href="#about" className="animate-bounce">
            <ArrowRight className="h-10 w-10 rotate-90 text-muted-foreground" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container-custom section-spacing">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="heading-lg mb-6 relative">
              About
              <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">01</span>
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="body-lg mb-6">
              I'm a final-year AI student at Technische Hochschule Deggendorf (Grade: 1.7), with hands-on industry experience shipping production generative AI systems.
            </p>
            <p className="body-lg mb-6">
              At Swisscom, I built a GPT-4o RAG pipeline that reduced hallucinations by 40% and a real-time voice-to-avatar assistant with sub-400 ms latency. I'm currently contributing to AI-assisted research tooling at Medizinische Hochschule Hannover, and previously worked as an ML Engineer at KOgenie, where I deployed predictive models that improved forecasting accuracy by 25%.
            </p>
            <p className="body-lg mb-10">
              I'm looking for a full-time AI Engineer role — particularly in LLM applications, RAG architecture, or applied ML for real-world products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container-custom section-spacing">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="heading-lg mb-6 relative">
              Experience
              <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">02</span>
            </h2>
          </div>
          <div className="md:col-span-2 space-y-12">

            {/* MHH */}
            <div className="border-l-2 border-border pl-8 relative">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-foreground"></div>
              <div className="flex flex-wrap gap-4 items-center mb-1">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> May 2025 – Present
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Hannover, Germany
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">Student Research Assistant</h3>
              <p className="text-primary font-medium mb-3">Medizinische Hochschule Hannover (MHH)</p>
              <ul className="space-y-2 text-muted-foreground list-none">
                <li>Developed software tooling to streamline data workflows for the U-WaTCH pediatric pulmonology research project.</li>
                <li>Collaborated with Prof. Dr. Christine Happle and Frank Mueller on interdisciplinary research across programming, data entry, and application development.</li>
              </ul>
            </div>

            {/* Swisscom */}
            <div className="border-l-2 border-border pl-8 relative">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-foreground"></div>
              <div className="flex flex-wrap gap-4 items-center mb-1">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> Mar 2025 – Aug 2025
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Deggendorf, Germany
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">AI Engineer — Academic Partnership</h3>
              <p className="text-primary font-medium mb-3">Swisscom</p>
              <ul className="space-y-2 text-muted-foreground list-none">
                <li>Built a GPT-4o RAG pipeline (LangChain + pgvector) that reduced hallucinations by 40% compared to Swisscom's baseline FAQ bot.</li>
                <li>Prototyped a voice-enabled 3D customer service avatar achieving &lt;400 ms speech-to-render latency using WebRTC and Unreal Engine MetaHuman.</li>
                <li>Deployed Dockerised FastAPI and Next.js microservices with CI/CD via GitHub Actions and Supabase Edge Functions.</li>
              </ul>
            </div>

            {/* KOgenie */}
            <div className="border-l-2 border-border pl-8 relative">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-foreground"></div>
              <div className="flex flex-wrap gap-4 items-center mb-1">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> Aug 2024 – Feb 2025
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> New Delhi, India
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">Machine Learning Engineer</h3>
              <p className="text-primary font-medium mb-3">KOgenie E-solutions</p>
              <ul className="space-y-2 text-muted-foreground list-none">
                <li>Designed and deployed predictive models (Random Forest, Neural Networks) that improved forecasting accuracy by 25%.</li>
                <li>Built automated Python/SQL data pipelines, reducing processing time by 40% and operational costs by 15%.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Featured Projects
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">03</span>
          </h2>
          <Link href="/projects" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
            View All Projects
          </Link>
        </div>

        <div className="grid gap-24">
          {[
            {
              num: "01",
              title: "GenAI 3D Avatar — Swisscom",
              description:
                "Voice-to-avatar customer service assistant for Swisscom's Digital CX team. GPT-4o RAG pipeline (LangChain + pgvector) reduced hallucinations by 40%. Real-time lip-sync via Unreal Engine MetaHuman over WebRTC achieved sub-400 ms latency, autonomously handling 78% of Tier-1 queries.",
              tags: ["GPT-4o", "LangChain", "pgvector", "FastAPI", "Next.js 14", "WebRTC", "Unreal Engine", "Docker"],
            },
            {
              num: "02",
              title: "Emotion Detection — LSTM from Scratch",
              description:
                "End-to-end NLP pipeline classifying 20K+ tweets into six emotion categories. Built a deep LSTM with embedding layer, stacked LSTMs, and dropout regularisation from scratch — achieving 0.92 F1-score. Validated with confusion matrices and t-SNE embedding visualisations.",
              tags: ["Python", "PyTorch", "NLP", "LSTM", "Scikit-learn", "Pandas", "Matplotlib"],
            },
            {
              num: "03",
              title: "AdversEco — AI Ad Creation SaaS",
              description:
                "SaaS platform that automates digital ad creation using OpenAI generative models, with OAuth-integrated direct publishing to Instagram, LinkedIn, Twitter, and Facebook. Built with real-time scheduling and a Next.js frontend.",
              tags: ["OpenAI API", "Next.js", "Node.js", "OAuth 2.0", "REST APIs", "Heroku"],
            },
          ].map((project, i) => (
            <div key={project.num} className="group">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                <div className={i % 2 === 1 ? "md:col-start-2" : ""}>
                  <span className="text-8xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors">
                    {project.num}
                  </span>
                  <h3 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                    {project.title}
                  </h3>
                  <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="outline" size="lg" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link href="/projects">View Details</Link>
                  </Button>
                </div>
                <div className={`overflow-hidden rounded-lg ${i % 2 === 1 ? "md:col-start-1" : ""}`}>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                    <Image
                      src="/placeholder.svg?height=270&width=480"
                      alt={project.title}
                      width={480}
                      height={270}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container-custom section-spacing">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="heading-lg mb-6 relative">
              Skills
              <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">04</span>
            </h2>
          </div>
          <div className="md:col-span-2 space-y-10">
            {[
              {
                category: "AI & Machine Learning",
                skills: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "RAG", "LLMs", "NLP", "Deep Learning", "OpenCV"],
              },
              {
                category: "Engineering & Infrastructure",
                skills: ["FastAPI", "Docker", "PostgreSQL", "Redis", "AWS", "GitHub Actions", "CI/CD", "Linux", "Supabase"],
              },
              {
                category: "Application Development",
                skills: ["React", "Next.js", "TypeScript", "Node.js", "REST APIs", "WebRTC"],
              },
            ].map((group) => (
              <div key={group.category}>
                <h3 className="text-lg font-semibold text-muted-foreground mb-3 uppercase tracking-wider">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 border border-border rounded-md text-base hover:border-foreground transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container-custom section-spacing">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="heading-lg mb-6 relative">
              Education
              <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">05</span>
            </h2>
          </div>
          <div className="md:col-span-2 space-y-10">
            <div className="border-l-2 border-border pl-8 relative">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-foreground"></div>
              <div className="flex flex-wrap gap-4 items-center mb-1">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> Oct 2022 – Present
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Deggendorf, Germany
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">B.Sc. Artificial Intelligence</h3>
              <p className="text-primary font-medium mb-2">Technische Hochschule Deggendorf</p>
              <p className="text-muted-foreground">Grade: 1.7 (German scale) · Python, Data Science, NLP, Machine Learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container-custom section-spacing">
        <h2 className="heading-lg mb-16 relative text-center">
          Get In Touch
          <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 left-1/2 -translate-x-1/2 opacity-80">
            06
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-2xl leading-relaxed mb-10">
              I'm actively looking for full-time AI Engineer roles. If you're working on interesting problems with LLMs, RAG, or applied ML — let's talk.
            </p>
            <div className="flex flex-col gap-6">
              <a href="mailto:singhavanish8642@gmail.com" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">singhavanish8642@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/aaviix/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">linkedin.com/in/aaviix</span>
              </a>
              <a href="https://github.com/aaviix" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">github.com/aaviix</span>
              </a>
              <div className="flex items-center gap-4 text-xl text-muted-foreground">
                <MapPin className="h-6 w-6" />
                <span>Deggendorf, Germany · Open to relocation</span>
              </div>
            </div>
          </div>
          <div>
            <form className="flex flex-col gap-8">
              <div>
                <label htmlFor="name" className="block text-lg mb-2 font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg mb-2 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
                ></textarea>
              </div>
              <div>
                <Button size="lg" className="text-lg px-8 w-full md:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
