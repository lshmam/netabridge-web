"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { ThemeToggle } from "@/components/theme-toggle";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  // { label: "How It Works", href: "/how-it-works" },
  // { label: "Features", href: "/features" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change / resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] h-16 flex items-center justify-between px-6 md:px-12",
          "bg-nb-bg/80 backdrop-blur-[20px]",
          "border-b transition-colors duration-300",
          scrolled ? "border-nb-border" : "border-nb-border/50"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt="Netabridge"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="font-mono text-[16px] font-medium tracking-[1.5px] text-nb-text2">
            NETA<span className="text-nb-accent">BRIDGE</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-nb-text3 hover:text-nb-text transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="nav" size="nav" asChild>
              <a href="#cta">Get Early Access</a>
            </Button>
          </div>
        </div>

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="w-9 h-9 flex items-center justify-center rounded-md text-nb-text2 hover:text-nb-text hover:bg-nb-surface transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={cn(
          "fixed top-16 left-0 right-0 z-[99] bg-nb-bg/95 backdrop-blur-[20px] border-b border-nb-border transition-all duration-300 md:hidden overflow-hidden",
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] text-nb-text2 hover:text-nb-text py-3 border-b border-nb-border/40 last:border-0 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 pb-1">
            <Button variant="nav" size="nav" asChild className="w-full justify-center">
              <a href="#cta" onClick={() => setMenuOpen(false)}>Get Early Access</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
