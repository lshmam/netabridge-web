"use client";

import { useState, useEffect } from "react";
import { Container, Heading, Text, Eyebrow } from "@/components/ui";
import { ScrollReveal } from "@/components/effects";

const steps = [
  {
    num: "01",
    title: "Search any company on earth",
    description:
      "Our engine searches government registries, trade databases, and platform intelligence. Real data, not self-reported listings.",
  },
  {
    num: "02",
    title: "Connect with the right people",
    description:
      "Found a match? Connect directly with verified contacts at that company. Or post what you need and let the AI match you.",
  },
  {
    num: "03",
    title: "Trade with confidence",
    description:
      "Trust scores, verified affiliations, market context. Everything you need to make informed decisions — in one place.",
  },
];

const demoResults = [
  {
    name: "Nordic Metals AB",
    meta: "Trading · Sweden · HS 7403.11",
    tags: [
      { label: "✓ Verified", variant: "green" },
      { label: "You know 2 people", variant: "accent" },
    ],
    score: 92,
    scoreColor: "text-nb-green",
    opacity: 1,
  },
  {
    name: "Rhine Copper GmbH",
    meta: "Manufacturing · Germany · HS 7403.11",
    tags: [
      { label: "✓ Verified", variant: "green" },
      { label: "Active request", variant: "amber" },
    ],
    score: 87,
    scoreColor: "text-nb-green",
    opacity: 1,
  },
  {
    name: "Balkan Trade Corp",
    meta: "Distribution · Romania · HS 7403.11",
    tags: [{ label: "Unverified", variant: "neutral" }],
    score: 41,
    scoreColor: "text-nb-text3",
    opacity: 0.5,
  },
];

const tagColors: Record<string, string> = {
  green: "bg-[rgba(16,185,129,0.08)] text-nb-green",
  accent: "bg-[rgba(45,127,249,0.08)] text-nb-accent",
  amber: "bg-[rgba(245,158,11,0.08)] text-nb-amber",
  neutral: "bg-nb-surface text-nb-text3",
};

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setTimerKey((k) => k + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
      setTimerKey((k) => k + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-[120px]" id="how">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <ScrollReveal>
            <Eyebrow>How It Works</Eyebrow>
            <Heading as="h2" className="text-4xl mb-8">
              Search. Verify. Connect.
            </Heading>

            <div className="flex flex-col gap-8">
              {steps.map((step, index) => {
                const isActive = index === activeStep;
                return (
                  <div 
                    key={step.num} 
                    className={`relative flex gap-4 items-start transition-opacity duration-500 cursor-pointer pt-2 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                    onClick={() => handleStepClick(index)}
                  >
                    {/* Progress bar */}
                    {isActive && (
                      <span
                        key={timerKey}
                        className="absolute top-0 left-0 right-0 h-[2px] bg-nb-accent rounded-full"
                        style={{ animation: "grow-width 8s linear forwards", transformOrigin: "left" }}
                      />
                    )}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs transition-colors duration-500 border ${
                      isActive 
                        ? 'bg-[rgba(45,127,249,0.08)] border-[rgba(45,127,249,0.15)] text-nb-accent' 
                        : 'bg-transparent border-nb-border/50 text-nb-text3'
                    }`}>
                      {step.num}
                    </div>
                    <div>
                      <Heading as="h4" className={`mb-1 transition-colors duration-500 ${isActive ? 'text-nb-text' : 'text-nb-text2'}`}>
                        {step.title}
                      </Heading>
                      <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-1' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                          <Text className="text-sm md:text-base">{step.description}</Text>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Demo Preview */}
          <ScrollReveal delay={0.2}>
            <div className="bg-nb-surface border border-nb-border rounded-xl overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-nb-bg2 border-b border-nb-border">
                <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                <div className="w-2 h-2 rounded-full bg-[#28ca42]" />
                <span className="font-mono text-[10px] text-nb-text3 ml-2">
                  netabridge.com
                </span>
              </div>

              <div className="p-5 relative">
                {/* Search bar (Step 0) */}
                <div className={`flex gap-2 mb-4 transition-all duration-500 ${activeStep === 0 ? 'scale-[1.02] drop-shadow-md' : 'opacity-70'}`}>
                  <div className={`flex-1 px-3.5 py-2.5 bg-nb-bg2 border rounded-md font-sans text-[13px] text-nb-text3 transition-colors duration-500 ${activeStep === 0 ? 'border-nb-accent border-2 text-nb-text' : 'border-nb-border'}`}>
                    <span className="mr-2">🔍</span> 
                    copper cathode suppliers europe
                    {activeStep === 0 && <span className="inline-block w-[2px] h-[12px] bg-nb-accent animate-pulse ml-1 align-middle" />}
                  </div>
                  <div className={`px-4 py-2.5 rounded-md font-sans text-[13px] font-medium text-white transition-colors duration-500 ${activeStep === 0 ? 'bg-nb-accent' : 'bg-nb-surface border border-nb-border text-nb-text'}`}>
                    Search
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-2 relative">
                  {demoResults.map((result, idx) => {
                    const isVerified = result.tags.some(t => t.variant === 'green');
                    
                    return (
                      <div
                        key={result.name}
                        className={`flex items-center gap-3 p-3.5 bg-nb-bg2 border rounded-lg transition-all duration-500 ${activeStep === 1 ? 'hover:border-nb-accent' : 'border-nb-border'}`}
                      >
                        <div
                          className={`w-9 h-9 rounded-lg border flex items-center justify-center text-sm flex-shrink-0 transition-colors duration-500 bg-nb-surface border-nb-border text-nb-text3`}
                        >
                          {isVerified ? '✓' : '▣'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-[13px] font-semibold">
                            {result.name}
                          </h5>
                          <span className="text-[11px] text-nb-text3">
                            {result.meta}
                          </span>
                          <div className="flex gap-1 mt-1">
                            {result.tags.map((tag) => {
                              const isNetworkTag = tag.variant === 'accent' || tag.variant === 'amber';
                              const highlightTag = activeStep === 1 && isNetworkTag;
                              
                              return (
                                <span
                                  key={tag.label}
                                  className={`font-mono text-[9px] px-1.5 py-0.5 rounded transition-all duration-500 ${tagColors[tag.variant]} ${highlightTag ? 'scale-110 shadow-sm ml-1' : ''}`}
                                >
                                  {tag.label}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                        <div
                          className={`font-mono text-sm font-bold flex-shrink-0 transition-all duration-500 ${result.scoreColor} ${
                            activeStep === 2 
                              ? 'scale-125 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] bg-nb-green/10 px-2 py-1 rounded' 
                              : ''
                          }`}
                        >
                          {result.score}
                        </div>
                        
                        {/* Connect Button for Step 1 */}
                        {activeStep === 1 && idx === 0 && (
                          <div className="absolute right-4 px-3 py-1 bg-nb-accent text-white rounded text-[10px] font-medium shadow-lg animate-fade-in">
                            Connect
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className={`font-mono text-[10px] mt-4 text-center transition-colors duration-500 ${activeStep === 2 ? 'text-nb-green' : 'text-nb-text3'}`}>
                  Showing 3 of 47 results · Ranked by trust + network proximity
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
