import { useEffect, useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export function ThemeSwitch() {

    const storageTheme = localStorage.getItem("theme")

    const [theme, setTheme] = useState(storageTheme ? storageTheme : "light");

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark")
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light")
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };


    return (
        <div className={`absolute left-5 group-hover:left-8 cursor-pointer group-hover:w-16 w-9 h-9 border-2 dark:border-white border-primaryBlack dark:bg-primaryBlack bg-white rounded-3xl transition-all`} onClick={handleThemeSwitch}>

            <span className="absolute group-hover:opacity-100 opacity-0 top-1 light left-1 dark:left-8 dark:bg-white bg-primaryBlack w-6 h-6 rounded-full transition-all"></span>

            <div className="absolute w-full h-full flex justify-around items-center text-primaryBlack dark:text-white transition-all">
                <div className="dark:block group-hover:block hidden">
                <BsSunFill />
                </div>

                <div className="block dark:hidden group-hover:block">
                <BsMoonStarsFill />
                </div>

            </div>

        </div>
    )
}