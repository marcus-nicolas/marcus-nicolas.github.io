const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
    menuButton.querySelector(".menu-toggle-label").textContent = isOpen ? "Menu" : "Close";
    menuButton.querySelector(".menu-glyph").textContent = isOpen ? "☰" : "×";
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
      menuButton.querySelector(".menu-toggle-label").textContent = "Menu";
      menuButton.querySelector(".menu-glyph").textContent = "☰";
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      menuButton.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
      menuButton.querySelector(".menu-toggle-label").textContent = "Menu";
      menuButton.querySelector(".menu-glyph").textContent = "☰";
      menuButton.focus();
    }
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const dockLinks = Array.from(document.querySelectorAll(".dock-link"));
const setActiveDockLink = (sectionId) => {
  dockLinks.forEach((link) => {
    const active = link.dataset.section === sectionId;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
};

if (dockLinks.length && "IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting);
    if (visible.length) {
      visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      setActiveDockLink(visible[0].target.id);
    }
  }, { rootMargin: "-18% 0px -58% 0px", threshold: [0, 0.15, 0.35, 0.6] });

  dockLinks.forEach((link) => {
    const section = document.getElementById(link.dataset.section);
    if (section) sectionObserver.observe(section);
    link.addEventListener("click", () => setActiveDockLink(link.dataset.section));
  });
}

const appearanceToggle = document.querySelector(".appearance-toggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');
if (appearanceToggle) {
  appearanceToggle.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    appearanceToggle.setAttribute("aria-pressed", String(isDark));
    appearanceToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    appearanceToggle.querySelector(".appearance-label").textContent = isDark ? "Light mode" : "Dark mode";
    if (themeMeta) themeMeta.content = isDark ? "#1e2723" : "#f3f0e7";
  });
}
