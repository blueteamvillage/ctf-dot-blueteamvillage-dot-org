"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, Eye, Edit, FileText } from "lucide-react"

const defaultContent = {
  hero: `# BTV CTF - DEF CON 33

## Access Everywhere • Defend Everything

Join us for an intense cybersecurity competition focused on defensive strategies, incident response, and blue team operations.

**Event Details:**
- **Date:** August 8-10, 2025
- **Location:** Blue Team Village, DEF CON 33
- **Format:** Team-based (1-4 members)
- **Duration:** 48 hours`,

  challenges: `# Challenge Categories

## Incident Response
Analyze security incidents, contain threats, and develop response strategies.
- **Difficulty:** Medium
- **Challenges:** 8

## Digital Forensics  
Investigate digital evidence, recover artifacts, and piece together attack timelines.
- **Difficulty:** Hard
- **Challenges:** 6

## Threat Hunting
Proactively search for threats, analyze IOCs, and identify advanced persistent threats.
- **Difficulty:** Hard  
- **Challenges:** 5

## Network Defense
Monitor network traffic, detect anomalies, and implement defensive measures.
- **Difficulty:** Medium
- **Challenges:** 7

## Log Analysis
Parse and analyze various log sources to identify security events and patterns.
- **Difficulty:** Easy
- **Challenges:** 10

## Malware Analysis
Reverse engineer malware samples and understand attack techniques.
- **Difficulty:** Hard
- **Challenges:** 4`,

  rules: `# Rules & Guidelines

## Competition Rules
- No attacking other teams or the competition infrastructure
- No sharing flags or solutions with other teams  
- Respect all participants and organizers
- Follow DEF CON code of conduct

## Team Formation
- Teams can have 1-4 members maximum
- Solo participation is encouraged and welcome
- Team registration required before competition starts
- All skill levels welcome - beginners encouraged!

## Timing & Schedule
- Competition runs for 48 hours straight
- Challenges released in waves throughout the event
- Scoreboard updates in real-time
- Final submissions accepted until closing ceremony

## Scoring & Prizes
- Points awarded based on challenge difficulty
- Dynamic scoring - points decrease as more teams solve
- Prizes for top 3 teams and special categories
- Recognition certificates for all participants`,
}

export function ContentEditor() {
  const [content, setContent] = useState(defaultContent)
  const [activeTab, setActiveTab] = useState("hero")
  const [isPreview, setIsPreview] = useState(false)

  const handleSave = () => {
    // In a real implementation, this would save to a database or file system
    console.log("Saving content:", content)
    alert("Content saved successfully!")
  }

  const handleContentChange = (section: string, value: string) => {
    setContent((prev) => ({
      ...prev,
      [section]: value,
    }))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Button
            variant={isPreview ? "outline" : "default"}
            onClick={() => setIsPreview(false)}
            className="bg-cyan-500 hover:bg-cyan-600"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
          <Button
            variant={isPreview ? "default" : "outline"}
            onClick={() => setIsPreview(true)}
            className="bg-purple-500 hover:bg-purple-600"
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
        </div>

        <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 bg-gray-900 gap-2">
          <TabsTrigger value="hero" className="data-[state=active]:bg-cyan-500 text-xs md:text-sm">
            <FileText className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            <span className="hidden sm:inline">Hero Section</span>
            <span className="sm:hidden">Hero</span>
          </TabsTrigger>
          <TabsTrigger value="challenges" className="data-[state=active]:bg-purple-500 text-xs md:text-sm">
            <FileText className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            <span className="hidden sm:inline">Challenges</span>
            <span className="sm:hidden">Challenges</span>
          </TabsTrigger>
          <TabsTrigger value="rules" className="data-[state=active]:bg-green-500 text-xs md:text-sm">
            <FileText className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            Rules
          </TabsTrigger>
        </TabsList>

        {Object.entries(content).map(([section, sectionContent]) => (
          <TabsContent key={section} value={section}>
            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white capitalize">
                  {section.replace(/([A-Z])/g, " $1").trim()} Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isPreview ? (
                  <div className="bg-gray-800 rounded-lg p-4 min-h-[400px]">
                    <div className="prose prose-invert max-w-none">
                      {sectionContent.split("\n").map((line, index) => {
                        if (line.startsWith("# ")) {
                          return (
                            <h1 key={index} className="text-3xl font-bold text-cyan-300 mb-4">
                              {line.slice(2)}
                            </h1>
                          )
                        }
                        if (line.startsWith("## ")) {
                          return (
                            <h2 key={index} className="text-2xl font-semibold text-purple-300 mb-3 mt-6">
                              {line.slice(3)}
                            </h2>
                          )
                        }
                        if (line.startsWith("- ")) {
                          return (
                            <li key={index} className="text-gray-300 ml-4">
                              {line.slice(2)}
                            </li>
                          )
                        }
                        if (line.startsWith("**") && line.endsWith("**")) {
                          return (
                            <p key={index} className="text-white font-semibold mb-2">
                              {line.slice(2, -2)}
                            </p>
                          )
                        }
                        if (line.trim() === "") {
                          return <br key={index} />
                        }
                        return (
                          <p key={index} className="text-gray-300 mb-2">
                            {line}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                ) : (
                  <textarea
                    value={sectionContent}
                    onChange={(e) => handleContentChange(section, e.target.value)}
                    className="w-full h-96 bg-gray-800 text-white p-4 rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none font-mono text-sm resize-none"
                    placeholder={`Enter ${section} content in Markdown format...`}
                  />
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="bg-gray-900/50 border-yellow-500/30">
        <CardHeader>
          <CardTitle className="text-yellow-300">Markdown Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="text-white font-semibold mb-2">Headers</h4>
              <code className="text-gray-300 block mb-1"># Large Header</code>
              <code className="text-gray-300 block mb-3">## Medium Header</code>

              <h4 className="text-white font-semibold mb-2">Text Formatting</h4>
              <code className="text-gray-300 block mb-1">**Bold Text**</code>
              <code className="text-gray-300 block">*Italic Text*</code>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Lists</h4>
              <code className="text-gray-300 block mb-1">- Bullet point</code>
              <code className="text-gray-300 block mb-3">1. Numbered item</code>

              <h4 className="text-white font-semibold mb-2">Links</h4>
              <code className="text-gray-300 block">[Link Text](https://example.com)</code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
