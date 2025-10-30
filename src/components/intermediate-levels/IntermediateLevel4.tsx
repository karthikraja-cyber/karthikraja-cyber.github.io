import { useState } from "react";
import { IntermediateLevelProps } from "../IntermediateQuest";
import { Button } from "../ui/button";
import { Check, X, Lightbulb } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export function IntermediateLevel4({ onComplete, characterName }: IntermediateLevelProps) {
  const [code, setCode] = useState("");
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [step, setStep] = useState(1);

  const checkCode = () => {
    const cleanCode = code.trim().toLowerCase();
    
    if (step === 1) {
      // Check for transition property
      if (cleanCode.includes("transition")) {
        setFeedback({ type: "success", message: "Wonderful! The castle gates move smoothly! Princess Wooman is watching..." });
        setTimeout(() => {
          setStep(2);
          setCode("");
          setFeedback(null);
          setShowHint(false);
        }, 2000);
      } else {
        setFeedback({ type: "error", message: "Not quite. Use the transition property to create smooth changes!" });
      }
    } else if (step === 2) {
      // Check for animation or @keyframes
      if (cleanCode.includes("animation") || cleanCode.includes("@keyframes")) {
        setFeedback({ type: "success", message: "Amazing! You've mastered animations! Princess Wooman retreats for now..." });
        setTimeout(() => {
          onComplete();
        }, 2500);
      } else {
        setFeedback({ type: "error", message: "Try using animation or @keyframes to create movement!" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-900 via-purple-900 to-pink-800 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-8 border-2 border-pink-500/50 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-pink-900/50 px-6 py-2 rounded-full mb-4">
              <span className="text-pink-300 text-xl" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                👸 Location 4: Princess Wooman's Castle
              </span>
            </div>
            <h1 className="text-4xl text-white mb-4" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              Confront Princess Wooman
            </h1>
            <p className="text-xl text-gray-300" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              Master CSS Animations & Transitions
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-purple-800/50 rounded-lg p-6 mb-8 border-l-4 border-pink-500">
            <p className="text-white text-lg" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              {step === 1 ? (
                <>
                  👸 {characterName} finally reaches Princess Wooman's castle. The gates shimmer with dark magic.
                  <br/><br/>
                  <em className="text-pink-400">"Ah, Code Man,"</em> Princess Wooman's voice echoes. 
                  <em className="text-pink-400">"To enter my domain, show me your mastery of transitions! Make elements change smoothly!"</em>
                </>
              ) : (
                <>
                  ⚡ The gates open! Princess Wooman appears, surrounded by swirling magical effects.
                  <br/><br/>
                  <em className="text-pink-400">"Impressive! But can you create true animations? Show me movement and life!"</em>
                  <br/>
                  <em className="text-purple-300">"Animations make the web come alive!"</em>
                </>
              )}
            </p>
          </div>

          {/* Tutorial Box */}
          <div className="bg-blue-900/30 rounded-lg p-6 mb-6 border border-blue-500/30">
            <h3 className="text-xl text-blue-300 mb-3" style={{ fontFamily: 'Source Code Pro, monospace' }}>📚 Animations & Transitions:</h3>
            {step === 1 ? (
              <div className="text-white space-y-2" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                <p>• <strong>transition</strong> creates smooth changes between states</p>
                <p>• Format: <code className="bg-black/50 px-2 py-1 rounded">transition: property duration;</code></p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">transition: all 0.3s;</code> - Smooth 0.3s transition</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">transition: color 1s ease;</code> - Color change with easing</p>
                <p>• Works great with :hover effects!</p>
              </div>
            ) : (
              <div className="text-white space-y-2" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                <p>• <strong>animation</strong> creates repeating or complex motion</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">animation: name duration;</code></p>
                <p>• Example: <code className="bg-black/50 px-2 py-1 rounded">animation: spin 2s infinite;</code></p>
                <p>• Define with @keyframes: <code className="bg-black/50 px-2 py-1 rounded">@keyframes spin {"{ ... }"}</code></p>
                <p>• You can animate position, opacity, transform, and more!</p>
              </div>
            )}
          </div>

          {/* Code Input */}
          <div className="mb-6">
            <label className="block text-pink-400 mb-2 text-lg" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              {step === 1 ? "Add a transition:" : "Create an animation:"}
            </label>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-40 px-4 py-3 bg-gray-900 border-2 border-pink-500/50 rounded-lg text-green-400 font-mono text-lg resize-none focus:outline-none focus:border-pink-400"
              placeholder={step === 1 ? ".gate {\n  transition: ;\n}" : ".magic {\n  animation: ;\n}"}
              style={{ fontFamily: 'Source Code Pro, monospace' }}
            />
          </div>

          {/* Hint Button */}
          <Button
            onClick={() => setShowHint(!showHint)}
            variant="outline"
            className="mb-4 border-pink-500 text-pink-400 hover:bg-pink-500/10"
            style={{ fontFamily: 'Source Code Pro, monospace' }}
          >
            <Lightbulb className="mr-2" />
            {showHint ? "Hide Hint" : "Show Hint"}
          </Button>

          {showHint && (
            <Alert className="mb-6 bg-pink-900/30 border-pink-500/50">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription className="text-pink-200" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                {step === 1 
                  ? "Hint: Try transition: all 0.5s; or transition: transform 1s ease;"
                  : "Hint: Try animation: pulse 2s infinite; (you don't need to define @keyframes for this exercise)"}
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
            className="w-full py-6 text-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg"
            style={{ fontFamily: 'Source Code Pro, monospace' }}
          >
            ✨ Unleash Your Animation! ✨
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
