import { Button } from "../ui/button";
import { ArrowLeft, Users, Heart, Code } from "lucide-react";

export function AboutPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 p-6">
      <div className="max-w-4xl mx-auto pt-20">
        <Button
          onClick={onBack}
          className="mb-6 bg-purple-600 hover:bg-purple-700 text-white"
        >
          <ArrowLeft className="mr-2" /> Back
        </Button>

        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border-2 border-purple-500/50">
          <h1 className="text-5xl text-yellow-400 mb-8 text-center">About CodeQuest</h1>
          
          <div className="space-y-6 text-white text-lg">
            <div className="flex items-start gap-4">
              <Code className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl text-yellow-400 mb-2">Our Mission</h2>
                <p>
                  CodeQuest was created to make learning HTML fun and engaging through gamification. 
                  We believe that coding should be accessible to everyone, and what better way to learn 
                  than through an epic adventure?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Users className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl text-yellow-400 mb-2">Who We Are</h2>
                <p>
                  We're a team of educators, developers, and game designers passionate about making 
                  coding education accessible and enjoyable. Our goal is to help aspiring developers 
                  build a strong foundation in web development through interactive storytelling.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Heart className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl text-yellow-400 mb-2">Why We Made This</h2>
                <p>
                  Traditional coding tutorials can be dry and overwhelming. We wanted to create an 
                  experience that makes learning feel like playing a game. Every challenge you complete 
                  isn't just a lesson—it's a step toward freedom in your coding journey.
                </p>
              </div>
            </div>

            <div className="bg-purple-900/50 rounded-lg p-6 mt-8">
              <h2 className="text-2xl text-yellow-400 mb-3">What You'll Learn</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>HTML structure and basic tags</li>
                <li>Creating links and embedding images</li>
                <li>Building lists and formatting text</li>
                <li>Creating forms and collecting user input</li>
                <li>And much more as we continue to expand!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
