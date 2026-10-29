/**
 * İngilizce sözlük.
 *
 * `Dictionary` tipi tr.ts'ten türetilir: burada bir alan eksik ya da
 * farklı tipteyse derleme hata verir — iki dil asla sapanmaksızın
 * aynı yapıyı paylaşır.
 *
 * Not: Türkçe /en/ alt klasörüne taşınmadığı için bağlantılar ya
 * /en/ önekli ya da sayfa içi çapadır. Blog İngilizce'ye çevrilmediği
 * için menüde yer almaz.
 */

import type { Dictionary } from "./tr";

export const en: Dictionary = {
  skipToContent: "Skip to content",

  header: {
    menuToggle: "Open/close menu",
    langLabel: "EN",
    langSwitchLabel: "TR",
    langSwitchSr: "View the site in Turkish",
  },

  nav: [
    { label: "System", href: "/en/#sistem" },
    { label: "Process", href: "/en/#surec" },
    { label: "Results", href: "/en/#sonuclar" },
    { label: "About", href: "/en/#ben-kimim" },
    { label: "Services", href: "/en/#hizmetler" },
    { label: "FAQ", href: "/en/#sss" },
    { label: "Contact", href: "/en/contact" },
  ],

  ctaLabel: "Book a Free Strategy Call",

  tagline: "We build digital growth systems for businesses.",

  founderJobTitle: "Digital Marketing Consultant",

  hero: {
    titleHtml:
      'We build <span class="text-gold">digital marketing and growth systems</span> for businesses.',
    paragraph:
      "We design your website, ads and automations not as disconnected tools but as a single growth system — with 2 years of knowledge and experience, we have built a more profitable marketing operation for businesses, from furniture retailers and educational institutions to e-commerce and service companies, using cost-effective methods.",
    stats: [
      { value: "2+ Yrs", label: "Experience" },
      { value: "10+", label: "Brands" },
      { value: "12.4x", label: "ROAS" },
    ],
    imageAlt: "Founder of CNKR Dijital, portrait photo",
  },

  problem: {
    eyebrow: "Why you're here",
    title:
      "For most businesses, the digital problem isn't visibility — it's the lack of a system.",
    items: [
      "You have a website, but it doesn't bring in customers.",
      "You're spending on ads but not seeing profitable results.",
      "You're not as visible on Google as your competitors.",
      "You don't have a growth strategy — just scattered tactics.",
      "Your conversion rates fall well below your potential.",
    ],
  },

  process: {
    eyebrow: "Process",
    title: "How do I build the digital growth system?",
    steps: [
      {
        number: "01",
        name: "Analysis",
        note: "We review your current website, ads and data.",
      },
      {
        number: "02",
        name: "Strategy",
        note: "We build a growth roadmap tailored to your business.",
      },
      {
        number: "03",
        name: "System Setup",
        note: "We bring your website, ads and automation infrastructure online.",
      },
      {
        number: "04",
        name: "Optimization",
        note: "We continuously refine the system based on data.",
      },
      {
        number: "05",
        name: "Growth",
        note: "The system starts producing predictable results.",
      },
    ],
  },

  results: {
    eyebrow: "Results",
    title: "What the digital growth system delivers for your business.",
    items: [
      "More qualified leads",
      "More sales",
      "Higher conversion rates",
      "Lower customer acquisition cost",
      "Stronger customer experience",
      "More efficient marketing operations",
    ],
  },

  testimonials: {
    eyebrow: "Client Voices",
    title: "The Numbers Speak, Not Us",
    proofAlts: [
      "Results of the Meta ad campaign managed for 3As Masa",
      "Results of the Meta ad campaign managed for Mondi",
    ],
  },

  about: {
    eyebrow: "About me",
    title: "Who is Emre Cenk, and what makes my approach different?",
    paragraphs: [
      "For 2 years in digital marketing, I have built steady, long-term collaborations with businesses across many sectors, including e-commerce, education and retail. Where I stand today, I keep contributing to the growth of businesses with results-driven, value-adding work.",
      "I discover each business's unique needs and draw up a personalized solution map. Unlike well-known agencies, I work with a limited number of brands in a sales- and profit-focused, data-driven, systematic and transparent way.",
      "I carry out every piece of my work in the role of a business solution partner, as efficiently as possible.",
    ],
    closing:
      "I state from the outset that I will not enter into work that isn't efficient and effective.",
  },

  why: {
    eyebrow: "Why CNKR?",
    title: "We sell a digital growth methodology, not tactics.",
    traits: [
      {
        name: "Strategic thinking",
        note: "Before proposing tactics, we work out the growth logic of your business.",
      },
      {
        name: "Digital expertise",
        note: "We run web, advertising and content disciplines under one roof.",
      },
      {
        name: "AI systems expertise",
        note: "We build automation not as a plug-in but as the backbone of the system.",
      },
      {
        name: "Conversion focus",
        note: "We design for measurable business outcomes, not traffic.",
      },
      {
        name: "Long-term growth mindset",
        note: "We build a sustainable system, not a one-off campaign.",
      },
    ],
  },

  services: {
    eyebrow: "Services",
    title: "Grow your business with our digital marketing services.",
    items: [
      {
        name: "Google Ads Management",
        note: "We manage high-intent search traffic targeting profitable customers, not cost per click.",
      },
      {
        name: "Meta Ads Management",
        note: "We run Instagram and Facebook campaigns that reach the right audience with creatives tested on a regular basis.",
      },
      {
        name: "Email Marketing",
        note: "We turn a list you build once into automated flows that generate sales on their own every month.",
      },
      {
        name: "Content Marketing",
        note: "We produce content that answers the questions your customers ask before buying and builds trust.",
      },
      {
        name: "AI Automation Services",
        note: "We automate repetitive tasks, scheduling and follow-up processes to give your team its time back.",
      },
      {
        name: "B2B Lead Generation",
        note: "With B2B lead generation systems and LinkedIn management services, I attract a steady stream of qualified customers for food manufacturers.",
      },
      {
        name: "SEO Services",
        note: "Technical and content infrastructure that doesn't vanish when the ad budget stops and delivers lasting search visibility.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    faqs: [
      {
        q: "How much advertising budget do I need?",
        a: "The budget depends on your sector and goals. In the strategy call, we work out a realistic budget range suited to your business together.",
      },
      {
        q: "How long does a website project take?",
        a: "It depends on scope and content preparation; in the strategy call, we share a timeline specific to your project.",
      },
      {
        q: "When will I start seeing results?",
        a: "It depends on the system setup and optimization stages; this isn't a fixed promise but a process tailored to your business.",
      },
      {
        q: "What kinds of businesses do you work with?",
        a: "We work with boutique hotels, clinics, fitness centers, coaches, local businesses and SMEs in the service sector.",
      },
      {
        q: "How does the strategy call work?",
        a: "In the call we discuss your business, your current digital presence and your goals; if it's a good fit, we share a system proposal tailored to you.",
      },
    ],
  },

  caseStudies: {
    eyebrow: "Case Studies",
    title: "How the system works in practice.",
    problem: "Problem",
    solution: "Solution",
    result: "Result",
    placeholderBadge: "Sample case — to be updated with real data",
  },

  finalCta: {
    title: "Scale your business with the right digital growth system.",
    paragraph:
      "Every month spent without a system is a month your competitors advance with one. In the free strategy call, let's draw up a concrete growth roadmap for your business.",
    note: "30 minutes · Free · Not a sales pitch",
  },

  footer: {
    site: "Site",
    contact: "Contact",
    contactForm: "Contact Form",
    contactFormHref: "/en/contact",
    privacy: "Privacy Policy",
    privacyHref: "/en/privacy-policy",
    whatsapp: "WhatsApp",
    rights: "All rights reserved.",
  },
};
