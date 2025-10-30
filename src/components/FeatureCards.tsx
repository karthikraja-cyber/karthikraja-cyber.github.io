import { Crown, BookOpen, Globe } from 'lucide-react'

export function FeatureCards() {
  const features = [
    {
      icon: Crown,
      title: 'AI Game Master',
      description: 'Experience dynamic storytelling powered by an advanced AI that adapts to your choices'
    },
    {
      icon: BookOpen,
      title: 'Rich Storytelling',
      description: 'Explore immersive worlds with deep lore, unique characters, and endless possibilities'
    },
    {
      icon: Globe,
      title: 'Dynamic World',
      description: 'Create and evolve your hero through meaningful choices that the world will react and adapt to.'
    }
  ]

  return (
    <div className="flex flex-row justify-center items-center gap-8 max-w-6xl mx-auto">
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <div key={index} className="bg-black/50 backdrop-blur-md rounded-lg border border-[#3B82F6]/30 hover:border-[#22C55E]/50 hover:bg-black/40 transition-all duration-300 p-6 w-80 h-48 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 mb-4 bg-[#2563EB]/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#3B82F6]/40">
              <Icon className="w-8 h-8 text-[#60A5FA]" />
            </div>
            <h3 className="text-white text-xl mb-3 drop-shadow-lg">{feature.title}</h3>
            <p className="text-[#60A5FA] text-sm leading-relaxed drop-shadow-md">{feature.description}</p>
          </div>
        )
      })}
    </div>
  )
}