"use client";

import { Container, Button, Heading, HeadingAccent, Text, Eyebrow } from "@/components/ui";
import { FadeIn, Glow, ParticlesBackground } from "@/components/effects";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center">
      <ParticlesBackground />
      <Glow />
      <Container className="relative z-10 py-32">
        <FadeIn delay={0.2}>
          <Eyebrow className="mb-6">B2B Trade Intelligence</Eyebrow>
        </FadeIn>

        <FadeIn delay={0.4}>
          <Heading as="h1" className="mx-auto max-w-[800px] mb-6">
            The future of B2B trade
            <br />
            is <HeadingAccent>intelligent.</HeadingAccent>
          </Heading>
        </FadeIn>

        <FadeIn delay={0.6}>
          <Text
            size="lg"
            className="mx-auto max-w-[560px] mb-10 leading-relaxed"
          >
            Every company, every trade route, every opportunity — searchable,
            verified, and connected. The intelligence engine that transforms how
            businesses find and trust each other.
          </Text>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="md" asChild>
              <a href="#cta">Get Early Access</a>
            </Button>
            <Button variant="ghost" size="md" asChild>
              <a href="#vision">See how it works</a>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={1.0}>
          <Text variant="faint" size="sm" className="mt-4">
            Free to start &middot; Backed by Antler &middot; Launching 2026
          </Text>
        </FadeIn>
      </Container>
    </section>
  );
}
