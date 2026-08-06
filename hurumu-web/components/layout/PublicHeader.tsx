"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage, Language } from "./LanguageProvider";
import { navLinks, publicLabels } from "@/lib/i18n";

export default function PublicHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();

  const languageLabel: Record<Language, string> = {
    en: "English",
    om: "Oromoo",
    am: "አማርኛ",
  };

  const getClass = (lang: Language) =>
    `px-3 py-1 rounded-full text-xs font-semibold transition ${
      language === lang
        ? "bg-white text-green-900"
        : "bg-transparent text-gray-300 hover:text-white"
    }`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex h-1">
        <div className="flex-1 bg-green-900" />
        <div className="flex-1 bg-yellow-600" />
        <div className="flex-1 bg-white border-t border-gray-200" />
        <div className="flex-1 bg-yellow-600" />
        <div className="flex-1 bg-green-900" />
      </div>

      <div className="bg-gray-900 text-gray-400 text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span>
            📍 Hurumu Town, Ilu Aba Bora Zone, Oromia · 📞 +251 57 XXX XXXX
          </span>
          <div className="flex gap-2">
            {(["en", "om", "am"] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={getClass(lang)}
              >
                {languageLabel[lang]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white border-2 border-green-800 flex items-center justify-center flex-shrink-0 shadow-sm">
              <Image src="/logo.svg" alt="Hurumu logo" width={40} height={40} />
            </div>
            <div>
              <div className="font-extrabold text-green-900 text-base leading-tight">
                Hurumu Woreda
              </div>
              <div className="text-yellow-600 text-xs font-semibold tracking-wide uppercase">
                Administration Portal
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks[language].map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.children && setOpenDropdown(link.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-800 hover:text-green-800 rounded-md hover:bg-gray-50 transition"
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown size={12} className="text-gray-400" />
                  )}
                </Link>
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 bg-white border border-gray-100 border-t-2 border-t-green-800 rounded-lg shadow-lg min-w-44 py-1 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
          {navLinks[language].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
      <div className="flex h-0.5">
        <div className="flex-1 bg-green-900" />
        <div className="flex-1 bg-yellow-600" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-yellow-600" />
        <div className="flex-1 bg-green-900" />
      </div>
    </header>
  );
}