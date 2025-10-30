import { useState } from "react";
import { IntermediateLevelProps } from "../IntermediateQuest";
import { Button } from "../ui/button";
import { Check, X, Lightbulb } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export function IntermediateLevel1({ onComplete, characterName }: IntermediateLevelProps) {
  const [code, setCode] = useState("");
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [step, setStep] = useState(1);

  const checkCode = () => {
    const cleanCode = code.trim().toLowerCase();
    
    if (step === 1) {
      // Check for class selector
      if (cleanCode.includes(".castle") && cleanCode.includes("{") && cleanCode.includes("}")) {
        setFeedback({ type: "success", message: "Perfect! You've created a class selector! The castle gates begin to open..." });
        setTimeout(() => {
          setStep(2);
          setCode("");
          setFeedback(null);
          setShowHint(false);
        }, 2000);
      } else {
        setFeedback({ type: "error", message: "Not quite. Remember: Class selectors start with a dot (.). Try selecting the 'castle' class!" });
      }
    } else if (step === 2) {
      // Check for color property
      if (cleanCode.includes("color:") || cleanCode.includes("color :")) {
        setFeedback({ type: "success", message: "Excellent! You've mastered CSS properties! The castle welcomes you!" });
        setTimeout(() => {
          onComplete();
        }, 2500);
      } else {
        setFeedback({ type: "error", message: "Almost there! Add a color property inside the curly braces. Example: color: red;" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-orange-900 to-amber-800 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-8 border-2 border-amber-500/50 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-amber-900/50 px-6 py-2 rounded-full mb-4">
              <span className="text-yellow-400 text-xl" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                🏰 Location 1: Castlemania
              </span>
            </div>
            <h1 className="text-4xl text-white mb-4" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              Enter Castlemania
            </h1>
            <p className="text-xl text-gray-300" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              Master CSS Selectors & Properties
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-orange-800/50 rounded-lg p-6 mb-8 border-l-4 border-amber-500">
            <p className="text-white text-lg" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              {step === 1 ? (
                <>
                  🏰 {characterName} arrives at Castlemania, the first stop on the journey. The castle gates are locked, but a wise old wizard appears.
                  <br/><br/>
                  <em className="text-yellow-400">"To enter Castlemania, you must demonstrate your knowledge of CSS selectors,"</em> the wizard says. 
                  <em className="text-yellow-400">"Create a class selector for the element with class 'castle'!"</em>
                </>
              ) : (
                <>
                  🗝️ The gates creak open! The wizard nods approvingly. 
                  <em className="text-yellow-400">"Now, show me you can style elements. Add a color property to change the text!"</em>
                  <br/><br/>
                  <em className="text-amber-300">"Remember, CSS properties define how elements look. They go inside the curly braces!"</em>
                </>
              )}
            </p>
          </div>

          {/* Tutorial Box */}
          <div className="bg-blue-900/30 rounded-lg p-6 mb-6 border border-blue-500/30">
            <h3 className="text-xl text-blue-300 mb-3" style={{ fontFamily: 'Source Code Pro, monospace' }}>📚 CSS Selectors & Properties:</h3>
            {step === 1 ? (
              <div className="text-white space-y-2" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                <p>• <strong>Class selectors</strong> start with a dot (.): <code className="bg-black/50 px-2 py-1 rounded">.className</code></p>
                <p>• They select all elements with that class attribute</p>
                <p>• Example: <code className="bg-black/50 px-2 py-1 rounded">.castle {"{}"}</code></p>
                <p>• Use curly braces to contain CSS properties</p>
              </div>
            ) : (
              <div className="text-white space-y-2" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                <p>• <strong>CSS properties</strong> define how elements look</p>
                <p>• Format: <code className="bg-black/50 px-2 py-1 rounded">property: value;</code></p>
                <p>• Example: <code className="bg-black/50 px-2 py-1 rounded">.castle {"{ color: blue; }"}</code></p>
                <p>• Don't forget the semicolon at the end!</p>
              </div>
            )}
          </div>

          {/* Code Input */}
          <div className="mb-6">
            <label className="block text-yellow-400 mb-2 text-lg" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              {step === 1 ? "Create a class selector for 'castle':" : "Add a color property:"}
            </label>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-40 px-4 py-3 bg-gray-900 border-2 border-amber-500/50 rounded-lg text-green-400 font-mono text-lg resize-none focus:outline-none focus:border-amber-400"
              placeholder={step === 1 ? ".castle {\n  \n}" : ".castle {\n  color: ;\n}"}
              style={{ fontFamily: 'Source Code Pro, monospace' }}
            />
          </div>

          {/* Hint Button */}
          <Button
            onClick={() => setShowHint(!showHint)}
            variant="outline"
            className="mb-4 border-yellow-500 text-yellow-400 hover:bg-yellow-500/10"
            style={{ fontFamily: 'Source Code Pro, monospace' }}
          >
            <Lightbulb className="mr-2" />
            {showHint ? "Hide Hint" : "Show Hint"}
          </Button>

          {showHint && (
            <Alert className="mb-6 bg-yellow-900/30 border-yellow-500/50">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription className="text-yellow-200" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                {step === 1 
                  ? "Hint: Start with a dot (.), followed by the class name 'castle', then add curly braces { }"
                  : "Hint: Inside the braces, type: color: red; (or any color you like!)"}
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
            className="w-full py-6 text-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg"
            style={{ fontFamily: 'Source Code Pro, monospace' }}
          >
            ✨ Cast Your CSS Spell! ✨
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
