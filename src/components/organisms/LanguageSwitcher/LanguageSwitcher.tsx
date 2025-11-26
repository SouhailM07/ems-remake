"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import Image from "next/image";
import { IoLanguageOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function LangSwitcher() {
  const router = useRouter();

  const languages = [
    { code: "en", label: "English", flag: "/united-states.png" },
    { code: "fr", label: "Français", flag: "/united-kingdom.png" },
    { code: "ar", label: "العربية", flag: "/world.png" },
  ];

  const onSelectLang = (lang: string) => {
    router.push(`/?lang=${lang}`);
  };

  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "flex items-center gap-2 px-4 py-2 ",
          "shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
        )}
        asChild
      >
        <button className="flex h-10 gap-2 items-center bg-[#FF8F21]  text-white px-2 py-2 rounded hover:bg-orange-600 transition ">
          <IoLanguageOutline className="text-xl" />
          <Image src="/united-states.png" alt="logo" height={30} width={30} />
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        className={cn(
          "w-[8rem] p-2 rounded-xl",
          "bg-white border border-orange-400/40",
          "shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
        )}
      >
        <div className="flex flex-col gap-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onSelectLang(lang.code)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2",
                "rounded-lg transition-colors duration-150",
                "text-black",
                "hover:bg-blue-500/10 hover:text-blue-600"
              )}
            >
              <Image
                src={lang.flag}
                alt={lang.label}
                width={22}
                height={22}
                className="rounded-sm"
              />
              {lang.label}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
