import Image from "next/image";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      // { label: "Features", href: "#features" },
      // { label: "Pricing", href: "#" },
      // { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-nb-border bg-nb-bg py-12 px-6 md:px-12">
      <div className="mx-auto max-w-[1100px] flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Netabridge"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="font-mono text-[16px] font-medium text-nb-text3 tracking-wide">
              NETA<span className="text-nb-accent">BRIDGE</span>
            </span>
          </Link>
          <p className="text-xs text-nb-text3 font-light mt-2">
            The intelligence engine for B2B trade.
          </p>
          <p className="text-xs text-nb-text3 font-light mt-3">
            &copy; 2026 NetaBridge. All rights reserved.
          </p>
        </div>

        <div className="flex gap-12 md:gap-12 flex-wrap">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h5 className="text-[11px] font-semibold uppercase tracking-wide text-nb-text3 mb-3">
                {col.title}
              </h5>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-[13px] text-nb-text2 font-light py-0.5 hover:text-nb-text transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
