<<<<<<< HEAD
=======
// typings.ts
>>>>>>> 0097f7d6a871c00f55f28af74accf9afa9cf76eb
export interface MenuItem {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
  }


export type MenuCategory = "starters" | "mains" | "desserts";

export interface MenuSection {
  category: MenuCategory;
  items: MenuItem[];
}
<<<<<<< HEAD


export type MenuCategory = "starters" | "mains" | "desserts";
export type Menu = Record<MenuCategories, MenuItem[]>;
=======
>>>>>>> 0097f7d6a871c00f55f28af74accf9afa9cf76eb
