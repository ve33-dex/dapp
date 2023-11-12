import React, { useEffect, useState } from "react";
import {FiCheck, FiMoon, FiSun} from "react-icons/fi";
import { HiMiniComputerDesktop } from "react-icons/hi2"; // Import HiMiniComputerDesktop for the system icon
import { useLocalStorage } from "usehooks-ts";
import {string} from "yup";

const ThemeSwitcher = () => {
    // Retrieve the stored theme or use "dark" as the default.
    const [storedTheme, setStoredTheme] = useLocalStorage("theme", "dark");
    // Create a state variable to track the selected theme.
    const [selectedTheme, setSelectedTheme] = useState<string>(storedTheme);

    // Function to toggle the theme.
    const toggleTheme = (newTheme:string) => {
        setSelectedTheme(newTheme);
        setStoredTheme(newTheme);
    };

    // Modify data-theme attribute on document.body when theme changes.
    useEffect(() => {
        const body = document.body;
        body.setAttribute("data-theme", selectedTheme);
    }, [selectedTheme]);

    return (
        <div className="theme-switcher">
            <div className="relative inline-block text-left">
                <div className="relative">
                    <button type="button" className="dropdown-button btn">
                        {selectedTheme === "dark" ? (
                            <FiMoon className="w-5 h-5" />
                        ) : selectedTheme === "light" ? (
                            <FiSun className="w-5 h-5" />
                        ) : (
                            <HiMiniComputerDesktop className="w-5 h-5" />
                        )}
                        {selectedTheme}
                    </button>
                </div>
                <ul className="dropdown-menu">
                    <li
                        className="menu-item"
                        onClick={() => toggleTheme("dark")}
                    >
                        {selectedTheme === "dark" && (
                            <span className="menu-badge">
                                <FiCheck className="w-4 h-4" />
                            </span>
                        )}
                        Dark
                    </li>
                    <li
                        className="menu-item"
                        onClick={() => toggleTheme("light")}
                    >
                        {selectedTheme === "light" && (
                            <span className="menu-badge">
                                <FiCheck className="w-4 h-4" />
                            </span>
                        )}
                        Light
                    </li>
                    <li
                        className="menu-item"
                        onClick={() => toggleTheme("system")}
                    >
                        {selectedTheme === "system" && (
                            <span className="menu-badge">
                                <FiCheck className="w-4 h-4" />
                            </span>
                        )}
                        System
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ThemeSwitcher;
