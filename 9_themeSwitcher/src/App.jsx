import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/Theme";
import ThemeBtn from "./components/ThemeBTN";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");

    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="min-h-screen bg-gray-100 dark:bg-zinc-950 px-4 py-8 transition-colors duration-300">
        <div className="w-full max-w-md mx-auto">

          <div className="flex justify-end mb-6">
            <ThemeBtn />
          </div>

          <Card />

        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;