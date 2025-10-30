import { Button } from "./ui/button";
import { ArrowLeft, Lock, Trophy, MapPin } from "lucide-react";
import mapImage from "figma:asset/ec28f364c58eb03e7e2071924ecd6596c3b9e080.png";

interface IntermediateMapProps {
  onSelectLocation: (level: number) => void;
  completedLevels: number[];
  onBack: () => void;
}

export function IntermediateMap({ onSelectLocation, completedLevels, onBack }: IntermediateMapProps) {
  const locations = [
    {
      id: 1,
      name: "Castlemania",
      description: "CSS Selectors & Properties",
      icon: "🏰",
      position: { top: "62%", left: "12%" },
      color: "from-amber-600 to-orange-600",
      bgColor: "bg-amber-900/80",
      borderColor: "border-amber-500/70",
    },
    {
      id: 2,
      name: "Haunted Forest",
      description: "CSS Layout (Display & Position)",
      icon: "🌲",
      position: { top: "15%", left: "15%" },
      color: "from-teal-700 to-cyan-800",
      bgColor: "bg-teal-900/80",
      borderColor: "border-teal-500/70",
    },
    {
      id: 3,
      name: "Dragon's Cave",
      description: "Visual Elements (Borders, Shadows, Gradients)",
      icon: "🐉",
      position: { top: "22%", left: "42%" },
      color: "from-gray-600 to-slate-700",
      bgColor: "bg-gray-800/80",
      borderColor: "border-gray-500/70",
    },
    {
      id: 4,
      name: "Princess Wooman's Castle",
      description: "CSS Animations & Transitions",
      icon: "👸",
      position: { top: "58%", left: "40%" },
      color: "from-pink-600 to-purple-600",
      bgColor: "bg-pink-900/80",
      borderColor: "border-pink-500/70",
    },
    {
      id: 5,
      name: "Volcano",
      description: "Responsive Design & Media Queries",
      icon: "🌋",
      position: { top: "20%", left: "72%" },
      color: "from-red-600 to-orange-700",
      bgColor: "bg-red-900/80",
      borderColor: "border-red-500/70",
    },
    {
      id: 6,
      name: "Shipwrek",
      description: "CSS Grid & Flexbox - Final Battle!",
      icon: "⛵",
      position: { top: "58%", left: "72%" },
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-900/80",
      borderColor: "border-blue-500/70",
    },
  ];

  return (
    <div 
      className="min-h-screen p-6"
      style={{
        background: 'linear-gradient(to bottom, #8B7355 0%, #D2B48C 50%, #F5DEB3 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto pt-20">
        <Button
          onClick={onBack}
          className="mb-6 bg-cyan-600 hover:bg-cyan-700 text-white"
          style={{ fontFamily: 'Source Code Pro, monospace' }}
        >
          <ArrowLeft className="mr-2" /> Back to Storyline
        </Button>

        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border-2 border-amber-600/50">
          <h1 className="text-5xl text-amber-300 mb-6 text-center" style={{ fontFamily: 'Source Code Pro, monospace' }}>
            Intermediate Map
          </h1>
          <p className="text-xl text-white text-center mb-8" style={{ fontFamily: 'Source Code Pro, monospace' }}>
            Choose your path wisely. Each location presents a new challenge!
          </p>

          {/* Map with clickable locations */}
          <div className="relative w-full max-w-5xl mx-auto mb-8">
            <img 
              src={mapImage} 
              alt="Intermediate Map" 
              className="w-full rounded-lg border-4 border-amber-600/50 shadow-2xl"
            />
            
            {/* Clickable location markers */}
            {locations.map((location) => {
              const isCompleted = completedLevels.includes(location.id);
              const isLocked = location.id > 1 && !completedLevels.includes(location.id - 1);

              return (
                <button
                  key={location.id}
                  onClick={() => !isLocked && onSelectLocation(location.id)}
                  disabled={isLocked}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isLocked ? 'opacity-50 cursor-not-allowed' : 'hover:scale-125 cursor-pointer animate-pulse'
                  }`}
                  style={{
                    top: location.position.top,
                    left: location.position.left,
                  }}
                  title={isLocked ? "Complete previous location first" : location.name}
                >
                  <div className="relative">
                    <MapPin 
                      className={`h-12 w-12 ${
                        isCompleted ? 'text-yellow-400' : isLocked ? 'text-gray-500' : 'text-red-600'
                      }`}
                      fill={isCompleted ? '#facc15' : isLocked ? '#6b7280' : '#dc2626'}
                    />
                    {isCompleted && (
                      <Trophy className="absolute -top-2 -right-2 h-6 w-6 text-yellow-300" />
                    )}
                    {isLocked && (
                      <Lock className="absolute -top-1 -right-1 h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Location Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => {
              const isCompleted = completedLevels.includes(location.id);
              const isLocked = location.id > 1 && !completedLevels.includes(location.id - 1);

              return (
                <div
                  key={location.id}
                  className={`${location.bgColor} rounded-xl p-6 border-2 ${location.borderColor} relative overflow-hidden`}
                >
                  {isCompleted && (
                    <div className="absolute top-4 right-4">
                      <Trophy className="h-8 w-8 text-yellow-400" />
                    </div>
                  )}
                  
                  {isLocked && (
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center rounded-xl z-10">
                      <div className="text-center">
                        <Lock className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-300 text-lg" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                          Complete previous location
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="text-6xl mb-4">{location.icon}</div>
                  <h2 className="text-3xl text-white mb-2" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                    {location.name}
                  </h2>
                  <p className="text-white text-lg mb-6" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                    {location.description}
                  </p>

                  <Button
                    onClick={() => onSelectLocation(location.id)}
                    disabled={isLocked}
                    className={`w-full py-6 text-xl bg-gradient-to-r ${location.color} hover:opacity-90 text-white shadow-lg ${
                      isLocked ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    style={{ fontFamily: 'Source Code Pro, monospace' }}
                  >
                    {isCompleted ? "🔄 Replay" : "▶️ Start"}
                  </Button>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-blue-900/30 border border-blue-500/30 rounded-lg p-6">
            <h2 className="text-2xl text-blue-300 mb-3" style={{ fontFamily: 'Source Code Pro, monospace' }}>💡 Quest Tips:</h2>
            <ul className="text-white space-y-2 list-disc list-inside" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              <li>Complete locations in order to progress through the story</li>
              <li>Each location teaches crucial intermediate CSS skills</li>
              <li>The final location (Shipwrek) is where you'll rescue the princess!</li>
              <li>Take your time and master each concept</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
