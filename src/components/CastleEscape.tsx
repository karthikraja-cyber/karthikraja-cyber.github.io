import { useState } from "react";
import castleMapImage from "figma:asset/db85b1779f95459a7030f3ecfa8c55e634f29eac.png";
import { Level1 } from "./levels/Level1";
import { Level2 } from "./levels/Level2";
import { Level3 } from "./levels/Level3";
import { Level4 } from "./levels/Level4";
import { Button } from "./ui/button";
import { Trophy, Home } from "lucide-react";
import { GameSidebar } from "./GameSidebar";
import { AboutPage } from "./pages/AboutPage";
import { FAQPage } from "./pages/FAQPage";
import { FeedbackPage } from "./pages/FeedbackPage";
import { WhyCodeQuestPage } from "./pages/WhyCodeQuestPage";
import { TutorialPage } from "./pages/TutorialPage";
import { ChooseLevelPage } from "./pages/ChooseLevelPage";

export interface LevelProps {
  onComplete: () => void;
  characterName: string;
}

export function CastleEscape({ onBack }: { onBack: () => void }) {
  const [currentLevel, setCurrentLevel] = useState<number>(0); // 0 = intro, 1-4 = levels
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [characterName, setCharacterName] = useState<string>("");
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [currentPage, setCurrentPage] = useState<"game" | "about" | "faq" | "feedback" | "why" | "tutorial" | "levels">("game");

  const handleLevelComplete = () => {
    const nextLevel = currentLevel + 1;
    setCompletedLevels([...completedLevels, currentLevel]);
    
    if (currentLevel === 4) {
      setIsGameComplete(true);
    } else {
      setCurrentLevel(nextLevel);
    }
  };

  const handleStartGame = (name: string) => {
    setCharacterName(name);
    setCurrentLevel(1);
  };

  const handleNavigation = (page: "home" | "levels" | "about" | "faq" | "feedback" | "why" | "tutorial") => {
    if (page === "home") {
      // Navigate back to the main menu (HomePage)
      onBack();
    } else if (page === "levels") {
      setCurrentPage("levels");
    } else {
      setCurrentPage(page);
    }
  };

  const handleSelectLevel = (level: number) => {
    setCurrentPage("game");
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

  if (currentPage === "levels") {
    return (
      <>
        <GameSidebar onNavigate={handleNavigation} currentPage="levels" />
        <ChooseLevelPage 
          onBack={() => setCurrentPage("game")} 
          onSelectLevel={handleSelectLevel}
          completedLevels={completedLevels}
        />
      </>
    );
  }

  // Intro Screen
  if (currentLevel === 0) {
    return (
      <>
        <GameSidebar onNavigate={handleNavigation} currentPage="game" />
        <div className="min-h-screen bg-gradient-to-b from-[#1E40AF] via-[#15803D] to-blue-900 flex items-center justify-center p-6">
          <div className="max-w-4xl w-full">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border-2 border-[#4ADE80]/50">
              <div className="text-center mb-8">
                <h1 className="text-5xl text-[#4ADE80] mb-4">
                  🏰 Escape from Hoi Shing Ping's Dracula's Castle 🏰
                </h1>
                <p className="text-xl text-white mb-6">
                  You are a noble warrior trapped in the castle dungeon! To escape, you must master the ancient art of HTML—the language that powers the web.
                </p>
              </div>

              <div className="mb-8">
                <img 
                  src={castleMapImage} 
                  alt="Castle Map" 
                  className="w-full max-w-2xl mx-auto rounded-lg border-4 border-[#4ADE80]/50 shadow-2xl"
                />
              </div>

              <div className="bg-[#2563EB]/30 rounded-lg p-6 mb-8">
                <h2 className="text-2xl text-[#4ADE80] mb-4">Your Quest:</h2>
                <ul className="text-white space-y-2">
                  <li>⚔️ <strong>Level 1:</strong> The Dungeon - Learn HTML Structure & Tags</li>
                  <li>🗝️ <strong>Level 2:</strong> The Storage Room - Master Links & Images</li>
                  <li>📜 <strong>Level 3:</strong> The Library - Create Lists & Format Text</li>
                  <li>🚪 <strong>Level 4:</strong> The Exit - Build Forms to Unlock Freedom</li>
                </ul>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter your warrior name..."
                  className="w-full px-6 py-4 bg-[#2563EB]/30 border-2 border-[#4ADE80]/50 rounded-lg text-white placeholder-gray-400 text-xl"
                  value={characterName}
                  onChange={(e) => setCharacterName(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && characterName.trim()) {
                      handleStartGame(characterName.trim());
                    }
                  }}
                />
                <Button
                  className="w-full py-8 text-2xl bg-gradient-to-r from-[#22C55E] to-[#16A34A] hover:from-[#16A34A] hover:to-[#15803D] text-white shadow-lg"
                  onClick={() => {
                    if (characterName.trim()) {
                      handleStartGame(characterName.trim());
                    }
                  }}
                  disabled={!characterName.trim()}
                >
                  ⚔️ Begin Your Escape! ⚔️
                </Button>
                <Button
                  className="w-full py-4 text-xl bg-gray-700 hover:bg-gray-600 text-white"
                  onClick={onBack}
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

  // Victory Screen
  if (isGameComplete) {
    return (
      <>
        <GameSidebar onNavigate={handleNavigation} currentPage="game" />
        <div className="min-h-screen bg-gradient-to-b from-[#2563EB] via-[#16A34A] to-[#15803D] flex items-center justify-center p-6">
          <div className="max-w-4xl w-full">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-12 border-4 border-[#4ADE80] text-center">
              <Trophy className="w-32 h-32 mx-auto mb-8 text-[#4ADE80]" />
              <h1 className="text-6xl text-white mb-6">
                🎉 FREEDOM! 🎉
              </h1>
              <p className="text-3xl text-white mb-8">
                Congratulations, {characterName}!
              </p>
              <p className="text-xl text-white mb-8">
                You have escaped from Hoi Shing Ping's Dracula's Castle! Through your mastery of HTML, you've broken free from the dungeon, navigated the treacherous castle, and emerged victorious!
              </p>
              <div className="bg-[#2563EB]/30 rounded-lg p-6 mb-8">
                <h2 className="text-2xl text-[#4ADE80] mb-4">Skills Mastered:</h2>
                <ul className="text-white text-xl space-y-3">
                  <li>✅ HTML Structure & Basic Tags</li>
                  <li>✅ Links & Images</li>
                  <li>✅ Lists & Text Formatting</li>
                  <li>✅ Forms & Input Elements</li>
                </ul>
              </div>
              <p className="text-xl text-white mb-8">
                You are now ready to build amazing things on the web!
              </p>
              <div className="space-y-4">
                <Button
                  className="w-full py-6 text-2xl bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white shadow-lg"
                  onClick={() => {
                    setCurrentLevel(0);
                    setCompletedLevels([]);
                    setIsGameComplete(false);
                    setCharacterName("");
                  }}
                >
                  🔄 Play Again
                </Button>
                <Button
                  className="w-full py-4 text-xl bg-gray-700 hover:bg-gray-600 text-white"
                  onClick={onBack}
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
          <Level1 onComplete={handleLevelComplete} characterName={characterName} />
        )}
        {currentLevel === 2 && (
          <Level2 onComplete={handleLevelComplete} characterName={characterName} />
        )}
        {currentLevel === 3 && (
          <Level3 onComplete={handleLevelComplete} characterName={characterName} />
        )}
        {currentLevel === 4 && (
          <Level4 onComplete={handleLevelComplete} characterName={characterName} />
        )}
      </div>
    </>
  );
}