import React from "react";
import type { NavigationItem } from "../../types";

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ items, className = "" }) => {
  return (
    <nav className={`flex justify-center items-center ${className}`} dir="rtl">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className={`hover:text-mainLogoHover hover:scale-110 transition-all duration-200 text-mainLogo font-medium text-sm sm:text-base whitespace-nowrap px-2 sm:px-3 md:px-4 ${
            item.isActive ? "font-semibold text-mainLogo" : ""
          }`}>
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
