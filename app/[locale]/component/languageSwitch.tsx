"use client";
import { locales } from "@/libs/i18n/config";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const languageMap: Record<string, { name: string; flag: string }> = {
  en: { name: "English", flag: "https://flagcdn.com/gb.svg" },
  fr: { name: "Français", flag: "https://flagcdn.com/fr.svg" },
  es: { name: "Español", flag: "https://flagcdn.com/es.svg" },
  de: { name: "Deutsch", flag: "https://flagcdn.com/de.svg" },
  it: { name: "Italiano", flag: "https://flagcdn.com/it.svg" },
  pt: { name: "Português", flag: "https://flagcdn.com/pt.svg" },
  zh: { name: "中文", flag: "https://flagcdn.com/cn.svg" },
  ar: { name: "العربية", flag: "https://flagcdn.com/sa.svg" },
  uk: { name: "Українська", flag: "https://flagcdn.com/ua.svg" },
};

export default function LanguageSwitch() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLangCode = pathname.slice(1, 3);
  const [open, setOpen] = useState<boolean>(false);

  const changelocale = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  };

  const currentLang = languageMap[currentLangCode] || {
    name: currentLangCode.toUpperCase(),
    flag: "",
  };

  return (
    <div className="fixed bottom-6 lg:bottom-0 left-4 lg:left-0 lg:relative z-50">
      {/* Button */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-4 py-2 rounded-md shadow-md lg:shadow-none bg-[#ff4800] lg:bg-transparent max-lg:border cursor-pointer"
      >
        <i className="fa fa-globe max-lg:text-white" />
        <span className="flex items-center gap-2 max-lg:text-white text-sm font-semibold">
          {currentLang.flag && (
            <Image
              src={currentLang.flag}
              alt={currentLang.name}
              width={24}
              height={16}
              className="rounded-sm"
            />
          )}
          <span>{currentLang.name}</span>
        </span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute bottom-full left-0 mt-2 w-60 lg:top-[60px] lg:mt-0">
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden flex flex-col"
          >
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => changelocale(loc)}
                className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 w-full text-left"
              >
                {languageMap[loc]?.flag && (
                  <Image
                    src={languageMap[loc].flag}
                    alt={languageMap[loc].name}
                    width={24}
                    height={16}
                    className="rounded-sm"
                  />
                )}
                <span className="text-gray-700">{languageMap[loc]?.name}</span>
              </button>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
}
