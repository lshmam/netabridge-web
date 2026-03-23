import {
  Container,
  Section,
  Heading,
  Text,
  Eyebrow,
} from "@/components/ui";
import { ScrollReveal } from "@/components/effects";

interface Feature {
  eyebrow: string;
  title: string;
  description: string;
  large?: boolean;
  image?: string;
}

const features: Feature[] = [
  {
    eyebrow: "LOOKUP",
    title: "Company Lookup",
    description:
      "Search any company worldwide. Get a profile from government registries, public data, and platform intelligence. Works with zero other users.",
    large: true,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  },
  {
    eyebrow: "VERIFICATION",
    title: "Government Verification",
    description:
      "Every business verified against real government registries in 145+ countries. Not a paid badge. Verified means registered, active, real.",
  },
  {
    eyebrow: "MATCHING",
    title: "Smart Matching",
    description:
      "Post what you need. AI matches your request against company capabilities and public data. The right partners find you.",
  },
  {
    eyebrow: "INTELLIGENCE",
    title: "Market Pulse",
    description:
      "Government tenders, import/export trends, sector signals, demand shifts. Your daily trade intelligence briefing. Never empty.",
    large: true,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    eyebrow: "CONNECTIONS",
    title: "Verified Connections",
    description:
      "Connect with real people at verified companies. Every connection builds trust signals and strengthens the network for everyone.",
  },
  {
    eyebrow: "INTELLIGENCE",
    title: "Trade Intelligence",
    description:
      "HS code-linked market data, company capabilities with standard identifiers, and sector analytics woven into every search result.",
  },
];

function LargeCard({ feature }: { feature: Feature }) {
  return (
    <div className="relative md:col-span-2 rounded-xl overflow-hidden min-h-[280px] group">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${feature.image})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-8">
        <div className="font-mono text-[11px] uppercase tracking-[3px] text-nb-accent mb-3">
          {feature.eyebrow}
        </div>
        <Heading as="h4" className="mb-1.5 text-white">
          {feature.title}
        </Heading>
        <Text variant="body" className="text-white/80 max-w-md">
          {feature.description}
        </Text>
      </div>
    </div>
  );
}

function SmallCard({ feature }: { feature: Feature }) {
  return (
    <div className="bg-nb-surface hover:bg-nb-surface2 transition-colors duration-300 rounded-xl p-8 flex flex-col justify-end min-h-[220px]">
      <div className="font-mono text-[11px] uppercase tracking-[3px] text-nb-accent mb-3">
        {feature.eyebrow}
      </div>
      <Heading as="h4" className="mb-1.5">
        {feature.title}
      </Heading>
      <Text>{feature.description}</Text>
    </div>
  );
}

export function Features() {
  return (
    <Section variant="alt" id="features">
      <Container>
        <ScrollReveal>
          <Eyebrow>Features</Eyebrow>
          <Heading as="h2" className="mb-10">
            Built for how trade actually works.
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {features.map((feat) =>
              feat.large ? (
                <LargeCard key={feat.title} feature={feat} />
              ) : (
                <SmallCard key={feat.title} feature={feat} />
              )
            )}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
