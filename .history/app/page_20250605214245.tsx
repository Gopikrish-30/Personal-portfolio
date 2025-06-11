import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Download, Mail, Instagram, Github, Linkedin, Twitter, Award, ExternalLink } from "lucide-react"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { MobileNav } from "@/components/mobile-nav"
import { SmoothScrollNav } from "@/components/smooth-scroll-nav"

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Smooth Scroll Handler */}
      <SmoothScrollNav />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 md:px-12 border-b border-border">
        <div className="text-foreground font-semibold text-lg">Gopi M</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#certifications" className="text-muted-foreground hover:text-primary transition-colors">
            Certifications
          </a>
          <a href="#achievements" className="text-muted-foreground hover:text-primary transition-colors">
            Achievements
          </a>
          <a href="#contact">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Connect
            </Button>
          </a>
        </div>

        {/* Mobile Navigation */}
        <MobileNav />
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 mx-auto">
              <Image
                src="/profile.jpg?height=224&width=224"
                alt="Profile"
                width={224}
                height={224}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Greeting and Name */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <span className="text-xl sm:text-2xl">👋</span>
              <span className="text-base sm:text-lg">Hi</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground leading-tight">
              {"I'm "}
              <span className="text-primary">Gopi</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
              Data Science Student & Machine Learning Enthusiast
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <a href="#contact">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-3 rounded-full">
                <Mail className="w-4 h-4 mr-2" />
                {"Let's Connect"}
              </Button>
            </a>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-muted text-muted-foreground hover:bg-muted px-6 sm:px-8 py-3 rounded-full"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#about" className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground hover:text-primary transition-colors" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {
                  "I'm a passionate data science student with a deep interest in machine learning, deep learning, and large language models. I love uncovering insights from data and building intelligent solutions that make an impact."
                }
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                With hands-on experience in real-world datasets and AI tools, I turn complex problems into data-driven innovations.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {["Python", "Machine Learning", "LLMs", "Frontend", "Data Visualization", "UI/UX"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors"
              >
                <div className="h-40 sm:h-48 bg-gradient-to-br from-primary/20 to-accent/20">
                  <Image
                    src={`/placeholder.svg?height=192&width=384`}
                    alt={`Project ${project}`}
                    width={384}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Project {project}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base mb-4">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm"
                    >
                      View Live
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-muted text-muted-foreground hover:bg-muted text-xs sm:text-sm"
                    >
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center">
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Machine Learning with Python",
                issuer: "IBM",
                date: "2024",
                credentialId: "AWS-SAA-123456",
              },
              {
                title: "Generative AL with Large Language Models",
                issuer: "Deeplearning.Ai",
                date: "2025",
                credentialId: "GCP-PD-789012",
              },
              {
                title: "Statistics For Data Science",
                issuer: "Infosis",
                date: "2024",
                credentialId: "META-FE-345678",
              },
              {
                title: "Data ",
                issuer: "Microsoft",
                date: "2023",
                credentialId: "AZ-900-901234",
              },
              {
                title: "React Developer Certification",
                issuer: "React Training",
                date: "2022",
                credentialId: "REACT-567890",
              },
              {
                title: "Full Stack Web Development",
                issuer: "freeCodeCamp",
                date: "2022",
                credentialId: "FCC-123789",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-4 sm:p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground hover:text-primary cursor-pointer" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">{cert.title}</h3>
                <p className="text-primary font-medium text-sm sm:text-base mb-1 sm:mb-2">{cert.issuer}</p>
                <p className="text-muted-foreground text-xs sm:text-sm mb-1 sm:mb-2">Issued: {cert.date}</p>
                <p className="text-muted-foreground/70 text-xs">ID: {cert.credentialId}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center">
            Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Best Developer Award 2024",
                organization: "Tech Excellence Awards",
                date: "2024",
                description: "Recognized for outstanding contribution to web development and innovation",
                icon: "🏆",
              },
              {
                title: "Open Source Contributor",
                organization: "GitHub",
                date: "2023-2024",
                description: "Contributed to 50+ open source projects with 1000+ stars collectively",
                icon: "⭐",
              },
              {
                title: "Hackathon Winner",
                organization: "Global Dev Challenge",
                date: "2023",
                description: "First place in international hackathon with innovative AI solution",
                icon: "🥇",
              },
              {
                title: "Speaker at Tech Conference",
                organization: "DevCon 2023",
                date: "2023",
                description: "Delivered keynote on 'Future of Web Development' to 500+ attendees",
                icon: "🎤",
              },
              {
                title: "Published Technical Articles",
                organization: "Medium & Dev.to",
                date: "2022-2024",
                description: "Authored 25+ technical articles with 100K+ total views",
                icon: "📝",
              },
              {
                title: "Mentorship Program",
                organization: "Code for Good",
                date: "2022-2024",
                description: "Mentored 20+ junior developers in their career journey",
                icon: "👥",
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-4 sm:p-6 border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform">
                    {achievement.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">{achievement.title}</h3>
                    <p className="text-primary font-medium text-xs sm:text-sm mb-1">{achievement.organization}</p>
                    <p className="text-muted-foreground text-xs mb-2 sm:mb-3">{achievement.date}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8">Let's Connect</h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 px-4">
            I'm always open to discussing new opportunities and interesting projects.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-card rounded-full flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-colors group"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-card rounded-full flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-colors group"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary" />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-card rounded-full flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-colors group"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-card rounded-full flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-colors group"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary" />
            </a>
          </div>

          <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm sm:text-base text-center md:text-left">
            © 2024 Your Name. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
            >
              GitHub
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Theme Switcher */}
      <ThemeSwitcher />
    </div>
  )
}
