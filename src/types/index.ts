export type PageType = 'individual' | 'help';

export interface ServiceCard {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactItem {
  icon: React.ReactNode;
  label: string;
  link?: string;
}

export interface HeaderProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}