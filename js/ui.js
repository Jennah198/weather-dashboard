// Theme Toggle Functionality
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Save theme preference
  const isLightMode = document.body.classList.contains("light-mode");
  localStorage.setItem("theme", isLightMode ? "light" : "dark");
});

// Apply stored theme on load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
      document.body.classList.add("light-mode");
  }
});
