import { useState } from "react";
import { Button } from "./components/ui/button";
import { CampaignList } from "./components/CampaignList";
import { CastleEscape } from "./components/CastleEscape";
import { IntermediateQuest } from "./components/IntermediateQuest";
import { GameSidebar } from "./components/GameSidebar";
import { AboutPage } from "./components/pages/AboutPage";
import { FAQPage } from "./components/pages/FAQPage";
import { FeedbackPage } from "./components/pages/FeedbackPage";
import { WhyCodeQuestPage } from "./components/pages/WhyCodeQuestPage";
import { TutorialPage } from "./components/pages/TutorialPage";

const translations: Record<
  string,
  {
    title: string;
    description: string;
    startHeading: string;
    beginner: string;
    intermediate: string;
    settingsTitle: string;
    fontSizeLabel: (size: number) => string;
    languageLabel: string;
    resetAlert: string;
  }
> = {
  English: {
    title: "Welcome To CodeQuest!",
    description:
      "Your coding adventure starts here! Explore, save princesses, slay monsters and learn how to code while you do it. CodeQuest is a free to play offline game which helps you learn and understand both basic and intermediate html/css. If you're struggling to understand html/css or just want to learn something new, this is the place for you! Now, that's enough yapping – let's get started!",
    startHeading: "Click here to Start your Coding Quest",
    beginner: "✨ Beginner Level ✨",
    intermediate: "✨ Intermediate Level ✨",
    settingsTitle: "Settings",
    fontSizeLabel: (size) => `Font Size: ${size}px`,
    languageLabel: "Language",
    resetAlert: "Settings have been reset!",
  },
  Spanish: {
    title: "¡Bienvenido a CodeQuest!",
    description:
      "¡Tu aventura de programación comienza aquí! Explora, salva princesas, derrota monstruos y aprende a programar mientras lo haces. CodeQuest es un juego offline gratuito que te ayuda a aprender y entender HTML/CSS básico e intermedio. Si te cuesta entender HTML/CSS o solamente quieres aprender algo nuevo, ¡este es tu lugar! ¡Ahora basta de charla — comencemos!",
    startHeading:
      "Haz clic aquí para empezar tu misión de programación",
    beginner: "✨ Nivel Principiante ✨",
    intermediate: "✨ Nivel Intermedio ✨",
    settingsTitle: "Ajustes",
    fontSizeLabel: (size) => `Tamaño de fuente: ${size}px`,
    languageLabel: "Idioma",
    resetAlert: "¡Ajustes restablecidos!",
  },
  French: {
    title: "Bienvenue à CodeQuest !",
    description:
      "Votre aventure de codage commence ici ! Explorez, sauvez des princesses, tuez des monstres et apprenez à coder en même temps. CodeQuest est un jeu hors-ligne gratuit qui vous aide à apprendre et comprendre le HTML/CSS basique et intermédiaire. Si vous avez du mal à comprendre le HTML/CSS ou si vous voulez simplement apprendre quelque chose de nouveau, c'est l'endroit pour vous ! Assez parlé — commençons !",
    startHeading:
      "Cliquez ici pour commencer votre quête de codage",
    beginner: "✨ Niveau Débutant ✨",
    intermediate: "✨ Niveau Intermédiaire ✨",
    settingsTitle: "Paramètres",
    fontSizeLabel: (size) => `Taille de police : ${size}px`,
    languageLabel: "Langue",
    resetAlert: "Paramètres réinitialisés !",
  },
  Hindi: {
    title: "CodeQuest में आपका स्वागत है!",
    description:
      "आपकी कोडिंग यात्रा यहीं शुरू होती है! एक्सप्लोर करें, राजकुमारियों को बचाएँ, राक्षसों को हराएँ और कोडिंग सीखें। CodeQuest एक मुफ्त ऑफ़लाइन गेम है जो आपको बेसिक और इंटरमीडिएट HTML/CSS समझने में मदद करता है। अगर आप HTML/CSS समझने में कठिनाई महसूस कर रहे हैं या कुछ नया सीखना चाहते हैं, तो यह जगह आपके लिए है! अब बहुत बोल लिया — चलो शुरू करें!",
    startHeading:
      "यहाँ क्लिक करें और अपनी कोडिंग क्वेस्ट शुरू करें",
    beginner: "✨ शुरुआती स्तर ✨",
    intermediate: "✨ मध्यवर्ती स्तर ✨",
    settingsTitle: "सेटिंग्स",
    fontSizeLabel: (size) => `फ़ॉन्ट आकार: ${size}px`,
    languageLabel: "भाषा",
    resetAlert: "सेटिंग्स रीसेट कर दी गईं!",
  },
  Japanese: {
    title: "CodeQuestへようこそ！",
    description:
      "コーディングの冒険はここから！探検し、プリンセスを救い、モンスターを倒し、コーディングを学びながらゲームを楽しみましょう。CodeQuestは、初級から中級レベルのHTML/CSSを学習・理解できる、無料でプレイできるオフラインゲームです。HTML/CSSの理解に苦しんでいる方、あるいは単に何か新しいことを学びたい方、まさにこのゲームがぴったりです！さあ、おしゃべりはここまで。さあ、始めましょう！",
    startHeading:
      "ここをクリックしてコーディングクエストを始める",
    beginner: "✨ 初級レベル ✨",
    intermediate: "✨ 中級レベル ✨",
    settingsTitle: "設定",
    fontSizeLabel: (size) => `フォントサイズ: ${size}px`,
    languageLabel: "言語",
    resetAlert: "設定がリセットされました！",
  },
};

export default function App() {
  const [currentView, setCurrentView] = useState<
    | "landing"
    | "campaigns"
    | "castleEscape"
    | "intermediateQuest"
  >("landing");

  const [currentPage, setCurrentPage] = useState<"home" | "about" | "faq" | "feedback" | "why" | "tutorial">("home");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(18);
  const [language, setLanguage] =
    useState<keyof typeof translations>("English");

  const t = translations[language];

  const handleReset = () => {
    setFontSize(18);
    setLanguage("English");
    // use the translation for alert if you want; keep English alert for reset fallback
    alert(t.resetAlert);
  };

  const dynamicFontStyle = {
    fontFamily: "Source Code Pro, monospace",
    fontSize: `${fontSize}px`,
  };

  const handleNavigation = (page: "home" | "levels" | "about" | "faq" | "feedback" | "why" | "tutorial") => {
    if (page === "home") {
      setCurrentPage("home");
    } else if (page === "levels") {
      // For now, do nothing or you could show a level selection on the home page
      setCurrentPage("home");
    } else {
      setCurrentPage(page);
    }
  };

  // Handle navigation pages
  if (currentPage === "about") {
    return (
      <>
        <GameSidebar onNavigate={handleNavigation} currentPage="about" />
        <AboutPage onBack={() => setCurrentPage("home")} />
      </>
    );
  }

  if (currentPage === "faq") {
    return (
      <>
        <GameSidebar onNavigate={handleNavigation} currentPage="faq" />
        <FAQPage onBack={() => setCurrentPage("home")} />
      </>
    );
  }

  if (currentPage === "feedback") {
    return (
      <>
        <GameSidebar onNavigate={handleNavigation} currentPage="feedback" />
        <FeedbackPage onBack={() => setCurrentPage("home")} />
      </>
    );
  }

  if (currentPage === "why") {
    return (
      <>
        <GameSidebar onNavigate={handleNavigation} currentPage="why" />
        <WhyCodeQuestPage onBack={() => setCurrentPage("home")} />
      </>
    );
  }

  if (currentPage === "tutorial") {
    return (
      <>
        <GameSidebar onNavigate={handleNavigation} currentPage="tutorial" />
        <TutorialPage onBack={() => setCurrentPage("home")} />
      </>
    );
  }

  if (currentView === "campaigns") return <CampaignList />;
  if (currentView === "castleEscape")
    return (
      <CastleEscape onBack={() => setCurrentView("landing")} />
    );
  if (currentView === "intermediateQuest")
    return (
      <IntermediateQuest
        onBack={() => setCurrentView("landing")}
      />
    );

  return (
    <>
      <GameSidebar onNavigate={handleNavigation} currentPage="home" />
      <div className="min-h-screen relative">
        <div className="relative min-h-screen">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage:
                "url(https://media.istockphoto.com/id/1301713824/vector/beautiful-landscape-with-castle.jpg?s=612x612&w=0&k=20&c=X-GZmuDV_lf2Eg7VnKO3AEhdeFf-Gx44V7fsK_ONVHU=)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Settings Button and Panel */}
          <div className="absolute top-20 left-4 z-20">
            <button
              onClick={() => setSettingsOpen(!settingsOpen)}
              className="bg-[#60A5FA] bg-opacity-70 p-2 rounded-full shadow-md hover:bg-opacity-100 hover:bg-[#3B82F6] transition"
              title="Settings"
            >
              ⚙️
            </button>

          {settingsOpen && (
            <div className="mt-2 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg w-56 space-y-3">
              <h3
                className="text-lg font-semibold text-center"
                style={{
                  fontFamily: "Source Code Pro, monospace",
                }}
              >
                {t.settingsTitle}
              </h3>

              <Button
                variant="outline"
                className="w-full"
                onClick={handleReset}
              >
                Reset Options
              </Button>

              <div>
                <label
                  className="block text-sm mb-1"
                  style={{
                    fontFamily: "Source Code Pro, monospace",
                  }}
                >
                  {t.fontSizeLabel(fontSize)}
                </label>
                <input
                  type="range"
                  min="12"
                  max="28"
                  value={fontSize}
                  onChange={(e) =>
                    setFontSize(Number(e.target.value))
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label
                  className="block text-sm mb-1"
                  style={{
                    fontFamily: "Source Code Pro, monospace",
                  }}
                >
                  {t.languageLabel}
                </label>
                <select
                  value={language}
                  onChange={(e) =>
                    // ensure type correctness
                    setLanguage(
                      e.target
                        .value as keyof typeof translations,
                    )
                  }
                  className="w-full border rounded p-1"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Japanese">Japanese</option>
                </select>
              </div>
            </div>
          )}
        </div>

          <div className="relative z-10 min-h-screen flex flex-col">
          <main className="flex-1 flex flex-col items-center justify-center px-6 pt-8 pb-12">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-16">
                <h1
                  className="text-6xl md:text-7xl text-black mb-9"
                  style={dynamicFontStyle}
                >
                  {t.title}
                </h1>
                <p
                  className="text-xl text-black mb-9"
                  style={dynamicFontStyle}
                >
                  {t.description}
                </p>
              </div>

              <div className="mb-16">
                <h2
                  className="text-5xl text-black mb-8"
                  style={dynamicFontStyle}
                >
                  {t.startHeading}
                </h2>
                <div className="flex gap-5 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-16 py-6 text-xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() =>
                      setCurrentView("castleEscape")
                    }
                    style={dynamicFontStyle}
                  >
                    {t.beginner}
                  </Button>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-16 py-6 text-xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() =>
                      setCurrentView("intermediateQuest")
                    }
                    style={dynamicFontStyle}
                  >
                    {t.intermediate}
                  </Button>
                </div>
              </div>
            </div>
          </main>
          </div>
        </div>
      </div>
    </>
  );
}