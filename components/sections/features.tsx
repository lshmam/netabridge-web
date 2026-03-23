"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Brain, Sparkles, CheckCircle2, Loader2 } from "lucide-react";
import Image from "next/image";
import {
  Container,
  Section,
  Heading,
  Text,
  Eyebrow,
} from "@/components/ui";
import { ScrollReveal } from "@/components/effects";

// ── Orbital animation helpers ──────────────────────────────────────────────

const OrbitingIcon = ({ radius, delay, duration, src, alt, angle, size = 40, iconSize = 20 }: {
  radius: number; delay: number; duration: number; src: string; alt: string; angle: number; size?: number; iconSize?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    className="absolute top-1/2 left-1/2 z-10"
  >
    <motion.div
      animate={{ rotate: angle + 360 }}
      initial={{ rotate: angle }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
      className="absolute pointer-events-none"
      style={{ width: radius * 2, height: radius * 2, left: -radius, top: -radius }}
    >
      <motion.div
        animate={{ rotate: -(angle + 360) }}
        initial={{ rotate: -angle }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="rounded-full bg-nb-surface shadow-sm border border-nb-border flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <Image src={src} alt={alt} width={iconSize} height={iconSize} className="object-contain" />
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
);

const OrbitalRing = ({ radius, delay }: { radius: number; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.8, ease: "easeOut" }}
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-nb-border"
    style={{ width: radius * 2, height: radius * 2 }}
  />
);

// ── AI Chat mini animation ──────────────────────────────────────────────────

function MiniChatAnimation() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    let ids: NodeJS.Timeout[] = [];
    const run = () => {
      setStage(0);
      ids.push(setTimeout(() => setStage(1), 800));
      ids.push(setTimeout(() => setStage(2), 2200));
      ids.push(setTimeout(() => setStage(3), 3500));
      ids.push(setTimeout(() => setStage(4), 4800));
      ids.push(setTimeout(() => setStage(5), 6000));
      ids.push(setTimeout(run, 10000));
    };
    run();
    return () => ids.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* User bubble */}
      <div className="flex justify-end">
        <div className="bg-nb-bg2 border border-nb-border px-4 py-2.5 rounded-2xl rounded-tr-sm text-nb-text text-sm max-w-[90%]">
          Find certified organic cotton suppliers in Europe with a Trust Score over 90.
        </div>
      </div>

      {/* AI response */}
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-nb-surface border border-nb-border flex-shrink-0 flex items-center justify-center text-nb-green">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <AnimatePresence mode="wait">
            {stage === 1 && (
              <motion.div key="typing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="bg-nb-surface border border-nb-border px-4 py-2.5 rounded-2xl rounded-tl-sm flex gap-1.5 items-center w-16 h-10">
                {[0, 0.2, 0.4].map((d, i) => (
                  <motion.div key={i} className="w-1.5 h-1.5 rounded-full bg-nb-text3"
                    animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: d }} />
                ))}
              </motion.div>
            )}
            {stage >= 2 && (
              <motion.div key="card" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                className="bg-nb-surface border border-nb-border p-4 rounded-2xl rounded-tl-sm w-full">
                <p className="text-nb-text text-sm mb-4">Searching 12,000 verified textile suppliers across 45 countries.</p>
                <div className="h-px w-full bg-nb-border mb-4" />
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Cross-referencing supplier capabilities", s: 2 },
                    { label: "Verifying government registries & certs", s: 3 },
                    { label: "Calculating real-time Trust Scores", s: 4 },
                  ].map(({ label, s }) => stage >= s && (
                    <motion.div key={label} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
                      {stage === s
                        ? <Loader2 className="w-4 h-4 text-nb-text3 animate-spin flex-shrink-0" />
                        : <CheckCircle2 className="w-4 h-4 text-nb-green flex-shrink-0" />}
                      <span className={`text-xs ${stage === s ? "text-nb-text3" : "text-nb-text"}`}>{label}</span>
                    </motion.div>
                  ))}
                </div>
                <AnimatePresence>
                  {stage >= 5 && (
                    <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                      className="font-semibold text-nb-text text-sm border-t border-nb-border pt-3 overflow-hidden">
                      Found 14 verified suppliers matching your criteria.
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ── Feature data ────────────────────────────────────────────────────────────

interface Feature {
  eyebrow: string;
  title: string;
  description: string;
  large?: boolean;
  animation?: "orbital" | "chat";
}

const features: Feature[] = [
  {
    eyebrow: "NETWORK",
    title: "Consolidate Your Network Data",
    description:
      "Advanced identity resolution merges your contacts across all channels. Our platform becomes the intelligence layer connecting your real-world relationships.",
    large: true,
    animation: "orbital",
  },
  {
    eyebrow: "LOOKUP",
    title: "Company Lookup",
    description:
      "Search any company worldwide. Get a profile from government registries, public data, and platform intelligence.",
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
    eyebrow: "INTELLIGENCE",
    title: "Market Pulse",
    description:
      "Government tenders, import/export trends, sector signals, demand shifts. Your daily trade intelligence briefing.",
  },
  {
    eyebrow: "AI SOURCING",
    title: "Natural Language Sourcing",
    description:
      "Skip complex filters. Describe what you need and our AI instantly matches you with verified, government-registered partners.",
    large: true,
    animation: "chat",
  },
];

// ── Card components ─────────────────────────────────────────────────────────

function LargeCard({ feature }: { feature: Feature }) {
  return (
    <div className="relative rounded-xl overflow-hidden group bg-nb-surface border border-nb-border flex flex-col">
      {/* Animation Area */}
      <div className="h-[300px] sm:h-[380px] relative flex items-center justify-center overflow-hidden w-full">
        {feature.animation === "orbital" && (
          <>
            {/* Mobile: small rings */}
            <div className="relative w-48 h-48 sm:hidden">
              <OrbitalRing radius={65} delay={0.2} />
              <OrbitalRing radius={95} delay={0.4} />
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.5, type: "spring" }} className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-10 h-10 rounded-full bg-nb-bg2 border border-nb-border flex items-center justify-center">
                  <Image src="/logo.png" alt="Netabridge" width={26} height={26} className="rounded-sm object-contain" />
                </div>
              </motion.div>
              <OrbitingIcon radius={65} delay={0.3} duration={18} src="/app-icons/gmail.png" alt="Gmail" angle={0} size={32} iconSize={16} />
              <OrbitingIcon radius={65} delay={0.4} duration={18} src="/app-icons/linkedin.png" alt="LinkedIn" angle={120} size={32} iconSize={16} />
              <OrbitingIcon radius={65} delay={0.5} duration={18} src="/app-icons/instagram (1).png" alt="Instagram" angle={240} size={32} iconSize={16} />
              <OrbitingIcon radius={95} delay={0.6} duration={24} src="/app-icons/apple.png" alt="Apple" angle={60} size={32} iconSize={16} />
              <OrbitingIcon radius={95} delay={0.7} duration={24} src="/app-icons/x-logo.png" alt="X" angle={180} size={32} iconSize={16} />
              <OrbitingIcon radius={95} delay={0.8} duration={24} src="/app-icons/whatsapp.png" alt="WhatsApp" angle={300} size={32} iconSize={16} />
            </div>
            {/* Desktop: full size rings */}
            <div className="relative w-80 h-80 hidden sm:block">
              <OrbitalRing radius={105} delay={0.2} />
              <OrbitalRing radius={155} delay={0.4} />
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.5, type: "spring" }} className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 rounded-full bg-nb-bg2 border border-nb-border flex items-center justify-center">
                  <Image src="/logo.png" alt="Netabridge" width={40} height={40} className="rounded-sm object-contain" />
                </div>
              </motion.div>
              <OrbitingIcon radius={105} delay={0.3} duration={18} src="/app-icons/gmail.png" alt="Gmail" angle={0} size={52} iconSize={26} />
              <OrbitingIcon radius={105} delay={0.4} duration={18} src="/app-icons/linkedin.png" alt="LinkedIn" angle={120} size={52} iconSize={26} />
              <OrbitingIcon radius={105} delay={0.5} duration={18} src="/app-icons/instagram (1).png" alt="Instagram" angle={240} size={52} iconSize={26} />
              <OrbitingIcon radius={155} delay={0.6} duration={24} src="/app-icons/apple.png" alt="Apple" angle={60} size={52} iconSize={26} />
              <OrbitingIcon radius={155} delay={0.7} duration={24} src="/app-icons/x-logo.png" alt="X" angle={180} size={52} iconSize={26} />
              <OrbitingIcon radius={155} delay={0.8} duration={24} src="/app-icons/whatsapp.png" alt="WhatsApp" angle={300} size={52} iconSize={26} />
            </div>
          </>
        )}
        {feature.animation === "chat" && (
          <div className="w-full max-w-sm h-full overflow-hidden flex flex-col justify-start pt-2 px-4">
            <MiniChatAnimation />
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className="p-5 sm:p-6 border-t border-nb-border bg-nb-bg/60">
        <div className="font-mono text-[11px] uppercase tracking-[3px] text-nb-accent mb-3">
          {feature.eyebrow}
        </div>
        <h4 className="text-lg font-semibold text-nb-text mb-1">{feature.title}</h4>
        <p className="text-sm text-nb-text2 leading-relaxed">{feature.description}</p>
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
        <Heading as="h4" className="mb-2">{feature.title}</Heading>
        <Text>{feature.description}</Text>
      </div>
    </div>
  );
}

// ── Section ─────────────────────────────────────────────────────────────────

const largeFeatures = features.filter((f) => f.large);
const smallFeatures = features.filter((f) => !f.large);

export function Features() {
  return (
    <Section variant="alt" id="features">
      <Container>
        <ScrollReveal>
          <Eyebrow>Features</Eyebrow>
          <Heading as="h2" className="mb-10">
            Built for how trade actually works.
          </Heading>

          {/* Row 1: Two large animation cards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            {largeFeatures.map((feat) => (
              <LargeCard key={feat.title} feature={feat} />
            ))}
          </div>

          {/* Row 2: Four small cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {smallFeatures.map((feat) => (
              <SmallCard key={feat.title} feature={feat} />
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
