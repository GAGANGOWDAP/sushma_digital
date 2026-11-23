import type { FAQItem, FAQCategory } from '@/types/faq';

export const DEFAULT_STUDIO_FAQS: FAQItem[] = [
  {
    q: 'How far in advance should we reserve our event date?',
    a: 'For weddings and major celebrations in Bangalore and across Karnataka, we recommend reserving 6 to 12 months in advance as auspicious muhurtham dates book quickly. Portrait and commercial sessions generally require 2 to 4 weeks notice.',
  },
  {
    q: 'Do you travel for destination assignments across India?',
    a: 'Yes. Prabhu and our senior team regularly travel for destination weddings and corporate productions throughout Karnataka, South India, and pan-India venues. Travel and accommodation arrangements are coordinated transparently at actuals.',
  },
  {
    q: 'What equipment and production capabilities do you provide?',
    a: 'Sushma Digital Studio operates full in-house broadcast production gear, including multi-camera live video mixing, global HD webcasting, high-resolution LED walls, 360° VR video setups, and licensed 4K aerial drone systems.',
  },
  {
    q: 'When and how are final edited photographs and films delivered?',
    a: 'A curated sneak-peek preview gallery is provided within 3 to 5 days following your event. Full high-resolution color-graded master files and cinematic films are delivered within 4 to 6 weeks on private cloud storage and archival USB.',
  },
];

export const CATEGORIZED_FAQS: FAQCategory[] = [
  {
    category: 'Booking & Reservations',
    items: [
      {
        q: 'How far in advance should we reserve our wedding date?',
        a: 'For weddings and large celebrations in Bangalore and across Karnataka, we recommend reserving 6 to 12 months in advance as prime muhurtham and weekend dates are booked very early. For portrait, baby shoots, and commercial assignments, 2 to 4 weeks notice is generally sufficient.',
      },
      {
        q: 'Do you travel for destination weddings across India?',
        a: 'Yes, absolutely. Prabhu and the Sushma Digital Studio crew frequently travel for destination weddings throughout Karnataka, South India, and pan-India venues. Travel and accommodation arrangements are coordinated transparently at actuals.',
      },
      {
        q: 'What is required to confirm and lock our booking?',
        a: 'An advance booking retainer and confirmation agreement lock in your date exclusively on our calendar. The remainder is scheduled around pre-event milestones and final delivery.',
      },
    ],
  },
  {
    category: 'Photography Style & Equipment',
    items: [
      {
        q: 'How would you describe your photographic style?',
        a: 'Our signature style combines emotional candid storytelling with regal editorial portraiture. With over two decades of heritage, we understand traditional rituals deeply while employing modern cinematic color-grading, prime optics, and dramatic lighting.',
      },
      {
        q: 'Do you offer 4K Drone, Live Webcasting & LED wall setups?',
        a: 'Yes. Sushma Digital Studio is one of Bangalore’s pioneering studios with in-house broadcast capabilities offering multi-camera live video mixing, global HD webcast streaming, high-resolution indoor/outdoor LED walls, 360° VR videos, and licensed 4K aerial drone coverage.',
      },
      {
        q: 'How many edited photographs will we receive?',
        a: 'For a complete traditional wedding celebration, couples typically receive 600 to 1,200+ meticulously color-graded high-resolution photographs, along with a curated highlight gallery for easy sharing.',
      },
    ],
  },
  {
    category: 'Delivery, Albums & Post-Production',
    items: [
      {
        q: 'When will our photographs and cinematic films be delivered?',
        a: 'A digital sneak peek preview is provided within 3 to 5 days of your event. Complete high-resolution digital master files and cinematic highlight edits are delivered within 4 to 6 weeks.',
      },
      {
        q: 'Do you provide premium handcrafted photo albums?',
        a: 'Yes. We design and deliver custom heirloom photo albums printed on archival fine-art and metallic photographic papers with luxury covers, handcrafted binding, and lifelong durability.',
      },
    ],
  },
];
