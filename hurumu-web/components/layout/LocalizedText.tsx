"use client";

import { useLanguage } from "./LanguageProvider";
import type { ReactNode } from "react";

interface LocalizedTextProps {
  en: ReactNode;
  om: ReactNode;
  am: ReactNode;
  className?: string;
}

export default function LocalizedText({
  en,
  om,
  am,
  className,
}: LocalizedTextProps) {
  const { language } = useLanguage();
  const content = language === "om" ? om : language === "am" ? am : en;

  return <span className={className}>{content}</span>;
}
