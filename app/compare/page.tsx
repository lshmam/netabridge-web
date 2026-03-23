"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  Container,
  Section,
  Heading,
  HeadingAccent,
  Text,
  Eyebrow,
  Button,
  Card,
  CardGrid,
} from "@/components/ui";
import { ScrollReveal } from "@/components/effects";

/* ──────────────────────────────────────────────
   Pain-point cards data
   ────────────────────────────────────────────── */
const painPoints = [
  {
    label: "B2B Marketplaces",
    examples: "Alibaba, ThomasNet",
    problems: [
      "Pay-to-play listings that reward budget, not quality",
      "No real verification — badges are bought, not earned",
      "Rampant spam and fake supplier profiles",
      "Product-centric, not relationship-centric",
    ],
  },
  {
    label: "LinkedIn",
    examples: "Professional networking",
    problems: [
      "Career-focused platform misapplied to trade",
      "Self-reported company info with no verification",
      "Zero trade intelligence — no tenders, no registries",
      "Content noise drowns actual business signals",
    ],
  },
  {
    label: "Trade Shows & Cold Email",
    examples: "Industry events, outbound",
    problems: [
      "Expensive — $5K to $50K per show, plus travel",
      "Time-limited: a few days, then the leads go cold",
      "No data trail to revisit or build on",
      "Manual due diligence required after every meeting",
    ],
  },
];

/* ──────────────────────────────────────────────
   Comparison table data (expanded)
   ────────────────────────────────────────────── */
const comparisonRows = [
  {
    feature: "Trust model",
    marketplaces: "Paid badges",
    linkedin: "Self-reported",
    tradeShows: "In-person only",
    netabridge: "Government-verified",
  },
  {
    feature: "Core unit",
    marketplaces: "Product listing",
    linkedin: "Person / career",
    tradeShows: "Business card",
    netabridge: "Verified company",
  },
  {
    feature: "Intelligence",
    marketplaces: "None",
    linkedin: "Content feed",
    tradeShows: "None",
    netabridge: "Market data + tenders + signals",
  },
  {
    feature: "Value without network",
    marketplaces: "Need sellers",
    linkedin: "Need connections",
    tradeShows: "Need to attend",
    netabridge: "Works Day 1",
  },
  {
    feature: "Spam / fraud control",
    marketplaces: "Fake listings",
    linkedin: "Fake profiles",
    tradeShows: "Gatekeeping",
    netabridge: "Registry verification",
  },
  {
    feature: "Built for",
    marketplaces: "Product sourcing",
    linkedin: "Careers",
    tradeShows: "Networking",
    netabridge: "B2B trade partnerships",
  },
  {
    feature: "Cost",
    marketplaces: "Listing fees",
    linkedin: "Premium sub",
    tradeShows: "$5K\u201350K/show",
    netabridge: "Free to start",
  },
  {
    feature: "Data source",
    marketplaces: "Self-reported",
    linkedin: "Self-reported",
    tradeShows: "Self-reported",
    netabridge: "Government registries",
  },
  {
    feature: "Coverage",
    marketplaces: "China-heavy",
    linkedin: "Global / careers",
    tradeShows: "Regional",
    netabridge: "145+ countries",
  },
  {
    feature: "Verification",
    marketplaces: "Paid",
    linkedin: "None",
    tradeShows: "None",
    netabridge: "Automated registry",
  },
];

/* ──────────────────────────────────────────────
   Differentiator cards data
   ────────────────────────────────────────────── */
const differentiators = [
  {
    title: "Government-Verified Trust",
    body: "Unlike paid badges on marketplaces, every company on Netabridge is checked against real government registries. Verification is a fact, not a feature you buy.",
  },
  {
    title: "Intelligence From Day 1",
    body: "Public data \u2014 registries, tenders, trade records \u2014 means the platform is useful before anyone else signs up. No cold start problem.",
  },
  {
    title: "Network That Compounds",
    body: "Every user makes it smarter. Trust scores, demand signals, warm introduction paths. The more people use it, the better it gets for everyone.",
  },
];

/* ──────────────────────────────────────────────
   FAQ data
   ────────────────────────────────────────────── */
const faqItems = [
  {
    question: "How is Netabridge different from Alibaba?",
    answer:
      "Alibaba is a product marketplace where sellers pay for visibility. Netabridge is an intelligence engine built on government-verified company data. We don\u2019t sell listings \u2014 we surface trust signals, tender opportunities, and trade routes so you can find and vet partners with confidence.",
  },
  {
    question: "Do I need connections to get value?",
    answer:
      "No. Because Netabridge is built on public data \u2014 government registries, tenders, and trade records \u2014 the platform delivers value from the moment you sign up. You don\u2019t need to know anyone already on the network to start discovering verified companies and opportunities.",
  },
  {
    question: "How does government verification work?",
    answer:
      "We pull data directly from official government business registries across 145+ countries. When a company appears on Netabridge, its legal status, registration details, and key officers are verified against these authoritative sources \u2014 automatically and continuously.",
  },
  {
    question: "Is Netabridge free?",
    answer:
      "Yes, Netabridge is free to start. Core search, company verification, and basic intelligence features are available at no cost. Premium tiers with advanced analytics, deeper trade-signal data, and priority API access will be available as the platform grows.",
  },
  {
    question: "What countries do you cover?",
    answer:
      "Netabridge aggregates government registry data from over 145 countries, spanning every major trade corridor. Coverage is deepest in Europe, North America, and Asia-Pacific, and we are continuously adding new sources.",
  },
];

/* ──────────────────────────────────────────────
   FAQ Accordion Item
   ────────────────────────────────────────────── */
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-nb-border">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="text-[15px] font-medium text-nb-text pr-4">
          {question}
        </span>
        <span
          className="text-nb-text3 text-xl transition-transform duration-300 shrink-0"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "300px" : "0px", opacity: open ? 1 : 0 }}
      >
        <Text variant="muted" size="md" className="pb-5 pr-8">
          {answer}
        </Text>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────── */
export default function ComparePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <Section className="pt-32 md:pt-40">
          <Container>
            <ScrollReveal>
              <div className="max-w-[720px]">
                <Eyebrow>Compare</Eyebrow>
                <Heading as="h1" className="mb-4">
                  You&rsquo;ve Tried the Alternatives.{" "}
                  <HeadingAccent>Here&rsquo;s Why They Fall Short.</HeadingAccent>
                </Heading>
                <Text size="lg" className="max-w-[560px]">
                  Most B2B tools were built for something else and stretched to
                  fit trade. Netabridge was built from the ground up around
                  government-verified company data &mdash; a fundamentally
                  different approach.
                </Text>
              </div>
            </ScrollReveal>
          </Container>
        </Section>

        {/* ── The Problem ── */}
        <Section variant="alt">
          <Container>
            <ScrollReveal>
              <Eyebrow>The Problem</Eyebrow>
              <Heading as="h2" className="mb-10">
                Current solutions weren&rsquo;t built for trade.
              </Heading>
            </ScrollReveal>

            <CardGrid columns={3}>
              {painPoints.map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.1}>
                  <Card className="h-full">
                    <Heading as="h3" className="mb-1">
                      {item.label}
                    </Heading>
                    <Text variant="faint" size="sm" className="mb-5">
                      {item.examples}
                    </Text>
                    <ul className="space-y-2.5">
                      {item.problems.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 text-[13px] font-light leading-relaxed text-nb-text2"
                        >
                          <span className="text-nb-red mt-0.5 shrink-0">
                            &times;
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </ScrollReveal>
              ))}
            </CardGrid>
          </Container>
        </Section>

        {/* ── Detailed Comparison Table ── */}
        <Section>
          <Container>
            <ScrollReveal>
              <Eyebrow>Side by Side</Eyebrow>
              <Heading as="h2" className="mb-10">
                The full comparison.
              </Heading>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="overflow-x-auto rounded-xl border border-nb-border">
                <table className="w-full border-collapse text-sm min-w-[700px]">
                  <thead>
                    <tr className="bg-nb-surface">
                      <th className="text-left py-3.5 px-5 font-medium text-[13px] text-nb-text2 border-b border-nb-border" />
                      <th className="text-left py-3.5 px-5 font-medium text-[13px] text-nb-text3 border-b border-nb-border">
                        Marketplaces
                      </th>
                      <th className="text-left py-3.5 px-5 font-medium text-[13px] text-nb-text3 border-b border-nb-border">
                        LinkedIn
                      </th>
                      <th className="text-left py-3.5 px-5 font-medium text-[13px] text-nb-text3 border-b border-nb-border">
                        Trade Shows
                      </th>
                      <th className="text-left py-3.5 px-5 font-medium text-[13px] text-nb-accent border-b border-nb-accent/30 bg-[rgba(45,127,249,0.04)]">
                        Netabridge
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr
                        key={row.feature}
                        className="hover:bg-[rgba(45,127,249,0.02)] transition-colors"
                      >
                        <td className="py-3.5 px-5 text-nb-text font-medium text-[13px] border-b border-nb-border">
                          {row.feature}
                        </td>
                        <td className="py-3.5 px-5 text-nb-text3 font-light border-b border-nb-border">
                          {row.marketplaces}
                        </td>
                        <td className="py-3.5 px-5 text-nb-text3 font-light border-b border-nb-border">
                          {row.linkedin}
                        </td>
                        <td className="py-3.5 px-5 text-nb-text3 font-light border-b border-nb-border">
                          {row.tradeShows}
                        </td>
                        <td className="py-3.5 px-5 text-nb-text font-normal border-b border-nb-border bg-[rgba(45,127,249,0.04)]">
                          {row.netabridge}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </Container>
        </Section>

        {/* ── What Makes Us Different ── */}
        <Section variant="alt">
          <Container>
            <ScrollReveal>
              <Eyebrow>What Makes Us Different</Eyebrow>
              <Heading as="h2" className="mb-10">
                Built different, from the ground up.
              </Heading>
            </ScrollReveal>

            <CardGrid columns={3}>
              {differentiators.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <Card className="h-full">
                    <Heading as="h3" className="mb-3">
                      {item.title}
                    </Heading>
                    <Text variant="muted" size="md">
                      {item.body}
                    </Text>
                  </Card>
                </ScrollReveal>
              ))}
            </CardGrid>
          </Container>
        </Section>

        {/* ── FAQ ── */}
        <Section>
          <Container>
            <ScrollReveal>
              <div className="max-w-[680px] mx-auto">
                <Eyebrow className="text-center">FAQ</Eyebrow>
                <Heading as="h2" className="text-center mb-10">
                  Common questions.
                </Heading>

                <div className="border-t border-nb-border">
                  {faqItems.map((item) => (
                    <FAQItem
                      key={item.question}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </Section>

        {/* ── Bottom CTA ── */}
        <Section variant="bordered" className="text-center">
          <Container>
            <ScrollReveal>
              <Eyebrow>Ready to Switch?</Eyebrow>
              <Heading as="h2" className="mb-3">
                Stop settling for tools
                <br />
                that weren&rsquo;t built for trade.
              </Heading>
              <Text size="lg" className="mx-auto max-w-[480px] mb-8">
                Join the businesses already using government-verified intelligence
                to find partners, discover opportunities, and trade with
                confidence.
              </Text>
              <Button size="lg" asChild>
                <a href="#">Get Early Access</a>
              </Button>
              <Text variant="faint" size="sm" className="mt-4">
                No credit card required &middot; Free to start &middot; Backed by
                Antler
              </Text>
            </ScrollReveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
