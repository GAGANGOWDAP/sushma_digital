export type BlogCategory =
  | 'All'
  | 'Photography Tips'
  | 'Wedding Planning'
  | 'Behind the Scenes'
  | 'Client Guides'
  | 'Studio Updates';

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  category: Exclude<BlogCategory, 'All'>;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  featured?: boolean;
  content?: string[];
  sections?: BlogSection[];
  takeaways?: string[];
  author?: {
    name: string;
    role: string;
    avatar?: string;
  };
  tags?: string[];
}
