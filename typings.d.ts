export interface MenuItem {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
}


export type MenuCategory = "starters" | "mains" | "desserts";
export type Menu = Record<MenuCategories, MenuItem[]>;
