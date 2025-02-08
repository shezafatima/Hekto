"use client";

import * as React from "react";
import { useTheme } from "next-themes";

function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div
      onClick={toggleTheme}
      className={`relative w-12 h-6 bg-slate-700 rounded-full cursor-pointer transition-all p-1 ${
        isDarkMode ? "bg-slate-900" : "bg-slate-300"
      }`}
    >
      <div
        className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
          isDarkMode ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </div>
  );
}

export default ToggleTheme;
