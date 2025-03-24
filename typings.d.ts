export interface MenuType {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
}


export type MenuCategories = "starters" | "mains" | "desserts";
export type Menu = Record<MenuCategories, MenuItem[]>;
