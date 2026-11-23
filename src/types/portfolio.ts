export type PortfolioCategory =
  | 'All'
  | 'Weddings'
  | 'Portraits'
  | 'Events'
  | 'Candid'
  | 'Pre-Wedding';

export type PortfolioShape = 'tall' | 'wide' | 'square';

export interface PortfolioItem {
  id: number;
  category: Exclude<PortfolioCategory, 'All'>;
  shape: PortfolioShape;
  src: string;
  title: string;
}
