import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, Shield, AlertTriangle, ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-size-[50px_50px] animate-pulse" />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 sm:px-8 py-8">
        {/* BTV Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/btv-logo.png"
            alt="Blue Team Village Logo"
            width={120}
            height={120}
            className="rounded-lg shadow-lg opacity-80"
          />
        </div>

        {/* 404 Error Display */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-16 h-16 text-red-400 mr-4" />
            <h1 className="text-6xl md:text-8xl font-bold bg-linear-to-r from-red-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              404
            </h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Page Not Found
          </h2>
          
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Looks like this endpoint has been compromised or doesn&apos;t exist in our network. 
            The page you&apos;re looking for has either been moved, deleted, or never existed.
          </p>
        </div>

        {/* Error Details */}
        <div className="bg-gray-900/50 backdrop-blur-xs border border-red-500/30 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-red-400 mr-2" />
            <h3 className="text-lg font-semibold text-red-300">Security Alert</h3>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            <span className="text-cyan-400 font-mono">ERROR 404:</span> Requested resource not found
          </p>
          <p className="text-gray-400 text-xs">
            Status: <span className="text-red-400">404 Not Found</span> | 
            Protocol: <span className="text-cyan-400">HTTPS</span> | 
            Timestamp: <span className="text-purple-400">{new Date().toISOString()}</span>
          </p>
        </div>

        {/* Navigation Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
          <Link href="/" className="block">
            <div className="bg-gray-900/50 backdrop-blur-xs border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-400/50 transition-colors">
              <Home className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Home Base</p>
              <p className="text-xs text-gray-400">Return to CTF</p>
            </div>
          </Link>
          
          <Link href="/challenges" className="block">
            <div className="bg-gray-900/50 backdrop-blur-xs border border-purple-500/30 rounded-lg p-4 hover:border-purple-400/50 transition-colors">
              <Search className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Challenges</p>
              <p className="text-xs text-gray-400">Find CTFs</p>
            </div>
          </Link>
          
          <Link href="https://blueteamvillage.org" className="block">
            <div className="bg-gray-900/50 backdrop-blur-xs border border-green-500/30 rounded-lg p-4 hover:border-green-400/50 transition-colors">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">BTV Main</p>
              <p className="text-xs text-gray-400">Village HQ</p>
            </div>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <Link href="/">Go Home</Link>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
          >
            <Link href="/challenges">Explore Challenges</Link>
          </Button>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            &quot;Access Everywhere&quot; - DEF CON 33 Theme • Blue Team Village CTF
          </p>
        </div>
      </div>
    </div>
  )
} 