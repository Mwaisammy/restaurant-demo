import { Button } from "@/components/ui/button";
import { Menu, MenuCategories, MenuType } from "@/typings";
import clsx from "clsx";
import React from "react";

interface Props {
  activeMenu: MenuCategories;
  setActiveMenu: (category: MenuCategories) => void;
  featuredMenu: MenuType[];
}

const FilteredMenu = ({ activeMenu, setActiveMenu, featuredMenu }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 ml-auto">
      {(["starters", "mains", "desserts"] as const).map((category) => (
        <Button
          key={category}
          onClick={() => setActiveMenu(category)}
          className={clsx(
            "px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base font-medium transition-colors capitalize rounded-lg",
            activeMenu === category
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-white text-gray-600 hover:bg-gray-100 cursor-pointer"
          )}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default FilteredMenu;
