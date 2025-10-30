import { useState } from "react";
import { IntermediateLevelProps } from "../IntermediateQuest";
import { Button } from "../ui/button";
import { Check, X, Lightbulb } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export function IntermediateLevel3({ onComplete, characterName }: IntermediateLevelProps) {
  const [code, setCode] = useState("");
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [step, setStep] = useState(1);

  const checkCode = () => {
    const cleanCode = code.trim().toLowerCase();
    
    if (step === 1) {
      // Check for border property
      if (cleanCode.includes("border") && (cleanCode.includes("px") || cleanCode.includes("solid"))) {
        setFeedback({ type: "success", message: "Excellent! The dragon's scales shimmer! You're getting closer..." });
        setTimeout(() => {
          setStep(2);
          setCode("");
          setFeedback(null);
          setShowHint(false);
        }, 2000);
      } else {
        setFeedback({ type: "error", message: "Not quite. Create a border using the border property with size, style, and color!" });
      }
    } else if (step === 2) {
      // Check for box-shadow or background gradient
      if (cleanCode.includes("box-shadow") || cleanCode.includes("gradient")) {
        setFeedback({ type: "success", message: "Perfect! The cave illuminates with your visual mastery! The dragon grants you passage!" });
        setTimeout(() => {
          onComplete();
        }, 2500);
      } else {
        setFeedback({ type: "error", message: "Try adding a box-shadow or using a gradient! These create visual depth." });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-slate-700 to-gray-900 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-8 border-2 border-gray-500/50 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gray-800/50 px-6 py-2 rounded-full mb-4">
              <span className="text-gray-300 text-xl" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                🐉 Location 3: Dragon's Cave
              </span>
            </div>
            <h1 className="text-4xl text-white mb-4" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              Face the Dragon's Challenge
            </h1>
            <p className="text-xl text-gray-300" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              Master Visual Elements: Borders, Shadows, Gradients
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-slate-700/50 rounded-lg p-6 mb-8 border-l-4 border-red-500">
            <p className="text-white text-lg" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              {step === 1 ? (
                <>
                  🐉 {characterName} enters the dark cave. A massive dragon emerges from the shadows, its scales glinting.
                  <br/><br/>
                  <em className="text-red-400">"To pass, you must show me the art of visual styling,"</em> the dragon rumbles. 
                  <em className="text-red-400">"Create a border worthy of my scales!"</em>
                </>
              ) : (
                <>
                  ✨ The dragon is impressed! Its eyes glow brighter.
                  <br/><br/>
                  <em className="text-red-400">"Now, demonstrate depth and dimension! Use shadows or gradients to create visual magic!"</em>
                  <br/>
                  <em className="text-gray-300">"These properties bring life to flat designs!"</em>
                </>
              )}
            </p>
          </div>

          {/* Tutorial Box */}
          <div className="bg-blue-900/30 rounded-lg p-6 mb-6 border border-blue-500/30">
            <h3 className="text-xl text-blue-300 mb-3" style={{ fontFamily: 'Source Code Pro, monospace' }}>📚 Visual Elements:</h3>
            {step === 1 ? (
              <div className="text-white space-y-2" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                <p>• <strong>border</strong> creates edges around elements</p>
                <p>• Format: <code className="bg-black/50 px-2 py-1 rounded">border: width style color;</code></p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">border: 2px solid red;</code> - 2 pixel solid red border</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">border: 5px dashed blue;</code> - 5 pixel dashed blue border</p>
                <p>• You can also use border-radius to round corners!</p>
              </div>
            ) : (
              <div className="text-white space-y-2" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                <p>• <strong>box-shadow</strong> adds shadows to elements</p>
                <p>• Example: <code className="bg-black/50 px-2 py-1 rounded">box-shadow: 5px 5px 10px black;</code></p>
                <p>• <strong>gradients</strong> blend colors smoothly</p>
                <p>• Linear: <code className="bg-black/50 px-2 py-1 rounded">background: linear-gradient(red, blue);</code></p>
                <p>• Radial: <code className="bg-black/50 px-2 py-1 rounded">background: radial-gradient(red, blue);</code></p>
              </div>
            )}
          </div>

          {/* Code Input */}
          <div className="mb-6">
            <label className="block text-red-400 mb-2 text-lg" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              {step === 1 ? "Create a border:" : "Add a shadow or gradient:"}
            </label>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-40 px-4 py-3 bg-gray-900 border-2 border-gray-500/50 rounded-lg text-green-400 font-mono text-lg resize-none focus:outline-none focus:border-red-400"
              placeholder={step === 1 ? ".dragon {\n  border: ;\n}" : ".cave {\n  box-shadow: ;\n}"}
              style={{ fontFamily: 'Source Code Pro, monospace' }}
            />
          </div>

          {/* Hint Button */}
          <Button
            onClick={() => setShowHint(!showHint)}
            variant="outline"
            className="mb-4 border-red-500 text-red-400 hover:bg-red-500/10"
            style={{ fontFamily: 'Source Code Pro, monospace' }}
          >
            <Lightbulb className="mr-2" />
            {showHint ? "Hide Hint" : "Show Hint"}
          </Button>

          {showHint && (
            <Alert className="mb-6 bg-red-900/30 border-red-500/50">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription className="text-red-200" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                {step === 1 
                  ? "Hint: Try border: 3px solid red; or border: 5px dashed gold;"
                  : "Hint: Try box-shadow: 0px 4px 10px rgba(0,0,0,0.5); or background: linear-gradient(red, orange);"}
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
            className="w-full py-6 text-xl bg-gradient-to-r from-gray-600 to-slate-700 hover:from-gray-700 hover:to-slate-800 text-white shadow-lg"
            style={{ fontFamily: 'Source Code Pro, monospace' }}
          >
            🐉 Impress the Dragon! 🐉
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
