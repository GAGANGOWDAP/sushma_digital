export type BlogCategory =
  | 'All'
  | 'Photography Tips'
  | 'Wedding Planning'
  | 'Behind the Scenes'
  | 'Client Guides'
  | 'Studio Updates';

export interface BlogPost {
  id: number;
  title: string;
  category: Exclude<BlogCategory, 'All'>;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}
