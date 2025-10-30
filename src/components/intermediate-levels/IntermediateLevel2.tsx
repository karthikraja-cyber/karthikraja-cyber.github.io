import { useState } from "react";
import { IntermediateLevelProps } from "../IntermediateQuest";
import { Button } from "../ui/button";
import { Check, X, Lightbulb } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export function IntermediateLevel2({ onComplete, characterName }: IntermediateLevelProps) {
  const [code, setCode] = useState("");
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [step, setStep] = useState(1);

  const checkCode = () => {
    const cleanCode = code.trim().toLowerCase();
    
    if (step === 1) {
      // Check for display property
      if ((cleanCode.includes("display:") || cleanCode.includes("display :")) && 
          (cleanCode.includes("flex") || cleanCode.includes("block") || cleanCode.includes("inline"))) {
        setFeedback({ type: "success", message: "Great! The trees shift with your display magic! The path becomes clearer..." });
        setTimeout(() => {
          setStep(2);
          setCode("");
          setFeedback(null);
          setShowHint(false);
        }, 2000);
      } else {
        setFeedback({ type: "error", message: "Not quite. Use the display property with a value like flex, block, or inline!" });
      }
    } else if (step === 2) {
      // Check for position property
      if ((cleanCode.includes("position:") || cleanCode.includes("position :")) && 
          (cleanCode.includes("relative") || cleanCode.includes("absolute") || cleanCode.includes("fixed"))) {
        setFeedback({ type: "success", message: "Perfect! You've mastered positioning! The haunted forest lets you pass!" });
        setTimeout(() => {
          onComplete();
        }, 2500);
      } else {
        setFeedback({ type: "error", message: "Try using the position property with values like relative, absolute, or fixed!" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-950 to-black flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-8 border-2 border-green-500/50 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-green-900/50 px-6 py-2 rounded-full mb-4">
              <span className="text-green-400 text-xl" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                🌲 Location 2: Haunted Forest
              </span>
            </div>
            <h1 className="text-4xl text-white mb-4" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              Navigate the Haunted Forest
            </h1>
            <p className="text-xl text-gray-300" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              Master CSS Layout: Display & Position
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-green-900/50 rounded-lg p-6 mb-8 border-l-4 border-green-500">
            <p className="text-white text-lg" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              {step === 1 ? (
                <>
                  🌲 {characterName} enters the dark, haunted forest. The trees move and block the path. Ghostly whispers fill the air.
                  <br/><br/>
                  <em className="text-green-400">"The trees respond to CSS layout commands,"</em> a spirit whispers. 
                  <em className="text-green-400">"Use the 'display' property to arrange them and clear your path!"</em>
                </>
              ) : (
                <>
                  👻 The trees part ways! But now floating spirits block your path at different heights.
                  <br/><br/>
                  <em className="text-green-400">"You must master positioning to navigate past us,"</em> they chant. 
                  <em className="text-green-400">"Use the 'position' property to place elements exactly where you want!"</em>
                </>
              )}
            </p>
          </div>

          {/* Tutorial Box */}
          <div className="bg-blue-900/30 rounded-lg p-6 mb-6 border border-blue-500/30">
            <h3 className="text-xl text-blue-300 mb-3" style={{ fontFamily: 'Source Code Pro, monospace' }}>📚 CSS Layout - Display & Position:</h3>
            {step === 1 ? (
              <div className="text-white space-y-2" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                <p>• <strong>display</strong> controls how elements are laid out</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">display: block;</code> - Element takes full width</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">display: inline;</code> - Element flows with text</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">display: flex;</code> - Creates flexible layouts</p>
                <p>• Example: <code className="bg-black/50 px-2 py-1 rounded">.tree {"{ display: flex; }"}</code></p>
              </div>
            ) : (
              <div className="text-white space-y-2" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                <p>• <strong>position</strong> controls element placement</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">position: relative;</code> - Positioned relative to normal position</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">position: absolute;</code> - Positioned relative to parent</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">position: fixed;</code> - Stays fixed on screen</p>
                <p>• Example: <code className="bg-black/50 px-2 py-1 rounded">.spirit {"{ position: absolute; }"}</code></p>
              </div>
            )}
          </div>

          {/* Code Input */}
          <div className="mb-6">
            <label className="block text-green-400 mb-2 text-lg" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              {step === 1 ? "Set the display property:" : "Set the position property:"}
            </label>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-40 px-4 py-3 bg-gray-900 border-2 border-green-500/50 rounded-lg text-green-400 font-mono text-lg resize-none focus:outline-none focus:border-green-400"
              placeholder={step === 1 ? ".tree {\n  display: ;\n}" : ".spirit {\n  position: ;\n}"}
              style={{ fontFamily: 'Source Code Pro, monospace' }}
            />
          </div>

          {/* Hint Button */}
          <Button
            onClick={() => setShowHint(!showHint)}
            variant="outline"
            className="mb-4 border-green-500 text-green-400 hover:bg-green-500/10"
            style={{ fontFamily: 'Source Code Pro, monospace' }}
          >
            <Lightbulb className="mr-2" />
            {showHint ? "Hide Hint" : "Show Hint"}
          </Button>

          {showHint && (
            <Alert className="mb-6 bg-green-900/30 border-green-500/50">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription className="text-green-200" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                {step === 1 
                  ? "Hint: Try display: flex; or display: block;"
                  : "Hint: Try position: relative; or position: absolute;"}
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
            className="w-full py-6 text-xl bg-gradient-to-r from-green-700 to-emerald-800 hover:from-green-800 hover:to-emerald-900 text-white shadow-lg"
            style={{ fontFamily: 'Source Code Pro, monospace' }}
          >
            🌲 Command the Forest! 🌲
          </Button>

          {/* Progress */}
          <div className="mt-6 text-center text-gray-400" style={{ fontFamily: 'Source Code Pro, monospace' }}>
            Step {step} of 2
          </div>
        </div>
      </div>
    </div>
  );
}
