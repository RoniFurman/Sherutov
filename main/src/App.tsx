import React from "react";
import { Layout } from "./components";
import HomePage from "./pages/HomePage";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-mainLogo text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
        דלג לתוכן הראשי
      </a>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
};

export default App;
