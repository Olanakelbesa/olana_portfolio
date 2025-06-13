"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleDarkMode } from "@/redux/features/darkModeSlice";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const urlPath = usePathname();
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );
  const dispatch = useDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };

  const isActive = (path: string) => urlPath === path;

  return (
    <div>
      <nav
        className={`flex justify-between items-center p-4 px-10 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <Image src={"/logo.svg"} alt="Logo" width={80} height={80} />
          </Link>
        </div>

        <div className={`hidden md:flex flex-1 justify-center gap-6 font-semibold ${isDarkMode? "text-gray-300" : "dark:text-gray-700"}`}>
          {["Home", "About me", "Project", "Experience", "Contact me"].map(
            (item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase().replace(" ", "")}`}
                className="relative group hover:text-orange-500"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )
          )}
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <button
            onClick={handleToggle}
            className={` p-2 rounded-full transition duration-300 ease-in-out ${
              isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
            }`}
          >
            {isDarkMode ? (
              <BiSun className="text-2xl text-gray-300" size={25} />
            ) : (
              <BiMoon className="text-2xl text-gray-700" size={25} />
            )}
          </button>
          <Link
            href={"/"}
            className="bg-gradient-to-r from-[#ff7a14] to-[#c35501] hover:from-[#c35501] hover:to-[#ff7a14] text-white font-bold px-6 py-4 rounded-full"
          >
            Get in touch
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={handleToggle}
            className={` p-2 rounded-full transition duration-300 ease-in-out ${
              isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
            }`}
          >
            {isDarkMode ? (
              <BiSun className="text-2xl text-gray-300" size={20} />
            ) : (
              <BiMoon className="text-2xl text-gray-700" size={20} />
            )}
          </button>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon className={` ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            }`} />
          </IconButton>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            <List
              className={`w-64 h-screen ${
                isDarkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-white text-gray-700"
              }`}
            >
              {["Home", "About me", "Project", "Experience", "Contact me"].map(
                (item, index) => (
                  <ListItem
                    component="button"
                    key={index}
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary={item} />
                  </ListItem>
                )
              )}
              <ListItem>
                <Link
                  href={"/"}
                  className="bg-gradient-to-r from-[#FD6F00] to-[#E46400] hover:from-[#E46400] hover:to-[#FD6F00] text-white font-bold px-4 py-2 rounded-md"
                >
                  Get in touch
                </Link>
              </ListItem>
            </List>
          </Drawer>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
