"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { JSX } from "react/jsx-runtime"

const commands = ["help", "whoami", "experience", "education", "projects", "skills", "contact", "clear"]

const resumeData = {
  name: "Abdelrahman Elawadly",
  title: "Full Stack Developer",
  location: "Giza, Egypt",
  contact: {
    phone: "+20 1555180010",
    email: "abdelrahmanalawadly@gmail.com",
    linkedin: "linkedin.com/in/awadly",
    github: "github.com/awadly",
  },
  experience: [
    {
      role: "Full Stack Developer",
      company: "BTC Egypt Gold",
      location: "Cairo, Egypt",
      period: "Jun 2025 - Sep 2025",
      responsibilities: [
        "Developed and deployed full-stack applications using Docker, Docker Compose, and Nginx",
        "Implemented CI/CD pipelines with GitHub Actions and Google Cloud Platform (GCP)",
        "Worked with PostgreSQL and MySQL databases for high availability and performance",
      ],
    },
    {
      role: "Web Developer",
      company: "Whitman College, Communications Office",
      location: "Walla Walla, WA",
      period: "Sep 2021 – Dec 2022",
      responsibilities: [
        "Designed and developed webpages using Ingeniux software, HTML, CSS, and JS for 600k+ visitors",
        "Performed quality assurance checks ensuring accessibility and user experience",
        "Monitored live webpages and addressed user feedback promptly",
      ],
    },
    {
      role: "Accessible User Interface Developer",
      company: "Whitman College",
      location: "Walla Walla, WA",
      period: "Jun 2021 – Sep 2021",
      responsibilities: [
        "Designed live eye-tracking and body-tracking plug-in using C++, HTML, JS, Tobii eye-tracker",
        "Analyzed live data and user feedback using advanced tracking techniques",
        "Collaborated with CS department on course material and UI projects",
        "Presented research paper at 8th International Conference on Movement and Computing",
      ],
    },
  ],
  education: {
    institution: "Whitman College",
    degree: "Bachelor of Arts in Mathematics and Computer Science",
    location: "Walla Walla, WA, US",
    period: "Sep 2019 – May 2023",
    coursework:
      "Linear Algebra, Differential Equations, Data Structures, Combinatorics & Graph Theory, Algorithms Design and Analysis, Databases with Web Applications, Multivariable Calculus, Software Design",
  },
  projects: [
    {
      name: "NIST46",
      technologies: "VueJS, NodeJS, JavaScript, HTML, CSS, Vuetify, GitHub",
      period: "Jan 2023 – May 2023",
      description:
        "Collaborated with chemistry department to migrate old data windows application into modern VueJS website. Worked with backend team to display chemical reaction data using REST API.",
    },
    {
      name: "Stock Quantitative Analysis",
      technologies: "Python, Numpy, Pandas, Google Sheets, JavaScript",
      period: "Jan 2021 – Present",
      description:
        "Developed prediction models using Facebook Prophet Forecasting and data visualization. Utilized Markowitz models, correlation matrices, Sharpe and Sortino ratios for portfolio optimization.",
    },
  ],
  skills: {
    technical: [
      "Node",
      "React Native",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "Kubernetes",
      "Google Cloud Platform (GCP)",
      "Amazon Web Services (AWS)",
      "C/C++",
      "Python",
      "R",
      "SQL",
      "Git/GitHub",
      "Linux",
    ],
    interpersonal: ["Problem-solving", "Inclusive leadership", "Pattern-recognition", "Teamwork", "Project-management"],
    languages: ["Arabic (Native)", "English (Fluent)", "German (Intermediate)"],
  },
}

export default function TerminalProfile() {
  const [currentCommand, setCurrentCommand] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [output, setOutput] = useState<JSX.Element[]>([])

  useEffect(() => {
    // Initial boot sequence
    const bootSequence = [
      "Initializing terminal...",
      "Loading developer profile...",
      "Connection established.",
      "",
      "Welcome to Abdelrahman's Developer Terminal",
      'Type "help" to see available commands.',
      "",
    ]

    setOutput(
      bootSequence.map((line, i) => (
        <div key={i} className="text-primary terminal-glow">
          {line}
        </div>
      )),
    )
  }, [])

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    setCommandHistory((prev) => [...prev, cmd])

    const newOutput = [...output]
    newOutput.push(
      <div key={`cmd-${Date.now()}`} className="text-secondary">
        user@abdelrahman:~$ {cmd}
      </div>,
    )

    switch (trimmedCmd) {
      case "help":
        newOutput.push(
          <div key={`help-${Date.now()}`} className="text-primary mt-2">
            <div className="mb-2">Available commands:</div>
            {commands.map((command) => (
              <div key={command} className="ml-4">
                <span className="text-secondary">{command}</span> - {getCommandDescription(command)}
              </div>
            ))}
          </div>,
        )
        break

      case "whoami":
        newOutput.push(
          <div key={`whoami-${Date.now()}`} className="text-primary mt-2">
            <div className="text-2xl font-bold terminal-glow">{resumeData.name}</div>
            <div className="text-secondary text-lg">{resumeData.title}</div>
            <div className="text-muted-foreground">{resumeData.location}</div>
          </div>,
        )
        break

      case "experience":
        newOutput.push(
          <div key={`exp-${Date.now()}`} className="text-primary mt-2">
            <div className="text-xl font-bold mb-4 text-secondary">Work Experience</div>
            {resumeData.experience.map((job, i) => (
              <Card key={i} className="mb-4 p-4 bg-card border-border">
                <div className="text-lg font-semibold text-primary">{job.role}</div>
                <div className="text-secondary">
                  {job.company} | {job.location}
                </div>
                <div className="text-muted-foreground mb-2">{job.period}</div>
                <ul className="list-disc list-inside space-y-1">
                  {job.responsibilities.map((resp, j) => (
                    <li key={j} className="text-sm">
                      {resp}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>,
        )
        break

      case "education":
        newOutput.push(
          <div key={`edu-${Date.now()}`} className="text-primary mt-2">
            <div className="text-xl font-bold mb-4 text-secondary">Education</div>
            <Card className="p-4 bg-card border-border">
              <div className="text-lg font-semibold text-primary">{resumeData.education.degree}</div>
              <div className="text-secondary">{resumeData.education.institution}</div>
              <div className="text-muted-foreground mb-2">{resumeData.education.period}</div>
              <div className="text-sm">
                <span className="text-secondary">Selected Coursework: </span>
                {resumeData.education.coursework}
              </div>
            </Card>
          </div>,
        )
        break

      case "projects":
        newOutput.push(
          <div key={`proj-${Date.now()}`} className="text-primary mt-2">
            <div className="text-xl font-bold mb-4 text-secondary">Projects</div>
            {resumeData.projects.map((project, i) => (
              <Card key={i} className="mb-4 p-4 bg-card border-border">
                <div className="text-lg font-semibold text-primary">{project.name}</div>
                <div className="text-muted-foreground mb-2">{project.period}</div>
                <div className="mb-2">
                  {project.technologies.split(", ").map((tech) => (
                    <Badge key={tech} variant="secondary" className="mr-1 mb-1 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="text-sm">{project.description}</div>
              </Card>
            ))}
          </div>,
        )
        break

      case "skills":
        newOutput.push(
          <div key={`skills-${Date.now()}`} className="text-primary mt-2">
            <div className="text-xl font-bold mb-4 text-secondary">Skills</div>
            <div className="space-y-4">
              <div>
                <div className="text-lg font-semibold text-primary mb-2">Technical Skills</div>
                <div className="flex flex-wrap gap-1">
                  {resumeData.skills.technical.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-primary mb-2">Interpersonal Skills</div>
                <div className="flex flex-wrap gap-1">
                  {resumeData.skills.interpersonal.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-primary mb-2">Languages</div>
                <div className="flex flex-wrap gap-1">
                  {resumeData.skills.languages.map((lang) => (
                    <Badge key={lang} variant="outline" className="text-xs">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>,
        )
        break

      case "contact":
        newOutput.push(
          <div key={`contact-${Date.now()}`} className="text-primary mt-2">
            <div className="text-xl font-bold mb-4 text-secondary">Contact Information</div>
            <Card className="p-4 bg-card border-border">
              <div className="space-y-2">
                <div>
                  <span className="text-secondary">Email:</span> {resumeData.contact.email}
                </div>
                <div>
                  <span className="text-secondary">Phone:</span> {resumeData.contact.phone}
                </div>
                <div>
                  <span className="text-secondary">LinkedIn:</span> {resumeData.contact.linkedin}
                </div>
                <div>
                  <span className="text-secondary">GitHub:</span> {resumeData.contact.github}
                </div>
              </div>
            </Card>
          </div>,
        )
        break

      case "clear":
        setOutput([])
        setCurrentCommand("")
        return

      default:
        newOutput.push(
          <div key={`error-${Date.now()}`} className="text-destructive mt-2">
            Command not found: {cmd}. Type "help" for available commands.
          </div>,
        )
    }

    newOutput.push(<div key={`spacer-${Date.now()}`} className="mb-4"></div>)
    setOutput(newOutput)
    setCurrentCommand("")
  }

  const getCommandDescription = (command: string) => {
    const descriptions: Record<string, string> = {
      help: "Show available commands",
      whoami: "Display basic information",
      experience: "Show work experience",
      education: "Display education background",
      projects: "List projects and achievements",
      skills: "Show technical and soft skills",
      contact: "Display contact information",
      clear: "Clear the terminal screen",
    }
    return descriptions[command] || "Unknown command"
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(currentCommand)
    }
  }

  const handleCommandClick = (command: string) => {
    setCurrentCommand(command)
    executeCommand(command)
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-mono scan-lines">
      <div className="container mx-auto p-4 max-w-4xl">
        {/* Terminal Header */}
        <div className="mb-6 border border-border rounded-lg bg-card p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="ml-4 text-muted-foreground">Terminal - Abdelrahman's Profile</span>
          </div>
        </div>

        {/* Command Shortcuts */}
        <div className="mb-6 flex flex-wrap gap-2">
          {commands
            .filter((cmd) => cmd !== "clear")
            .map((command) => (
              <Button
                key={command}
                variant="outline"
                size="sm"
                onClick={() => handleCommandClick(command)}
                className="text-xs font-mono hover:bg-accent hover:text-accent-foreground"
              >
                {command}
              </Button>
            ))}
        </div>

        {/* Terminal Output */}
        <div className="mb-4 space-y-1">{output}</div>

        {/* Command Input */}
        <div className="flex items-center gap-2">
          <span className="text-secondary terminal-glow">user@abdelrahman:~$</span>
          <input
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-transparent border-none outline-none text-primary font-mono"
            placeholder="Type a command..."
            autoFocus
          />
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-muted-foreground text-sm">
          <div>
            System Status: <span className="text-primary">ONLINE</span>
          </div>
          <div>Last Updated: {new Date().toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  )
}
