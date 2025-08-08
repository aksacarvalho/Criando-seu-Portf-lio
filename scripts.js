const toggleTheme = document.getElementById("toggle-theme");
const rootHtml = document.documentElement;

function setTheme(theme) {
  rootHtml.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  toggleTheme.classList.toggle("bi-cloud-sun-fill", theme === "dark");
  toggleTheme.classList.toggle("bi-cloud-moon-fill", theme === "light");
}

function toggleThemeMode() {
  const currentTheme = rootHtml.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);
}

toggleTheme.addEventListener("click", toggleThemeMode);
loadSavedTheme();

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};