"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  let isHome = pathname === "/";
  return (
    <div>
      {!isHome && (
        <div className="text-center my-5 md:my-10">
          <div className="w-full flex gap-2 justify-center items-center mb-4">
            <Link href="/" className="flex items-center">
              <span className="text-lg text-black">Home</span>
            </Link>
            <div className="border-l border-gray-400 h-5 mx-2"></div>{" "}
            {/* Divider */}
            <Link href="/" className="flex items-center">
              <span className="text-lg text-black">Contact</span>
            </Link>
          </div>
          <div className="px-4">
            © Copyright 2025. Proudly built and designed by me.
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
