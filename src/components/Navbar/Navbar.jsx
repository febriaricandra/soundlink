import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Moon, SunMoon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="py-4 px-6 md:px-12 lg:px-12 mb-4 border-b-2 border-gray-100 dark:border-zinc-800">
      <div className="relative flex flex-rows justify-between">
        <Link to="/" className="text-2xl font-bold dark:text-white">
          Soundlink
        </Link>
        <ul className="flex flex-rows items-center">
          <li className="mr-4">
            <button
              onClick={toggleTheme}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {theme === "light" ? <SunMoon size={24} /> : <Moon size={24} />}
            </button>
          </li>
          <li>
            <a href="https://github.com/febriaricandra">
              <FaGithub size={24} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
