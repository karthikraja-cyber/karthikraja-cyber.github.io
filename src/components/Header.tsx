import { Badge } from './ui/badge'
import { Avatar, AvatarFallback } from './ui/avatar'

export function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-[#1E40AF]/80 to-[#15803D]/80 backdrop-blur-sm border-b border-[#3B82F6]/30">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#22C55E] rounded-lg flex items-center justify-center">
            <span className="text-white text-xl">🎲</span>
          </div>
          <div>
            <h1 className="text-white text-xl">WorldArchitect.AI</h1>
            <p className="text-[#60A5FA] text-sm">Campaign Dashboard</p>
          </div>
        </div>

        {/* Center Badge */}
        <Badge variant="outline" className="bg-[#1E40AF]/50 text-[#60A5FA] border-[#2563EB]/50">
          🌟 Fantasy
        </Badge>

        {/* Profile Section */}
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-white">Epic Adventurer</p>
            <p className="text-[#60A5FA] text-sm">adventurer@worldarchitect.ai</p>
          </div>
          <Avatar className="w-10 h-10">
            <AvatarFallback className="bg-[#2563EB] text-white">EA</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}