'use client'

import { useState } from 'react'
import backgroundImage from 'figma:asset/95c2ce36a1c255a867cf69175d90a66d2fc8ab8a.png'

interface LandingPageProps {
  onLogin: () => void
}

export function LandingPage({ onLogin }: LandingPageProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = () => {
    setIsLoading(true)
    setTimeout(() => {
      onLogin()
      setIsLoading(false)
    }, 1500)
  }

  const features = [
    { title: 'AI Game Master', description: 'Dynamic storytelling powered by AI', icon: '👑' },
    { title: 'Rich Storytelling', description: 'Immersive worlds and characters', icon: '📚' },
    { title: 'Epic Adventures', description: 'Create and evolve your hero', icon: '⚔️' },
    { title: 'Fantasy Worlds', description: 'Explore mystical realms', icon: '🏰' },
    { title: 'Instant Play', description: 'Start adventures immediately', icon: '⚡' },
    { title: 'Create Campaign', description: 'Begin your journey today', icon: '▶️', isAction: true }
  ]

  return (
    <div className="min-h-screen relative">
      {/* Castle Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        {/* Main Content */}
        <main className="px-8 w-full">
          {/* Feature Cards */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`
                    bg-[#1E40AF]/40 backdrop-blur-sm border border-[#3B82F6]/20 rounded-lg p-6
                    hover:bg-[#15803D]/50 transition-all duration-300 cursor-pointer
                    ${feature.isAction ? 'ring-2 ring-[#22C55E]/60' : ''}
                  `}
                  onClick={feature.isAction ? handleSignIn : undefined}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl text-black mb-2">{feature.title}</h3>
                    <p className="text-black text-sm mb-4">{feature.description}</p>
                    
                    {feature.isAction && (
                      <button
                        onClick={handleSignIn}
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-[#2563EB] to-[#22C55E] hover:from-[#3B82F6] hover:to-[#4ADE80] text-white py-2 px-4 rounded transition-all duration-300"
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Starting...</span>
                          </div>
                        ) : (
                          'Begin Adventure'
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 pb-16">
            <p className="text-black mb-6">Ready to start your epic journey?</p>
            <button
              onClick={handleSignIn}
              className="bg-gradient-to-r from-[#2563EB] to-[#22C55E] hover:from-[#3B82F6] hover:to-[#4ADE80] text-white py-3 px-8 rounded-lg text-lg transition-all duration-300"
            >
              🚀 Continue with Google
            </button>
            <p className="text-xs text-black mt-2">
              This is a demo - clicking will simulate Google Sign-In
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}