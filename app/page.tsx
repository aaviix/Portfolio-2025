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
              <h2 className="heading-md text-muted-foreground">Machine Learning Engineer & Generative AI Specialist</h2>
            </div>
            <p className="body-lg text-muted-foreground max-w-md">
              Machine Learning professional with 5 years of experience in data analytics and AI, expert in model development, RAG techniques, and building scalable generative AI systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/#contact">Contact Me</Link>
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
              Machine Learning professional with 5 years of experience in data analytics and AI specialization, expert in machine learning model development and RAG techniques.
            </p>
            <p className="body-lg mb-6">
              Key achievements include developing a generative AI model that improved accuracy by 25%, and integrating advanced data analytics solutions that increased efficiency by 30%. Currently pursuing a Bachelor of Artificial Intelligence at Technische Hochschule Deggendorf (Grade: 1.7).
            </p>
            <p className="body-lg mb-10">
              My mission is to continue exploring and redefining the intersection where technology meets real-world impact — leveraging AI to build systems that solve complex, meaningful problems.
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
              <div className="flex flex-wrap gap-2 items-center mb-1">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> 05/2025 – Present
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Hannover, Germany
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">Student Research Assistant</h3>
              <p className="text-primary font-medium mb-3">Medizinische Hochschule Hannover (MHH)</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Contributing to the U-WaTCH project, a pediatric pulmonology and allergology research initiative at University Medical Center Hannover.</li>
                <li>Handling data entry, programming tasks, and assisting in application development to streamline research workflows.</li>
                <li>Collaborating with Prof. Dr. Christine Happle, Frank Mueller, and the interdisciplinary team.</li>
              </ul>
            </div>

            {/* Swisscom */}
            <div className="border-l-2 border-border pl-8 relative">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-foreground"></div>
              <div className="flex flex-wrap gap-2 items-center mb-1">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> 03/2025 – 08/2025
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Deggendorf, Germany
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">AI Project – Academic Partnership</h3>
              <p className="text-primary font-medium mb-3">Swisscom</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Prototyped a voice-enabled 3D generative-AI assistant achieving &lt;400 ms speech-to-avatar latency.</li>
                <li>Built a RAG pipeline (GPT-4o + LangChain + pgvector) that cut hallucinations 40% vs. baseline FAQ bot.</li>
                <li>Integrated real-time lip-sync with Unreal Engine MetaHuman, WebRTC streaming, and Web Speech API.</li>
              </ul>
            </div>

            {/* KOgenie */}
            <div className="border-l-2 border-border pl-8 relative">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-foreground"></div>
              <div className="flex flex-wrap gap-2 items-center mb-1">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> 08/2024 – 02/2025
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> New Delhi, India
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">Machine Learning Engineer</h3>
              <p className="text-primary font-medium mb-3">KOgenie E-solutions</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Modeled and deployed AI-driven solutions, reducing operational costs by 15%.</li>
                <li>Improved predictive models (Random Forest, Neural Networks) that increased forecasting accuracy by 25%.</li>
                <li>Implemented and automated data pipelines using Python & SQL, reducing data processing time by 40%.</li>
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
              title: "Generative-AI 3D Avatar – Swisscom",
              description:
                "Voice-enabled 3D generative-AI customer-service assistant achieving <400 ms speech-to-avatar latency, autonomously resolving 78% of Tier-1 support queries using GPT-4o and MetaHuman.",
              tags: ["Next.js 14", "FastAPI", "GPT-4o", "LangChain", "pgvector", "WebRTC", "Unreal Engine"],
            },
            {
              num: "02",
              title: "AdversEco – AI-Powered Ad SaaS",
              description:
                "AI-driven SaaS platform automating digital advertisement creation with OpenAI generative models, OAuth-integrated social media publishing (Instagram, LinkedIn, Twitter, Facebook), and real-time scheduling.",
              tags: ["Next.js", "JavaScript", "OpenAI API", "Heroku", "OAuth", "REST APIs"],
            },
            {
              num: "03",
              title: "Emotion Detection – LSTM from Scratch",
              description:
                "End-to-end LSTM model classifying tweets into six emotions (joy, sadness, anger, fear, love, surprise), achieving 92% test accuracy with t-SNE embedding visualizations on 20K+ tweets.",
              tags: ["Python", "PyTorch", "NLP", "LSTM", "Scikit-learn", "Matplotlib"],
            },
          ].map((project) => (
            <div key={project.num} className="group">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
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
                    <Link href="/projects">View Project</Link>
                  </Button>
                </div>
                <div className="overflow-hidden rounded-lg">
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
                skills: ["Generative AI", "RAG", "LangChain", "LLMs", "Deep Learning", "NLP", "TensorFlow", "PyTorch", "Scikit-learn", "MLOps", "OpenCV", "EmbeddChain"],
              },
              {
                category: "Programming",
                skills: ["Python", "JavaScript", "TypeScript", "Ruby on Rails", "Java", "Rust", "React", "Next.js", "Node.js", "Flask", "FastAPI", "VueJS"],
              },
              {
                category: "Cloud & DevOps",
                skills: ["Docker", "Kubernetes", "AWS", "Azure", "Vercel", "Heroku", "GitHub Actions", "CI/CD", "Linux"],
              },
              {
                category: "Databases",
                skills: ["PostgreSQL", "MongoDB", "Supabase", "Redis", "GraphQL", "SQL", "Prisma", "SQLAlchemy"],
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
              <div className="flex flex-wrap gap-2 items-center mb-1">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> 10/2022 – Present
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Deggendorf, Germany
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">Bachelor of Artificial Intelligence</h3>
              <p className="text-primary font-medium mb-2">Technische Hochschule Deggendorf</p>
              <p className="text-muted-foreground">Grade: 1.7 · Python Programming, Data Science, NLP, Machine Learning</p>
            </div>
            <div className="border-l-2 border-border pl-8 relative">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-foreground"></div>
              <div className="flex flex-wrap gap-2 items-center mb-1">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> 03/2018 – 03/2020
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> New Delhi, India
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">High School Diploma</h3>
              <p className="text-primary font-medium mb-2">Amrita Vidyalayam</p>
              <p className="text-muted-foreground">Grade: 1.5 · Physics, Chemistry, Mathematics, Computer Science</p>
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
              I'm always open to new opportunities and collaborations. Feel free to reach out!
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
                <span>Deggendorf, Germany</span>
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
