import {
  Container,
  Section,
  Heading,
  Text,
  Eyebrow,
  Badge,
  Card,
  CardGrid,
} from "@/components/ui";
import { ScrollReveal } from "@/components/effects";

const layers = [
  {
    num: "LAYER 01",
    title: "Market Intelligence",
    badge: { label: "Available Day 1", variant: "accent" as const },
    description:
      "Government registries, procurement tenders, import/export data, sector trends. Searchable and structured. Useful before anyone signs up.",
    example:
      'Search "electronics manufacturers Germany" → 40 verified companies with real government registry data.',
  },
  {
    num: "LAYER 02",
    title: "Your Network",
    badge: { label: "When you connect", variant: "green" as const },
    description:
      "Import your contacts. The same search results now show which companies you already know people at. Your data enriches the intelligence.",
    example:
      'Same search, now: "You know 3 people at TechParts GmbH. Your contact Sarah works at Acme Corp."',
  },
  {
    num: "LAYER 03",
    title: "Network Intelligence",
    badge: { label: "As it grows", variant: "amber" as const },
    description:
      "Trust scores, demand signals, warm paths, live opportunities. Every user makes it smarter for everyone. The moat that compounds.",
    example:
      'Same search + "TechParts: Trust 87. Active request for suppliers. 2 connections from their CEO."',
  },
];

export function VisionLayers() {
  return (
    <Section variant="alt" id="vision">
      <Container>
        <ScrollReveal>
          <Eyebrow>The Vision</Eyebrow>
          <Heading as="h2" className="max-w-[700px] mb-4">
            $33 trillion in global B2B trade. Still running on trust and
            guesswork.
          </Heading>
          <Text size="lg" className="max-w-[600px] mb-12">
            Businesses discover trade partners through trade shows, cold emails,
            and outdated directories. They verify them through weeks of manual
            due diligence. They connect through scattered WhatsApp groups. There
            has to be a better way.
          </Text>

          <CardGrid columns={3}>
            {layers.map((layer) => (
              <Card key={layer.num}>
                <span className="font-mono text-[11px] text-nb-text3 tracking-widest block mb-3">
                  {layer.num}
                </span>
                <Heading as="h3" className="mb-1.5">
                  {layer.title}
                </Heading>
                <Badge variant={layer.badge.variant} className="mb-3">
                  {layer.badge.label}
                </Badge>
                <Text className="mb-4">{layer.description}</Text>
                <div className="mt-4 p-3 bg-nb-bg2 rounded-md text-xs text-nb-text3 leading-relaxed border-l-2 border-nb-accent">
                  {layer.example}
                </div>
              </Card>
            ))}
          </CardGrid>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
