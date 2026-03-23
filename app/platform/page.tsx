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
  Card,
  CardGrid,
} from "@/components/ui";
import { ScrollReveal } from "@/components/effects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform — Netabridge",
  description:
    "Three layers of intelligence that transform how businesses discover, verify, and connect with trade partners across 145+ countries.",
};

/* ─── Data ────────────────────────────────────────────────────── */

const dataSources = [
  {
    title: "Government Registries",
    stat: "145+ countries",
    description:
      "Company registrations, ownership records, and legal status pulled directly from official sources.",
  },
  {
    title: "Trade Databases",
    stat: "Real-time",
    description:
      "HS code mappings, tariff schedules, trade agreements, and duty rates across every major corridor.",
  },
  {
    title: "Procurement Tenders",
    stat: "50K+ /month",
    description:
      "Public and private procurement opportunities aggregated from government portals worldwide.",
  },
  {
    title: "Import/Export Records",
    stat: "Billions of rows",
    description:
      "Shipment-level trade data showing who ships what, where, and how often.",
  },
  {
    title: "Company Filings",
    stat: "Structured",
    description:
      "Financial reports, annual filings, and regulatory disclosures parsed into searchable records.",
  },
  {
    title: "Market Reports",
    stat: "Updated weekly",
    description:
      "Sector-level analysis, growth trends, and competitive landscapes synthesized from multiple sources.",
  },
];

const trustFactors = [
  {
    label: "Government Verification",
    weight: "40%",
    description:
      "Registry status, incorporation date, legal standing, registered directors, and compliance history.",
    color: "text-nb-accent",
    barWidth: "w-[40%]",
    barColor: "bg-nb-accent",
  },
  {
    label: "Network Signals",
    weight: "35%",
    description:
      "How many verified users vouch for this company, strength of connections, and shared trade history.",
    color: "text-nb-green",
    barWidth: "w-[35%]",
    barColor: "bg-nb-green",
  },
  {
    label: "Transaction History",
    weight: "25%",
    description:
      "Successful deals completed on-platform, dispute rate, response time, and fulfillment reliability.",
    color: "text-nb-amber",
    barWidth: "w-[25%]",
    barColor: "bg-nb-amber",
  },
];

/* ─── Page ────────────────────────────────────────────────────── */

export default function PlatformPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <Section className="pt-32 md:pt-40 pb-20 md:pb-28">
          <Container>
            <ScrollReveal>
              <Eyebrow>Platform</Eyebrow>
              <Heading as="h1" className="max-w-[800px] mb-5">
                The Intelligence Engine for{" "}
                <HeadingAccent>Global B2B Trade</HeadingAccent>
              </Heading>
              <Text size="lg" className="max-w-[620px] mb-6">
                Three layers of intelligence that compound over time — from raw
                market data to trusted, network-powered insights. Each layer
                makes the next one smarter.
              </Text>
              <Text variant="faint" className="max-w-[620px]">
                Most trade platforms give you a directory. Netabridge gives you
                an intelligence engine built on government data, your
                relationships, and the collective knowledge of every business on
                the network.
              </Text>
            </ScrollReveal>
          </Container>
        </Section>

        {/* ── Three Layers Overview ── */}
        <Section variant="alt">
          <Container>
            <ScrollReveal>
              <Eyebrow>Architecture</Eyebrow>
              <Heading as="h2" className="max-w-[700px] mb-4">
                Three Layers Deep
              </Heading>
              <Text size="lg" className="max-w-[600px] mb-16">
                Each layer builds on the last. Alone, each is useful. Together,
                they create an intelligence moat that no competitor can
                replicate.
              </Text>
            </ScrollReveal>

            {/* Layer 1 — Market Intelligence */}
            <ScrollReveal delay={0.1}>
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[11px] text-nb-text3 tracking-widest">
                    LAYER 01
                  </span>
                  <Badge variant="accent">Available Day 1</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  <div>
                    <Heading as="h3" className="mb-3">
                      Market Intelligence
                    </Heading>
                    <Text size="lg" className="mb-4">
                      The foundation. Structured data from government registries,
                      procurement portals, and trade databases across 145+
                      countries — searchable before anyone signs up.
                    </Text>
                    <div className="space-y-3 mt-6">
                      {[
                        "Government registry data with ownership and legal status",
                        "HS code mapping across international trade nomenclatures",
                        "Active procurement tenders aggregated from public portals",
                        "Import/export records showing real trade flows",
                        "Sector trend analysis updated weekly",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <span className="text-nb-accent text-xs mt-0.5 shrink-0">
                            &#9654;
                          </span>
                          <Text size="md" variant="muted">
                            {item}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mock Search UI */}
                  <div className="bg-nb-surface rounded-xl border border-nb-border overflow-hidden">
                    <div className="px-5 py-3.5 border-b border-nb-border flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-nb-accent/40" />
                      <span className="font-mono text-[11px] text-nb-text3 tracking-wide">
                        SEARCH
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="bg-nb-bg2 rounded-md px-4 py-2.5 mb-4 border border-nb-border2">
                        <span className="text-[13px] text-nb-text2">
                          electronics manufacturers Germany
                        </span>
                      </div>
                      <div className="space-y-3">
                        {[
                          {
                            name: "TechParts GmbH",
                            location: "Munich, DE",
                            reg: "HRB 234891",
                            status: "Active",
                          },
                          {
                            name: "ElektroWerk AG",
                            location: "Berlin, DE",
                            reg: "HRB 112045",
                            status: "Active",
                          },
                          {
                            name: "Siemens Micro Div.",
                            location: "Hamburg, DE",
                            reg: "HRB 089234",
                            status: "Active",
                          },
                        ].map((result) => (
                          <div
                            key={result.name}
                            className="bg-nb-bg2 rounded-md p-3.5 border border-nb-border"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[13px] text-nb-text font-medium">
                                {result.name}
                              </span>
                              <Badge variant="green">{result.status}</Badge>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-[11px] text-nb-text3">
                                {result.location}
                              </span>
                              <span className="text-[11px] text-nb-text3">
                                {result.reg}
                              </span>
                            </div>
                          </div>
                        ))}
                        <Text variant="faint" size="sm" className="pt-1">
                          40 verified companies found from government registry
                          data
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Layer 2 — Your Network */}
            <ScrollReveal delay={0.1}>
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[11px] text-nb-text3 tracking-widest">
                    LAYER 02
                  </span>
                  <Badge variant="green">When You Connect</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  <div>
                    <Heading as="h3" className="mb-3">
                      Your Network
                    </Heading>
                    <Text size="lg" className="mb-4">
                      Import your contacts and watch the same search results
                      transform. Suddenly you can see who you already know at
                      each company, who can introduce you, and which
                      relationships are strongest.
                    </Text>
                    <div className="space-y-3 mt-6">
                      {[
                        "One-click contact import from email, CRM, or LinkedIn",
                        "Automatic relationship mapping across companies",
                        "Search results enriched with your connection data",
                        "See mutual contacts, shared history, and warm paths",
                        "Your data stays private — only you see your network overlay",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <span className="text-nb-green text-xs mt-0.5 shrink-0">
                            &#9654;
                          </span>
                          <Text size="md" variant="muted">
                            {item}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mock enriched search UI */}
                  <div className="bg-nb-surface rounded-xl border border-nb-border overflow-hidden">
                    <div className="px-5 py-3.5 border-b border-nb-border flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-nb-green/40" />
                      <span className="font-mono text-[11px] text-nb-text3 tracking-wide">
                        SEARCH + YOUR NETWORK
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="bg-nb-bg2 rounded-md px-4 py-2.5 mb-4 border border-nb-border2">
                        <span className="text-[13px] text-nb-text2">
                          electronics manufacturers Germany
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-nb-bg2 rounded-md p-3.5 border border-nb-border">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[13px] text-nb-text font-medium">
                              TechParts GmbH
                            </span>
                            <Badge variant="green">3 connections</Badge>
                          </div>
                          <Text variant="faint" size="sm" className="mb-2">
                            Munich, DE &middot; HRB 234891
                          </Text>
                          <div className="bg-[rgba(16,185,129,0.06)] border border-[rgba(16,185,129,0.15)] rounded-md p-2.5">
                            <Text
                              variant="muted"
                              size="sm"
                              className="text-nb-green"
                            >
                              You know Sarah Chen (VP Sales), Mark Weber
                              (Procurement), and Li Wei (CTO)
                            </Text>
                          </div>
                        </div>
                        <div className="bg-nb-bg2 rounded-md p-3.5 border border-nb-border">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[13px] text-nb-text font-medium">
                              ElektroWerk AG
                            </span>
                            <Badge variant="accent">1 connection</Badge>
                          </div>
                          <Text variant="faint" size="sm" className="mb-2">
                            Berlin, DE &middot; HRB 112045
                          </Text>
                          <div className="bg-[rgba(45,127,249,0.06)] border border-[rgba(45,127,249,0.15)] rounded-md p-2.5">
                            <Text
                              variant="muted"
                              size="sm"
                              className="text-nb-accent"
                            >
                              Your contact Jurgen Braun works here as Head of
                              Exports
                            </Text>
                          </div>
                        </div>
                        <Text variant="faint" size="sm" className="pt-1">
                          Same 40 results — now enriched with your relationships
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Layer 3 — Network Intelligence */}
            <ScrollReveal delay={0.1}>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[11px] text-nb-text3 tracking-widest">
                    LAYER 03
                  </span>
                  <Badge variant="amber">As It Grows</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  <div>
                    <Heading as="h3" className="mb-3">
                      Network Intelligence
                    </Heading>
                    <Text size="lg" className="mb-4">
                      This is where the platform compounds. Every user, every
                      connection, every completed transaction makes the network
                      smarter for everyone. Trust scores emerge. Demand signals
                      surface. Warm introduction paths appear automatically.
                    </Text>
                    <div className="space-y-3 mt-6">
                      {[
                        "Trust scores based on verification, network, and transaction data",
                        "Live demand signals — see what buyers are actively seeking",
                        "Warm introduction paths through shared connections",
                        "Opportunity matching based on capability and reputation",
                        "The moat that gets wider with every new user",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <span className="text-nb-amber text-xs mt-0.5 shrink-0">
                            &#9654;
                          </span>
                          <Text size="md" variant="muted">
                            {item}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mock network intelligence UI */}
                  <div className="bg-nb-surface rounded-xl border border-nb-border overflow-hidden">
                    <div className="px-5 py-3.5 border-b border-nb-border flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-nb-amber/40" />
                      <span className="font-mono text-[11px] text-nb-text3 tracking-wide">
                        SEARCH + NETWORK INTELLIGENCE
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="bg-nb-bg2 rounded-md p-3.5 border border-nb-border mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[13px] text-nb-text font-medium">
                            TechParts GmbH
                          </span>
                          <div className="flex items-center gap-2">
                            <Badge variant="green">3 connections</Badge>
                          </div>
                        </div>

                        {/* Trust score bar */}
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-mono text-[22px] font-medium text-nb-text">
                            87
                          </span>
                          <div className="flex-1">
                            <div className="h-1.5 bg-nb-bg3 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-nb-green rounded-full"
                                style={{ width: "87%" }}
                              />
                            </div>
                            <span className="text-[10px] text-nb-text3 mt-0.5 block">
                              Trust Score
                            </span>
                          </div>
                        </div>

                        {/* Signals */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 bg-[rgba(245,158,11,0.06)] border border-[rgba(245,158,11,0.15)] rounded-md px-2.5 py-1.5">
                            <span className="text-nb-amber text-[10px]">
                              &#9679;
                            </span>
                            <Text
                              variant="muted"
                              size="sm"
                              className="text-nb-amber"
                            >
                              Active request: seeking component suppliers in
                              Southeast Asia
                            </Text>
                          </div>
                          <div className="flex items-center gap-2 bg-[rgba(16,185,129,0.06)] border border-[rgba(16,185,129,0.15)] rounded-md px-2.5 py-1.5">
                            <span className="text-nb-green text-[10px]">
                              &#9679;
                            </span>
                            <Text
                              variant="muted"
                              size="sm"
                              className="text-nb-green"
                            >
                              Warm path: 2 connections from their CEO via Sarah
                              Chen
                            </Text>
                          </div>
                          <div className="flex items-center gap-2 bg-[rgba(45,127,249,0.06)] border border-[rgba(45,127,249,0.15)] rounded-md px-2.5 py-1.5">
                            <span className="text-nb-accent text-[10px]">
                              &#9679;
                            </span>
                            <Text
                              variant="muted"
                              size="sm"
                              className="text-nb-accent"
                            >
                              12 successful deals on platform, 0 disputes, avg
                              3-day response
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text variant="faint" size="sm">
                        Same search — now with trust, signals, and warm paths
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </Section>

        {/* ── Data Sources ── */}
        <Section>
          <Container>
            <ScrollReveal>
              <Eyebrow>Data Sources</Eyebrow>
              <Heading as="h2" className="max-w-[600px] mb-4">
                Built on Real Data, Not User-Generated Profiles
              </Heading>
              <Text size="lg" className="max-w-[560px] mb-12">
                Every record in Netabridge originates from an authoritative
                source. No self-reported claims. No pay-to-play badges. Just
                verified, structured, searchable data.
              </Text>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <CardGrid columns={3}>
                {dataSources.map((source) => (
                  <Card key={source.title}>
                    <div className="flex items-center justify-between mb-3">
                      <Heading as="h4">{source.title}</Heading>
                      <Badge variant="neutral">{source.stat}</Badge>
                    </div>
                    <Text>{source.description}</Text>
                  </Card>
                ))}
              </CardGrid>
            </ScrollReveal>
          </Container>
        </Section>

        {/* ── How Trust Works ── */}
        <Section variant="alt">
          <Container>
            <ScrollReveal>
              <Eyebrow>Trust System</Eyebrow>
              <Heading as="h2" className="max-w-[700px] mb-4">
                Trust Scores That Actually Mean Something
              </Heading>
              <Text size="lg" className="max-w-[600px] mb-6">
                No paid badges. No self-reported certifications. Netabridge
                trust scores are computed from three verifiable signal
                categories — and they update in real time.
              </Text>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12">
                {/* Trust breakdown visual */}
                <div className="bg-nb-surface rounded-xl border border-nb-border p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                      <span className="font-mono text-[48px] font-medium text-nb-text leading-none">
                        87
                      </span>
                      <span className="text-[11px] text-nb-text3 block text-center mt-1">
                        / 100
                      </span>
                    </div>
                    <div>
                      <Text variant="body" size="lg" className="font-medium">
                        TechParts GmbH
                      </Text>
                      <Text variant="faint" size="sm">
                        Trust score breakdown
                      </Text>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {trustFactors.map((factor) => (
                      <div key={factor.label}>
                        <div className="flex items-center justify-between mb-2">
                          <Text
                            variant="muted"
                            size="md"
                            className="font-medium"
                          >
                            {factor.label}
                          </Text>
                          <span
                            className={`font-mono text-[13px] ${factor.color}`}
                          >
                            {factor.weight}
                          </span>
                        </div>
                        <div className="h-2 bg-nb-bg2 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${factor.barColor} rounded-full`}
                            style={{
                              width: factor.weight,
                            }}
                          />
                        </div>
                        <Text variant="faint" size="sm" className="mt-1.5">
                          {factor.description}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust explanation */}
                <div className="space-y-8">
                  <div>
                    <Heading as="h3" className="mb-2">
                      Not a Vanity Metric
                    </Heading>
                    <Text>
                      Traditional B2B platforms let companies pay for
                      &ldquo;verified&rdquo; badges. That tells you who has a
                      marketing budget, not who you can trust. Netabridge trust
                      scores are computed from data you cannot fake.
                    </Text>
                  </div>
                  <div>
                    <Heading as="h3" className="mb-2">
                      Government-Anchored
                    </Heading>
                    <Text>
                      The foundation of every trust score is official government
                      registry data — incorporation status, filing history,
                      registered directors, and compliance records. This is
                      verified at the source, not self-reported.
                    </Text>
                  </div>
                  <div>
                    <Heading as="h3" className="mb-2">
                      Network-Amplified
                    </Heading>
                    <Text>
                      As the network grows, trust scores become more granular.
                      Companies with strong connections, repeat transactions, and
                      positive trade history earn higher scores organically. No
                      shortcuts.
                    </Text>
                  </div>
                  <div>
                    <Heading as="h3" className="mb-2">
                      Always Current
                    </Heading>
                    <Text>
                      Scores update continuously as new data arrives — a missed
                      filing, a disputed transaction, or a dissolved connection
                      reflects immediately. Trust is earned and maintained, not
                      purchased once.
                    </Text>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </Section>

        {/* ── CTA ── */}
        <Section variant="bordered" id="cta" className="text-center">
          <Container>
            <ScrollReveal>
              <Eyebrow>Early Access</Eyebrow>
              <Heading as="h2" className="mb-3">
                The future of B2B trade
                <br />
                starts here.
              </Heading>
              <Text size="lg" className="mx-auto max-w-[480px] mb-8">
                Join the businesses already shaping how global trade works. Free
                to start. First movers get the strongest network position.
              </Text>
              <Button size="lg" asChild>
                <a href="#">Get Early Access</a>
              </Button>
              <Text variant="faint" size="sm" className="mt-4">
                No credit card required &middot; Free to start &middot; Backed
                by Antler
              </Text>
            </ScrollReveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
