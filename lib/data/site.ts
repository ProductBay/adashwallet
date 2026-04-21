import {
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  CreditCard,
  LayoutDashboard,
  PartyPopper,
  QrCode,
  ShieldCheck,
  Store,
  Tags,
  Users,
  Wallet
} from "lucide-react";

export const ecosystemCards = [
  {
    title: "Customers",
    description: "A smoother wallet experience for everyday payments, group spending, and digital confidence.",
    href: "/customers",
    icon: Wallet
  },
  {
    title: "Merchants",
    description: "Commerce tools for QR, links, in-store acceptance, and more organized settlement handling.",
    href: "/merchants",
    icon: Store
  },
  {
    title: "Party Pay",
    description: "An event commerce layer designed for live energy, vendor coordination, and promoter oversight.",
    href: "/party-pay",
    icon: PartyPopper
  },
  {
    title: "Merchant Lite",
    description: "A lightweight on-ramp for social sellers who need cleaner ways to get paid.",
    href: "/merchant-lite",
    icon: Tags
  },
  {
    title: "Tourist",
    description: "Guest-friendly payment flows designed for smoother travel and hospitality experiences.",
    href: "/tourist",
    icon: CreditCard
  },
  {
    title: "Operators",
    description: "A multi-role platform layer with controls, visibility, and room to scale responsibly.",
    href: "/platform",
    icon: LayoutDashboard
  }
];

export const infrastructureFeatures = [
  {
    title: "Ledger-backed core",
    description: "Keep money movement grounded in a source of truth instead of scattered status changes.",
    icon: Blocks
  },
  {
    title: "Multi-tenant architecture",
    description: "Support multiple business contexts and user roles without rebuilding the platform each time.",
    icon: Users
  },
  {
    title: "Settlement discipline",
    description: "Create a cleaner path from transaction activity to payout readiness.",
    icon: ArrowUpRight
  },
  {
    title: "Audit visibility",
    description: "Maintain better operational context across customer, merchant, and admin workflows.",
    icon: BadgeCheck
  }
];

export const customerFeatures = [
  {
    title: "Fast wallet payments",
    description: "Move through everyday checkout moments with less hesitation and a clearer experience.",
    icon: Wallet
  },
  {
    title: "Simple balance clarity",
    description: "Understand what you have and what changed without digging through a confusing flow.",
    icon: BadgeCheck
  },
  {
    title: "Useful across the ecosystem",
    description: "Use the same wallet across merchants, events, and guest-friendly contexts.",
    icon: QrCode
  }
];

export const merchantFeatures = [
  {
    title: "QR and wallet acceptance",
    description: "Accept payments with fast customer flow across common in-person and digital interactions.",
    icon: QrCode
  },
  {
    title: "Links and direct selling",
    description: "Turn remote conversations into payments with a cleaner selling path.",
    icon: CreditCard
  },
  {
    title: "Merchant control layer",
    description: "Stay closer to activity, visibility, and payout readiness as the business grows.",
    icon: ShieldCheck
  }
];

export const platformArchitecture = [
  {
    title: "Single money engine",
    description: "The core platform handles value movement and balance state across all product layers.",
    icon: Blocks
  },
  {
    title: "Role-aware access",
    description: "Customers, merchants, and operators each get a purpose-built experience tied to the same system.",
    icon: Users
  },
  {
    title: "Operational trust",
    description: "Security, auditability, and platform discipline are built in from the start.",
    icon: ShieldCheck
  }
];

export const platformCommerce = [
  {
    title: "QR commerce",
    description: "Support quick in-person flows with a cleaner customer path.",
    icon: QrCode
  },
  {
    title: "Links and remote payments",
    description: "Turn direct outreach and digital channels into a more organized commerce surface.",
    icon: CreditCard
  },
  {
    title: "In-store acceptance",
    description: "Create a stronger foundation for staff-assisted and terminal-style selling flows.",
    icon: Store
  }
];

export const homepageUseCases = [
  {
    value: "daily",
    label: "Daily Life",
    title: "Daily payments that feel easier and more trustworthy.",
    description:
      "Customers pay merchants, split spending, and move through regular commerce with less friction.",
    bullets: [
      "Everyday wallet payments",
      "Customer confidence at checkout",
      "Cleaner merchant interactions"
    ]
  },
  {
    value: "merchant",
    label: "Merchant Growth",
    title: "Commerce tools that scale past a single payment button.",
    description:
      "Merchants can accept, manage, and expand across more sales channels without losing operational clarity.",
    bullets: ["QR acceptance", "Links and direct selling", "Settlement visibility"]
  },
  {
    value: "event",
    label: "Events",
    title: "Live event payments with promoter and vendor control.",
    description:
      "Party Pay creates a premium event layer for high-energy environments that still need reliable system behavior.",
    bullets: ["Vendor coordination", "Promoter oversight", "Performance-aware workflows"]
  },
  {
    value: "tourist",
    label: "Tourist",
    title: "Visitor-friendly spending inside a connected local ecosystem.",
    description:
      "Tourists move more easily through merchants and events when payments feel simple and integrated.",
    bullets: ["Guest payments", "Tabs and splits", "Merchant + event integration"]
  }
];

export const faqItems = [
  {
    question: "Is A'Dash Wallet just a payment app?",
    answer:
      "No. It is positioned as a ledger-backed money and commerce platform that supports customers, merchants, events, tourists, and operator workflows."
  },
  {
    question: "Who is A'Dash Wallet built for?",
    answer:
      "It is built for customers, merchants, event operators, social sellers, tourists, and platform operators who need stronger infrastructure underneath the experience."
  },
  {
    question: "What makes the platform different?",
    answer:
      "A'Dash Wallet connects multiple roles and commerce flows through one underlying system instead of treating each product surface as a separate tool."
  },
  {
    question: "What is Party Pay?",
    answer:
      "Party Pay is the event commerce layer of A'Dash Wallet, built for high-energy, multi-vendor event environments that require better speed and control."
  },
  {
    question: "What is Merchant Lite?",
    answer:
      "Merchant Lite is a lightweight path for social sellers and smaller operators who need cleaner ways to receive payments and grow into fuller merchant tooling."
  },
  {
    question: "Why emphasize ledger-backed infrastructure?",
    answer:
      "Because trust in a money platform depends on reliable tracking of value movement, clearer state handling, and better operational confidence."
  },
  {
    question: "How does A'Dash Wallet support merchants?",
    answer:
      "Through wallet acceptance, QR payments, links, stronger selling workflows, and a more organized relationship between transactions and payout handling."
  },
  {
    question: "Why is security a major part of the site?",
    answer:
      "Because the platform is not just about convenience. It is about building confidence in how the system records, processes, and governs money movement."
  },
  {
    question: "Is the platform Caribbean-focused?",
    answer:
      "Yes. The site and product positioning are built around Caribbean-first realities, use cases, and growth opportunities."
  },
  {
    question: "Can A'Dash Wallet support future ecosystem growth?",
    answer:
      "That is the goal. The platform is presented as modular infrastructure that can support expansion across new merchant, event, customer, and operator use cases."
  }
];
