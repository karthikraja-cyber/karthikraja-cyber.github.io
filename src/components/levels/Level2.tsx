import { useState } from "react";
import { LevelProps } from "../CastleEscape";
import { Button } from "../ui/button";
import { Check, X, Lightbulb } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export function Level2({ onComplete, characterName }: LevelProps) {
  const [code, setCode] = useState("");
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [step, setStep] = useState(1);

  const checkCode = () => {
    const cleanCode = code.trim().toLowerCase();
    
    if (step === 1) {
      // Check for link tag
      if (cleanCode.includes("<a") && cleanCode.includes("href=") && cleanCode.includes("</a>")) {
        setFeedback({ type: "success", message: "Brilliant! The enchanted map reveals the path forward!" });
        setTimeout(() => {
          setStep(2);
          setCode("");
          setFeedback(null);
          setShowHint(false);
        }, 2000);
      } else {
        setFeedback({ type: "error", message: "Not quite. Links need the <a> tag with an href attribute. Try again!" });
      }
    } else if (step === 2) {
      // Check for img tag
      if (cleanCode.includes("<img") && cleanCode.includes("src=") && cleanCode.includes("alt=")) {
        setFeedback({ type: "success", message: "Perfect! The ancient key materializes! You found the storage room exit!" });
        setTimeout(() => {
          onComplete();
        }, 2500);
      } else {
        setFeedback({ type: "error", message: "Remember: images use <img> with both src and alt attributes!" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2563EB] via-[#16A34A] to-[#15803D] flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-8 border-2 border-[#4ADE80]/50 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-[#2563EB]/30 px-6 py-2 rounded-full mb-4">
              <span className="text-[#4ADE80] text-xl">🗝️ Level 2: The Storage Room</span>
            </div>
            <h1 className="text-4xl text-white mb-4">
              Navigate the Storage Room
            </h1>
            <p className="text-xl text-gray-300">
              Master Links & Images
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-gray-800/50 rounded-lg p-6 mb-8 border-l-4 border-[#4ADE80]">
            <p className="text-white text-lg">
              {step === 1 ? (
                <>
                  🗺️ You enter a dusty storage room filled with ancient scrolls and maps, {characterName}. 
                  To find your way out, you need to create a magical link to reveal the hidden passage.
                  <br/><br/>
                  <em className="text-[#4ADE80]">"Links connect one place to another,"</em> says a ghostly librarian. 
                  <em className="text-[#4ADE80]">"Use the a tag with an href attribute!"</em>
                </>
              ) : (
                <>
                  🖼️ The passage opens to reveal a wall covered with ancient paintings. One spot glows mysteriously. 
                  You must place an image there to unlock the door!
                  <br/><br/>
                  <em className="text-[#4ADE80]">"Images are placed using img tags,"</em> the librarian whispers. 
                  <em className="text-[#4ADE80]">"Remember: images need a source (src) and alternative text (alt)!"</em>
                </>
              )}
            </p>
          </div>

          {/* Tutorial Box */}
          <div className="bg-blue-900/30 rounded-lg p-6 mb-6 border border-blue-500/30">
            <h3 className="text-xl text-blue-300 mb-3">📚 Learn About {step === 1 ? "Links" : "Images"}:</h3>
            {step === 1 ? (
              <div className="text-white space-y-2">
                <p>• Links use the a tag (anchor)</p>
                <p>• The href attribute tells where the link goes</p>
                <p>• Example: <code className="bg-black/50 px-2 py-1 rounded">{"<a href=\"https://example.com\">Click me</a>"}</code></p>
                <p>• The text between the tags is what users click on</p>
              </div>
            ) : (
              <div className="text-white space-y-2">
                <p>• Images use the img tag (it's self-closing!)</p>
                <p>• The src attribute specifies the image URL</p>
                <p>• The alt attribute describes the image (accessibility)</p>
                <p>• Example: <code className="bg-black/50 px-2 py-1 rounded">{"<img src=\"castle.jpg\" alt=\"A castle\">"}</code></p>
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
                <>Create a link that says <span className="text-[#4ADE80]">"Next Floor"</span> and links to <span className="text-[#4ADE80]">"library.html"</span></>
              ) : (
                <>Create an image tag with src=<span className="text-[#4ADE80]">"key.jpg"</span> and alt text <span className="text-[#4ADE80]">"Ancient Key"</span></>
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
                    <>Links use the 'a' tag with an 'href' attribute. Put the URL in quotes after href=</>
                  ) : (
                    <>Images use the 'img' tag. You need both 'src' (the file path) and 'alt' (description) attributes. No closing tag needed!</>
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
            className="w-full py-6 text-xl bg-gradient-to-r from-[#22C55E] to-[#16A34A] hover:from-[#16A34A] hover:to-[#15803D] text-white shadow-lg"
            disabled={!code.trim()}
          >
            🗝️ Activate the Magic (Check Answer)
          </Button>

          {/* Progress */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Step {step} of 2 • Level 2 of 4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}