import { useState } from "react";
import { IntermediateLevelProps } from "../IntermediateQuest";
import { Button } from "../ui/button";
import { Check, X, Lightbulb } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export function IntermediateLevel5({ onComplete, characterName }: IntermediateLevelProps) {
  const [code, setCode] = useState("");
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [step, setStep] = useState(1);

  const checkCode = () => {
    const cleanCode = code.trim().toLowerCase();
    
    if (step === 1) {
      // Check for @media query
      if (cleanCode.includes("@media") && (cleanCode.includes("max-width") || cleanCode.includes("min-width"))) {
        setFeedback({ type: "success", message: "Excellent! The lava parts as your code adapts! The volcano trembles..." });
        setTimeout(() => {
          setStep(2);
          setCode("");
          setFeedback(null);
          setShowHint(false);
        }, 2000);
      } else {
        setFeedback({ type: "error", message: "Not quite. Use @media with max-width or min-width to create responsive designs!" });
      }
    } else if (step === 2) {
      // Check for responsive units (%, vw, vh, em, rem)
      if (cleanCode.includes("%") || cleanCode.includes("vw") || cleanCode.includes("vh") || 
          cleanCode.includes("em") || cleanCode.includes("rem")) {
        setFeedback({ type: "success", message: "Perfect! You've mastered responsive design! The volcano path is safe to cross!" });
        setTimeout(() => {
          onComplete();
        }, 2500);
      } else {
        setFeedback({ type: "error", message: "Try using responsive units like %, vw, vh, em, or rem instead of fixed pixels!" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-orange-700 to-red-800 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-8 border-2 border-orange-500/50 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-red-900/50 px-6 py-2 rounded-full mb-4">
              <span className="text-orange-300 text-xl" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                🌋 Location 5: Volcano
              </span>
            </div>
            <h1 className="text-4xl text-white mb-4" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              Cross the Treacherous Volcano
            </h1>
            <p className="text-xl text-gray-300" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              Master Responsive Design & Media Queries
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-orange-800/50 rounded-lg p-6 mb-8 border-l-4 border-red-500">
            <p className="text-white text-lg" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              {step === 1 ? (
                <>
                  🌋 {characterName} approaches the active volcano. Lava flows block the path, shifting and changing size.
                  <br/><br/>
                  <em className="text-orange-400">"The lava responds to different screen sizes,"</em> a fire spirit warns. 
                  <em className="text-orange-400">"Use media queries to control its flow at different widths!"</em>
                </>
              ) : (
                <>
                  🔥 The lava calms! But the path ahead changes constantly.
                  <br/><br/>
                  <em className="text-orange-400">"Now use responsive units that adapt to any screen size!"</em>
                  <br/>
                  <em className="text-red-300">"Forget fixed pixels - use percentages, viewport units, or relative units!"</em>
                </>
              )}
            </p>
          </div>

          {/* Tutorial Box */}
          <div className="bg-blue-900/30 rounded-lg p-6 mb-6 border border-blue-500/30">
            <h3 className="text-xl text-blue-300 mb-3" style={{ fontFamily: 'Source Code Pro, monospace' }}>📚 Responsive Design:</h3>
            {step === 1 ? (
              <div className="text-white space-y-2" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                <p>• <strong>@media queries</strong> apply styles at different screen sizes</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">@media (max-width: 768px) {"{ ... }"}</code> - For small screens</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">@media (min-width: 1024px) {"{ ... }"}</code> - For large screens</p>
                <p>• Common breakpoints: 768px (tablet), 1024px (desktop)</p>
                <p>• Makes websites work on phones, tablets, and computers!</p>
              </div>
            ) : (
              <div className="text-white space-y-2" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                <p>• <strong>Responsive units</strong> adapt to screen size</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">%</code> - Percentage of parent element</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">vw/vh</code> - Viewport width/height (1vw = 1% of viewport)</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">em</code> - Relative to parent font size</p>
                <p>• <code className="bg-black/50 px-2 py-1 rounded">rem</code> - Relative to root font size</p>
              </div>
            )}
          </div>

          {/* Code Input */}
          <div className="mb-6">
            <label className="block text-orange-400 mb-2 text-lg" style={{ fontFamily: 'Source Code Pro, monospace' }}>
              {step === 1 ? "Create a media query:" : "Use responsive units:"}
            </label>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-40 px-4 py-3 bg-gray-900 border-2 border-orange-500/50 rounded-lg text-green-400 font-mono text-lg resize-none focus:outline-none focus:border-orange-400"
              placeholder={step === 1 ? "@media (max-width: 768px) {\n  .lava { }\n}" : ".path {\n  width: ;\n}"}
              style={{ fontFamily: 'Source Code Pro, monospace' }}
            />
          </div>

          {/* Hint Button */}
          <Button
            onClick={() => setShowHint(!showHint)}
            variant="outline"
            className="mb-4 border-orange-500 text-orange-400 hover:bg-orange-500/10"
            style={{ fontFamily: 'Source Code Pro, monospace' }}
          >
            <Lightbulb className="mr-2" />
            {showHint ? "Hide Hint" : "Show Hint"}
          </Button>

          {showHint && (
            <Alert className="mb-6 bg-orange-900/30 border-orange-500/50">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription className="text-orange-200" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                {step === 1 
                  ? "Hint: Try @media (max-width: 600px) { .lava { display: none; } }"
                  : "Hint: Try width: 50%; or width: 80vw; or font-size: 2rem;"}
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
            className="w-full py-6 text-xl bg-gradient-to-r from-red-600 to-orange-700 hover:from-red-700 hover:to-orange-800 text-white shadow-lg"
            style={{ fontFamily: 'Source Code Pro, monospace' }}
          >
            🌋 Tame the Volcano! 🌋
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
