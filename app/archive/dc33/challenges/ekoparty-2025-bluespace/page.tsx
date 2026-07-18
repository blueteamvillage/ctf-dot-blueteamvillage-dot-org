"use client"

import { useState } from "react"
import { Header } from "@/components/archive/dc33/header"
import { Footer } from "@/components/archive/dc33/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/archive/dc33/ui/card"
import { Badge } from "@/components/archive/dc33/ui/badge"
import { ekoPartyKillChains, OverviewContent, InstallationSteps } from "@/components/archive/dc33/ekoparty-tabs"
import { KillChainTabs, projectObsidianKillChains } from "@/components/archive/dc33/kill-chain-tabs"
import {
  Shield,
  Target,
  Users,
  Clock,
  ExternalLink,
  BookOpen,
  Trophy,
  Zap,
  AlertTriangle,
  Code,
  Terminal,
} from "lucide-react"
import Link from "next/link"

export default function EkopartyBluespacePage() {

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-linear-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-size-[50px_50px] animate-pulse" />

        {/* Glowing orbs */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-4">
              Ekoparty 2025 CTF
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              Ekoparty Bluespace
            </h1>
            {/* <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-6">Wazuh SIEM Challenge</h2> */}
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Immerse yourself in realistic security incidents that mirror real-world threats. Practice containment, analysis, and remediation techniques used by professional incident response teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-xs border border-blue-500/30 rounded-lg p-4">
              <Shield className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Wazuh SIEM</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-xs border border-cyan-500/30 rounded-lg p-4">
              <Clock className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Self-Paced</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-xs border border-green-500/30 rounded-lg p-4">
              <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">1-4 Members</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-xs border border-yellow-500/30 rounded-lg p-4">
              <Target className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Intermediate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 px-4 bg-linear-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          {/* Kill Chain Tabs */}
          <KillChainTabs killChains={ekoPartyKillChains} />

          {/* Introduction */}
          <Card className="bg-gray-900/50 border-blue-500/30 mb-16">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Ekoparty 2025 - Bluespace Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Welcome to the Bluespace challenge! Developed by BTV's Project Obsidian team, this CTF offers an immersive incident response exercise designed to challenge and engage participants of all skill levels. Dive into a detailed, realistic scenario that tests your ability to handle complex security incidents and sharpen your cyber defense skills.
              </p>

              <div className="bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-cyan-400 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-300 mb-2">ARM Mac Compatibility</h3>
                    <p className="text-gray-300">
                      This guide specifically addresses the challenges of running Wazuh on Apple Silicon Macs, 
                      including x86_64 emulation requirements and OpenSearch compatibility issues.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                By the end of this challenge, you'll have a fully functional Wazuh SIEM instance running 
                on your Mac, complete with pre-configured data and ready for security analysis.
              </p>
            </CardContent>
          </Card>

          {/* Installation Content */}
          <InstallationSteps />

          <OverviewContent>
            {/* What You'll Learn Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-blue-500/30 hover:border-blue-400/50 transition-colors">
                <CardHeader>
                  <Terminal className="w-12 h-12 text-blue-400 mb-4" />
                  <CardTitle className="text-blue-300">Docker Deployment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Master Docker deployment techniques for complex applications, including multi-container 
                    orchestration and volume management.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Docker Compose configuration</li>
                    <li>• Container orchestration</li>
                    <li>• Volume management</li>
                    <li>• ARM64 compatibility</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-cyan-500/30 hover:border-cyan-400/50 transition-colors">
                <CardHeader>
                  <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                  <CardTitle className="text-cyan-300">SIEM Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Learn to configure and customize Wazuh SIEM for your specific security monitoring needs.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• SSL certificate management</li>
                    <li>• User authentication setup</li>
                    <li>• Dashboard configuration</li>
                    <li>• Data ingestion setup</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-green-500/30 hover:border-green-400/50 transition-colors">
                <CardHeader>
                  <Code className="w-12 h-12 text-green-400 mb-4" />
                  <CardTitle className="text-green-300">Troubleshooting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Develop skills in diagnosing and resolving common deployment issues and configuration problems.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Permission troubleshooting</li>
                    <li>• Container health monitoring</li>
                    <li>• Log analysis</li>
                    <li>• Performance optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-yellow-500/30 hover:border-yellow-400/50 transition-colors">
                <CardHeader>
                  <Target className="w-12 h-12 text-yellow-400 mb-4" />
                  <CardTitle className="text-yellow-300">Security Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Practice using Wazuh for real-world security monitoring and incident response scenarios.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Log analysis techniques</li>
                    <li>• Threat detection rules</li>
                    <li>• Incident investigation</li>
                    <li>• Reporting and alerting</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </OverviewContent>
        </div>
      </section>

      <Footer />
    </div>
  )
}
