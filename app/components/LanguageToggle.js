"use client";
import { useLanguage } from "../contexts/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 border border-slate-700 hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300 rounded-sm"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4" />
      <span className="text-xs uppercase tracking-widest font-dm-sans font-semibold">
        {language === "fr" ? "EN" : "FR"}
      </span>
    </button>
  );
}
