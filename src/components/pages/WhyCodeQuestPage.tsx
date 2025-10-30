import { Button } from "../ui/button";
import { ArrowLeft, Gamepad2, Brain, Trophy, Users, Zap, Heart } from "lucide-react";

export function WhyCodeQuestPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-900 to-red-900 p-6">
      <div className="max-w-4xl mx-auto pt-20">
        <Button
          onClick={onBack}
          className="mb-6 bg-purple-600 hover:bg-purple-700 text-white"
        >
          <ArrowLeft className="mr-2" /> Back
        </Button>

        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border-2 border-pink-500/50">
          <h1 className="text-5xl text-yellow-400 mb-8 text-center">Why Choose CodeQuest?</h1>
          
          <div className="space-y-6">
            <div className="bg-purple-900/50 rounded-lg p-6 border-l-4 border-yellow-400">
              <div className="flex items-start gap-4">
                <Gamepad2 className="h-10 w-10 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl text-yellow-400 mb-2">Learn Through Play</h2>
                  <p className="text-white text-lg">
                    Traditional tutorials can feel like work. CodeQuest turns learning into an adventure! 
                    Each challenge is part of an epic story, making you forget you're even studying.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/50 rounded-lg p-6 border-l-4 border-green-400">
              <div className="flex items-start gap-4">
                <Brain className="h-10 w-10 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl text-green-400 mb-2">Build Real Skills</h2>
                  <p className="text-white text-lg">
                    Every level teaches practical HTML that you'll use in real web development. 
                    By the time you escape the castle, you'll have built a solid foundation in HTML.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/50 rounded-lg p-6 border-l-4 border-blue-400">
              <div className="flex items-start gap-4">
                <Zap className="h-10 w-10 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl text-blue-400 mb-2">Instant Feedback</h2>
                  <p className="text-white text-lg">
                    No more guessing if you got it right. CodeQuest checks your code in real-time and 
                    gives you immediate feedback, so you learn from your mistakes right away.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/50 rounded-lg p-6 border-l-4 border-purple-400">
              <div className="flex items-start gap-4">
                <Trophy className="h-10 w-10 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl text-purple-400 mb-2">Progressive Difficulty</h2>
                  <p className="text-white text-lg">
                    Start with the basics and gradually level up. Each challenge builds on what you've learned, 
                    ensuring you master concepts before moving forward.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/50 rounded-lg p-6 border-l-4 border-orange-400">
              <div className="flex items-start gap-4">
                <Users className="h-10 w-10 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl text-orange-400 mb-2">Learn at Your Pace</h2>
                  <p className="text-white text-lg">
                    No time limits, no pressure. Take breaks whenever you need, replay levels to practice, 
                    and progress through the adventure at your own speed.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/50 rounded-lg p-6 border-l-4 border-red-400">
              <div className="flex items-start gap-4">
                <Heart className="h-10 w-10 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl text-red-400 mb-2">Completely Free</h2>
                  <p className="text-white text-lg">
                    Quality education shouldn't cost money. CodeQuest is and always will be free. 
                    No hidden fees, no premium tiers—just pure learning fun.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-yellow-900/30 border-2 border-yellow-500/50 rounded-lg p-6 text-center">
            <p className="text-yellow-200 text-xl">
              🎮 Ready to start your coding adventure? Jump back in and continue your quest!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
