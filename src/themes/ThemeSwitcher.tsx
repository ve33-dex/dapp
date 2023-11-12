import React, {useEffect, useState} from "react";
import {FiCheck, FiMoon, FiSun} from "react-icons/fi";
import {HiMiniComputerDesktop} from "react-icons/hi2";
import {useLocalStorage} from "usehooks-ts";


const ThemeSwitcher = () => {
    // Retrieve the stored theme or use "dark" as the default.
    const [storedTheme, setStoredTheme] = useLocalStorage<"dark" | "light" | "system">("theme", "dark");
    // Create a state variable to track the selected theme.
    const [selectedTheme, setSelectedTheme] = useState<"dark" | "light" | "system">(storedTheme);

    // Function to toggle the theme.
    const toggleTheme = (newTheme: "dark" | "light" | "system") => {
        setSelectedTheme(newTheme);
        setStoredTheme(newTheme);
    };

    // Modify data-theme attribute on document.body when theme changes.
    useEffect(() => {
        const body = document.body;
        body.setAttribute("data-theme", selectedTheme);
    }, [selectedTheme]);

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn mx-2 bg-transparent border-solid border-1 border-natural rounded-3xl">
                {selectedTheme === "dark" ? (
                    <FiMoon className="w-5 h-5"/>
                ) : selectedTheme === "light" ? (
                    <FiSun className="w-5 h-5"/>
                ) : (
                    <HiMiniComputerDesktop className="w-5 h-5"/>
                )}
            </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-natural rounded-box w-52">

                <li
                    onClick={() => toggleTheme("dark")}
                >
                    <a>
                        {selectedTheme === "dark" && (
                            <span className="menu-badge">
                                <FiCheck className="w-4 h-4"/>
                            </span>
                        )}
                        Dark
                    </a>
                </li>
                <li

                    onClick={() => toggleTheme("light")}
                >
                    <a>
                        {selectedTheme === "light" && (
                            <span className="menu-badge">
                                <FiCheck className="w-4 h-4"/>
                            </span>
                        )}
                        Light
                    </a>
                </li>
                <li

                    onClick={() => toggleTheme("system")}
                >
                    <a>
                        {selectedTheme === "system" && (
                            <span className="menu-badge">
                                <FiCheck className="w-4 h-4"/>
                            </span>
                        )}
                        System
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ThemeSwitcher;
