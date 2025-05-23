"use client";
import { locales } from "@/libs/i18n/config";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Map language code to name and external flag image URL
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
  const curren = pathname.slice(1, 3);
  const [open, close] = useState<boolean>(false);

  const changelocale = (locale: string) => {
    const segment = pathname.split("/");
    segment[1] = locale;

    router.push(segment.join("/"));
  };

  // Get current language info
  const currentLang = languageMap[curren] || { name: curren.toUpperCase(), flag: "" };

  return (
    <div className="fixed lg:relative w-auto h-screen w-screen lg:h-max z-50 top-[90vh] lg:top-0  ">
      <div className="flex justify-center items-center gap-2 md:gap-5 p-2 bg-[#ff4800] lg:bg-transparent border shardow-lg lg:border-none" onClick={() => close((prv) => !prv)}>
        <i className="fa fa-globe max-lg:text-white" />
        <span className="flex items-center gap-2 ">
          {currentLang.flag && <Image src={currentLang.flag} alt={currentLang.name} width={24} height={16} />}
          <span className="uppercase max-lg:text-white ">{currentLang.name}</span>
        </span>
      </div>
      <div className="absolute -top-[50%] lg:top-[60px] left-0 md:rigth-0 z-10 w-[15rem]  ">
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className="bg-white flex flex-col justify-center item-center shadow-md border"
          >
            {locales.map((loc) => (
              <button
                key={loc}
                value={loc}
                onClick={() => changelocale(loc)}
                className="outline-none flex items-center gap-2 px-3 py-2 hover:bg-gray-100"
              >
                {languageMap[loc]?.flag && <Image src={languageMap[loc].flag} alt={languageMap[loc].name} width={24} height={16} />}
                <span>{languageMap[loc]?.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
