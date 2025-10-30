import { Button } from "../ui/button";
import { ArrowLeft, Lock, Trophy } from "lucide-react";

interface ChooseLevelPageProps {
  onBack: () => void;
  onSelectLevel: (level: number) => void;
  completedLevels?: number[];
}

export function ChooseLevelPage({ onBack, onSelectLevel, completedLevels = [] }: ChooseLevelPageProps) {
  const levels = [
    {
      level: 1,
      title: "The Dungeon",
      description: "Learn HTML structure with headings and paragraphs",
      icon: "⚔️",
      color: "from-red-600 to-orange-600",
      bgColor: "bg-red-900/50",
      borderColor: "border-red-500/50",
    },
    {
      level: 2,
      title: "The Storage Room",
      description: "Master links and images",
      icon: "🗝️",
      color: "from-yellow-600 to-orange-600",
      bgColor: "bg-yellow-900/50",
      borderColor: "border-yellow-500/50",
    },
    {
      level: 3,
      title: "The Library",
      description: "Create lists and format text",
      icon: "📜",
      color: "from-purple-600 to-indigo-600",
      bgColor: "bg-purple-900/50",
      borderColor: "border-purple-500/50",
    },
    {
      level: 4,
      title: "The Exit",
      description: "Build forms to unlock freedom",
      icon: "🚪",
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-900/50",
      borderColor: "border-green-500/50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-indigo-900 p-6">
      <div className="max-w-6xl mx-auto pt-20">
        <Button
          onClick={onBack}
          className="mb-6 bg-purple-600 hover:bg-purple-700 text-white"
        >
          <ArrowLeft className="mr-2" /> Back
        </Button>

        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border-2 border-purple-500/50">
          <h1 className="text-5xl text-yellow-400 mb-4 text-center">Choose Your Level</h1>
          <p className="text-xl text-white text-center mb-12">
            Select a level to begin your adventure or practice your skills
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {levels.map((levelData) => {
              const isCompleted = completedLevels.includes(levelData.level);
              const isLocked = levelData.level > 1 && !completedLevels.includes(levelData.level - 1);

              return (
                <div
                  key={levelData.level}
                  className={`${levelData.bgColor} rounded-xl p-6 border-2 ${levelData.borderColor} relative overflow-hidden`}
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
                        <p className="text-gray-300 text-lg">Complete previous level to unlock</p>
                      </div>
                    </div>
                  )}

                  <div className="text-6xl mb-4">{levelData.icon}</div>
                  <h2 className="text-3xl text-white mb-2">
                    Level {levelData.level}: {levelData.title}
                  </h2>
                  <p className="text-white text-lg mb-6">
                    {levelData.description}
                  </p>

                  <Button
                    onClick={() => onSelectLevel(levelData.level)}
                    disabled={isLocked}
                    className={`w-full py-6 text-xl bg-gradient-to-r ${levelData.color} hover:opacity-90 text-white shadow-lg ${
                      isLocked ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isCompleted ? "🔄 Replay Level" : "▶️ Start Level"}
                  </Button>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-blue-900/30 border border-blue-500/30 rounded-lg p-6">
            <h2 className="text-2xl text-blue-300 mb-3">💡 Tips:</h2>
            <ul className="text-white space-y-2 list-disc list-inside">
              <li>Complete levels in order to unlock new challenges</li>
              <li>Replay any completed level to practice your skills</li>
              <li>Each level builds on what you learned in previous ones</li>
              <li>Take your time and enjoy the journey!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
