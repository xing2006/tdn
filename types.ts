export interface MenuItemType {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
  spicyLevel?: 0 | 1 | 2 | 3; // 0: Non-spicy, 3: Very spicy
}

export enum SectionId {
  HOME = 'home',
  MENU = 'menu',
  CONTACT = 'contact',
}