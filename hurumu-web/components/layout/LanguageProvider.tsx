"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type Language = "en" | "om" | "am";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);
const STORAGE_KEY = "hurumu-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? window.localStorage.getItem(STORAGE_KEY)
        : null;
    if (stored === "en" || stored === "om" || stored === "am") {
      setLanguage(stored);
    }
  }, []);

  const handleSetLanguage = (next: Language) => {
    setLanguage(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
