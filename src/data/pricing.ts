import type { PricingPackage } from '@/types/pricing';

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    name: 'Essential',
    price: 'Custom Quote',
    tag: 'Half-Day Session',
    desc: 'Ideal for intimate sessions, baby shoots, and single-ritual celebrations.',
    features: [
      'Up to 4 Hours Dedicated Coverage',
      '1 Senior Studio Photographer',
      '150+ Color-Graded High-Res Images',
      'Digital Master Gallery Delivery',
      'Personal & Print Reproduction License',
    ],
    highlight: false,
  },
  {
    name: 'Signature Heritage',
    price: 'Popular Choice',
    tag: 'Full Wedding Day',
    desc: 'The complete cinematic documentation experience for grand wedding events.',
    features: [
      'Full Day Comprehensive Coverage',
      '2 Senior Photographers + Candid Specialist',
      '400+ Color-Graded High-Res Images',
      'Cinematic Highlight Video Reel',
      'Pre-Wedding Studio/Outdoor Session',
      'Handcrafted Archival Leather Album Box',
    ],
    highlight: true,
  },
  {
    name: 'Grand Royal Production',
    price: 'VIP Multi-Day',
    tag: 'End-to-End Production',
    desc: 'Uncompromising coverage including 4K drone, live mixing, and LED wall.',
    features: [
      'Multi-Day / Full Weekend Wedding Production',
      '3 Master Photographers + 2 Cinematographers',
      'Unlimited Meticulously Edited Images',
      '4K Licensed Aerial Drone Coverage',
      'HD Live Webcast Streaming & LED Wall Display',
      'Luxury Metallic Print Heirloom Family Album',
    ],
    highlight: false,
  },
];
