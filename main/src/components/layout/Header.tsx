import React from "react";
import Navigation from "../ui/Navigation";
import type { NavigationItem } from "../../types";
// import sherutLogo from "../../assets/sherutLogo.png";

const navigationItems: NavigationItem[] = [
  { label: "בית", href: "#", isActive: true },
  { label: "השירותים שלנו", href: "#services" },
  { label: "אודות", href: "#about" },
  { label: "צור קשר", href: "#contact" },
];

const Header: React.FC = () => {
  return (
    <header className="bg-headerBackground text-mainLogo py-4 md:py-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-logoFont text-mainLogo">
            SheruTov
          </h1>
        </div>
        <div className="hidden md:block">
          <Navigation items={navigationItems} />
        </div>
        {/* Mobile menu button - you can expand this later */}
        <div className="md:hidden">
          <button className="text-mainLogo hover:text-opacity-80 transition-colors">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
