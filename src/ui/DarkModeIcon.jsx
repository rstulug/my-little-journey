import { IconContext } from "react-icons";
import { useDarkMode } from "../hooks/useDarkMode";
import { HiOutlineSun, HiMoon } from "react-icons/hi2";

function DarkModeIcon() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      title={darkMode ? "Light Mode" : "Dark Mode"}
    >
      {darkMode ? (
        <IconContext.Provider value={{ size: "2rem" }}>
          <HiOutlineSun />
        </IconContext.Provider>
      ) : (
        <IconContext.Provider value={{ size: "2rem" }}>
          <HiMoon />
        </IconContext.Provider>
      )}
    </button>
  );
}

export default DarkModeIcon;
