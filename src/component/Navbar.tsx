"use client";
import React from "react";
import { navLinks } from "@/constant/link";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link
            className={`${isActive ? "text-gray-400" : "text-white"} w-full`}
            href={link.href}
            key={link.name}
          >
            <div className="h-4 flex flex-row items-center gap-2">
              <div>
                <link.icon />
              </div>
              <div>{link.name}</div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Navbar;
