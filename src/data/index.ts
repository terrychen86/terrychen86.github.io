const pageData = {
  hero: {
    eyebrow: "Senior Software Engineer - Bay Area",
    title: "Terry Chen",
    subtitle:
      "I build product-minded systems, AI agent harnesses, and client-facing software that has to work in the real world.",
    primaryAction: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yenhsuan",
    },
    secondaryAction: {
      label: "GitHub",
      href: "https://github.com/terrychen86",
    },
  },
  now: {
    title: "What I am working on now",
    body: "I am a Senior Software Engineer at Flexport, currently building AI agents and harnesses for billing and finance workflows. Before this, I worked as a full-stack product engineer on Flexport's client app team, owning client-facing products end to end.",
    notes: [
      "Building agent harnesses for real finance workflows.",
      "Most of my engineering career has been in fast-moving product environments.",
      "Still close to product details, users, and operational edges.",
    ],
  },
  focusAreas: [
    {
      iconName: "brain",
      title: "Agent harnesses",
      description:
        "Building practical systems around AI agents so they can operate against real workflows, constraints, and feedback loops.",
      color: "purple",
    },
    {
      iconName: "blueprint",
      title: "Product judgment",
      description:
        "Shaping ambiguous ideas into useful product surfaces, with enough UX sense to make the details matter.",
      color: "yellow",
    },
    {
      iconName: "console",
      title: "Full-stack execution",
      description:
        "I work across the stack and keep product momentum in fast-moving teams.",
      color: "blue",
    },
  ],
  about: {
    title: "A little more about me",
    body: "I live in the Bay Area and like work that sits close to users. Outside of work, I am usually looking for good food, planning the next trip, drinking coffee, or playing games.",
    cards: [
      {
        iconName: "bridge",
        title: "Bay Area",
        description: "Based around San Francisco.",
      },
      {
        iconName: "coffee",
        title: "Coffee",
        description: "A reliable part of the daily loop.",
      },
      {
        iconName: "suitcase",
        title: "Travel & food",
        description: "Best when those two show up together.",
      },
      {
        iconName: "game",
        title: "Games",
        description: "Still one of my favorite ways to unwind.",
      },
    ],
  },
  snakeBreak: {
    title: "Play some little game",
    content:
      "LOL, I found this little Snake game I built in school more than 10 years ago on my old laptop. Wanna take a break?",
  },
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yenhsuan",
    },
    {
      label: "GitHub",
      href: "https://github.com/terrychen86",
    },
    {
      label: "Email",
      href: "mailto:yenhsuan.terry@gmail.com",
    },
  ],
} as const;

export default pageData;
