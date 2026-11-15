import { useState } from "react";
import { LanguageContext } from "./languageContextCore.js";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("id");
  const toggleLanguage = () => {
    setLanguage((previous) => (previous === "id" ? "en" : "id"));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
