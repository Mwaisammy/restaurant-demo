"use client";
import FilteredMenu from "@/app/components/filteredMenu";
import { MenuCategories } from "@/typings";
import { useState } from "react";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState<MenuCategories>("starters");
  const menuItems = [
    {
      category: "starters",
      items: [
        {
          name: "Pan-Seared Foie Gras",
          description: "With fig compote and brioche",
          price: "32",
          imageUrl: "/path-to-your-image/foie-gras.jpg",
        },
        {
          name: "Oysters Rockefeller",
          description: "Half dozen with spinach and hollandaise",
          price: "28",
          imageUrl: "/path-to-your-image/oysters.jpg",
        },
        {
          name: "Truffle Risotto",
          description: "Aged parmesan, wild mushrooms",
          price: "24",
          imageUrl: "/path-to-your-image/risotto.jpg",
        },
      ],
    },
    {
      category: "mains",
      items: [
        {
          name: "Wagyu Beef Tenderloin",
          description: "With pomme purée and red wine jus",
          price: "65",
          imageUrl: "/path-to-your-image/wagyu.jpg",
        },
        {
          name: "Dover Sole Meunière",
          description: "Lemon butter sauce, capers",
          price: "58",
          imageUrl: "/path-to-your-image/sole.jpg",
        },
        {
          name: "Rack of Lamb",
          description: "Herb-crusted, seasonal vegetables",
          price: "52",
          imageUrl: "/path-to-your-image/lamb.jpg",
        },
      ],
    },
    {
      category: "desserts",
      items: [
        {
          name: "Crème Brûlée",
          description: "Madagascar vanilla, fresh berries",
          price: "16",
          imageUrl: "/path-to-your-image/creme-brulee.jpg",
        },
        {
          name: "Chocolate Soufflé",
          description: "Grand Marnier, crème anglaise",
          price: "18",
          imageUrl: "/path-to-your-image/souffle.jpg",
        },
        {
          name: "Cheese Selection",
          description: "Artisanal cheeses, honey, nuts",
          price: "22",
          imageUrl: "/path-to-your-image/cheese.jpg",
        },
      ],
    },
  ];

  // useEffect(() => {}, []);

  const featuredMenu =
    menuItems.find((item) => item.category === activeMenu)?.items || [];

  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold text-center">Our Menu</h1>
      </div>

      <div>
        <FilteredMenu
          featuredMenu={featuredMenu}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      </div>
    </div>
  );
};

export default Menu;
