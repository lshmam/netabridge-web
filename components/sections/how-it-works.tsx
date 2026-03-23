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
    title: "Verify they're who they say",
    description:
      "Every business on Netabridge is checked against government registries. Verified means registered, active, and real. Not a paid badge.",
  },
  {
    num: "03",
    title: "Connect with the right people",
    description:
      "Found a match? Connect directly with verified contacts at that company. Or post what you need and let the AI match you.",
  },
  {
    num: "04",
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
              {steps.map((step) => (
                <div key={step.num} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[rgba(45,127,249,0.08)] border border-[rgba(45,127,249,0.15)] flex items-center justify-center font-mono text-xs text-nb-accent">
                    {step.num}
                  </div>
                  <div>
                    <Heading as="h4" className="mb-1">
                      {step.title}
                    </Heading>
                    <Text>{step.description}</Text>
                  </div>
                </div>
              ))}
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

              <div className="p-5">
                {/* Search bar */}
                <div className="flex gap-2 mb-4">
                  <div className="flex-1 px-3.5 py-2.5 bg-nb-bg2 border border-nb-border rounded-md font-sans text-[13px] text-nb-text3">
                    🔍 copper cathode suppliers europe
                  </div>
                  <div className="px-4 py-2.5 bg-nb-accent rounded-md font-sans text-[13px] font-medium text-white">
                    Search
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-2">
                  {demoResults.map((result) => (
                    <div
                      key={result.name}
                      className="flex items-center gap-3 p-3.5 bg-nb-bg2 border border-nb-border rounded-lg"
                    >
                      <div
                        className="w-9 h-9 rounded-lg bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.2)] flex items-center justify-center text-sm text-nb-green flex-shrink-0"
                        style={{ opacity: result.opacity }}
                      >
                        ▣
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-[13px] font-semibold">
                          {result.name}
                        </h5>
                        <span className="text-[11px] text-nb-text3">
                          {result.meta}
                        </span>
                        <div className="flex gap-1 mt-1">
                          {result.tags.map((tag) => (
                            <span
                              key={tag.label}
                              className={`font-mono text-[9px] px-1.5 py-0.5 rounded ${tagColors[tag.variant]}`}
                            >
                              {tag.label}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div
                        className={`font-mono text-sm font-bold flex-shrink-0 ${result.scoreColor}`}
                      >
                        {result.score}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="font-mono text-[10px] text-nb-text3 mt-3 text-center">
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
