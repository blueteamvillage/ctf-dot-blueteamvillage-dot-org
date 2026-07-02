"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, BookOpen, Target } from "lucide-react"

interface TabData {
  id: string
  title: string
  icon?: React.ComponentType<{ className?: string }>
  color?: string
}

interface MobileTabsProps {
  tabs: TabData[]
  defaultTab?: string
  className?: string
  children?: React.ReactNode
}

export function MobileTabs({ tabs, defaultTab = "overview", className = "", children }: MobileTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0]

  return (
    <div className={`w-full ${className}`}>
      {/* Mobile Dropdown */}
      <div className="md:hidden mb-6">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg p-4 flex items-center justify-between text-left"
          >
            <div className="flex items-center">
              {activeTabData.icon && (
                <activeTabData.icon className="w-5 h-5 mr-3 text-gray-300" />
              )}
              <span className="text-gray-300 font-medium">{activeTabData.title}</span>
            </div>
            <ChevronDown 
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`} 
            />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-gray-900/95 border border-gray-700 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setIsDropdownOpen(false)
                  }}
                  className={`w-full p-4 flex items-center text-left hover:bg-gray-800/50 transition-colors ${
                    activeTab === tab.id ? 'bg-gray-800/50 text-white' : 'text-gray-300'
                  } ${tab.id === tabs[0].id ? 'rounded-t-lg' : ''} ${tab.id === tabs[tabs.length - 1].id ? 'rounded-b-lg' : ''}`}
                >
                  {tab.icon && (
                    <tab.icon className="w-5 h-5 mr-3" />
                  )}
                  <span className="font-medium">{tab.title}</span>
                  {activeTab === tab.id && (
                    <Badge className="ml-auto bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                      Active
                    </Badge>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Tabs */}
      <div className="hidden md:block">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 bg-gray-900/50 mb-8 gap-2">
            {tabs.map((tab) => (
              <TabsTrigger 
                key={tab.id}
                value={tab.id} 
                className={`data-[state=active]:bg-${tab.color || 'purple'}-500 text-gray-300 hover:text-white text-xs lg:text-sm`}
              >
                {tab.icon ? (
                  <tab.icon className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                ) : (
                  <BookOpen className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                )}
                <span className="hidden sm:inline">{tab.title}</span>
                <span className="sm:hidden">{tab.title.length > 10 ? tab.title.split(' ')[0] : tab.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Content */}
      <div className="md:hidden">
        {children}
      </div>
      
      <div className="hidden md:block">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {children}
        </Tabs>
      </div>
    </div>
  )
} 