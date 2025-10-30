import { useState } from "react";
import { LevelProps } from "../CastleEscape";
import { Button } from "../ui/button";
import { Check, X, Lightbulb } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export function Level3({ onComplete, characterName }: LevelProps) {
  const [code, setCode] = useState("");
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [step, setStep] = useState(1);

  const checkCode = () => {
    const cleanCode = code.trim().toLowerCase();
    
    if (step === 1) {
      // Check for unordered list
      if (cleanCode.includes("<ul>") && cleanCode.includes("</ul>") && 
          cleanCode.includes("<li>") && cleanCode.includes("</li>")) {
        setFeedback({ type: "success", message: "Excellent! The spell list is complete! The ancient tome glows!" });
        setTimeout(() => {
          setStep(2);
          setCode("");
          setFeedback(null);
          setShowHint(false);
        }, 2000);
      } else {
        setFeedback({ type: "error", message: "Remember: use <ul> for the list and <li> for each item!" });
      }
    } else if (step === 2) {
      // Check for formatting tags
      const hasStrong = cleanCode.includes("<strong>") && cleanCode.includes("</strong>");
      const hasEm = cleanCode.includes("<em>") && cleanCode.includes("</em>");
      
      if (hasStrong && hasEm) {
        setFeedback({ type: "success", message: "Perfect! The prophecy is revealed! The library door opens!" });
        setTimeout(() => {
          onComplete();
        }, 2500);
      } else {
        setFeedback({ type: "error", message: "You need both <strong> for bold and <em> for italic text!" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-[#85B380] to-blue-900 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-8 border-2 border-[#91CEA0]/50 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-[#85B380]/50 px-6 py-2 rounded-full mb-4">
              <span className="text-[#B3E8B1] text-xl">📜 Level 3: The Library</span>
            </div>
            <h1 className="text-4xl text-white mb-4">
              Decode the Ancient Library
            </h1>
            <p className="text-xl text-gray-300">
              Create Lists & Format Text
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-gray-800/50 rounded-lg p-6 mb-8 border-l-4 border-[#91CEA0]">
            <p className="text-white text-lg">
              {step === 1 ? (
                <>
                  📚 You enter a vast library filled with towering bookshelves, {characterName}. 
                  An ancient spellbook lies open on a pedestal. To unlock its power, you must create a list of three spells!
                  <br/><br/>
                  <em className="text-[#B3E8B1]">"Lists organize information,"</em> echoes a mystical voice. 
                  <em className="text-[#B3E8B1]">"Use ul to start the list, and li for each item!"</em>
                </>
              ) : (
                <>
                  ✨ The spellbook begins to glow! Now you must inscribe the ancient prophecy with proper emphasis. 
                  Some words must be <strong>bold</strong> and others must be <em>italicized</em>!
                  <br/><br/>
                  <em className="text-[#B3E8B1]">"Use strong to make text bold and em to make it italic,"</em> 
                  the voice instructs. <em className="text-[#B3E8B1]">"This gives your words power!"</em>
                </>
              )}
            </p>
          </div>

          {/* Tutorial Box */}
          <div className="bg-blue-900/30 rounded-lg p-6 mb-6 border border-blue-500/30">
            <h3 className="text-xl text-blue-300 mb-3">📚 Learn About {step === 1 ? "Lists" : "Text Formatting"}:</h3>
            {step === 1 ? (
              <div className="text-white space-y-2">
                <p>• Unordered lists use ul (bullet points)</p>
                <p>• Each list item uses li (list item)</p>
                <p>• Example:</p>
                <pre className="bg-black/50 px-3 py-2 rounded mt-2 text-sm">
{`<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>`}
                </pre>
                <p className="text-sm text-gray-400">• Ordered lists use ol instead of ul</p>
              </div>
            ) : (
              <div className="text-white space-y-2">
                <p>• The strong tag makes text <strong>bold/important</strong></p>
                <p>• The em tag makes text <em>italic/emphasized</em></p>
                <p>• Example: <code className="bg-black/50 px-2 py-1 rounded">{"<strong>Important!</strong>"}</code></p>
                <p>• Example: <code className="bg-black/50 px-2 py-1 rounded">{"<em>Emphasized</em>"}</code></p>
                <p>• You can nest them too!</p>
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
                <>
                  Create an unordered list with these three spells:
                  <ul className="list-disc list-inside mt-2 text-yellow-400">
                    <li>Fire Strike</li>
                    <li>Ice Shield</li>
                    <li>Lightning Bolt</li>
                  </ul>
                </>
              ) : (
                <>
                  Write this sentence with proper formatting:
                  <p className="mt-2 text-yellow-400">
                    "The <strong className="text-yellow-300">warrior</strong> must be <em className="text-yellow-300">brave</em>"
                  </p>
                  <p className="text-sm text-gray-400 mt-2">(Make "warrior" bold and "brave" italic)</p>
                </>
              )}
            </p>
            
            {/* Code Input */}
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-40 px-4 py-3 bg-gray-900 border-2 border-[#91CEA0]/50 rounded-lg text-[#B3E8B1] font-mono text-lg focus:border-[#B3E8B1] focus:outline-none resize-none"
              placeholder="Type your HTML code here..."
              spellCheck={false}
            />

            {/* Hint Button */}
            <div className="mt-4 flex gap-3">
              <Button
                onClick={() => setShowHint(!showHint)}
                className="bg-yellow-600 hover:bg-yellow-700 text-white"
              >
                <Lightbulb className="mr-2" />
                {showHint ? "Hide Hint" : "Show Hint"}
              </Button>
            </div>

            {/* Hint */}
            {showHint && (
              <div className="mt-4 bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-4">
                <p className="text-yellow-200">
                  💡 <strong>Hint:</strong> {step === 1 ? (
                    <>Start with a 'ul' tag to begin the list. Then wrap each spell in 'li' tags. Don't forget to close all your tags!</>
                  ) : (
                    <>Use 'strong' tags around the word that needs to be bold, and 'em' tags around the word that needs to be italic.</>
                  )}
                </p>
              </div>
            )}
          </div>

          {/* Feedback */}
          {feedback && (
            <Alert className={`mb-6 ${feedback.type === "success" ? "bg-cyan-900/50 border-cyan-500" : "bg-red-900/50 border-red-500"}`}>
              <AlertDescription className="flex items-center text-white text-lg">
                {feedback.type === "success" ? (
                  <Check className="mr-2 text-cyan-400" />
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
            className="w-full py-6 text-xl bg-gradient-to-r from-[#91CEA0] to-[#85B380] hover:from-[#85B380] hover:to-[#91CEA0] text-white shadow-lg"
            disabled={!code.trim()}
          >
            📜 Inscribe the Tome (Check Answer)
          </Button>

          {/* Progress */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Step {step} of 2 • Level 3 of 4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}