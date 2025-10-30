import storylineImage from "figma:asset/6bda1c023087adcdaf9e56c1da73bdc4b7c3e69c.png";
import { Button } from "./ui/button";
import { Home } from "lucide-react";

interface IntermediateStorylineProps {
  onStart: () => void;
  onBack: () => void;
  characterName: string;
  setCharacterName: (name: string) => void;
}

export function IntermediateStoryline({ onStart, onBack, characterName, setCharacterName }: IntermediateStorylineProps) {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: 'linear-gradient(to bottom, #87CEEB 0%, #4682B4 50%, #2F4F4F 100%)',
      }}
    >
      <div className="max-w-5xl w-full">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border-2 border-cyan-500/50">
          <div className="text-center mb-8">
            <h1 className="text-5xl text-cyan-300 mb-6" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              Intermediate Storyline
            </h1>
          </div>

          <div className="mb-8">
            <img 
              src={storylineImage} 
              alt="Intermediate Storyline" 
              className="w-full max-w-3xl mx-auto rounded-lg border-4 border-cyan-500/50 shadow-2xl"
            />
          </div>

          <div className="bg-gradient-to-r from-teal-900/50 to-cyan-900/50 rounded-lg p-8 mb-8 border-l-4 border-cyan-500">
            <p className="text-white text-xl leading-relaxed mb-6" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              <em className="text-cyan-300">
                "On the other side of the fantasy world, No code man hears of the princess's kidnapping. He immediately knows that it was his arch nemesis, princess wooman who took her. It had been long since princess wooman as made an appearance in the kingdom, not since her last humiliating defeat. She had vowed to take revenge on code man but it had been almost a decade since. No code man sets out to rescue her but is unaware of the dangerous path ahead of him."
              </em>
            </p>
          </div>

          <div className="bg-blue-900/30 rounded-lg p-6 mb-8 border border-blue-500/30">
            <h2 className="text-2xl text-cyan-300 mb-4" style={{ fontFamily: 'Source Code Pro, monospace' }}>Your Quest:</h2>
            <p className="text-white text-lg mb-4" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              As No Code Man (also known as Code Man), you must journey through 6 dangerous locations to rescue the princess from Princess Wooman. Each location will test your knowledge of intermediate HTML and CSS!
            </p>
            <ul className="text-white space-y-2" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              <li>🏰 <strong>Castlemania:</strong> Master CSS Selectors & Properties</li>
              <li>🌲 <strong>Haunted Forest:</strong> Conquer CSS Layout (Display & Position)</li>
              <li>🐉 <strong>Dragon's Cave:</strong> Craft Visual Elements (Borders, Shadows, Gradients)</li>
              <li>👸 <strong>Princess Wooman's Castle:</strong> Command CSS Animations & Transitions</li>
              <li>🌋 <strong>Volcano:</strong> Navigate Responsive Design & Media Queries</li>
              <li>⛵ <strong>Shipwrek:</strong> Master CSS Grid & Flexbox to Rescue the Princess!</li>
            </ul>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter your hero name (or leave blank for 'Code Man')..."
              className="w-full px-6 py-4 bg-teal-900/50 border-2 border-cyan-500/50 rounded-lg text-white placeholder-gray-400 text-xl"
              style={{ fontFamily: 'Source Code Pro, monospace' }}
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  onStart();
                }
              }}
            />
            <Button
              className="w-full py-8 text-2xl bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white shadow-lg"
              onClick={onStart}
              style={{ fontFamily: 'Source Code Pro, monospace' }}
            >
              ⚔️ Begin Your Journey! ⚔️
            </Button>
            <Button
              className="w-full py-4 text-xl bg-gray-700 hover:bg-gray-600 text-white"
              onClick={onBack}
              style={{ fontFamily: 'Source Code Pro, monospace' }}
            >
              <Home className="mr-2" /> Return to Main Menu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
