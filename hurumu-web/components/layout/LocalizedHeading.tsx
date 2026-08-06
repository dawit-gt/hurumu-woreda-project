"use client";

import { ReactNode } from "react";
import { useLanguage } from "./LanguageProvider";

interface LocalizedHeadingProps {
  en: ReactNode;
  om: ReactNode;
  am: ReactNode;
  tag?: "h1" | "h2" | "h3" | "p";
  className?: string;
}

export default function LocalizedHeading({ en, om, am, tag = "h2", className = "" }: LocalizedHeadingProps) {
  const { language } = useLanguage();
  const content = language === "om" ? om : language === "am" ? am : en;
  const Tag = tag as keyof JSX.IntrinsicElements;
  return <Tag className={className}>{content}</Tag>;
}
