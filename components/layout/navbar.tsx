"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";

const navLinks = [
  { label: "Platform", href: "#vision" },
  { label: "How It Works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Compare", href: "#compare" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-100 h-16 flex items-center justify-between px-6 md:px-12",
        "bg-[rgba(5,10,18,0.8)] backdrop-blur-[20px]",
        "border-b transition-colors duration-300",
        scrolled ? "border-nb-border" : "border-[rgba(26,37,64,0.5)]"
      )}
    >
      <Link href="/" className="flex items-center gap-2.5">
        <Image
          src="/logo.png"
          alt="Netabridge"
          width={28}
          height={28}
          className="rounded-sm"
        />
        <span className="font-mono text-[15px] font-medium tracking-[1.5px] text-nb-text2">
          NETA<span className="text-nb-accent">BRIDGE</span>
        </span>
      </Link>

      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hidden md:block text-[13px] text-nb-text3 hover:text-nb-text transition-colors tracking-wide"
          >
            {link.label}
          </a>
        ))}
        <Button variant="nav" size="nav" asChild>
          <a href="#cta">Get Early Access</a>
        </Button>
      </div>
    </nav>
  );
}
