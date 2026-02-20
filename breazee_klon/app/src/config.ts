// ============================================================
// Site Configuration
// ============================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Breazee - Guided breathing for Apple Watch",
  description: "Breazee is a minimalist Apple Watch app featuring guided breathing techniques such as HRV breathing, Box Breathing and 4-7-8 breathing — designed to support calm, focus and everyday balance.",
  language: "en",
};

// ============================================================
// Navigation
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  logo: string;
  links: NavLink[];
  dropdownLinks: NavLink[];
}

export const navigationConfig: NavigationConfig = {
  brandName: "Breazee",
  logo: "/breazee-logo.png",
  links: [
    { label: "Start", href: "#start" },
    { label: "Breathing Techniques", href: "#techniques" },
    { label: "How Breazee works", href: "#how-it-works" },
    { label: "Support", href: "#support" },
  ],
  dropdownLinks: [
    { label: "HRV Breathing", href: "#hrv-breathing" },
    { label: "Box Breathing", href: "#box-breathing" },
    { label: "4-7-8 Breathing", href: "#478-breathing" },
  ],
};

// ============================================================
// Hero Section
// ============================================================

export interface HeroConfig {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  appStoreBadge: string;
  image: string;
  imageAlt: string;
}

export const heroConfig: HeroConfig = {
  titleLine1: "Find calm.",
  titleLine2: "Right on your wrist.",
  subtitle: "Guided breathing for Apple Watch",
  description: "Breazee is a minimalist Apple Watch app featuring guided breathing techniques such as HRV breathing, Box Breathing and 4-7-8 breathing — designed to support calm, focus and everyday balance. Works offline, without distractions.",
  ctaText: "Explore breathing techniques →",
  ctaHref: "#techniques",
  appStoreBadge: "Download on the App Store",
  image: "/apple-watch-hero.png",
  imageAlt: "Breazee app on Apple Watch",
};

// ============================================================
// What is Breazee Section
// ============================================================

export interface WhatIsConfig {
  sectionTitle: string;
  description: string;
}

export const whatIsConfig: WhatIsConfig = {
  sectionTitle: "What is Breazee?",
  description: "Breazee is designed for moments when you want to pause, reset, or refocus. It offers a small selection of structured breathing techniques that are easy to learn and suitable for everyday use — directly on your Apple Watch.",
};

// ============================================================
// Breathing Techniques Section
// ============================================================

export interface Technique {
  id: string;
  title: string;
  description: string;
  details?: string;
  ctaText: string;
  ctaHref: string;
}

export interface TechniquesConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  techniques: Technique[];
}

export const techniquesConfig: TechniquesConfig = {
  sectionTitle: "Breathing techniques in Breazee",
  sectionSubtitle: "Different situations call for different breathing patterns. Breazee focuses on a small set of techniques that can be practiced anytime, without complexity or distraction.",
  techniques: [
    {
      id: "hrv",
      title: "HRV Breathing",
      description: "A balanced breathing rhythm often used to support relaxation and recovery.",
      details: "Often practiced during quiet moments throughout the day, such as short breaks or transitions between activities — when you want to reset and regain balance.",
      ctaText: "Learn more →",
      ctaHref: "#hrv-breathing",
    },
    {
      id: "box",
      title: "Box Breathing",
      description: "A structured four-phase breathing pattern commonly used to support calm focus.",
      details: "Frequently used in situations that call for clarity and composure, such as before focused work or during mentally demanding tasks — when you want to slow down a racing mind.",
      ctaText: "Learn more →",
      ctaHref: "#box-breathing",
    },
    {
      id: "478",
      title: "4-7-8 Breathing",
      description: "A slower breathing rhythm often practiced in the evening.",
      details: "Typically practiced during calmer moments later in the day, such as winding down in the evening or preparing for rest — when a slower and more deliberate rhythm feels natural.",
      ctaText: "Learn more →",
      ctaHref: "#478-breathing",
    },
  ],
};

// ============================================================
// Apple Watch Section
// ============================================================

export interface AppleWatchConfig {
  sectionTitle: string;
  description: string;
  features: string[];
}

export const appleWatchConfig: AppleWatchConfig = {
  sectionTitle: "Designed for Apple Watch",
  description: "Breazee is built specifically for Apple Watch and works independently without your phone. Subtle haptic feedback, clear phases and minimal visuals help you stay focused on your breathing — not on your screen.",
  features: [
    "Apple Watch–only experience",
    "No phone required",
    "Subtle haptic guidance",
    "Distraction-free design",
  ],
};

// ============================================================
// Footer
// ============================================================

export interface FooterConfig {
  legalLinks: { label: string; href: string }[];
  copyright: string;
  instagramUrl: string;
}

export const footerConfig: FooterConfig = {
  legalLinks: [
    { label: "Privacy", href: "#privacy" },
    { label: "EULA", href: "#eula" },
    { label: "Imprint", href: "#imprint" },
  ],
  copyright: "© Breazee · Apple Watch app",
  instagramUrl: "https://instagram.com/breazee.app",
};
