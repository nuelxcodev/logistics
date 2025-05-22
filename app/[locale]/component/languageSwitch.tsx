"use client";
import { locales } from "@/libs/i18n/config";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LanguageSwitch() {
  const pathname = usePathname();
  const router = useRouter();
  const curren = pathname.slice(1,3);
  const [open, close] = useState<boolean>(false);

  const changelocale = (locale: string) => {
    const segment = pathname.split("/");
    segment[1] = locale;

    router.push(segment.join("/"));
  };
  return (
    <div className="relative w-10 md:w-[200px]">
      <div className=" flex justify-center items-center gap-2 md:gap-5 p-3" onClick={() => close((prv) => (prv ? false : true))}>
        <i className="fa fa-globe" />
        <span className=" uppercase">{curren}</span>
      </div>
      <div className="absolute left-0 rigth-0 z-50 w-full ">
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 100 }}
            className="bg-white flex flex-col justify-center item-center shadow-md border"
          >
            {locales.map((loc) => (
              <button key={loc} value={loc} onClick={() => changelocale(loc)}
              className="outline-none"
              >
                {loc.toUpperCase()}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
