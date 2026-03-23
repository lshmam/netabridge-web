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

// Order matters for grid placement:
// Row 1: [Large 2-col LEFT] [Small] [Small]
// Row 2: [Small] [Small] [Large 2-col RIGHT]
const features: Feature[] = [
  {
    eyebrow: "LOOKUP",
    title: "Company Lookup",
    description:
      "Search any company worldwide. Get a profile from government registries, public data, and platform intelligence. Works with zero other users.",
    large: true,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
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
    eyebrow: "CONNECTIONS",
    title: "Verified Connections",
    description:
      "Connect with real people at verified companies. Every connection builds trust signals and strengthens the network for everyone.",
  },
  {
    eyebrow: "ANALYTICS",
    title: "Trade Intelligence",
    description:
      "HS code-linked market data, company capabilities with standard identifiers, and sector analytics woven into every search result.",
  },
  {
    eyebrow: "INTELLIGENCE",
    title: "Market Pulse",
    description:
      "Government tenders, import/export trends, sector signals, demand shifts. Your daily trade intelligence briefing. Never empty.",
    large: true,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

function LargeCard({ feature }: { feature: Feature }) {
  return (
    <div className="relative md:col-span-2 rounded-xl overflow-hidden min-h-[320px] group">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${feature.image})` }}
      />
      {/* Heavy gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
      {/* Content pinned to bottom */}
      <div className="relative z-10 flex flex-col justify-end h-full p-8">
        <div className="font-mono text-[11px] uppercase tracking-[3px] text-nb-accent mb-3">
          {feature.eyebrow}
        </div>
        <h4 className="text-lg font-semibold text-white mb-2">
          {feature.title}
        </h4>
        <p className="text-[13px] font-light leading-relaxed text-white/90 max-w-md">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

function SmallCard({ feature }: { feature: Feature }) {
  return (
    <div className="bg-nb-surface hover:bg-nb-surface2 transition-colors duration-300 rounded-xl p-8 flex flex-col justify-between min-h-[220px]">
      <div className="font-mono text-[11px] uppercase tracking-[3px] text-nb-accent mb-6">
        {feature.eyebrow}
      </div>
      <div>
        <Heading as="h4" className="mb-2">
          {feature.title}
        </Heading>
        <Text>{feature.description}</Text>
      </div>
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
