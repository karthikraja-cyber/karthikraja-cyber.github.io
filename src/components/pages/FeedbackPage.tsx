import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, Send } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";
import { projectId, publicAnonKey } from "../../utils/supabase/info";

export function FeedbackPage({ onBack }: { onBack: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-7ba61365/feedback`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            name: name || "Anonymous",
            email: email || "",
            feedback: feedback,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit feedback");
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setFeedback("");
      }, 5000);
    } catch (err) {
      console.error("Error submitting feedback:", err);
      setError(err instanceof Error ? err.message : "Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-teal-900 to-blue-900 p-6">
      <div className="max-w-4xl mx-auto pt-20">
        <Button
          onClick={onBack}
          className="mb-6 bg-[#3B82F6] hover:bg-[#2563EB] text-white"
        >
          <ArrowLeft className="mr-2" /> Back
        </Button>

        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border-2 border-green-500/50">
          <h1 className="text-5xl text-[#4ADE80] mb-4 text-center">We'd Love Your Feedback!</h1>
          <p className="text-xl text-white text-center mb-8">
            Help us improve CodeQuest by sharing your thoughts, suggestions, or reporting any issues.
          </p>

          {submitted && (
            <Alert className="mb-6 bg-green-900/50 border-green-500">
              <AlertDescription className="text-white text-lg text-center">
                ✨ Thank you for your feedback! Your input helps us make CodeQuest better for everyone.
              </AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert className="mb-6 bg-red-900/50 border-red-500">
              <AlertDescription className="text-white text-lg text-center">
                ❌ {error}
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white text-lg mb-2">
                Your Name (optional)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border-2 border-green-500/50 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                placeholder="Enter your name..."
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-white text-lg mb-2">
                Email (optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border-2 border-green-500/50 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-white text-lg mb-2">
                Your Feedback <span className="text-red-400">*</span>
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
                rows={8}
                className="w-full px-4 py-3 bg-gray-900/50 border-2 border-green-500/50 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none resize-none"
                placeholder="Tell us what you think, report a bug, or suggest new features..."
                disabled={isSubmitting}
              />
            </div>

            <Button
              type="submit"
              className="w-full py-6 text-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!feedback.trim() || isSubmitting}
            >
              <Send className="mr-2" /> {isSubmitting ? "Sending..." : "Submit Feedback"}
            </Button>
          </form>

          <div className="mt-8 bg-blue-900/30 border border-blue-500/30 rounded-lg p-6">
            <h2 className="text-2xl text-blue-300 mb-3">💡 What to Share:</h2>
            <ul className="text-white space-y-2 list-disc list-inside">
              <li>Bug reports and technical issues</li>
              <li>Suggestions for new features or levels</li>
              <li>Feedback on difficulty and pacing</li>
              <li>Ideas for improving the learning experience</li>
              <li>General thoughts and comments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}