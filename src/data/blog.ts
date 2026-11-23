import type { BlogPost, BlogCategory } from '@/types/blog';

export const BLOG_CATEGORIES: BlogCategory[] = [
  'All',
  'Photography Tips',
  'Wedding Planning',
  'Behind the Scenes',
  'Client Guides',
  'Studio Updates',
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'The Art of Chiaroscuro in Modern Portraiture',
    category: 'Photography Tips',
    date: 'Oct 12, 2024',
    readTime: '7 min read',
    excerpt:
      'Exploring how classical fine art painting principles elevate modern studio portraits through intentional shadow placement and dramatic lighting ratios.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    author: {
      name: 'Prabhu',
      role: 'Founder & Lead Cinematographer, State Honor Chayarathna',
    },
    tags: ['Lighting', 'Portraiture', 'Fine Art', 'Chiaroscuro'],
    takeaways: [
      'Understand the power of intentional shadow over flat illumination.',
      'Use 3:1 and 4:1 key-to-fill ratios for cinematic, dimensional skin tones.',
      'Position soft rim lights to sculpt subject contours naturally.',
    ],
    sections: [
      {
        heading: 'Origins of Light and Shadow: Renaissance to the Modern Studio',
        paragraphs: [
          'Chiaroscuro, originating from the Italian words for light (chiaro) and dark (scuro), represents more than a classical painting technique perfected by Caravaggio and Rembrandt. In fine art portraiture, it is a psychological philosophy of focus utilizing deep shadows not as empty negative space, but as a compositional anchor that guides the human eye directly to expression, bone structure, and emotional resonance.',
          'In an era where ubiquitous mobile screens and digital cameras default to flat, shadowless illumination, mastering chiaroscuro provides an immediate signature of timeless prestige. At Sushma Digital Studio, our approach to portraiture treats shadows with the same meticulous precision as key highlights.',
        ],
      },
      {
        heading: 'Lighting Ratios and Dimensional Sculpting',
        paragraphs: [
          'The cornerstone of dramatic portraiture is mastering key-to-fill ratios. While high-key commercial assignments benefit from 1:1 or 2:1 ratios, editorial and fine-art portraits achieve their signature depth at 3:1 or 4:1 ratios.',
          'By placing a large parabolic softbox at a 45-degree angle slightly above the subject’s eyeline and introducing feathered black v-flats on the opposite side to absorb ambient bounce, we sculpt facial contours naturally. This reveals authentic textures, accentuates cheekbones, and produces the iconic Rembrandt triangle of light on the shadowed cheek.',
        ],
      },
      {
        heading: 'Practical Application for Studio and Modelling Lookbooks',
        paragraphs: [
          'When executing model lookbooks and personal executive portraits in our Bangalore studio, we carefully calibrate prime focal lengths typically 85mm to 105mm at wide apertures to ensure the background falls into velvety darkness while the subject remains surgically sharp.',
          'The result is an archival photograph that feels sculptural, intimate, and unmistakably bespoke.',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Structuring Your Traditional Wedding Photography Timeline',
    category: 'Wedding Planning',
    date: 'Sep 28, 2024',
    readTime: '9 min read',
    excerpt:
      'A comprehensive guide to planning muhurtham and reception schedules to capture sacred rituals with optimal cinematic lighting.',
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Prabhu',
      role: 'Founder & Lead Cinematographer, State Honor Chayarathna',
    },
    tags: ['Weddings', 'Muhurtham', 'Timeline', 'Bangalore Weddings'],
    takeaways: [
      'Allocate 45 minutes of undisturbed couple portraiture before the reception begins.',
      'Synchronize mandap lighting with high-CRI continuous video lights.',
      'Coordinate with the wedding priest for prime ritual vantage angles.',
    ],
    sections: [
      {
        heading: 'The Flow of South Indian and Grand Indian Weddings',
        paragraphs: [
          'Traditional Indian weddings are a grand tapestry of devotion, familial emotion, and ancient rituals. From the early dawn Muhurtham to the Kanyadaana, Mangalasutra dharana, Saptapadi, and the opulent evening reception, every ritual unfolds in rapid succession with immense spiritual significance.',
          'Capturing these once-in-a-lifetime moments demands meticulous chronological choreography. Without a structured photography timeline, critical candid moments and family portraits can easily get rushed amidst the celebration.',
        ],
      },
      {
        heading: 'Golden Windows for Couple and Family Portraits',
        paragraphs: [
          'The most frequent oversight we observe is delaying couple portraits until after guests arrive at the reception. By the time the hall fills, couples are surrounded by hundreds of well-wishers, leaving zero opportunity for serene, unhurried couple portraits.',
          'We strongly advocate scheduling a dedicated 45-minute window immediately after makeup completion and before the ballroom doors open. This guarantees relaxed, magazine-worthy portraits while makeup and attire are flawless.',
        ],
      },
      {
        heading: 'Mandap Lighting and Priest Coordination',
        paragraphs: [
          'The sacred fire (Agni) and vibrant mandap florals require balanced color temperatures. At Sushma Digital Studio, our crew arrives 2 hours before the ceremony to calibrate continuous broadcast lighting that balances the warm golden glow of the havan with our camera color profiles.',
          'Through 21+ years of capturing celebrations across Bangalore, our respectful rapport with wedding priests ensures we document every sacred blessing without intruding upon the sanctity of the ceremony.',
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Why 4K Multi-Camera Live Mixing Transforms Grand Celebrations',
    category: 'Behind the Scenes',
    date: 'Sep 15, 2024',
    readTime: '6 min read',
    excerpt:
      'An inside look at how our broadcast-grade switcher systems, LED wall feeds, and live webcasting connect loved ones across the globe.',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Prabhu',
      role: 'Founder & Lead Cinematographer, State Honor Chayarathna',
    },
    tags: ['Broadcast', 'Live Mixing', 'LED Wall', 'Webcasting'],
    takeaways: [
      'Multi-camera switching provides television-grade coverage of grand venues.',
      'Zero-latency HD feeds ensure guests in the back have front-row visibility on LED walls.',
      'Encrypted webcasting enables family overseas to participate in real-time.',
    ],
    sections: [
      {
        heading: 'Bridging Distance: The Modern Live Broadcast Reality',
        paragraphs: [
          'In our interconnected world, grand weddings, corporate milestones, and VIP cultural gatherings rarely have all key family members and stakeholders in the same physical venue. Grandparents, overseas relatives, and global colleagues often follow the event virtually.',
          'A simple smartphone stream or static webcam fails to convey the grandeur and emotional gravity of such milestones. This is why Sushma Digital Studio pioneered in-house television-grade multi-camera live video mixing in Bangalore.',
        ],
      },
      {
        heading: 'Hardware Vision Mixers and Seamless Real-Time Titling',
        paragraphs: [
          'Our production control room features broadcast SDI vision switchers, intercom audio matrices, and real-time lower-third graphics engines. Multiple camera angles wide-angle establishing sweeps, tight telephoto facial expressions, dynamic jib cranes, and 4K aerial drones are switched seamlessly on-the-fly.',
          'This synchronized video feed is sent simultaneously to high-resolution indoor/outdoor P3/P2 LED video walls and encrypted global streaming CDNs with zero latency.',
        ],
      },
      {
        heading: 'Unrivalled Reliability in High-Pressure Environments',
        paragraphs: [
          'Live broadcast allows no second takes. Our engineering setups utilize redundant fiber-optic lines, dual internet bonding, and dedicated backup power supplies.',
          'Whether broadcasting to 5,000 guests inside the Palace Grounds or 20,000 viewers across the US, UK, and Australia, we deliver crisp, broadcast-standard visual storytelling.',
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Candid Posing & Natural Expression for Couples',
    category: 'Client Guides',
    date: 'Aug 30, 2024',
    readTime: '5 min read',
    excerpt:
      'How Prabhu directs couples to achieve authentic, graceful poses without feeling stiff or self-conscious in front of the camera.',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Prabhu',
      role: 'Founder & Lead Cinematographer, State Honor Chayarathna',
    },
    tags: ['Candid', 'Posing', 'Couples', 'Photography Guide'],
    takeaways: [
      'Focus on interactive movement rather than static, frozen poses.',
      'Gentle comedic prompts elicit genuine, unforced laughter and eye contact.',
      'Natural posture stems from trust and rapport with your photographer.',
    ],
    sections: [
      {
        heading: 'Overcoming Camera Shyness and Stiff Postures',
        paragraphs: [
          'Almost every couple confesses during their initial consultation: "We are both awkward in front of cameras." This is completely natural. Stiff, unnatural expressions occur when couples are instructed to hold rigid poses while waiting for the shutter to click.',
          'True candid photography is not about catching someone off-guard; it is about creating an environment of trust and genuine emotional interaction where the camera disappears.',
        ],
      },
      {
        heading: 'Prompt-Based Directing vs Static Positioning',
        paragraphs: [
          'Rather than directing a couple to "turn their chin 10 degrees to the left," Prabhu uses prompts that trigger emotional reactions: whispering a humorous memory, taking slow synchronized steps towards golden light, or sharing an inside joke.',
          'When couples focus on each other rather than the glass element of a telephoto lens, their shoulders relax, micro-expressions soften, and genuine warmth radiates through every photograph.',
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'The Magic of Pre-Wedding Outdoor Sessions',
    category: 'Wedding Planning',
    date: 'Aug 14, 2024',
    readTime: '4 min read',
    excerpt:
      'Why pre-wedding shoots build comfort with your cinematographer and provide stunning heirloom imagery for wedding invitations.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Prabhu',
      role: 'Founder & Lead Cinematographer, State Honor Chayarathna',
    },
    tags: ['Pre-Wedding', 'Outdoor Shoot', 'Bangalore Locations'],
    takeaways: [
      'Pre-wedding sessions serve as a rehearsal for your wedding day chemistry.',
      'High-resolution imagery enhances digital wedding invites and LED wall backdrops.',
      'Sunrise sessions at heritage Bangalore locations avoid crowds and harsh midday sun.',
    ],
    sections: [
      {
        heading: 'Beyond Just Beautiful Photos: Building Creative Rapport',
        paragraphs: [
          'A pre-wedding photography session is frequently thought of as an aesthetic luxury. However, from a technical and psychological standpoint, it is the most valuable preparation a couple can undertake before their wedding day.',
          'Spending a relaxed morning scouting scenic landscapes with our lead crew enables the couple to discover their preferred camera angles, become familiar with lighting cues, and cultivate genuine comfort with the team who will accompany them through their wedding rituals.',
        ],
      },
      {
        heading: 'Scouting Iconic Bangalore Landscapes',
        paragraphs: [
          'Bangalore offers an incredible variety of architectural and natural backdrops: from the Gothic spires and lush greens of Bangalore Palace to the rustic stone temples of Bhoga Nandeeshwara, tranquil lakeside sanctuaries in Kanakapura, and modern urban glass facades.',
          'We recommend early morning sessions beginning at first light (5:45 AM). The serene morning tranquility guarantees uninterrupted shoots with flattering soft golden hour illumination.',
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Archival Heirlooms: Selecting Your Fine-Art Album Materials',
    category: 'Studio Updates',
    date: 'Jul 22, 2024',
    readTime: '8 min read',
    excerpt:
      'Why physical fine-art albums with metallic photographic paper and handcrafted leather covers endure for generations beyond digital hard drives.',
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Prabhu',
      role: 'Founder & Lead Cinematographer, State Honor Chayarathna',
    },
    tags: ['Albums', 'Archival Prints', 'Heirlooms', 'Fine Art'],
    takeaways: [
      'Digital storage media degrades; archival photographic paper lasts over a century.',
      'Metallic papers enhance vibrant Kanjivaram silk sheen and wedding jewelry sparkle.',
      'Handcrafted lay-flat binding ensures uninterrupted panoramic spreads.',
    ],
    sections: [
      {
        heading: 'The Fragility of Pixels vs The Permanence of Print',
        paragraphs: [
          'Hard drives fail, cloud subscriptions lapse, and file formats evolve. In contrast, a museum-grade archival photo album passed down through family generations remains an enduring tactile treasure that can be held and experienced 50 or 100 years from today.',
          'At Sushma Digital Studio, Prabhu’s early roots in the printing industry inform our rigorous standards for paper density, archival pigment inks, and chemical stability.',
        ],
      },
      {
        heading: 'Metallic Papers, Silk Lamination, and Genuine Leather',
        paragraphs: [
          'For Indian weddings characterized by vibrant turmeric yellows, vermilion reds, and ornate gold-threaded Kanjivaram sarees, standard matte paper can sometimes mute rich color saturation. We utilize specialized metallic and pearl photographic papers that produce deep contrast and an iridescent sheen under ambient light.',
          'Bound with lay-flat seamless technology and wrapped in genuine Italian leather or premium linen with personalized embossed foil monogramming, our heirlooms are crafted to resist humidity and page yellowing across decades.',
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Golden Hour: Mastering Dramatic Natural Light',
    category: 'Photography Tips',
    date: 'Jul 5, 2024',
    readTime: '6 min read',
    excerpt:
      'The fleeting window of sunset magic exactly how our team scouts locations to capitalize on warm atmospheric backlighting.',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Prabhu',
      role: 'Founder & Lead Cinematographer, State Honor Chayarathna',
    },
    tags: ['Golden Hour', 'Natural Light', 'Backlighting', 'Cinematography'],
    takeaways: [
      'Low sun angles provide flattering warm color temperatures without harsh shadows.',
      'Rim lighting and lens flare add organic cinematic poetry to outdoor frames.',
      'Use subtle negative fill to prevent subject faces from losing micro-contrast.',
    ],
    sections: [
      {
        heading: 'The Physics of Golden Hour Atmosphere',
        paragraphs: [
          'During the final hour before sunset and the first hour after sunrise, solar rays travel through a significantly thicker cross-section of the Earth’s atmosphere. This atmospheric scattering diffuses harsh blue wavelengths, producing a warm, amber-toned radiance with soft, elongated shadows.',
          'In Bangalore, where atmospheric conditions often soften evening sunlight, this 45-minute window transforms outdoor wedding receptions and pre-wedding shoots into ethereal visual poetry.',
        ],
      },
      {
        heading: 'Balancing Backlight with Fill Refinement',
        paragraphs: [
          'Directing couples into direct sunlight can cause squinting and unflattering facial shadows. Instead, we position the setting sun directly behind the couple, allowing solar rays to sculpt their hair and clothing with a luminous rim.',
          'To ensure facial skin tones remain vibrant and clear, we use silver-white reflectors or subtle battery-powered continuous LED lights to gently fill the subject without overpowering the natural sunset ambiance.',
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'Behind the Color Grading: Crafting the Sushma Aesthetic',
    category: 'Behind the Scenes',
    date: 'Jun 18, 2024',
    readTime: '8 min read',
    excerpt:
      'A technical overview of our post-production pipeline from raw sensor data to the rich, contrast-balanced cinematic finish.',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Prabhu',
      role: 'Founder & Lead Cinematographer, State Honor Chayarathna',
    },
    tags: ['Color Grading', 'Post Production', 'Raw Workflow', 'Cinematic'],
    takeaways: [
      'Raw sensor data preserves highlight headroom and shadow detail in complex lighting.',
      'Custom color matrices preserve rich Indian wedding tones without orange skin clipping.',
      'Handcrafted look-up tables (LUTs) ensure visual harmony across stills and cinema films.',
    ],
    sections: [
      {
        heading: 'The Transition from Sensor Data to Art',
        paragraphs: [
          'Capturing a technically balanced raw photograph is only the foundational halfway point of our craft. The digital sensor captures a flat, uncompressed representation of light that requires intentional color grading to realize its true emotional resonance.',
          'Many modern presets over-saturate reds or push shadows into unnatural teal hues, stripping away the cultural authenticity of traditional ceremonies. Our in-house color pipeline was developed specifically to honor the regal palettes of South Indian weddings.',
        ],
      },
      {
        heading: 'Preserving Gold, Vermilion, and Melanin Tones',
        paragraphs: [
          'Traditional attire features intricate gold zari work, sacred saffron, and turmeric pastes alongside diverse, warm skin tones. Standard automated color algorithms frequently clip yellow-red channels, muddying textures and giving skin an unnatural brassy cast.',
          'We utilize individual color channel calibration in DaVinci Resolve and Adobe Lightroom, isolating skin tone luminance vectors from background floral hues. This preserves the tactile texture of silk weaves and jewelry while ensuring bride and groom look radiant and true to life.',
        ],
      },
    ],
  },
];
