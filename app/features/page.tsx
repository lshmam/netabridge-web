import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import {
  Container,
  Section,
  Heading,
  HeadingAccent,
  Text,
  Eyebrow,
  Button,
  Badge,
} from "@/components/ui";
import { ScrollReveal } from "@/components/effects";

export const metadata: Metadata = {
  title: "Features — Netabridge",
  description:
    "Everything you need to trade smarter. Company lookup, government verification, smart matching, market intelligence, and more.",
};

/* ──────────────────────────────────────────────
   Mock UI Components — built with Tailwind only
   ────────────────────────────────────────────── */

function MockSearchResult() {
  return (
    <div className="rounded-xl border border-nb-border bg-nb-surface p-5 space-y-4 w-full max-w-[420px]">
      {/* Search bar */}
      <div className="flex items-center gap-2 rounded-lg bg-nb-bg3 px-4 py-2.5">
        <div className="text-nb-text3 text-[13px]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
        </div>
        <span className="text-[13px] text-nb-text font-light">Meridian Steel Co.</span>
      </div>
      {/* Result card */}
      <div className="rounded-lg border border-nb-border bg-nb-bg2 p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[14px] font-medium text-nb-text">Meridian Steel Co.</p>
            <p className="text-[11px] text-nb-text3 font-light">Istanbul, Turkey</p>
          </div>
          <Badge variant="green">Verified</Badge>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="accent">HS 7208</Badge>
          <Badge variant="accent">HS 7209</Badge>
          <Badge variant="neutral">Steel Coils</Badge>
        </div>
        <div className="grid grid-cols-3 gap-2 pt-1">
          <div>
            <p className="text-[10px] text-nb-text3 font-mono uppercase">Revenue</p>
            <p className="text-[13px] text-nb-text font-medium">$24M</p>
          </div>
          <div>
            <p className="text-[10px] text-nb-text3 font-mono uppercase">Employees</p>
            <p className="text-[13px] text-nb-text font-medium">180</p>
          </div>
          <div>
            <p className="text-[10px] text-nb-text3 font-mono uppercase">Trust</p>
            <p className="text-[13px] text-nb-green font-medium">92</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockVerificationCard() {
  return (
    <div className="rounded-xl border border-nb-border bg-nb-surface p-5 w-full max-w-[420px] space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(16,185,129,0.1)]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--nb-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
        </div>
        <div>
          <p className="text-[14px] font-medium text-nb-text">Government Verified</p>
          <p className="text-[11px] text-nb-text3 font-light">Checked across 3 registries</p>
        </div>
      </div>
      {/* Registry list */}
      <div className="space-y-2">
        {[
          { name: "Turkey Trade Registry", status: "Active", date: "2024-11-02" },
          { name: "Istanbul Chamber of Commerce", status: "Active", date: "2024-10-28" },
          { name: "Turkish Tax Authority", status: "Registered", date: "2024-09-15" },
        ].map((reg) => (
          <div key={reg.name} className="flex items-center justify-between rounded-lg bg-nb-bg2 px-3 py-2.5">
            <div>
              <p className="text-[12px] text-nb-text font-light">{reg.name}</p>
              <p className="text-[10px] text-nb-text3 font-mono">{reg.date}</p>
            </div>
            <Badge variant="green">{reg.status}</Badge>
          </div>
        ))}
      </div>
      <div className="border-t border-nb-border pt-3 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-nb-green" />
        <p className="text-[11px] text-nb-green font-mono">ALL CHECKS PASSED</p>
      </div>
    </div>
  );
}

function MockMatchingInterface() {
  return (
    <div className="rounded-xl border border-nb-border bg-nb-surface p-5 w-full max-w-[420px] space-y-4">
      {/* Query */}
      <div className="rounded-lg bg-nb-bg2 p-3 border border-nb-border">
        <p className="text-[10px] text-nb-text3 font-mono uppercase mb-1">Your Request</p>
        <p className="text-[13px] text-nb-text font-light">Hot-rolled steel coils, 500t/month, CIF Rotterdam</p>
      </div>
      {/* Matches */}
      <p className="text-[10px] text-nb-accent font-mono uppercase tracking-wide">Top Matches</p>
      {[
        { name: "Meridian Steel Co.", score: 96, loc: "Turkey" },
        { name: "BaoShan Industries", score: 91, loc: "China" },
        { name: "ArcelorMittal S.A.", score: 88, loc: "Luxembourg" },
      ].map((match) => (
        <div key={match.name} className="flex items-center justify-between rounded-lg bg-nb-bg2 px-3 py-2.5">
          <div>
            <p className="text-[13px] text-nb-text font-light">{match.name}</p>
            <p className="text-[10px] text-nb-text3">{match.loc}</p>
          </div>
          <div className="text-right">
            <p className="text-[14px] font-medium text-nb-accent">{match.score}%</p>
            <p className="text-[10px] text-nb-text3 font-mono">MATCH</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function MockMarketDashboard() {
  return (
    <div className="rounded-xl border border-nb-border bg-nb-surface p-5 w-full max-w-[420px] space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-[14px] font-medium text-nb-text">Market Pulse</p>
        <Badge variant="accent">Live</Badge>
      </div>
      {/* Tender row */}
      <div className="rounded-lg bg-nb-bg2 p-3 border border-nb-border space-y-2">
        <p className="text-[10px] text-nb-amber font-mono uppercase">Active Tender</p>
        <p className="text-[13px] text-nb-text font-light">Ministry of Infrastructure — Kenya</p>
        <p className="text-[11px] text-nb-text3 font-light">Steel rebar, HS 7214 — 2,000t</p>
        <div className="flex items-center justify-between">
          <Badge variant="amber">Closes in 6 days</Badge>
          <p className="text-[11px] text-nb-text3 font-mono">$3.2M</p>
        </div>
      </div>
      {/* Trends */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-nb-bg2 p-3">
          <p className="text-[10px] text-nb-text3 font-mono uppercase">Steel Exports</p>
          <p className="text-[18px] font-serif text-nb-green">+12.4%</p>
          <p className="text-[10px] text-nb-text3">vs last quarter</p>
        </div>
        <div className="rounded-lg bg-nb-bg2 p-3">
          <p className="text-[10px] text-nb-text3 font-mono uppercase">Demand Index</p>
          <p className="text-[18px] font-serif text-nb-accent">78.2</p>
          <p className="text-[10px] text-nb-text3">sector signal</p>
        </div>
      </div>
    </div>
  );
}

function MockConnectionCard() {
  return (
    <div className="rounded-xl border border-nb-border bg-nb-surface p-5 w-full max-w-[420px] space-y-4">
      <div className="flex items-center gap-3">
        {/* Avatar placeholder */}
        <div className="w-11 h-11 rounded-full bg-nb-bg3 flex items-center justify-center text-[15px] font-medium text-nb-accent">
          AK
        </div>
        <div>
          <p className="text-[14px] font-medium text-nb-text">Ayla Korkmaz</p>
          <p className="text-[11px] text-nb-text3 font-light">Head of Export Sales &middot; Meridian Steel Co.</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        <Badge variant="green">Gov. Verified</Badge>
        <Badge variant="accent">2nd Connection</Badge>
        <Badge variant="neutral">Steel Sector</Badge>
      </div>
      <div className="grid grid-cols-3 gap-2 rounded-lg bg-nb-bg2 p-3">
        <div className="text-center">
          <p className="text-[10px] text-nb-text3 font-mono uppercase">Trust</p>
          <p className="text-[16px] font-serif text-nb-green">94</p>
        </div>
        <div className="text-center">
          <p className="text-[10px] text-nb-text3 font-mono uppercase">Connections</p>
          <p className="text-[16px] font-serif text-nb-text">127</p>
        </div>
        <div className="text-center">
          <p className="text-[10px] text-nb-text3 font-mono uppercase">Response</p>
          <p className="text-[16px] font-serif text-nb-accent">2h</p>
        </div>
      </div>
      <button className="w-full rounded-lg bg-nb-accent/10 text-nb-accent text-[13px] py-2.5 font-medium hover:bg-nb-accent/20 transition-colors">
        Request Introduction
      </button>
    </div>
  );
}

function MockAnalyticsChart() {
  return (
    <div className="rounded-xl border border-nb-border bg-nb-surface p-5 w-full max-w-[420px] space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-[14px] font-medium text-nb-text">Trade Intelligence</p>
        <Badge variant="accent">HS 7208</Badge>
      </div>
      {/* Mini bar chart */}
      <div className="rounded-lg bg-nb-bg2 p-4">
        <p className="text-[10px] text-nb-text3 font-mono uppercase mb-3">Export Volume by Region</p>
        <div className="space-y-2.5">
          {[
            { region: "East Asia", pct: 38 },
            { region: "Europe", pct: 28 },
            { region: "Middle East", pct: 18 },
            { region: "Americas", pct: 12 },
            { region: "Africa", pct: 4 },
          ].map((row) => (
            <div key={row.region} className="flex items-center gap-3">
              <p className="text-[11px] text-nb-text3 w-20 shrink-0">{row.region}</p>
              <div className="flex-1 h-2 rounded-full bg-nb-bg3 overflow-hidden">
                <div className="h-full rounded-full bg-nb-accent" style={{ width: `${row.pct}%` }} />
              </div>
              <p className="text-[11px] text-nb-text font-mono w-8 text-right">{row.pct}%</p>
            </div>
          ))}
        </div>
      </div>
      {/* Scores */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-nb-bg2 p-3">
          <p className="text-[10px] text-nb-text3 font-mono uppercase">Opportunity Score</p>
          <p className="text-[18px] font-serif text-nb-green">8.4/10</p>
        </div>
        <div className="rounded-lg bg-nb-bg2 p-3">
          <p className="text-[10px] text-nb-text3 font-mono uppercase">Demand Growth</p>
          <p className="text-[18px] font-serif text-nb-accent">+23%</p>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Feature Block — alternating left/right layout
   ────────────────────────────────────────────── */

interface FeatureBlockProps {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  mockUI: React.ReactNode;
  reverse?: boolean;
  delay?: number;
}

function FeatureBlock({
  eyebrow,
  title,
  description,
  bullets,
  mockUI,
  reverse = false,
  delay = 0,
}: FeatureBlockProps) {
  return (
    <div className="py-16 md:py-20 border-b border-nb-border last:border-b-0">
      <div
        className={`flex flex-col gap-10 md:gap-16 items-center ${reverse ? "md:flex-row-reverse" : "md:flex-row"
          }`}
      >
        {/* Text side */}
        <ScrollReveal
          className="flex-1 min-w-0"
          delay={delay}
          direction={reverse ? "right" : "left"}
        >
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading as="h3" className="mb-3">
            {title}
          </Heading>
          <Text size="lg" className="mb-6 max-w-[440px]">
            {description}
          </Text>
          <ul className="space-y-2.5">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5">
                <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-nb-accent shrink-0" />
                <Text size="md" variant="muted">
                  {bullet}
                </Text>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {/* Mock UI side */}
        <ScrollReveal
          className="flex-1 min-w-0 flex justify-center"
          delay={delay + 0.15}
          direction={reverse ? "left" : "right"}
        >
          {mockUI}
        </ScrollReveal>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <Section className="pt-32 md:pt-40 pb-16 md:pb-20 text-center">
          <Container>
            <ScrollReveal>
              <Eyebrow>Features</Eyebrow>
              <Heading as="h1" className="mx-auto max-w-[720px] mb-5">
                Everything You Need to{" "}
                <HeadingAccent>Trade Smarter</HeadingAccent>
              </Heading>
              <Text size="lg" className="mx-auto max-w-[560px]">
                The complete toolkit for finding, verifying, and connecting with
                business partners worldwide. Every feature built for how global
                trade actually works.
              </Text>
            </ScrollReveal>
          </Container>
        </Section>

        {/* ── Core Features ── */}
        <Section variant="alt">
          <Container>
            <ScrollReveal>
              <Eyebrow>Core Platform</Eyebrow>
              <Heading as="h2" className="mb-4">
                Six pillars of trade intelligence.
              </Heading>
              <Text size="lg" className="max-w-[560px] mb-8">
                Each feature works on its own. Together, they form the most
                comprehensive B2B trade platform ever built.
              </Text>
            </ScrollReveal>

            {/* 1. Company Lookup — text left, mock right */}
            <FeatureBlock
              eyebrow="Lookup"
              title="Company Lookup"
              description="Search any company worldwide. Get a complete profile built from government registries, public data, and platform intelligence — even if no one else has searched for them before."
              bullets={[
                "Global coverage across 145+ countries",
                "Real-time government registry data",
                "HS code mapping for trade classification",
                "Financial indicators and company size signals",
              ]}
              mockUI={<MockSearchResult />}
              delay={0.1}
            />

            {/* 2. Government Verification — text right, mock left */}
            <FeatureBlock
              eyebrow="Verification"
              title="Government Verification"
              description="Every business verified against real government registries. This is not a paid badge — verified means the company is registered, active, and real."
              bullets={[
                "145+ country registries checked automatically",
                "Automated status checks on every profile",
                "Full registration history and timeline",
                "Active/inactive detection with alert flags",
              ]}
              mockUI={<MockVerificationCard />}
              reverse
              delay={0.1}
            />

            {/* 3. Smart Matching — text left, mock right */}
            <FeatureBlock
              eyebrow="Matching"
              title="Smart Matching"
              description="Describe what you need. Our AI matches your request against company capabilities, trade history, and public data to surface the right partners."
              bullets={[
                "AI-powered matching against real trade data",
                "Capability analysis from verified company profiles",
                "Demand signal detection from market activity",
                "Auto-suggestions that improve over time",
              ]}
              mockUI={<MockMatchingInterface />}
              delay={0.1}
            />

            {/* 4. Market Pulse — text right, mock left */}
            <FeatureBlock
              eyebrow="Intelligence"
              title="Market Pulse"
              description="Your daily trade intelligence briefing. Government tenders, import/export trends, sector signals, and demand shifts — curated and never empty."
              bullets={[
                "Government tenders from around the world",
                "Import/export trends with HS code granularity",
                "Sector signals and emerging opportunities",
                "Daily briefings tailored to your profile",
              ]}
              mockUI={<MockMarketDashboard />}
              reverse
              delay={0.1}
            />

            {/* 5. Verified Connections — text left, mock right */}
            <FeatureBlock
              eyebrow="Network"
              title="Verified Connections"
              description="Connect with real people at verified companies. Every connection builds trust signals and strengthens the network effect for everyone."
              bullets={[
                "Real people at real, verified companies",
                "Trust signal building through interactions",
                "Network effect that rewards early movers",
                "Warm introductions through shared connections",
              ]}
              mockUI={<MockConnectionCard />}
              delay={0.1}
            />

            {/* 6. Trade Intelligence — text right, mock left */}
            <FeatureBlock
              eyebrow="Analytics"
              title="Trade Intelligence"
              description="HS code-linked market data, company capabilities with standard identifiers, and sector analytics woven into every search result and company profile."
              bullets={[
                "HS code analytics at every level of detail",
                "Sector benchmarks against industry averages",
                "Demand mapping across regions and routes",
                "Opportunity scoring for prioritized action",
              ]}
              mockUI={<MockAnalyticsChart />}
              reverse
              delay={0.1}
            />
          </Container>
        </Section>

        {/* ── Platform Stats ── */}
        <Section variant="bordered">
          <Container>
            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
                {[
                  { value: "145+", label: "Countries" },
                  { value: "12,400+", label: "Verified Companies" },
                  { value: "2,800+", label: "Weekly Tenders" },
                  { value: "87", label: "Avg Trust Score" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-[clamp(36px,5vw,64px)] leading-none text-nb-text mb-2">
                      {stat.value}
                    </p>
                    <p className="font-mono text-[11px] uppercase tracking-[2px] text-nb-text3">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </Container>
        </Section>

        {/* ── Bottom CTA ── */}
        <Section className="text-center">
          <Container>
            <ScrollReveal>
              <Eyebrow>Get Started</Eyebrow>
              <Heading as="h2" className="mb-3">
                Ready to trade smarter?
              </Heading>
              <Text size="lg" className="mx-auto max-w-[480px] mb-8">
                Join the businesses already shaping how global trade works. Free
                to start. First movers get the strongest network position.
              </Text>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" asChild>
                  <a href="/#cta">Get Early Access</a>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <a href="/">Back to Home</a>
                </Button>
              </div>
              {/* <Text variant="faint" size="sm" className="mt-4">
                No credit card required &middot; Free to start &middot; Backed
                by Antler
              </Text> */}
            </ScrollReveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
