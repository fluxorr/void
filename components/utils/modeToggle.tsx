

export default function ModeToggle() {

    const handleThemeChange = () => {
        const currentTheme = document.documentElement.classList.contains("dark")
            ? "light"
            : "dark";
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", currentTheme)
    }

    return (
        <button onClick={handleThemeChange} className="absolute top-8 right-8 size-6 rounded-full dark:bg-white transition-colors duration-150 cursor-pointer bg-black " >  </button>

    )
}
