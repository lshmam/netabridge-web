import {
  Container,
  Section,
  Heading,
  Text,
  Eyebrow,
  Card,
  CardGrid,
} from "@/components/ui";
import { ScrollReveal } from "@/components/effects";

const layers = [
  {
    num: "01",
    title: "Market Intelligence",
    description:
      "Searchable government registries and sector data. Useful before anyone signs up.",
    example: '"Electronics Germany" → 40 verified companies.',
  },
  {
    num: "02",
    title: "Your Network",
    description:
      "Import your contacts. See which companies you already know people at.",
    example: '"You know 3 people at TechParts GmbH."',
  },
  {
    num: "03",
    title: "Network Intelligence",
    description:
      "Trust scores, demand signals, and live opportunities. Every user makes it smarter.",
    example: '"Trust 87. Active request. 2 CEO connections."',
  },
];

export function VisionLayers() {
  return (
    <Section variant="alt" id="vision">
      <Container>
        <ScrollReveal>
          <div className="text-left mb-16 md:mb-24 flex flex-col items-start pl-8">
            <Eyebrow>The Vision</Eyebrow>
            <Heading as="h2" className="max-w-[700px] mb-4">
              $33 trillion in B2B trade. Still running on guesswork.
            </Heading>
            <Text size="lg" className="max-w-[600px]">
              Supply exists. Demand exists. They just can't find each other.
            </Text>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-7 top-4 bottom-4 w-px bg-nb-border pointer-events-none" />

          <div className="space-y-12 md:space-y-20 relative">
            {layers.map((layer, index) => {
              return (
                <ScrollReveal key={layer.num} delay={index * 0.2}>
                  <div className="relative flex items-start gap-8 md:gap-16">
                    {/* Timeline Dot */}
                    <div className="absolute left-7 w-4 h-4 rounded-full bg-nb-surface border-2 border-nb-accent -translate-x-1/2 mt-8 z-10 shadow-[0_0_10px_rgba(45,127,249,0.5)]" />

                    {/* Content Box */}
                    <div className="w-full pl-16">
                      <Card hover={false} className="w-full relative hover:scale-[1.02] transition-transform duration-300 p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="font-mono text-[12px] text-nb-text3 tracking-widest">
                            STEP {layer.num}
                          </span>
                        </div>
                        <Heading as="h3" className="mb-3 text-2xl md:text-3xl">
                          {layer.title}
                        </Heading>
                        <Text size="lg" className="mb-4 leading-relaxed">{layer.description}</Text>
                        <div className="mt-4 p-4 bg-nb-bg2 rounded-md text-sm text-nb-text2 leading-relaxed border-l-2 border-nb-accent text-left">
                          {layer.example}
                        </div>
                      </Card>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
