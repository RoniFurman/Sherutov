import React from "react";
import type { NavigationItem } from "../../types";

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ items, className = "" }) => {
  return (
    <ul
      className={`flex justify-center items-center ${className}`}
      dir="rtl"
      role="list">
      {items.map((item, index) => (
        <li key={index} role="listitem">
          <a
            href={item.href}
            className={`hover:text-mainLogoHover hover:scale-110 transition-all duration-200 text-mainLogo font-medium text-sm sm:text-base whitespace-nowrap px-2 sm:px-3 md:px-4 focus:outline-none focus:ring-2 focus:ring-mainLogo focus:ring-offset-2 rounded-sm ${
              item.isActive ? "font-semibold text-mainLogo" : ""
            }`}
            aria-current={item.isActive ? "page" : undefined}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
