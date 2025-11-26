"use client";
import MyDialog from "@/components/atoms/MyDialog/MyDialog";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Offer", href: "/offer" },
    { name: "F&Q", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const { scrollY } = useScroll();
  const threshold = 120;

  // Scroll transforms
  const opacity = useTransform(scrollY, [0, threshold], [0, 1]);
  const paddingY = useTransform(scrollY, [0, threshold], [28, 14]);
  const blur = useTransform(scrollY, [0, threshold], [0, 12]);
  const scale = useTransform(scrollY, [0, threshold], [1, 0.98]);
  const textColor = useTransform(
    scrollY,
    [0, threshold],
    ["#0F172A", "#FFFFFF"]
  );

  return (
    <motion.header className="fixed top-0 w-full z-[50]">
      <motion.nav
        style={{
          paddingTop: paddingY,
          paddingBottom: paddingY,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          opacity,
          scale,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(33,63,152,0.85))",
        }}
        className="
          max-w-[76rem]
          mx-auto
          px-8
          mt-2
          rounded-lg
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          transition-all
          duration-300
        "
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center w-[20rem]">
            <Image
              src="/logo-ems-algerie-site.png"
              alt="logo"
              height={480}
              width={480}
              className="select-none drop-shadow-sm"
            />
          </div>

          {/* Right side */}
          <motion.div
            style={{ color: textColor }}
            className="flex gap-2 items-center "
          >
            <button className="flex gap-2 items-center bg-[#FF8F21]  text-white px-2 py-2 h-10 rounded hover:bg-orange-600 transition ">
              My EMS
            </button>
            <LanguageSwitcher />
          </motion.div>
        </div>

        {/* Nav Links */}
        <motion.ul
          style={{ color: textColor }}
          className="hidden md:flex space-x-10 mt-4"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="
                  font-medium 
                  tracking-wide
                  relative
                  pb-1
                  transition
                "
              >
                {link.name}

                {/* Premium underline */}
                <span
                  className="
                    absolute
                    left-0 
                    bottom-0 
                    h-[2px] 
                    w-0 
                    bg-[#FF8F21] 
                    transition-all 
                    duration-300 
                    group-hover:w-full
                  "
                />
              </Link>
            </li>
          ))}
        </motion.ul>
      </motion.nav>
    </motion.header>
  );
}
