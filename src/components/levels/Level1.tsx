import { useState } from "react";
import { LevelProps } from "../CastleEscape";
import { Button } from "../ui/button";
import { Check, X, Lightbulb } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export function Level1({ onComplete, characterName }: LevelProps) {
  const [code, setCode] = useState("");
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [step, setStep] = useState(1);

  const checkCode = () => {
    const cleanCode = code.trim().toLowerCase();
    
    if (step === 1) {
      // Check for h1 tag
      if (cleanCode.includes("<h1>") && cleanCode.includes("</h1>")) {
        setFeedback({ type: "success", message: "Excellent! You've created a heading! The walls begin to crack..." });
        setTimeout(() => {
          setStep(2);
          setCode("");
          setFeedback(null);
          setShowHint(false);
        }, 2000);
      } else {
        setFeedback({ type: "error", message: "Not quite. Remember: HTML tags come in pairs with < and >. Try creating a heading tag!" });
      }
    } else if (step === 2) {
      // Check for p tag
      if (cleanCode.includes("<p>") && cleanCode.includes("</p>")) {
        setFeedback({ type: "success", message: "Perfect! You've mastered the basics! The dungeon door opens!" });
        setTimeout(() => {
          onComplete();
        }, 2500);
      } else {
        setFeedback({ type: "error", message: "Almost there! Remember to use paragraph tags. Check your opening and closing tags!" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-8 border-2 border-red-500/50 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-red-900/50 px-6 py-2 rounded-full mb-4">
              <span className="text-[#4ADE80] text-xl">⚔️ Level 1: The Dungeon</span>
            </div>
            <h1 className="text-4xl text-white mb-4">
              Escape the Dark Dungeon
            </h1>
            <p className="text-xl text-gray-300">
              Learn HTML Structure & Basic Tags
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-gray-800/50 rounded-lg p-6 mb-8 border-l-4 border-red-500">
            <p className="text-white text-lg">
              {step === 1 ? (
                <>
                  💀 You wake up in a dark dungeon, {characterName}. The walls are cold stone, and iron chains rattle in the darkness. 
                  An ancient scroll appears before you with mysterious symbols: <code className="bg-black/50 px-2 py-1 rounded">{"<h1>"}</code> and <code className="bg-black/50 px-2 py-1 rounded">{"</h1>"}</code>
                  <br/><br/>
                  <em className="text-[#4ADE80]">"These are HTML tags,"</em> whispers a voice. 
                  <em className="text-[#4ADE80]">"Create a heading to weaken the walls!"</em>
                </>
              ) : (
                <>
                  🗝️ The walls are cracking! You found another scroll with symbols: <code className="bg-black/50 px-2 py-1 rounded">{"<p>"}</code> and <code className="bg-black/50 px-2 py-1 rounded">{"</p>"}</code>
                  <br/><br/>
                  <em className="text-[#4ADE80]">"These create paragraphs,"</em> the voice continues. 
                  <em className="text-[#4ADE80]">"Use them to describe your escape plan!"</em>
                </>
              )}
            </p>
          </div>

          {/* Tutorial Box */}
          <div className="bg-blue-900/30 rounded-lg p-6 mb-6 border border-blue-500/30">
            <h3 className="text-xl text-blue-300 mb-3">📚 HTML Basics:</h3>
            {step === 1 ? (
              <div className="text-white space-y-2">
                <p>• HTML tags are written with angle brackets: <code className="bg-black/50 px-2 py-1 rounded">{"<tagname>"}</code></p>
                <p>• Most tags come in pairs: an opening tag <code className="bg-black/50 px-2 py-1 rounded">{"<h1>"}</code> and closing tag <code className="bg-black/50 px-2 py-1 rounded">{"</h1>"}</code></p>
                <p>• Put your content between the tags: <code className="bg-black/50 px-2 py-1 rounded">{"<h1>Hello</h1>"}</code></p>
                <p>• The h1 tag creates the largest heading (h1, h2, h3... get smaller)</p>
              </div>
            ) : (
              <div className="text-white space-y-2">
                <p>• The p tag creates a paragraph</p>
                <p>• Paragraphs are used for regular text content</p>
                <p>• Example: <code className="bg-black/50 px-2 py-1 rounded">{"<p>This is a paragraph.</p>"}</code></p>
                <p>• Always close your tags!</p>
              </div>
            )}
          </div>

          {/* Challenge */}
          <div className="bg-[#85B380]/30 rounded-lg p-6 mb-6 border-2 border-[#91CEA0]/50">
            <h3 className="text-2xl text-[#B3E8B1] mb-4">
              ⚡ Your Challenge:
            </h3>
            <p className="text-white text-lg mb-4">
              {step === 1 ? (
                <>Create a heading that says: <span className="text-[#4ADE80]">"Breaking Free"</span></>
              ) : (
                <>Create a paragraph that says: <span className="text-[#4ADE80]">"I will escape this castle"</span></>
              )}
            </p>
            
            {/* Code Input */}
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-32 px-4 py-3 bg-gray-900 border-2 border-[#91CEA0]/50 rounded-lg text-[#B3E8B1] font-mono text-lg focus:border-[#B3E8B1] focus:outline-none resize-none"
              placeholder="Type your HTML code here..."
              spellCheck={false}
            />

            {/* Hint Button */}
            <div className="mt-4 flex gap-3">
              <Button
                onClick={() => setShowHint(!showHint)}
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white"
              >
                <Lightbulb className="mr-2" />
                {showHint ? "Hide Hint" : "Show Hint"}
              </Button>
            </div>

            {/* Hint */}
            {showHint && (
              <div className="mt-4 bg-[#2563EB]/30 border border-[#3B82F6]/50 rounded-lg p-4">
                <p className="text-white">
                  💡 <strong>Hint:</strong> {step === 1 ? (
                    <>Remember: HTML tags have angle brackets. You need an opening tag, your text, then a closing tag with a forward slash.</>
                  ) : (
                    <>Think about which tag creates paragraphs. It starts with the letter 'p'!</>
                  )}
                </p>
              </div>
            )}
          </div>

          {/* Feedback */}
          {feedback && (
            <Alert className={`mb-6 ${feedback.type === "success" ? "bg-[#16A34A]/50 border-[#22C55E]" : "bg-red-900/50 border-red-500"}`}>
              <AlertDescription className="flex items-center text-white text-lg">
                {feedback.type === "success" ? (
                  <Check className="mr-2 text-[#4ADE80]" />
                ) : (
                  <X className="mr-2 text-red-400" />
                )}
                {feedback.message}
              </AlertDescription>
            </Alert>
          )}

          {/* Submit Button */}
          <Button
            onClick={checkCode}
            className="w-full py-6 text-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg"
            disabled={!code.trim()}
          >
            ⚔️ Cast the Spell (Check Answer)
          </Button>

          {/* Progress */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Step {step} of 2 • Level 1 of 4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}