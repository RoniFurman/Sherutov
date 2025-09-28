import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mainLogo text-white py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-2">SheruTov</h3>
            <p className="text-white text-sm sm:text-base">
              שירות חכם לעסק דיגיטלי מצליח
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm">
            {/* <a
              href="mailto:support@sherutov.com"
              className="hover:text-white transition-colors duration-200 flex items-center gap-2 text-center">
              📧 support@sherutov.com
            </a>
            <a
              href="https://wa.me/972535906738?text=שלום, אני מעוניין בפרטים על השירות"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200 flex items-center gap-2 text-center">
              📱 WhatsApp
            </a> */}
          </div>

          <div className="border-t border-footerBackground w-full pt-3 sm:pt-4 text-center text-xs sm:text-sm text-white">
            <span>© {currentYear} SheruTov - כל הזכויות שמורות</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
