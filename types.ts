export enum PageState {
  HOME = 'HOME',
  CONSULTANCY = 'CONSULTANCY',
  KEY_LEARNINGS = 'KEY_LEARNINGS',
  CALCULATORS = 'CALCULATORS',
  ABOUT = 'ABOUT',
  PRIVACY = 'PRIVACY',
  TERMS = 'TERMS',
  REFUND = 'REFUND'
}

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
}

export interface CourseItem {
  title: string;
  category: string;
  description: string;
}