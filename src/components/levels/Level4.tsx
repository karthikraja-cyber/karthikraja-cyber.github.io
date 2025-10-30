import { useState } from "react";
import { LevelProps } from "../CastleEscape";
import { Button } from "../ui/button";
import { Check, X, Lightbulb } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export function Level4({ onComplete, characterName }: LevelProps) {
  const [code, setCode] = useState("");
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [step, setStep] = useState(1);

  const checkCode = () => {
    const cleanCode = code.trim().toLowerCase();
    
    if (step === 1) {
      // Check for input tag
      if (cleanCode.includes("<input") && cleanCode.includes("type=") && cleanCode.includes("name=")) {
        setFeedback({ type: "success", message: "Yes! The first lock clicks open!" });
        setTimeout(() => {
          setStep(2);
          setCode("");
          setFeedback(null);
          setShowHint(false);
        }, 2000);
      } else {
        setFeedback({ type: "error", message: "Remember: <input> needs type and name attributes!" });
      }
    } else if (step === 2) {
      // Check for complete form
      const hasForm = cleanCode.includes("<form") && cleanCode.includes("</form>");
      const hasLabel = cleanCode.includes("<label") && cleanCode.includes("</label>");
      const hasButton = cleanCode.includes("<button") && cleanCode.includes("</button>");
      
      if (hasForm && hasLabel && hasButton) {
        setFeedback({ type: "success", message: "FREEDOM! The castle door swings open! You've escaped!" });
        setTimeout(() => {
          onComplete();
        }, 2500);
      } else {
        setFeedback({ type: "error", message: "You need all three: <form>, <label>, and <button>!" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-900 via-cyan-900 to-blue-900 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-8 border-2 border-cyan-500/50 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-cyan-900/50 px-6 py-2 rounded-full mb-4">
              <span className="text-cyan-300 text-xl">🚪 Level 4: The Exit</span>
            </div>
            <h1 className="text-4xl text-white mb-4">
              {step === 1 ? "Unlock the Final Door" : "Build the Escape Portal"}
            </h1>
            <p className="text-xl text-gray-300">
              Master Forms & Input Elements
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-gray-800/50 rounded-lg p-6 mb-8 border-l-4 border-cyan-500">
            <p className="text-white text-lg">
              {step === 1 ? (
                <>
                  🔐 You've reached the castle exit, {characterName}! But the massive door has a magical lock that requires input. 
                  You must create an input field to enter the secret password!
                  <br/><br/>
                  <em className="text-cyan-400">"Forms collect information from users,"</em> whispers the castle guardian. 
                  <em className="text-cyan-400">"The input tag creates fields where users can type!"</em>
                </>
              ) : (
                <>
                  ⚡ The lock is weakening! Now you must construct the complete escape portal—a full form with all its components. 
                  This is your final test, {characterName}!
                  <br/><br/>
                  <em className="text-green-400">"Wrap everything in a form tag,"</em> urges the guardian. 
                  <em className="text-green-400">"Add a label for clarity and a button to activate the portal!"</em>
                </>
              )}
            </p>
          </div>

          {/* Tutorial Box */}
          <div className="bg-blue-900/30 rounded-lg p-6 mb-6 border border-blue-500/30">
            <h3 className="text-xl text-blue-300 mb-3">📚 Learn About {step === 1 ? "Input Fields" : "Complete Forms"}:</h3>
            {step === 1 ? (
              <div className="text-white space-y-2">
                <p>• input tag creates an input field (self-closing!)</p>
                <p>• The type attribute defines what kind of input (text, email, password, etc.)</p>
                <p>• The name attribute identifies the input</p>
                <p>• Example: <code className="bg-black/50 px-2 py-1 rounded">{"<input type=\"text\" name=\"username\">"}</code></p>
                <p>• Common types: text, email, password, number, date</p>
              </div>
            ) : (
              <div className="text-white space-y-2">
                <p>• form tag wraps all form elements</p>
                <p>• label describes what each input is for</p>
                <p>• button submits the form or triggers actions</p>
                <p>• Example form structure:</p>
                <pre className="bg-black/50 px-3 py-2 rounded mt-2 text-sm">
{`<form>
  <label>Email</label>
  <input type="email" name="email">
  <button>Submit</button>
</form>`}
                </pre>
              </div>
            )}
          </div>

          {/* Challenge */}
          <div className="bg-[#85B380]/30 rounded-lg p-6 mb-6 border-2 border-[#91CEA0]/50">
            <h3 className="text-2xl text-[#B3E8B1] mb-4">
              ⚡ Your Final Challenge:
            </h3>
            <p className="text-white text-lg mb-4">
              {step === 1 ? (
                <>
                  Create an input field for a password:
                  <ul className="list-disc list-inside mt-2 text-yellow-400">
                    <li>Type should be "password"</li>
                    <li>Name should be "secret"</li>
                  </ul>
                </>
              ) : (
                <>
                  Create a complete form with:
                  <ul className="list-disc list-inside mt-2 text-yellow-400">
                    <li>A form tag to wrap everything</li>
                    <li>A label that says "Freedom Code"</li>
                    <li>An input with type="text" and name="code"</li>
                    <li>A button that says "Escape"</li>
                  </ul>
                </>
              )}
            </p>
            
            {/* Code Input */}
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-48 px-4 py-3 bg-gray-900 border-2 border-[#91CEA0]/50 rounded-lg text-[#B3E8B1] font-mono text-lg focus:border-[#B3E8B1] focus:outline-none resize-none"
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
                    <>The 'input' tag needs two attributes: 'type' (what kind of input) and 'name' (to identify it). Both go inside the tag!</>
                  ) : (
                    <>You need three elements: a 'form' wrapper, a 'label' for the text, an 'input' for user entry, and a 'button' to submit. Build them in that order!</>
                  )}
                </p>
              </div>
            )}
          </div>

          {/* Feedback */}
          {feedback && (
            <Alert className={`mb-6 ${feedback.type === "success" ? "bg-green-900/50 border-green-500" : "bg-red-900/50 border-red-500"}`}>
              <AlertDescription className="flex items-center text-white text-lg">
                {feedback.type === "success" ? (
                  <Check className="mr-2 text-green-400" />
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
            className="w-full py-6 text-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg"
            disabled={!code.trim()}
          >
            {step === 1 ? "🔐 Insert Key (Check Answer)" : "🚪 Break Free (Check Answer)"}
          </Button>

          {/* Progress */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Step {step} of 2 • Level 4 of 4 • FINAL LEVEL!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}