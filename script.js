/* ==========================================================
   PORTFOLIO SCRIPT  -  Sneha Yadav
   Only two small jobs live here:
     1. Open / close the menu on phones
     2. Highlight the menu link of the section you are viewing
   Smooth scrolling, hover rotation and the bouncing arrow
   are all done in style.css, so nothing else is needed.
   ========================================================== */

const menuButton = document.querySelector(".nav__toggle");
const menu       = document.querySelector("#nav-menu");
const menuLinks  = document.querySelectorAll(".nav__menu a");

/* 1. Mobile menu ------------------------------------------------ */
function setMenu(open) {
  menu.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

menuButton.addEventListener("click", () => {
  setMenu(!menu.classList.contains("is-open"));
});

// Close the menu after tapping a link
menuLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));

// Close the menu with the Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});


/* 2. Highlight the current section in the menu ------------------ */
// Section ids that have a matching menu link
const sectionIds = ["home", "projects", "about", "contact"];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      menuLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" } // a section counts as "current" when it crosses the middle of the screen
);

sectionIds.forEach((id) => {
  const section = document.getElementById(id);
  if (section) observer.observe(section);
});
