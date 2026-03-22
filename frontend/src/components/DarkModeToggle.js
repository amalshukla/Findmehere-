import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg shadow"
    >
      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}