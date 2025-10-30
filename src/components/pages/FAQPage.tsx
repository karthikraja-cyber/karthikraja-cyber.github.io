import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export function FAQPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 p-6">
      <div className="max-w-4xl mx-auto pt-20">
        <Button
          onClick={onBack}
          className="mb-6 bg-purple-600 hover:bg-purple-700 text-white"
        >
          <ArrowLeft className="mr-2" /> Back
        </Button>

        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border-2 border-blue-500/50">
          <h1 className="text-5xl text-yellow-400 mb-8 text-center">Frequently Asked Questions</h1>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-purple-900/30 rounded-lg px-6 border border-purple-500/30">
              <AccordionTrigger className="text-xl text-white hover:text-yellow-400">
                Is CodeQuest really free?
              </AccordionTrigger>
              <AccordionContent className="text-white text-lg">
                Yes! CodeQuest is completely free to play. We believe education should be accessible to everyone.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-purple-900/30 rounded-lg px-6 border border-purple-500/30">
              <AccordionTrigger className="text-xl text-white hover:text-yellow-400">
                Do I need any prior coding experience?
              </AccordionTrigger>
              <AccordionContent className="text-white text-lg">
                Not at all! CodeQuest is designed for complete beginners. We'll guide you through everything step by step.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-purple-900/30 rounded-lg px-6 border border-purple-500/30">
              <AccordionTrigger className="text-xl text-white hover:text-yellow-400">
                How long does it take to complete?
              </AccordionTrigger>
              <AccordionContent className="text-white text-lg">
                The beginner castle has 4 levels with 2 challenges each. Most players complete it in 30-60 minutes, 
                but you can go at your own pace and take breaks anytime.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-purple-900/30 rounded-lg px-6 border border-purple-500/30">
              <AccordionTrigger className="text-xl text-white hover:text-yellow-400">
                Can I replay levels?
              </AccordionTrigger>
              <AccordionContent className="text-white text-lg">
                Yes! You can replay any level from the "Choose Your Level" menu to practice and reinforce your learning.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-purple-900/30 rounded-lg px-6 border border-purple-500/30">
              <AccordionTrigger className="text-xl text-white hover:text-yellow-400">
                What happens if I get stuck?
              </AccordionTrigger>
              <AccordionContent className="text-white text-lg">
                Each challenge has a hint button that provides guidance. The hints give you clues without giving away 
                the complete answer, helping you learn through discovery.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-purple-900/30 rounded-lg px-6 border border-purple-500/30">
              <AccordionTrigger className="text-xl text-white hover:text-yellow-400">
                Will there be more content added?
              </AccordionTrigger>
              <AccordionContent className="text-white text-lg">
                Absolutely! We're working on intermediate and advanced levels that will teach CSS, JavaScript, 
                and more advanced web development concepts.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-purple-900/30 rounded-lg px-6 border border-purple-500/30">
              <AccordionTrigger className="text-xl text-white hover:text-yellow-400">
                Can I use CodeQuest offline?
              </AccordionTrigger>
              <AccordionContent className="text-white text-lg">
                Yes! Once loaded, CodeQuest works completely offline. You can learn anytime, anywhere.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-purple-900/30 rounded-lg px-6 border border-purple-500/30">
              <AccordionTrigger className="text-xl text-white hover:text-yellow-400">
                How can I provide feedback or report bugs?
              </AccordionTrigger>
              <AccordionContent className="text-white text-lg">
                Visit our Feedback page from the menu. We'd love to hear your thoughts and suggestions!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
