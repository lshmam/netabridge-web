import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import {
  Container,
  Section,
  Button,
  Heading,
  HeadingAccent,
  Text,
  Eyebrow,
  Badge,
  Card,
} from "@/components/ui";
import { ScrollReveal } from "@/components/effects";

export const metadata: Metadata = {
  title: "How It Works — Netabridge",
  description:
    "From search to deal in four steps. Discover how Netabridge helps you find, verify, connect with, and trade with businesses worldwide.",
};

/* ──────────────────────────────────────────────
   Mock Data
   ────────────────────────────────────────────── */

const searchResults = [
  {
    name: "Nordic Metals AB",
    meta: "Trading \u00b7 Sweden \u00b7 HS 7403.11",
    verified: true,
    score: 92,
    scoreColor: "text-nb-green",
  },
  {
    name: "Rhine Copper GmbH",
    meta: "Manufacturing \u00b7 Germany \u00b7 HS 7403.11",
    verified: true,
    score: 87,
    scoreColor: "text-nb-green",
  },
  {
    name: "Balkan Trade Corp",
    meta: "Distribution \u00b7 Romania \u00b7 HS 7403.11",
    verified: false,
    score: 41,
    scoreColor: "text-nb-text3",
  },
];

const registryChecks = [
  { label: "Swedish Companies Registration Office", status: "Confirmed", ok: true },
  { label: "EU Trade Registry (EORI)", status: "Confirmed", ok: true },
  { label: "UN/CEFACT Trade Database", status: "Confirmed", ok: true },
  { label: "Sanctions & PEP Screening", status: "Clear", ok: true },
];

const connections = [
  {
    name: "Erik Lindqvist",
    role: "Head of Procurement, Nordic Metals AB",
    mutual: 2,
    path: "Via Johan Berg \u2192 direct colleague",
  },
  {
    name: "Anna Svensson",
    role: "Trade Operations Manager",
    mutual: 1,
    path: "Via your company\u2019s network",
  },
];

const dealMetrics = [
  { label: "Trust Score", value: "92/100", color: "text-nb-green" },
  { label: "Avg. Response Time", value: "< 4 hrs", color: "text-nb-accent" },
  { label: "Completed Trades", value: "347", color: "text-nb-text" },
  { label: "Dispute Rate", value: "0.3%", color: "text-nb-green" },
];

/* ──────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────── */

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-[120px] text-center">
          <Container>
            <ScrollReveal>
              <Eyebrow className="mb-6">How It Works</Eyebrow>
              <Heading as="h1" className="mx-auto max-w-[800px] mb-6">
                From Search to Deal
                <br />
                in <HeadingAccent>Four Steps</HeadingAccent>
              </Heading>
              <Text
                size="lg"
                className="mx-auto max-w-[560px] leading-relaxed"
              >
                No gatekeepers. No outdated directories. Just a clear path from
                discovery to trusted partnership, powered by real data and
                verified intelligence.
              </Text>
            </ScrollReveal>
          </Container>
        </section>

        {/* ── Step 1: Search ── */}
        <Section variant="alt">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(45,127,249,0.08)] border border-[rgba(45,127,249,0.15)] flex items-center justify-center font-mono text-sm text-nb-accent">
                    01
                  </div>
                  <Eyebrow className="mb-0">Search</Eyebrow>
                </div>
                <Heading as="h2" className="mb-4">
                  Search any company on earth
                </Heading>
                <Text size="lg" className="mb-6 leading-relaxed">
                  Type any company name, industry, HS code, or location. Our
                  engine searches government registries, trade databases, and
                  platform intelligence across 145+ countries. Real data, not
                  self-reported listings.
                </Text>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="accent">145+ Countries</Badge>
                  <Badge variant="green">Gov. Registries</Badge>
                  <Badge variant="neutral">Trade Databases</Badge>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-nb-surface border border-nb-border rounded-xl overflow-hidden">
                  {/* Window chrome */}
                  <div className="flex items-center gap-1.5 px-4 py-2.5 bg-nb-bg2 border-b border-nb-border">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#28ca42]" />
                    <span className="font-mono text-[10px] text-nb-text3 ml-2">
                      netabridge.com/search
                    </span>
                  </div>

                  <div className="p-5">
                    {/* Search bar */}
                    <div className="flex gap-2 mb-4">
                      <div className="flex-1 px-3.5 py-2.5 bg-nb-bg2 border border-nb-border rounded-md font-sans text-[13px] text-nb-text2">
                        copper cathode suppliers europe
                      </div>
                      <div className="px-4 py-2.5 bg-nb-accent rounded-md font-sans text-[13px] font-medium text-white flex-shrink-0">
                        Search
                      </div>
                    </div>

                    {/* Filter chips */}
                    <div className="flex gap-1.5 mb-4">
                      <span className="font-mono text-[10px] px-2 py-1 rounded bg-[rgba(45,127,249,0.08)] text-nb-accent border border-[rgba(45,127,249,0.15)]">
                        HS 7403.11
                      </span>
                      <span className="font-mono text-[10px] px-2 py-1 rounded bg-nb-bg2 text-nb-text3 border border-nb-border">
                        Europe
                      </span>
                      <span className="font-mono text-[10px] px-2 py-1 rounded bg-nb-bg2 text-nb-text3 border border-nb-border">
                        Verified only
                      </span>
                    </div>

                    {/* Results */}
                    <div className="space-y-2">
                      {searchResults.map((result) => (
                        <div
                          key={result.name}
                          className="flex items-center gap-3 p-3 bg-nb-bg2 border border-nb-border rounded-lg"
                          style={{ opacity: result.verified ? 1 : 0.5 }}
                        >
                          <div className="w-8 h-8 rounded-lg bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.2)] flex items-center justify-center text-xs text-nb-green flex-shrink-0">
                            {result.verified ? "\u2713" : "\u2014"}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[13px] font-semibold text-nb-text block">
                              {result.name}
                            </span>
                            <span className="text-[11px] text-nb-text3">
                              {result.meta}
                            </span>
                          </div>
                          <span
                            className={`font-mono text-sm font-bold flex-shrink-0 ${result.scoreColor}`}
                          >
                            {result.score}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="font-mono text-[10px] text-nb-text3 mt-3 text-center">
                      Showing 3 of 47 results &middot; Ranked by trust + network
                      proximity
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>

        {/* ── Step 2: Verify ── */}
        <Section>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Visual first on desktop (order swap) */}
              <ScrollReveal className="order-2 lg:order-1" delay={0.2}>
                <div className="bg-nb-surface border border-nb-border rounded-xl overflow-hidden">
                  {/* Window chrome */}
                  <div className="flex items-center gap-1.5 px-4 py-2.5 bg-nb-bg2 border-b border-nb-border">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#28ca42]" />
                    <span className="font-mono text-[10px] text-nb-text3 ml-2">
                      netabridge.com/company/nordic-metals
                    </span>
                  </div>

                  <div className="p-5">
                    {/* Company header */}
                    <div className="flex items-start gap-3 mb-5">
                      <div className="w-11 h-11 rounded-lg bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.2)] flex items-center justify-center text-nb-green font-mono text-sm flex-shrink-0">
                        NM
                      </div>
                      <div className="flex-1">
                        <h5 className="text-[15px] font-semibold text-nb-text">
                          Nordic Metals AB
                        </h5>
                        <span className="text-[11px] text-nb-text3">
                          Stockholm, Sweden &middot; Est. 2003
                        </span>
                        <div className="flex gap-1.5 mt-1.5">
                          <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[rgba(16,185,129,0.08)] text-nb-green">
                            Gov. Verified
                          </span>
                          <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[rgba(16,185,129,0.08)] text-nb-green">
                            Active Entity
                          </span>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="font-mono text-2xl font-bold text-nb-green">
                          92
                        </div>
                        <span className="font-mono text-[9px] text-nb-text3">
                          Trust Score
                        </span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-nb-border mb-4" />

                    {/* Registry checks */}
                    <div className="space-y-2">
                      {registryChecks.map((check) => (
                        <div
                          key={check.label}
                          className="flex items-center justify-between py-2 px-3 bg-nb-bg2 rounded-md"
                        >
                          <span className="text-[12px] text-nb-text2">
                            {check.label}
                          </span>
                          <span className="font-mono text-[10px] text-nb-green">
                            {check.status}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Company details */}
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="p-3 bg-nb-bg2 rounded-md">
                        <span className="font-mono text-[9px] text-nb-text3 uppercase tracking-wide block mb-1">
                          Incorporated
                        </span>
                        <span className="text-[13px] text-nb-text font-medium">
                          14 Mar 2003
                        </span>
                      </div>
                      <div className="p-3 bg-nb-bg2 rounded-md">
                        <span className="font-mono text-[9px] text-nb-text3 uppercase tracking-wide block mb-1">
                          Status
                        </span>
                        <span className="text-[13px] text-nb-green font-medium">
                          Active
                        </span>
                      </div>
                      <div className="p-3 bg-nb-bg2 rounded-md">
                        <span className="font-mono text-[9px] text-nb-text3 uppercase tracking-wide block mb-1">
                          Org. Number
                        </span>
                        <span className="text-[13px] text-nb-text font-medium">
                          556789-0123
                        </span>
                      </div>
                      <div className="p-3 bg-nb-bg2 rounded-md">
                        <span className="font-mono text-[9px] text-nb-text3 uppercase tracking-wide block mb-1">
                          Last Verified
                        </span>
                        <span className="text-[13px] text-nb-text font-medium">
                          2 days ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.15)] flex items-center justify-center font-mono text-sm text-nb-green">
                    02
                  </div>
                  <Eyebrow className="mb-0">Verify</Eyebrow>
                </div>
                <Heading as="h2" className="mb-4">
                  Know they&apos;re who they say
                </Heading>
                <Text size="lg" className="mb-6 leading-relaxed">
                  Every result is cross-referenced against government registries.
                  Verified means the company is registered, active, and real. Not
                  a paid badge &mdash; a factual check.
                </Text>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="green">Registry Cross-Check</Badge>
                  <Badge variant="green">Sanctions Screening</Badge>
                  <Badge variant="accent">Real-Time Updates</Badge>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>

        {/* ── Step 3: Connect ── */}
        <Section variant="alt">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(45,127,249,0.08)] border border-[rgba(45,127,249,0.15)] flex items-center justify-center font-mono text-sm text-nb-accent">
                    03
                  </div>
                  <Eyebrow className="mb-0">Connect</Eyebrow>
                </div>
                <Heading as="h2" className="mb-4">
                  Reach the right people
                </Heading>
                <Text size="lg" className="mb-6 leading-relaxed">
                  Found a match? See who in your network knows someone there.
                  Connect directly with verified contacts, or post what you need
                  and let the AI match you.
                </Text>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="accent">Network Graph</Badge>
                  <Badge variant="accent">Warm Intros</Badge>
                  <Badge variant="neutral">AI Matching</Badge>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-nb-surface border border-nb-border rounded-xl overflow-hidden">
                  {/* Window chrome */}
                  <div className="flex items-center gap-1.5 px-4 py-2.5 bg-nb-bg2 border-b border-nb-border">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#28ca42]" />
                    <span className="font-mono text-[10px] text-nb-text3 ml-2">
                      netabridge.com/connect
                    </span>
                  </div>

                  <div className="p-5">
                    {/* Network header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h5 className="text-[13px] font-semibold text-nb-text">
                          Connections at Nordic Metals AB
                        </h5>
                        <span className="text-[11px] text-nb-text3">
                          2 warm introduction paths found
                        </span>
                      </div>
                      <span className="font-mono text-[10px] px-2 py-1 rounded bg-[rgba(45,127,249,0.08)] text-nb-accent border border-[rgba(45,127,249,0.15)]">
                        2nd degree
                      </span>
                    </div>

                    {/* Connection cards */}
                    <div className="space-y-3">
                      {connections.map((conn) => (
                        <div
                          key={conn.name}
                          className="p-3.5 bg-nb-bg2 border border-nb-border rounded-lg"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-full bg-[rgba(45,127,249,0.08)] border border-[rgba(45,127,249,0.15)] flex items-center justify-center font-mono text-xs text-nb-accent flex-shrink-0">
                              {conn.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div className="flex-1">
                              <span className="text-[13px] font-semibold text-nb-text block">
                                {conn.name}
                              </span>
                              <span className="text-[11px] text-nb-text3 block">
                                {conn.role}
                              </span>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[rgba(45,127,249,0.08)] text-nb-accent">
                                  {conn.mutual} mutual
                                </span>
                                <span className="text-[10px] text-nb-text3">
                                  {conn.path}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 flex gap-2">
                            <div className="flex-1 text-center py-1.5 bg-nb-accent rounded-md font-sans text-[11px] font-medium text-white">
                              Request Intro
                            </div>
                            <div className="flex-1 text-center py-1.5 bg-transparent border border-nb-border2 rounded-md font-sans text-[11px] text-nb-text3">
                              View Profile
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* AI suggestion */}
                    <div className="mt-4 p-3 bg-[rgba(45,127,249,0.04)] border border-[rgba(45,127,249,0.1)] rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] text-nb-accent">
                          AI Suggestion
                        </span>
                      </div>
                      <span className="text-[11px] text-nb-text2 leading-relaxed">
                        Based on your trade requirements, Erik Lindqvist is your
                        strongest connection path. His team handles copper
                        cathode procurement directly.
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>

        {/* ── Step 4: Trade ── */}
        <Section>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Visual first on desktop (order swap) */}
              <ScrollReveal className="order-2 lg:order-1" delay={0.2}>
                <div className="bg-nb-surface border border-nb-border rounded-xl overflow-hidden">
                  {/* Window chrome */}
                  <div className="flex items-center gap-1.5 px-4 py-2.5 bg-nb-bg2 border-b border-nb-border">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#28ca42]" />
                    <span className="font-mono text-[10px] text-nb-text3 ml-2">
                      netabridge.com/trade/nordic-metals
                    </span>
                  </div>

                  <div className="p-5">
                    {/* Deal header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h5 className="text-[13px] font-semibold text-nb-text">
                          Trade Overview
                        </h5>
                        <span className="text-[11px] text-nb-text3">
                          Nordic Metals AB &middot; Partner Dashboard
                        </span>
                      </div>
                      <span className="font-mono text-[10px] px-2 py-1 rounded bg-[rgba(16,185,129,0.08)] text-nb-green">
                        Ready to Trade
                      </span>
                    </div>

                    {/* Metrics grid */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {dealMetrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="p-3 bg-nb-bg2 rounded-md"
                        >
                          <span className="font-mono text-[9px] text-nb-text3 uppercase tracking-wide block mb-1">
                            {metric.label}
                          </span>
                          <span
                            className={`text-[15px] font-semibold ${metric.color}`}
                          >
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Trade history */}
                    <div className="mb-4">
                      <span className="font-mono text-[10px] text-nb-text3 uppercase tracking-wide block mb-2">
                        Recent Activity
                      </span>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between py-2 px-3 bg-nb-bg2 rounded-md">
                          <span className="text-[11px] text-nb-text2">
                            Copper Cathode &mdash; 50 MT
                          </span>
                          <span className="font-mono text-[10px] text-nb-green">
                            Completed
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-2 px-3 bg-nb-bg2 rounded-md">
                          <span className="text-[11px] text-nb-text2">
                            Copper Wire Rod &mdash; 25 MT
                          </span>
                          <span className="font-mono text-[10px] text-nb-green">
                            Completed
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-2 px-3 bg-nb-bg2 rounded-md">
                          <span className="text-[11px] text-nb-text2">
                            Copper Cathode &mdash; 100 MT
                          </span>
                          <span className="font-mono text-[10px] text-nb-amber">
                            In Progress
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Market context */}
                    <div className="p-3 bg-[rgba(45,127,249,0.04)] border border-[rgba(45,127,249,0.1)] rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] text-nb-accent">
                          Market Context
                        </span>
                      </div>
                      <span className="text-[11px] text-nb-text2 leading-relaxed">
                        LME Copper Grade A settlement: $8,945/MT. Nordic Metals
                        pricing is within 2% of benchmark. Average lead time: 14
                        days CIF Rotterdam.
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.15)] flex items-center justify-center font-mono text-sm text-nb-green">
                    04
                  </div>
                  <Eyebrow className="mb-0">Trade</Eyebrow>
                </div>
                <Heading as="h2" className="mb-4">
                  Trade with confidence
                </Heading>
                <Text size="lg" className="mb-6 leading-relaxed">
                  Trust scores, verified affiliations, market context,
                  transaction history. Everything you need to make informed
                  decisions, in one place.
                </Text>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="green">Trust Scores</Badge>
                  <Badge variant="accent">Market Context</Badge>
                  <Badge variant="amber">Transaction History</Badge>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>

        {/* ── Bottom CTA ── */}
        <Section variant="bordered" className="text-center">
          <Container>
            <ScrollReveal>
              <Eyebrow className="mb-6">Get Started</Eyebrow>
              <Heading as="h2" className="mb-3">
                Ready to transform how you
                <br />
                find trade partners?
              </Heading>
              <Text size="lg" className="mx-auto max-w-[480px] mb-8">
                Join the businesses already shaping how global trade works. Free
                to start. First movers get the strongest network position.
              </Text>
              <Button size="lg" asChild>
                <a href="#cta">Get Early Access</a>
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
