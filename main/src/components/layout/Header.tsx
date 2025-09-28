import React, { useState } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-headerBackground text-mainLogo py-4 md:py-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-logoFont text-mainLogo">
            SheruTov
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Navigation items={navigationItems} />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-mainLogo hover:text-opacity-80 transition-colors p-2"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-headerBackground border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={closeMobileMenu}
                className={`block px-4 py-3 rounded-lg text-right transition-colors duration-200 ${
                  item.isActive
                    ? "bg-mainLogoHover bg-opacity-10 text-mainLogo font-semibold"
                    : "text-mainLogo hover:bg-gray-100 hover:text-mainLogoHover"
                }`}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
