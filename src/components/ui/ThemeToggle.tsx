import { useDarkMode } from "../../hook/useDarkMode";
import { Sun, Moon, Monitor } from "lucide-react"; // Importamos los iconos

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-dark-surface text-dark-border dark:text-white rounded-lg flex items-center gap-2"
    >
      {theme === "light" ? (
        <>
          <Sun className="w-10 h-10" />
        
        </>
      ) : theme === "dark" ? (
        <>
          <Moon className="w-10 h-10" />
        
        </>
      ) : (
        <>
          <Monitor className="w-10 h-10" />
        </>
      )}
    </button>
  );
}
