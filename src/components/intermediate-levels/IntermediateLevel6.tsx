import { useState } from "react";
import { IntermediateLevelProps } from "../IntermediateQuest";
import { Button } from "../ui/button";
import { Check, X, Lightbulb } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export function IntermediateLevel6({ onComplete, characterName }: IntermediateLevelProps) {
  const [code, setCode] = useState("");
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [step, setStep] = useState(1);

  const checkCode = () => {
    const cleanCode = code.trim().toLowerCase();
    
    if (step === 1) {
      // Check for flexbox
      if ((cleanCode.includes("display") && cleanCode.includes("flex")) || 
          cleanCode.includes("justify-content") || cleanCode.includes("align-items")) {
        setFeedback({ type: "success", message: "Great! The ship's planks align perfectly! You're boarding the rescue vessel..." });
        setTimeout(() => {
          setStep(2);
          setCode("");
          setFeedback(null);
          setShowHint(false);
        }, 2000);
      } else {
        setFeedback({ type: "error", message: "Not quite. Use flexbox with display: flex; or flexbox properties!" });
      }
    } else if (step === 2) {
      // Check for CSS Grid
      if ((cleanCode.includes("display") && cleanCode.includes("grid")) || 
          cleanCode.includes("grid-template") || cleanCode.includes("grid-gap")) {
        setFeedback({ type: "success", message: "VICTORY! You've rescued the princess! Your CSS Grid mastery saved the day!" });
        setTimeout(() => {
          onComplete();
        }, 2500);
      } else {
        setFeedback({ type: "error", message: "Try using CSS Grid with display: grid; or grid properties!" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-cyan-700 to-blue-800 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-8 border-2 border-cyan-500/50 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-blue-900/50 px-6 py-2 rounded-full mb-4">
              <span className="text-cyan-300 text-xl" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                ⛵ Location 6: Shipwrek - FINAL CHALLENGE
              </span>
            </div>
            <h1 className="text-4xl text-white mb-4" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              Rescue the Princess!
            </h1>
            <p className="text-xl text-gray-300" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              Master CSS Grid & Flexbox
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-cyan-800/50 rounded-lg p-6 mb-8 border-l-4 border-cyan-500">
            <p className="text-white text-lg" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              {step === 1 ? (
                <>
                  ⛵ {characterName} reaches the shipwrek where the princess is being held! The ship's planks are scattered everywhere.
                  <br/><br/>
                  <em className="text-cyan-400">"To board the ship, you must arrange these planks using Flexbox!"</em> a sea captain calls out. 
                  <em className="text-cyan-400">"Flexbox creates flexible one-dimensional layouts!"</em>
                </>
              ) : (
                <>
                  👸 You're aboard! The princess is locked behind a complex grid pattern created by Princess Wooman!
                  <br/><br/>
                  <em className="text-pink-400">"You'll never break my CSS Grid trap!"</em> Princess Wooman shouts from afar.
                  <br/>
                  <em className="text-cyan-400">"Use CSS Grid to unlock the pattern and rescue the princess!"</em> the captain encourages.
                </>
              )}
            </p>
          </div>

          {/* Tutorial Box */}
          <div className="bg-blue-900/30 rounded-lg p-6 mb-6 border border-blue-500/30">
            <h3 className="text-xl text-blue-300 mb-3" style={{ fontFamily: 'Source Code Pro, monospace' }}>📚 Flexbox & Grid:</h3>
            {step === 1 ? (
              <div className="text-white space-y-2" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                <p>• <strong>Flexbox</strong> arranges items in one dimension (row or column)</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">display: flex;</code> - Activates flexbox</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">justify-content: center;</code> - Align horizontally</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">align-items: center;</code> - Align vertically</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">flex-direction: row;</code> - Set direction (row/column)</p>
              </div>
            ) : (
              <div className="text-white space-y-2" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                <p>• <strong>CSS Grid</strong> creates two-dimensional layouts</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">display: grid;</code> - Activates grid</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">grid-template-columns: 1fr 1fr;</code> - Define columns</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">grid-template-rows: 100px 200px;</code> - Define rows</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">grid-gap: 10px;</code> - Space between items</p>
              </div>
            )}
          </div>

          {/* Code Input */}
          <div className="mb-6">
            <label className="block text-cyan-400 mb-2 text-lg" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              {step === 1 ? "Use Flexbox to arrange the planks:" : "Use CSS Grid to unlock the pattern:"}
            </label>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-40 px-4 py-3 bg-gray-900 border-2 border-cyan-500/50 rounded-lg text-green-400 font-mono text-lg resize-none focus:outline-none focus:border-cyan-400"
              placeholder={step === 1 ? ".planks {\n  display: flex;\n  justify-content: ;\n}" : ".pattern {\n  display: grid;\n  grid-template-columns: ;\n}"}
              style={{ fontFamily: 'Source Code Pro, monospace' }}
            />
          </div>

          {/* Hint Button */}
          <Button
            onClick={() => setShowHint(!showHint)}
            variant="outline"
            className="mb-4 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
            style={{ fontFamily: 'Source Code Pro, monospace' }}
          >
            <Lightbulb className="mr-2" />
            {showHint ? "Hide Hint" : "Show Hint"}
          </Button>

          {showHint && (
            <Alert className="mb-6 bg-cyan-900/30 border-cyan-500/50">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription className="text-cyan-200" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                {step === 1 
                  ? "Hint: Try display: flex; or add justify-content: space-between;"
                  : "Hint: Try display: grid; or add grid-template-columns: 1fr 1fr 1fr;"}
              </AlertDescription>
            </Alert>
          )}

          {/* Feedback */}
          {feedback && (
            <Alert className={`mb-6 ${feedback.type === "success" ? "bg-green-900/30 border-green-500" : "bg-red-900/30 border-red-500"}`}>
              {feedback.type === "success" ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
              <AlertDescription className={feedback.type === "success" ? "text-green-200" : "text-red-200"} style={{ fontFamily: 'Source Code Pro, monospace' }}>
                {feedback.message}
              </AlertDescription>
            </Alert>
          )}

          {/* Check Button */}
          <Button
            onClick={checkCode}
            className="w-full py-6 text-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg"
            style={{ fontFamily: 'Source Code Pro, monospace' }}
          >
            {step === 1 ? "⛵ Arrange the Planks! ⛵" : "👸 RESCUE THE PRINCESS! 👸"}
          </Button>

          {/* Progress */}
          <div className="mt-6 text-center text-gray-400" style={{ fontFamily: 'Source Code Pro, monospace' }}>
            Step {step} of 2 - FINAL BATTLE!
          </div>
        </div>
      </div>
    </div>
  );
}
