"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
        className="bg-none hover:border-[#8958e8] transition-all"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-purple-dark" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-purple-light" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <header className="sticky top-0 z-[100] w-full px-10 border-b border-darkbg-light bg-darkbg-dark/95 backdrop-blur supports-[backdrop-filter]:bg-darkbg-dark/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6 items-center w-full justify-between">
          <Link
            href="/"
            className="font-bold text-xl bg-gradient-to-r from-[#8958e8] to-[#6B32E8] text-transparent bg-clip-text"
          >
            {"<OK />"}
          </Link>
          <div className="flex gap-8 items-center">
            <Link
              href="#home"
              className="text-sm font-medium relative inline-block py-2 group focus:outline-none focus:text-[#8958e8]"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#8958e8] transition-all duration-300 ease-in-out group-hover:w-full group-focus:w-full"></span>
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium relative inline-block py-2 group focus:text-[#8958e8]"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#8958e8] transition-all duration-300 ease-in-out group-hover:w-full group-focus:w-full"></span>
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium relative inline-block py-2 group focus:text-[#8958e8]"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#8958e8] transition-all duration-300 ease-in-out group-hover:w-full group-focus:w-full"></span>
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium relative inline-block py-2 group focus:text-[#8958e8]"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#8958e8] transition-all duration-300 ease-in-out group-hover:w-full group-focus:w-full"></span>
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium relative inline-block py-2 group focus:text-[#8958e8]"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#8958e8] transition-all duration-300 ease-in-out group-hover:w-full group-focus:w-full"></span>
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <ThemeToggle />
            <Link href={"https://www.linkedin.com/in/olana-kelbesa-257148283/"}>
              <Button className="bg-purple-gradient hover:opacity-90 transition-opacity ml-2">
                Hire me!
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-darkbg-dark border-b border-darkbg-light md:hidden">
            <nav className="flex flex-col p-4">
              <Link
                href="#home"
                className="py-2 text-sm font-medium relative inline-block group focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#8958e8] transition-all duration-300 ease-in-out group-hover:w-full group-focus:w-full"></span>
              </Link>
              <Link
                href="#about"
                className="py-2 text-sm font-medium relative inline-block group focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#8958e8] transition-all duration-300 ease-in-out group-hover:w-full group-focus:w-full"></span>
              </Link>
              <Link
                href="#skills"
                className="py-2 text-sm font-medium relative inline-block group focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#8958e8] transition-all duration-300 ease-in-out group-hover:w-full group-focus:w-full"></span>
              </Link>
              <Link
                href="#projects"
                className="py-2 text-sm font-medium relative inline-block group focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#8958e8] transition-all duration-300 ease-in-out group-hover:w-full group-focus:w-full"></span>
              </Link>
              <Link
                href="#contact"
                className="py-2 text-sm font-medium relative inline-block group focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#8958e8] transition-all duration-300 ease-in-out group-hover:w-full group-focus:w-full"></span>
              </Link>
              <div className="py-2 flex justify-between items-center">
                <ThemeToggle />
                <Button className="bg-purple-gradient hover:opacity-90 transition-opacity">
                  Hire me!
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
