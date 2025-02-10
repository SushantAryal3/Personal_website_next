"use client";

import { navLinks } from "@/constant/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { country } from "@/app/about/const";
const NavigationBar = () => {
  const pathname = usePathname();
  let [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  let [languageMenuOpen, setLanguageMenu] = useState<boolean>(false);
  let isHome = pathname === "/";
  return (
    <>
      <nav
        className={`h-[7vh] text-center border-gray-200 shadow-md ${
          isHome ? "w-full bg-opacity-0 absolute  m-auto top-0" : "bg-white "
        } z-[30]`}
      >
        <div className=" h-full flex items-center justify-between md:py-4 w-[80vw] md:w-[90vw] m-auto">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span
              className={`self-center text-2xl whitespace-nowrap ${
                isHome ? "text-white" : "text-black"
              }`}
            >
              Sushant
            </span>
          </Link>
          <div className="flex gap-14">
            <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
              {/* <button
                type="button"
                data-dropdown-toggle="language-dropdown-menu"
                className={`inline-flex items-center font-medium justify-center px-4 py-2 text-sm ${
                  isHome ? "text-white" : "text-black"
                } rounded-lg cursor-pointer `}
                onClick={() => {
                  setLanguageMenu(!languageMenuOpen);
                }}
              >
                English (UK)
              </button> */}

              <button
                data-collapse-toggle="navbar-language"
                type="button"
                className=" items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-language"
                aria-expanded="false"
                onClick={() => {
                  setMenuOpen(!isMenuOpen);
                }}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div className=" hidden md:flex md:visible xl:flex items-center gap-12 font-semibold text-base">
              <ul className="flex flex-row gap-8 font-medium p-4 md:p-0 ">
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (pathname.startsWith(link.href) && link.href !== "/");
                  return (
                    <Link
                      className={`${
                        isActive
                          ? `block py-2 px-3 ${
                              isHome ? "text-white" : "text-black"
                            }   underline underline-offset-8 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500`
                          : `block py-2 px-3 md:p-0 ${
                              isHome ? "text-white" : "text-black"
                            } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 `
                      } w-full`}
                      href={link.href}
                      key={link.name}
                    >
                      <div className="h-4 flex flex-row items-center gap-2">
                        <div>{link.name}</div>
                      </div>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className={`bg-white z-[10] py-4 absolute xl:hidden md:hidden top-[4.2rem] left-0 w-full opacity-100 flex flex-col gap-4 font-semibold text-lg transform transition-transform duration-700 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");
            return (
              <Link
                className={`${
                  isActive
                    ? "block py-2 px-3 text-black rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }`}
                href={link.href}
                key={link.name}
                onClick={() => {
                  setMenuOpen(!isMenuOpen);
                }}
              >
                <div className="h-4 flex flex-row items-center gap-2">
                  <div>{link.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {languageMenuOpen && (
        <div className=" absolute top-[3.3rem] right-[5.5rem] xl:right-40 z-[20] my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
          <ul className="p-2 font-medium" role="none">
            <li>
              <div className="flex flex-col gap-2 font-medium text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                {country.map((country) => {
                  return (
                    <div className="flex w-full gap-2 items-center justify-start">
                      <button
                        type="button"
                        data-dropdown-toggle="language-dropdown-menu"
                        className="flex gap-3 items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={() => {
                          setLanguageMenu(!languageMenuOpen);
                        }}
                      >
                        <Image
                          alt={country.name}
                          src={country.flag}
                          className="w-5 h-5 rounded-full"
                        />
                        <div>{country.name}</div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
