import { Container, Heading, Eyebrow } from "@/components/ui";
import { ScrollReveal } from "@/components/effects";

const rows = [
  {
    feature: "Trust",
    marketplace: "Paid badges",
    linkedin: "Self-reported",
    netabridge: "Government-verified",
  },
  {
    feature: "Core unit",
    marketplace: "Product listing",
    linkedin: "Person / career",
    netabridge: "Verified company",
  },
  {
    feature: "Intelligence",
    marketplace: "None",
    linkedin: "Content feed",
    netabridge: "Market data, tenders, trade signals",
  },
  {
    feature: "Value alone",
    marketplace: "Need sellers listed",
    linkedin: "Need connections",
    netabridge: "Works Day 1 with public data",
  },
  {
    feature: "Spam control",
    marketplace: "Fake listings",
    linkedin: "Fake profiles",
    netabridge: "Registry verification required",
  },
  {
    feature: "Built for",
    marketplace: "Product sourcing",
    linkedin: "Careers & networking",
    netabridge: "B2B trade partnerships",
  },
];

export function Comparison() {
  return (
    <section className="relative py-20 md:py-[120px]" id="compare">
      <Container>
        <ScrollReveal>
          <Eyebrow>Why Netabridge</Eyebrow>
          <Heading as="h2" className="mb-10">
            You&rsquo;ve tried the alternatives.
          </Heading>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3.5 px-5 font-medium text-[13px] text-nb-text2 border-b border-nb-border" />
                  <th className="text-left py-3.5 px-5 font-medium text-[13px] text-nb-text3 border-b border-nb-border">
                    Marketplaces
                  </th>
                  <th className="text-left py-3.5 px-5 font-medium text-[13px] text-nb-text3 border-b border-nb-border">
                    LinkedIn
                  </th>
                  <th className="text-left py-3.5 px-5 font-medium text-[13px] text-nb-accent border-b border-nb-border">
                    Netabridge
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.feature}
                    className="hover:bg-[rgba(45,127,249,0.02)] transition-colors"
                  >
                    <td className="py-3.5 px-5 text-nb-text font-medium text-[13px] border-b border-nb-border">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-5 text-nb-text2 font-light border-b border-nb-border">
                      {row.marketplace}
                    </td>
                    <td className="py-3.5 px-5 text-nb-text2 font-light border-b border-nb-border">
                      {row.linkedin}
                    </td>
                    <td className="py-3.5 px-5 text-nb-text font-normal border-b border-nb-border">
                      {row.netabridge}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
