// import { Moon, Sun } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { cn } from "../lib/utils";

// const ThemeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme === "dark") {
//       setIsDarkMode(true);
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);
//   const toggleTheme = () => {
//     if (isDarkMode) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setIsDarkMode(false);
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setIsDarkMode(true);
//     }
//   };
//   return (
//     <button
//       onClick={toggleTheme}
//       className={cn(
//         "fixed max-sm:hidden top-2 right-5 z-50 p-2 rounded-full transition-colors duration-300",
//         "focus:outline-hidden"
//       )}
//     >
//       {isDarkMode ? (
//         <Sun className="h-6 w-6 text-yellow-300" />
//       ) : (
//         <Moon className="h-6 w-6 text-blue-900" />
//       )}
//     </button>
//   );
// };

// export default ThemeToggle;


import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const ThemeToggle = () => {
  // ✅ Updated default to true (dark mode by default)
  const [isDarkMode, setIsDarkMode] = useState(true); // was false

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    // ✅ Updated logic to use stored theme if available, otherwise default dark
    if (storedTheme === "light") {
      // user previously selected light
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // default to dark if stored is "dark" or not set
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light"); // ✅ store light mode
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // ✅ store dark mode
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        // ✅ Fixed typo "outlin-hidden" → "outline-none"
        "fixed max-sm:hidden top-2 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
