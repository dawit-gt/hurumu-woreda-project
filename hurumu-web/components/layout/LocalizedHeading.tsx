"use client";

import { ElementType, ReactNode } from "react";
import { useLanguage } from "./LanguageProvider";

interface LocalizedHeadingProps {
  en: ReactNode;
  om: ReactNode;
  am: ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
}

export default function LocalizedHeading({
  en,
  om,
  am,
  tag: Tag = "h2",
  className = "",
}: LocalizedHeadingProps) {
  const { language } = useLanguage();
  const content = language === "om" ? om : language === "am" ? am : en;

  return <Tag className={className}>{content}</Tag>;
}