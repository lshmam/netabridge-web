import {
  Container,
  Section,
  Button,
  Heading,
  Text,
  Eyebrow,
} from "@/components/ui";
import { ScrollReveal } from "@/components/effects";

export function CTASection() {
  return (
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
            Join the businesses already shaping how global trade works. Free to
            start. First movers get the strongest network position.
          </Text>
          <Button size="lg" asChild>
            <a href="#">Get Early Access</a>
          </Button>
          {/* <Text variant="faint" size="sm" className="mt-4">
            No credit card required &middot; Free to start &middot; Backed by
            Antler
          </Text> */}
        </ScrollReveal>
      </Container>
    </Section>
  );
}
