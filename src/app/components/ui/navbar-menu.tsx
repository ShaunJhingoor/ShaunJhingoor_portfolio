"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


interface MenuItemProps {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ setActive, active, item, href }) => (
  <div
    onMouseEnter={() => setActive(item)}
    onMouseLeave={() => setActive(null)}
    className="relative"
  >
    <motion.p
      transition={{ duration: 0.3 }}
      className="cursor-pointer text-lg font-semibold text-white hover:opacity-90 dark:text-white"
    >
      <Link href={href}>{item}</Link>
    </motion.p>
  
  </div>
);

const NavBar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative bg-[#003366] text-white shadow-input flex justify-evenly space-x-4 px-8 py-6"
    >
      <MenuItem setActive={setActive} active={active} item="About" href="#about" />
      <MenuItem setActive={setActive} active={active} item="Projects" href="#projects" />
      <MenuItem setActive={setActive} active={active} item="Skills" href="#skills" />
      <MenuItem setActive={setActive} active={active} item="Contact" href="/contact" />
    </nav>
  );
};

export default NavBar;


