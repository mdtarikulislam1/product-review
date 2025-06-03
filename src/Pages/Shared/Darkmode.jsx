import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || 
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 dark:text-white"
    >
      {darkMode ? <MdOutlineLightMode />: <CiDark />}
    </button>
  );
};

export default ThemeToggle;
