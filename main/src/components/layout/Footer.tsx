import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Add all solid icons to the library
library.add(fas);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mainLogo text-white py-6 sm:py-8" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          <div className="text-center">
            <h2 className="text-lg sm:text-xl font-bold mb-2">SheruTov</h2>
            <p className="text-white text-sm sm:text-base">
              שירות חכם לעסק דיגיטלי מצליח
            </p>
          </div>

          <nav
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm"
            aria-label="קישורי יצירת קשר">
            <a
              href="mailto:support@sherutov.com"
              className="hover:text-gray-200 transition-colors duration-200 flex items-center gap-2 text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-mainLogo rounded-sm"
              aria-label="שלח אימייל ל-support@sherutov.com">
              <FontAwesomeIcon icon={["fas", "envelope"]} aria-hidden="true" />{" "}
              support@sherutov.com
            </a>
            <a
              href="https://wa.me/972535906738?text=שלום, אני מעוניין בפרטים על השירות"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors duration-200 flex items-center gap-2 text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-mainLogo rounded-sm"
              aria-label="פתח שיחה ב-WhatsApp - נפתח בחלון חדש">
              <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" /> WhatsApp
            </a>
          </nav>

          <div className="border-t border-footerBackground w-full pt-3 sm:pt-4 text-center text-xs sm:text-sm text-white">
            <p>
              <span>© {currentYear} SheruTov - כל הזכויות שמורות</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
