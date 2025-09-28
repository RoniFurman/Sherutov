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
    <header
      className="bg-headerBackground text-mainLogo py-4 md:py-6 shadow-lg"
      role="banner">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-logoFont text-mainLogo">
            <a
              href="#"
              className="focus:outline-none focus:ring-2 focus:ring-mainLogo focus:ring-offset-2 rounded-sm"
              aria-label="SheruTov - חזרה לדף הבית">
              SheruTov
            </a>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:block"
          role="navigation"
          aria-label="תפריט ראשי">
          <Navigation items={navigationItems} />
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-mainLogo hover:text-opacity-80 transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-mainLogo focus:ring-offset-2 rounded-md"
            aria-label={isMobileMenuOpen ? "סגור תפריט" : "פתח תפריט"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu">
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
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
                stroke="currentColor"
                aria-hidden="true">
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
        <nav
          className="md:hidden bg-headerBackground border-t border-gray-200 shadow-lg"
          role="navigation"
          aria-label="תפריט נייד"
          id="mobile-menu">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={closeMobileMenu}
                className={`block px-4 py-3 rounded-lg text-right transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-mainLogo focus:ring-offset-2 ${
                  item.isActive
                    ? "bg-mainLogoHover bg-opacity-10 text-mainLogo font-semibold"
                    : "text-mainLogo hover:bg-gray-100 hover:text-mainLogoHover"
                }`}
                aria-current={item.isActive ? "page" : undefined}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
