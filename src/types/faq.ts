export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export interface FAQSectionProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  bgClassName?: string;
  showViewAll?: boolean;
}
