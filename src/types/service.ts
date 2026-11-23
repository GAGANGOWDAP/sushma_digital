import type { ComponentType } from 'react';

export interface ServiceItem {
  id: number;
  number: string;
  title: string;
  category: string;
  desc: string;
  img: string;
  icon: ComponentType<{ className?: string; size?: number | string }>;
}
