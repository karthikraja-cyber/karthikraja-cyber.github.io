import { useState } from "react";
import intermediateMapImage from "figma:asset/ec28f364c58eb03e7e2071924ecd6596c3b9e080.png";
import { IntermediateLevel1 } from "./intermediate-levels/IntermediateLevel1";
import { IntermediateLevel2 } from "./intermediate-levels/IntermediateLevel2";
import { IntermediateLevel3 } from "./intermediate-levels/IntermediateLevel3";
import { IntermediateLevel4 } from "./intermediate-levels/IntermediateLevel4";
import { IntermediateLevel5 } from "./intermediate-levels/IntermediateLevel5";
import { IntermediateLevel6 } from "./intermediate-levels/IntermediateLevel6";
import { IntermediateStoryline } from "./IntermediateStoryline";
import { IntermediateMap } from "./IntermediateMap";
import { Button } from "./ui/button";
import { Trophy, Home } from "lucide-react";
import { GameSidebar } from "./GameSidebar";
import { AboutPage } from "./pages/AboutPage";
import { FAQPage } from "./pages/FAQPage";
import { FeedbackPage } from "./pages/FeedbackPage";
import { WhyCodeQuestPage } from "./pages/WhyCodeQuestPage";
import { TutorialPage } from "./pages/TutorialPage";

export interface IntermediateLevelProps {
  onComplete: () => void;
  characterName: string;
}

export function IntermediateQuest({ onBack }: { onBack: () => void }) {
  const [currentLevel, setCurrentLevel] = useState<number>(0); // 0 = storyline, 1-6 = levels, -1 = map
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [characterName, setCharacterName] = useState<string>("");
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [currentPage, setCurrentPage] = useState<"game" | "about" | "faq" | "feedback" | "why" | "tutorial">("game");

  const handleLevelComplete = () => {
    const nextLevel = currentLevel + 1;
    setCompletedLevels([...completedLevels, currentLevel]);
    
    if (currentLevel === 6) {
      setIsGameComplete(true);
    } else {
      // Return to map after completing a level
      setCurrentLevel(-1);
    }
  };

  const handleStartQuest = () => {
    setCurrentLevel(-1); // Show map after storyline
  };

  const handleNavigation = (page: "home" | "levels" | "about" | "faq" | "feedback" | "why" | "tutorial") => {
    if (page === "home") {
      setCurrentPage("game");
      setCurrentLevel(0);
      setIsGameComplete(false);
    } else {
      setCurrentPage(page as "about" | "faq" | "feedback" | "why" | "tutorial");
    }
  };

  const handleSelectLocation = (level: number) => {
    setCurrentLevel(level);
  };

  // Navigation pages
  if (currentPage === "about") {
    return (
      <>
        <GameSidebar onNavigate={handleNavigation} currentPage="about" />
        <AboutPage onBack={() => setCurrentPage("game")} />
      </>
    );
  }

  if (currentPage === "faq") {
    return (
      <>
        <GameSidebar onNavigate={handleNavigation} currentPage="faq" />
        <FAQPage onBack={() => setCurrentPage("game")} />
      </>
    );
  }

  if (currentPage === "feedback") {
    return (
      <>
        <GameSidebar onNavigate={handleNavigation} currentPage="feedback" />
        <FeedbackPage onBack={() => setCurrentPage("game")} />
      </>
    );
  }

  if (currentPage === "why") {
    return (
      <>
        <GameSidebar onNavigate={handleNavigation} currentPage="why" />
        <WhyCodeQuestPage onBack={() => setCurrentPage("game")} />
      </>
    );
  }

  if (currentPage === "tutorial") {
    return (
      <>
        <GameSidebar onNavigate={handleNavigation} currentPage="tutorial" />
        <TutorialPage onBack={() => setCurrentPage("game")} />
      </>
    );
  }

  // Intro Storyline Screen
  if (currentLevel === 0) {
    return (
      <>
        <GameSidebar onNavigate={handleNavigation} currentPage="game" />
        <IntermediateStoryline 
          onStart={handleStartQuest}
          onBack={onBack}
          characterName={characterName}
          setCharacterName={setCharacterName}
        />
      </>
    );
  }

  // Map Screen
  if (currentLevel === -1) {
    return (
      <>
        <GameSidebar onNavigate={handleNavigation} currentPage="game" />
        <IntermediateMap
          onSelectLocation={handleSelectLocation}
          completedLevels={completedLevels}
          onBack={() => setCurrentLevel(0)}
        />
      </>
    );
  }

  // Victory Screen
  if (isGameComplete) {
    return (
      <>
        <GameSidebar onNavigate={handleNavigation} currentPage="game" />
        <div className="min-h-screen bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center p-6">
          <div className="max-w-4xl w-full">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-12 border-4 border-pink-300 text-center">
              <Trophy className="w-32 h-32 mx-auto mb-8 text-pink-300" />
              <h1 className="text-6xl text-white mb-6" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                🎉 VICTORY! 🎉
              </h1>
              <p className="text-3xl text-pink-200 mb-8" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                Congratulations, {characterName || "Code Man"}!
              </p>
              <p className="text-xl text-white mb-8" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                You have successfully rescued the princess and defeated Princess Wooman! Through your mastery of intermediate HTML and CSS, you've navigated treacherous lands and emerged victorious!
              </p>
              <div className="bg-purple-900/50 rounded-lg p-6 mb-8">
                <h2 className="text-2xl text-pink-400 mb-4" style={{ fontFamily: 'Source Code Pro, monospace' }}>Skills Mastered:</h2>
                <ul className="text-white text-xl space-y-3" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                  <li>✅ CSS Selectors & Properties</li>
                  <li>✅ CSS Layout (Display & Position)</li>
                  <li>✅ Visual Elements (Borders, Shadows, Gradients)</li>
                  <li>✅ CSS Animations & Transitions</li>
                  <li>✅ Responsive Design & Media Queries</li>
                  <li>✅ CSS Grid & Flexbox</li>
                </ul>
              </div>
              <p className="text-xl text-white mb-8" style={{ fontFamily: 'Source Code Pro, monospace' }}>
                You are now a true CSS master!
              </p>
              <div className="space-y-4">
                <Button
                  className="w-full py-6 text-2xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg"
                  onClick={() => {
                    setCurrentLevel(0);
                    setCompletedLevels([]);
                    setIsGameComplete(false);
                    setCharacterName("");
                  }}
                  style={{ fontFamily: 'Source Code Pro, monospace' }}
                >
                  🔄 Play Again
                </Button>
                <Button
                  className="w-full py-4 text-xl bg-gray-700 hover:bg-gray-600 text-white"
                  onClick={onBack}
                  style={{ fontFamily: 'Source Code Pro, monospace' }}
                >
                  <Home className="mr-2" /> Return to Main Menu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Level Screens
  return (
    <>
      <GameSidebar onNavigate={handleNavigation} currentPage="game" />
      <div className="min-h-screen">
        {currentLevel === 1 && (
          <IntermediateLevel1 onComplete={handleLevelComplete} characterName={characterName || "Code Man"} />
        )}
        {currentLevel === 2 && (
          <IntermediateLevel2 onComplete={handleLevelComplete} characterName={characterName || "Code Man"} />
        )}
        {currentLevel === 3 && (
          <IntermediateLevel3 onComplete={handleLevelComplete} characterName={characterName || "Code Man"} />
        )}
        {currentLevel === 4 && (
          <IntermediateLevel4 onComplete={handleLevelComplete} characterName={characterName || "Code Man"} />
        )}
        {currentLevel === 5 && (
          <IntermediateLevel5 onComplete={handleLevelComplete} characterName={characterName || "Code Man"} />
        )}
        {currentLevel === 6 && (
          <IntermediateLevel6 onComplete={handleLevelComplete} characterName={characterName || "Code Man"} />
        )}
      </div>
    </>
  );
}
