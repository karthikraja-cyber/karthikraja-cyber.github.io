import { Button } from "../ui/button";
import { ArrowLeft, Play, Code, Lightbulb, CheckCircle } from "lucide-react";

export function TutorialPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-4xl mx-auto pt-20">
        <Button
          onClick={onBack}
          className="mb-6 bg-purple-600 hover:bg-purple-700 text-white"
        >
          <ArrowLeft className="mr-2" /> Back
        </Button>

        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border-2 border-cyan-500/50">
          <h1 className="text-5xl text-yellow-400 mb-8 text-center">How to Use CodeQuest</h1>
          
          <div className="space-y-8">
            <div className="bg-blue-900/50 rounded-lg p-6 border-l-4 border-cyan-400">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-white text-xl">
                  1
                </div>
                <div>
                  <h2 className="text-2xl text-cyan-400 mb-2 flex items-center gap-2">
                    <Play className="h-6 w-6" /> Start Your Adventure
                  </h2>
                  <p className="text-white text-lg">
                    From the home page, click "Beginner Level" to start your journey. You'll be asked to 
                    enter your warrior name—choose wisely, brave coder!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/50 rounded-lg p-6 border-l-4 border-green-400">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-white text-xl">
                  2
                </div>
                <div>
                  <h2 className="text-2xl text-green-400 mb-2 flex items-center gap-2">
                    <Code className="h-6 w-6" /> Read the Story
                  </h2>
                  <p className="text-white text-lg">
                    Each level presents a story and a coding challenge. Read carefully to understand what 
                    you need to do. The story provides context for what you're learning!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/50 rounded-lg p-6 border-l-4 border-yellow-400">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-white text-xl">
                  3
                </div>
                <div>
                  <h2 className="text-2xl text-yellow-400 mb-2 flex items-center gap-2">
                    <Code className="h-6 w-6" /> Write Your Code
                  </h2>
                  <p className="text-white text-lg mb-3">
                    Type your HTML code in the text area. Don't worry about making mistakes—that's how you learn!
                  </p>
                  <div className="bg-black/50 rounded-lg p-4">
                    <p className="text-gray-300 mb-2">Example:</p>
                    <code className="text-green-400 text-sm">
                      {"<h1>Hello World</h1>"}
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/50 rounded-lg p-6 border-l-4 border-purple-400">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-white text-xl">
                  4
                </div>
                <div>
                  <h2 className="text-2xl text-purple-400 mb-2 flex items-center gap-2">
                    <Lightbulb className="h-6 w-6" /> Use Hints When Stuck
                  </h2>
                  <p className="text-white text-lg">
                    Feeling stuck? Click the "Show Hint" button to get guidance. Hints point you in the right 
                    direction without giving away the full answer—learning happens through discovery!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/50 rounded-lg p-6 border-l-4 border-pink-400">
              <div className="flex items-start gap-4">
                <div className="bg-pink-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-white text-xl">
                  5
                </div>
                <div>
                  <h2 className="text-2xl text-pink-400 mb-2 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6" /> Check Your Answer
                  </h2>
                  <p className="text-white text-lg">
                    Click the "Check Answer" button to submit your code. You'll get instant feedback! 
                    If it's correct, you'll move to the next challenge. If not, try again!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6">
              <h2 className="text-2xl text-white mb-4">📚 Pro Tips:</h2>
              <ul className="text-white space-y-2 list-disc list-inside">
                <li>Take your time—there's no rush!</li>
                <li>Pay attention to spelling and syntax—HTML is precise</li>
                <li>Don't forget closing tags (e.g., {"</h1>"})</li>
                <li>Use the tutorial sections to review concepts</li>
                <li>Replay levels to practice and reinforce learning</li>
                <li>Use the sidebar menu to navigate between pages</li>
              </ul>
            </div>

            <div className="bg-yellow-900/30 border-2 border-yellow-500/50 rounded-lg p-6 text-center">
              <p className="text-yellow-200 text-xl">
                ⚔️ You're all set! Now go forth and conquer the castle!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
