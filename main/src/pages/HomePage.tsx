import React, { useState, useEffect } from "react";

import {
  Shield,
  Zap,
  Award,
  Users,
  Cog,
  HeadphonesIcon,
  TrendingUp,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const stats = [
  { number: "95%", text: "עלייה ברווחיות בשימור 5% בלבד מהלקוחות" },
  { number: "86%", text: "מהלקוחות מוכנים לשלם יותר עבור חווית שירות טובה" },
  { number: "12%", text: "צמיחה מהירה יותר של חברות שמובילות בחווית לקוח" },
];

const faqData = [
  {
    question: "למה כדאי לשכור שירות החיצוני?",
    answer:
      "שירות חיצוני מאפשר לכם לקבל מענה מקצועי 24/7, לחסוך בעלויות גיוס ואימון עובדים, ולהתמקד בפעילות העסק המרכזית. אנחנו מביאים ניסיון רב ומערכות מתקדמות שיעזרו לשפר את חווית הלקוח שלכם.",
  },
  {
    question: "איך זה עובד בפועל?",
    answer:
      "אנחנו מקימים עמדת שירות ייעודית לעסק שלכם, מכשירים את הצוות על המוצרים והשירותים שלכם, ומטמיעים את הנהלים שלכם. הלקוחות שלכם מקבלים מענה מקצועי שנראה כאילו הוא מגיע ישירות מהעסק שלכם.",
  },
  {
    question: "האם השירות מתאים לעסק קטן?",
    answer:
      "בהחלט! השירות שלנו גמיש ומותאם לגודל ולצרכים של כל עסק. גם עסקים קטנים יכולים להרשות לעצמם שירות לקוחות מקצועי ולקבל יתרון תחרותי משמעותי. אנחנו מציעים חבילות שונות שמתאימות לכל תקציב.",
  },
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg bg-mainBackground">
      <button
        className="w-full p-4 sm:p-6 text-center flex justify-center items-center hover:bg-mainBackground transition-colors duration-200 relative"
        onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 px-8 sm:px-12">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-500 transition-transform duration-200 absolute left-4 sm:left-6 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
          <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-right">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const HomePage: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowScrollTop(scrollTop > 300); // Show after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <main role="main" id="main-content">
        <section
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 text-center"
          aria-labelledby="hero-heading">
          <div className="max-w-4xl mx-auto">
            <h1
              id="hero-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-800 leading-tight">
              SheruTov – שירות חכם לעסק דיגיטלי מצליח
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
              אנחנו ב־SheruTov עוזרים לעסקים דיגיטליים לחסוך זמן, לשמור על
              לקוחות מרוצים ולהתרכז בצמיחה.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 sm:mb-10 max-w-2xl mx-auto px-4 sm:px-0">
              אנחנו דואגים לשירות הלקוחות והאוטומציה – אתם מתמקדים במכירות
              ובניהול העסק.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <a
                href="mailto:support@sherutov.com"
                className="bg-mainLogo text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-mainLogoHover transition-colors duration-200 font-semibold text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-mainLogo focus:ring-offset-2"
                aria-label="צור קשר עכשיו - שליחת אימייל">
                צור קשר עכשיו
              </a>
              <a
                href="https://wa.me/972535906738?text=שלום, אני מעוניין בפרטים על השירות"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-mainLogo text-mainLogo px-6 sm:px-8 py-3 rounded-lg hover:bg-mainLogo hover:text-white transition-colors duration-200 font-semibold text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-mainLogo focus:ring-offset-2"
                aria-label="WhatsApp - פתח בחלון חדש">
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
          aria-labelledby="values-heading">
          <div className="bg-mainBackground rounded-xl shadow-lg p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
            <h2
              id="values-heading"
              className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
              הערכים שלנו
            </h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center"
              role="list">
              <div className="p-4 sm:p-6" role="listitem">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-iconColor rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                  aria-hidden="true">
                  <Shield
                    className="w-8 h-8 sm:w-10 sm:h-10 text-mainLogo"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  שקיפות מלאה
                </h3>
                <p className="text-gray-600 text-sm">
                  עבודה שקופה וברורה עם דיווח מלא על כל הפעילויות
                </p>
              </div>
              <div className="p-4 sm:p-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-iconColor rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Zap
                    className="w-8 h-8 sm:w-10 sm:h-10 text-mainLogo"
                    strokeWidth={1.5}
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  זמינות גבוהה
                </h4>
                <p className="text-gray-600 text-sm">
                  זמינים עבורכם מתי שאתם צריכים, תמיכה 24/7
                </p>
              </div>
              <div className="p-6">
                <div className="w-20 h-20 bg-iconColor rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award
                    className="w-10 h-10 text-mainLogo"
                    strokeWidth={1.5}
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  מקצועיות
                </h4>
                <p className="text-gray-600 text-sm">
                  צוות מומחים עם ניסיון רב בתחום שירות לקוחות דיגיטלי
                </p>
              </div>
            </div>
            <div className="text-center mt-8 p-6 bg-iconColor rounded-lg">
              <p className="text-lg text-gray-700">
                <strong>המטרה שלנו</strong> – לעזור לכם להתרכז במה שאתם יודעים
                לעשות הכי טוב, בזמן שאנחנו מטפלים בשירות ובלקוחות שלכם
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-gray-800">
            מה אנחנו מציעים לעסק שלכם?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4 sm:px-0">
            פתרונות מותאמים אישית לעסקים דיגיטליים שרוצים לגדול ולשמור על לקוחות
            מרוצים
          </p>

          {/* Enhanced Service Cards with Icons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
            <div className="bg-mainBackground p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-iconColor rounded-xl flex items-center justify-center flex-shrink-0">
                  <HeadphonesIcon
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-mainLogo"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">
                    שירות לקוחות דיגיטלי
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    מענה מהיר ומקצועי לפניות לקוחות מכל ערוץ - צ'אט, מייל, טלפון
                    ורשתות חברתיות.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-mainBackground p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-iconColor rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cog
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-mainLogo"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">
                    אוטומציות עסקיות
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    בניית תהליכים חכמים שמפחיתים טעויות וחוסכים זמן בניהול העסק
                    היומיומי.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-mainBackground p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-iconColor rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-mainLogo"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">
                    ייעוץ והטמעה
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    ליווי בהקמת מערכות שירות ופתרונות טכנולוגיים מותאמים לעסק
                    שלכם.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-mainBackground p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-iconColor rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-mainLogo"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">
                    תמיכה טכנית
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    טיפול ראשוני בבעיות לקוחות על מנת להוריד עומס מהעסק ולשמור
                    על חוויית לקוח מצוינת.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-mainLogo text-iconColor py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-4">קצת נתונים</h3>
            <p className="text-xl text-center mb-12 text-iconColor">
              מה השקעה בשירות לקוחות יכולה לעשות לעסק שלכם
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold mb-4 text-iconColor">
                    {stat.number}
                  </div>
                  <p className="text-lg text-iconColor">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8 text-gray-800">מי אנחנו?</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              SheruTov הוקמה מתוך הבנה פשוטה: כל עסק דיגיטלי, קטן כגדול, זקוק
              לשירות לקוחות יעיל כדי להצליח. אנחנו מתמחים בהקמה וניהול של שירות
              לקוחות דיגיטלי, הטמעת אוטומציות, ומתן פתרונות מותאמים אישית
              לעסקים.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-mainBackground py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
              למה לבחור בנו?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-iconColor rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-mainLogo" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    חיסכון בזמן
                  </h4>
                  <p className="text-gray-600">
                    לא עוד התעסקות אינסופית עם פניות חוזרות.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-iconColor rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-mainLogo" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    שירות מקצועי
                  </h4>
                  <p className="text-gray-600">
                    מענה מהיר, עקבי ואמין לכל פנייה.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-iconColor rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-mainLogo" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    התאמה אישית
                  </h4>
                  <p className="text-gray-600">
                    השירות מותאם לצרכים של העסק שלכם.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">
                שאלות נפוצות
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-teal-500 mx-auto mb-3 sm:mb-4"></div>
              <p className="text-lg sm:text-xl text-gray-600">שאלות ותשובות</p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="bg-iconColor py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              בואו נדבר על איך נוכל לעזור לעסק שלכם
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              צרו איתנו קשר היום לקבלת ייעוץ חינם ונגלה יחד איך נוכל לשפר את
              שירות הלקוחות שלכם
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@sherutov.com"
                className="bg-mainLogo text-white px-8 py-3 rounded-lg hover:bg-mainLogoHover transition-colors duration-200 font-semibold text-lg">
                צור קשר עכשיו
              </a>
              <a
                href="https://wa.me/972535906738?text=שלום, אני מעוניין בפרטים על השירות"
                className="border-2 border-mainLogo text-mainLogo px-8 py-3 rounded-lg hover:bg-mainLogo hover:text-white transition-colors duration-200 font-semibold text-lg"
                target="_blank"
                rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-mainLogo hover:bg-mainLogoHover text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-mainLogoHover/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 z-50 border-2 border-white animate-pulse hover:animate-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainLogo"
            aria-label="חזור למעלה"
            type="button">
            <ChevronUp
              className="w-6 h-6 sm:w-8 sm:h-8"
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </button>
        )}
      </main>
    </div>
  );
};

export default HomePage;
