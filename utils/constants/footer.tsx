export const footerNavigation = {
  company: {
    title: "Company",
    links: [
      { label: "Statistics", href: "#" },
      { label: "Testimonials", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  nursing: {
    title: "Nursing",
    links: [
      { label: "Pre-Nursing", href: "#", hasDropdown: true },
      { label: "Nursing School", href: "#" },
      {
        label: "NCLEX",
        href: "#",
        hasDropdown: true,
        subLinks: [
          { label: "NCLEX RN®", href: "#" },
          { label: "NCLEX PN®", href: "#" },
        ],
      },
      { label: "Nurse Practitioner (NP)", href: "#", hasDropdown: true },
      { label: "CCRN®", href: "#" },
    ],
  },
  educators: {
    title: "Educators",
    links: [
      { label: "For NCLEX", href: "#" },
      { label: "For Nursing School", href: "#" },
    ],
  },
  privateTutors: {
    title: "Private Tutors",
    links: [
      { label: "Pre-Nursing", href: "#" },
      { label: "Nursing School", href: "#" },
      { label: "NCLEX", href: "#" },
      { label: "FNP", href: "#" },
      { label: "CCRN", href: "#" },
    ],
  },
};

export const footerOthers = [
  { label: "Student Ambassador", href: "#", badge: "New", badgeColor: "green" },
  { label: "NCLEX Processing", href: "#", badge: "FREE", badgeColor: "orange" },
  { label: "FAQ", href: "#" },
];

export const footerContact = {
  email: {
    icon: "✉",
    text: "support@archerreview.com",
    href: "mailto:support@archerreview.com",
  },
  address: {
    icon: "📍",
    lines: [
      "Archer Review, LLC",
      "3007 Longhorn Boulevard, Unit 102",
      "Austin, TX 78758",
    ],
  },
};

export const socialMedia = [
  { name: "Facebook", icon: "📘", href: "#", color: "#1877F2" },
  { name: "Instagram", icon: "📷", href: "#", color: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)" },
  { name: "LinkedIn", icon: "💼", href: "#", color: "#0077B5" },
  { name: "X (Twitter)", icon: "❌", href: "#", color: "#000000" },
  { name: "TikTok", icon: "🎵", href: "#", color: "#000000" },
];

