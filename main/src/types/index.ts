export interface ServiceCard {
  title: string;
  description: string;
  icon?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
}
