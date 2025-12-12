"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib";
import { FaBars } from "react-icons/fa6";
export default function NavbarMobile() {
  return (
    <Sheet>
      <SheetTrigger>
        <FaBars className="bg-[#FF8F21] md:hidden size-10 p-3 rounded" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="">
            <span>Menu</span>
            <div className="grid  grid-cols-2 gap-2 items-center ">
              <button className="flex justify-center gap-2 items-center bg-[#FF8F21]  text-white px-2 py-2 h-10 rounded ">
                My EMS
              </button>
              <ThisLanguageSwitcher />
            </div>
          </SheetTitle>
          <SheetDescription />
        </SheetHeader>

        <ul className="text-center flex flex-col gap-y-6">
          {navLinks.map((link) => (
            <li key={link.name} className="mb-4">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <Image
          src="/logo-ems-algerie-site.png"
          alt="logo"
          height={480}
          width={480}
          className="translate-y-[-12px] select-none drop-shadow-sm"
        />
      </SheetContent>
    </Sheet>
  );
}

const ThisLanguageSwitcher = () => {
  const languages = [
    { code: "en", label: "English", flag: "/flags/us.png" },
    { code: "fr", label: "Français", flag: "/flags/fr.png" },
    { code: "ar", label: "العربية", flag: "/flags/dz.png" },
  ];

  const router = useRouter();
  const onSelectLang = (lang: string) => {
    router.push(`/?lang=${lang}`);
  };

  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "flex justify-center items-center gap-2 px-4 py-2 ",
          "shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
        )}
        asChild
      >
        <button className="flex h-10 gap-2 items-center bg-[#FF8F21]  text-white px-2 py-2 rounded ">
          <span>Language</span>
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
};
