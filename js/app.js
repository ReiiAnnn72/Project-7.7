
// PROJECT 7.7 - APPLICATION

document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.querySelector("#theme-toggle");
    const root = document.documentElement;

    // Check saved theme
    const savedTheme = localStorage.getItem("project77-theme");

    const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme = savedTheme ||
        (systemPrefersDark ? "dark" : "light");

    root.setAttribute("data-theme", initialTheme);

    // Update button
    function updateThemeButton(theme) {
        if (!themeButton) return;

        themeButton.textContent =
            theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
    }

    updateThemeButton(initialTheme);

    // Toggle theme
    if (themeButton) {
        themeButton.addEventListener("click", () => {
            const currentTheme = root.getAttribute("data-theme");
            const newTheme =
                currentTheme === "dark" ? "light" : "dark";

            root.setAttribute("data-theme", newTheme);

            localStorage.setItem("project77-theme", newTheme);

            updateThemeButton(newTheme);
        });
    }

    console.log("Project 7.7 berhasil dijalankan!");
});

