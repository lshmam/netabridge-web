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
          <div className="text-center md:text-left mb-16 md:mb-24 flex flex-col items-center md:items-start pl-0 md:pl-8">
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
          <div className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-px bg-nb-border md:-translate-x-1/2 pointer-events-none" />

          <div className="space-y-12 md:space-y-20 relative">
            {layers.map((layer, index) => {
              const isEven = index % 2 === 0;
              return (
                <ScrollReveal key={layer.num} delay={index * 0.2}>
                  <div className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? "md:flex-row-reverse" : ""
                    }`}>

                    {/* Timeline Dot */}
                    <div className="absolute left-5 md:left-1/2 w-4 h-4 rounded-full bg-nb-surface border-2 border-nb-accent -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(45,127,249,0.5)]" />

                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                      }`}>
                      <Card hover={false} className="w-full relative hover:scale-[1.02] transition-transform duration-300 p-6 md:p-8">
                        <div className={`flex items-center gap-3 mb-4 ${isEven ? "md:justify-end" : "justify-start"}`}>
                          <span className="font-mono text-[12px] text-nb-text3 tracking-widest">
                            STEP {layer.num}
                          </span>
                        </div>
                        <Heading as="h3" className="mb-3 text-2xl md:text-3xl">
                          {layer.title}
                        </Heading>
                        <Text size="lg" className="mb-4 leading-relaxed">{layer.description}</Text>
                        <div className={`mt-4 p-4 bg-nb-bg2 rounded-md text-sm text-nb-text2 leading-relaxed border-nb-accent ${isEven ? "md:border-r-2 md:text-right" : "border-l-2 text-left"}`}>
                          {layer.example}
                        </div>
                      </Card>
                    </div>

                    {/* Empty Space for the other side to keep timeline centered */}
                    <div className="hidden md:block md:w-1/2" />
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
