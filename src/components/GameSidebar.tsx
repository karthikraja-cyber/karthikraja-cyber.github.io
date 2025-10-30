import { useState } from "react";
import { Menu, Home, BookOpen, HelpCircle, MessageSquare, Target, GraduationCap, List, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "./ui/sheet";

interface GameSidebarProps {
  onNavigate: (page: "home" | "levels" | "about" | "faq" | "feedback" | "why" | "tutorial") => void;
  currentPage?: string;
}

export function GameSidebar({ onNavigate, currentPage }: GameSidebarProps) {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: "Home", page: "home" as const },
    { icon: List, label: "Choose Your Level", page: "levels" as const },
    { icon: BookOpen, label: "About Us", page: "about" as const },
    { icon: Target, label: "Why CodeQuest", page: "why" as const },
    { icon: GraduationCap, label: "Tutorial", page: "tutorial" as const },
    { icon: HelpCircle, label: "FAQ", page: "faq" as const },
    { icon: MessageSquare, label: "Feedback", page: "feedback" as const },
  ];

  const handleNavigation = (page: typeof menuItems[number]["page"]) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <>
      {/* Mobile and Desktop Menu Button */}
      <div className="fixed top-4 left-4 z-50">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              size="lg"
              className="bg-green-600/90 hover:bg-green-700 text-white shadow-lg backdrop-blur-sm border border-blue-400/30"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 bg-gradient-to-b from-blue-950 to-green-950 border-r-2 border-blue-500/50">
            <SheetHeader>
              <SheetTitle className="text-2xl text-blue-300 flex items-center gap-2">
                <GraduationCap className="h-8 w-8" />
                CodeQuest Menu
              </SheetTitle>
              <SheetDescription className="text-sm text-gray-300">
                Navigate through the game and learn more about CodeQuest.
              </SheetDescription>
            </SheetHeader>
            <nav className="mt-8 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.page;
                return (
                  <Button
                    key={item.page}
                    onClick={() => handleNavigation(item.page)}
                    className={`w-full justify-start text-lg py-6 ${
                      isActive
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-green-800/50 hover:bg-green-700/70 text-white"
                    }`}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Button>
                );
              })}
            </nav>
            <div className="absolute bottom-8 left-6 right-6">
              <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4 text-center">
                <p className="text-blue-200 text-sm">
                  ⚔️ Keep learning, brave coder!
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* CodeQuest Logo - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-gradient-to-r from-[#3B82F6] to-[#22C55E] px-6 py-3 rounded-lg shadow-lg border-2 border-[#60A5FA]/50">
          <h1 className="text-2xl text-white">
            ⚔️ CodeQuest
          </h1>
        </div>
      </div>
    </>
  );
}